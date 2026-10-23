import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {slides} from '../src/deck.mjs';
import {escapeHTML as esc} from '../src/components.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
async function files(dir){let out=[];for(const e of await fs.readdir(dir,{withFileTypes:true})){const p=path.join(dir,e.name);out.push(...(e.isDirectory()?await files(p):[p]));}return out;}
export async function build(){
 const read=p=>fs.readFile(path.join(root,p),'utf8');
 let [shell,base,theme,js]=await Promise.all(['src/shell.html','src/styles/base.css','src/styles/theme.css','src/runtime.js'].map(read));
 let css=base+'\n'+theme;
 const sections=slides.map((s,i)=>{
  const logo=s.theme==='light'?'assets/image4.png':'assets/image1.png';
  const chrome=`<header class="s-top"><img class="s-logo" src="${logo}" alt="ScaleX Hub"></header>${s.number?`<span class="s-num" aria-hidden="true">${esc(s.number)}</span>`:''}`;
  return `<!-- SLIDE ${i+1}: ${esc(s.title)} -->\n<section id="${s.id}" class="slide ${s.theme} scene-${i+1}${i===0?' active':''}" data-title="${esc(s.title)}" aria-label="Slide ${i+1} de ${slides.length}: ${esc(s.title)}" aria-hidden="${i!==0}"><div class="slide-canvas">${chrome}${s.html}</div><template class="speaker-notes">${s.notes.map(p=>'<p>'+esc(p)+'</p>').join('')}</template></section>`;
 }).join('\n');
 let html=shell.replace('<!-- SLIDES -->',()=>sections);
 // Incluir arquivos locais mantém a apresentação portátil e sem servidor.
 for(const file of await files(path.join(root,'assets'))){
  const relative=path.relative(root,file).split(path.sep).join('/'),ext=path.extname(file).toLowerCase();
  const type={'.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.svg':'image/svg+xml','.ttf':'font/ttf','.mp4':'video/mp4','.woff2':'font/woff2'}[ext];
  if(!type)continue;const data=`data:${type};base64,${(await fs.readFile(file)).toString('base64')}`;
  html=html.replaceAll(relative,data);css=css.replaceAll(relative,data);
 }
 html=html.replace('<!-- STYLES -->',()=>'<style id="presentation-styles">\n'+css+'\n</style>').replace('<!-- SCRIPT -->',()=>'<script id="presentation-runtime">\n'+js+'\n</script>');
 await fs.writeFile(path.join(root,'index.html'),html);return html;
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){await build();console.log(`Pronto: index.html • ${slides.length} slides • fontes e imagens incorporadas.`);}
