import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {decks} from '../src/decks.mjs';
import {escapeHTML as esc} from '../src/components.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
async function files(dir){let out=[];for(const e of await fs.readdir(dir,{withFileTypes:true})){const p=path.join(dir,e.name);out.push(...(e.isDirectory()?await files(p):[p]));}return out;}
async function readSource(file){return fs.readFile(path.join(root,file),'utf8');}

export async function build(){
  const [shell,base,theme,editor,gateCss,js,gateJs,editorJs]=await Promise.all([
    'src/shell.html','src/styles/base.css','src/styles/theme.css','src/styles/editor.css',
    'src/styles/gate.css','src/runtime.js','src/gate.js','src/editor.js'
  ].map(readSource));
  const assets=await files(path.join(root,'assets'));
  const inline=async(html,css)=>{
    for(const file of assets){
      const relative=path.relative(root,file).split(path.sep).join('/'),ext=path.extname(file).toLowerCase();
      const type={'.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.svg':'image/svg+xml','.ttf':'font/ttf','.mp4':'video/mp4','.woff2':'font/woff2'}[ext];
      if(!type)continue;const data=`data:${type};base64,${(await fs.readFile(file)).toString('base64')}`;
      html=html.replaceAll(relative,data);css=css.replaceAll(relative,data);
    }
    return {html,css};
  };
  const written=[];
  for(const deck of decks){
    let content={version:1,order:[],text:{}};
    try{content=JSON.parse(await readSource(path.posix.join(deck.slug||'',deck.contentPath||'content.json')));}catch(_){}
    const sections=deck.slides.map((s,i)=>{
      const logo=s.theme==='light'?'assets/image4.png':'assets/image1.png';
      const chrome=s.plain?'':`<header class="s-top"><img class="s-logo" src="${logo}" alt="ScaleX Hub"></header>${s.number?`<span class="s-num" aria-hidden="true">${esc(s.number)}</span>`:''}`;
      return `<!-- SLIDE ${i+1}: ${esc(s.title)} -->\n<section id="${s.id}" class="slide ${s.theme} scene-${i+1}${i===0?' active':''}" data-title="${esc(s.title)}" aria-label="Slide ${i+1} de ${deck.slides.length}: ${esc(s.title)}" aria-hidden="${i!==0}"><div class="slide-canvas">${chrome}${s.html}</div><template class="speaker-notes">${s.notes.map(p=>'<p>'+esc(p)+'</p>').join('')}</template></section>`;
    }).join('\n');
    let html=shell
      .replace('<!-- SLIDES -->',()=>sections)
      .replaceAll('<!-- DECK_ID -->',()=>deck.id)
      .replaceAll('<!-- DECK_EDITABLE -->',()=>String(deck.editable!==false))
      .replaceAll('<!-- DECK_CONTENT -->',()=>deck.contentPath||'content.json')
      .replaceAll('<!-- DECK_PUBLISH_PATH -->',()=>deck.publishPath||'content.json')
      .replaceAll('<!-- DECK_ORDER -->',()=>String(deck.applyOrder!==false))
      .replaceAll('<!-- DECK_TITLE -->',()=>deck.title)
      .replaceAll('<!-- DECK_DESCRIPTION -->',()=>deck.description)
      .replaceAll('<!-- DECK_LABEL -->',()=>deck.label)
      .replaceAll('<!-- DECK_SWITCH_HREF -->',()=>deck.switchHref)
      .replaceAll('<!-- DECK_SWITCH_LABEL -->',()=>deck.switchLabel)
      .replaceAll('<!-- SLIDE_COUNT -->',()=>String(deck.slides.length));
    let css=base+'\n'+theme+'\n'+editor+'\n'+gateCss;
    const inlined=await inline(html,css);html=inlined.html;css=inlined.css;
    html=html.replace('<!-- STYLES -->',()=>'<style id="presentation-styles">\n'+css+'\n</style>');
    html=html.replace('<!-- CONTENT -->',()=>'<script id="embedded-content" type="application/json">'+JSON.stringify(content).replace(/</g,'\\u003c')+'</script>');
    html=html.replace('<!-- GATE -->',()=>'<script id="presentation-gate">\n'+gateJs+'\n</script>');
    html=html.replace('<!-- SCRIPT -->',()=>'<script id="presentation-runtime">\n'+js+'\n</script>');
    if(deck.editable){html=html.replace('<!-- EDITOR -->',()=>'<script id="presentation-editor">\n'+editorJs+'\n</script>');}
    else{html=html.replace('<!-- EDITOR -->','');}
    const target=path.join(root,deck.slug||'', 'index.html');
    await fs.mkdir(path.dirname(target),{recursive:true});
    await fs.writeFile(target,html);
    written.push({deck,file:target,html});
  }
  return written;
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
  const written=await build();
  console.log('Pronto: apresentações geradas.');
  for(const item of written)console.log(`• ${item.deck.label}: ${path.relative(root,item.file)} (${item.deck.slides.length} slides)`);
}
