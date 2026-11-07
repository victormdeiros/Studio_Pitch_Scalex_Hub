/* Exporta as apresentações para PDF usando um Chrome/Chromium instalado.
   Não adiciona dependências: aproveita o navegador do sistema ou o Chromium
   baixado pelo Playwright, quando existir.

   Uso:
     npm run pdf
     npm run pdf -- --deck=resumo
     npm run pdf -- --all
     npm run pdf -- --notes
     npm run pdf -- --out=apresentacao.pdf
*/
import {spawn} from 'node:child_process';
import fs from 'node:fs';
import fsp from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';
import {build} from './build.mjs';
import {decks} from '../src/decks.mjs';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const argv=process.argv.slice(2);
const notes=argv.includes('--notes');
const deckArg=argv.find(arg=>arg.startsWith('--deck='));
const selected=argv.includes('--all')?decks:decks.filter(deck=>deck.id===(deckArg?deckArg.slice('--deck='.length):'detalhado'));
const outArg=argv.find(arg=>arg.startsWith('--out='));

const isFile=file=>{try{return fs.statSync(file).isFile();}catch(_){return false;}};

function outputFor(deck){
  const name=deck.id==='detalhado'?'ScaleX-Hub-Apresentacao.pdf':'ScaleX-Hub-Pitch-Resumido.pdf';
  if(!outArg)return path.join(root,'dist',name);
  const target=path.resolve(outArg.slice('--out='.length));
  return selected.length>1?path.join(target,name):target;
}

function playwrightChromes(){
  const bases=[process.env.PLAYWRIGHT_BROWSERS_PATH,path.join(os.homedir(),'.cache','ms-playwright')].filter(Boolean);
  const full=[],shell=[];
  for(const base of bases){
    let entries=[];
    try{entries=fs.readdirSync(base);}catch(_){continue;}
    for(const name of entries.sort().reverse()){
      if(name.startsWith('chromium-')){
        const file=path.join(base,name,'chrome-linux','chrome');
        if(isFile(file))full.push(file);
      }else if(name.startsWith('chromium_headless_shell-')){
        const file=path.join(base,name,'chrome-linux','headless_shell');
        if(isFile(file))shell.push(file);
      }
    }
  }
  return [...full,...shell];
}

function candidates(){
  const list=[];
  if(process.env.CHROME_PATH)list.push(process.env.CHROME_PATH);
  list.push(...playwrightChromes());
  if(process.platform==='darwin'){
    list.push(
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      '/Applications/Chromium.app/Contents/MacOS/Chromium',
      '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge'
    );
  }else if(process.platform==='win32'){
    for(const base of [process.env.PROGRAMFILES,process.env['PROGRAMFILES(X86)'],process.env.LOCALAPPDATA].filter(Boolean)){
      list.push(path.join(base,'Google','Chrome','Application','chrome.exe'));
      list.push(path.join(base,'Microsoft','Edge','Application','msedge.exe'));
    }
  }else{
    list.push(
      '/usr/bin/google-chrome',
      '/usr/bin/google-chrome-stable',
      '/usr/bin/chromium',
      '/usr/bin/chromium-browser',
      '/snap/bin/chromium',
      '/opt/google/chrome/chrome'
    );
  }
  return list;
}

function findChrome(){
  const found=candidates().find(isFile);
  if(found)return found;
  throw new Error('Chrome/Chromium não encontrado. Instale o navegador ou defina CHROME_PATH com o caminho do executável.');
}

function run(chrome,args){
  return new Promise((resolve,reject)=>{
    const child=spawn(chrome,args,{stdio:['ignore','ignore','pipe']});
    let log='';
    child.stderr.on('data',chunk=>{log=(log+chunk).slice(-4000);});
    const timer=setTimeout(()=>{
      child.kill('SIGKILL');
      reject(new Error('A exportação demorou mais de 240 segundos.'));
    },240000);
    child.on('error',error=>{clearTimeout(timer);reject(error);});
    child.on('exit',code=>{
      clearTimeout(timer);
      if(code===0)resolve();
      else reject(new Error(log.trim()||('O navegador terminou com código '+code+'.')));
    });
  });
}

async function exportPdf(){
  if(!selected.length)throw new Error('Apresentação não encontrada. Use --deck=resumo ou --all.');
  const chrome=findChrome();
  await build();
  const profile=await fsp.mkdtemp(path.join(os.tmpdir(),'scalex-pdf-'));
  try{
    for(const deck of selected){
      const output=outputFor(deck);
      await fsp.mkdir(path.dirname(output),{recursive:true});
      const url=pathToFileURL(path.join(root,deck.slug||'','index.html')).href+(notes?'?notes':'');
      const args=[
        '--headless=new',
        '--incognito',
        '--no-sandbox',
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--hide-scrollbars',
        '--force-color-profile=srgb',
        '--no-pdf-header-footer',
        '--no-first-run',
        '--no-default-browser-check',
        '--disable-background-networking',
        '--disable-component-update',
        '--disable-sync',
        '--disable-default-apps',
        '--disable-extensions',
        '--disable-breakpad',
        '--mute-audio',
        '--user-data-dir='+profile,
        '--print-to-pdf='+output,
        url
      ];
      console.log('Renderizando '+deck.label.toLowerCase()+(notes?' com notas':'')+' em PDF…');
      await run(chrome,args);
      if(!isFile(output))throw new Error('O navegador não gerou o arquivo PDF.');
      const {size}=await fsp.stat(output);
      const relative=path.relative(root,output);
      const shown=relative&&!relative.startsWith('..')?relative:output;
      console.log('PDF gerado: '+shown+' • '+(size/1024/1024).toFixed(1)+' MB');
    }
  }finally{
    await fsp.rm(profile,{recursive:true,force:true}).catch(()=>{});
  }
}

exportPdf().catch(error=>{
  console.error('Falha ao exportar o PDF: '+error.message);
  process.exitCode=1;
});
