import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
// Importação renovada permite recarregar os módulos de conteúdo ao reiniciar o comando.
const {build}=await import('./build.mjs');await build();
const server=http.createServer(async(req,res)=>{try{const filename=decodeURIComponent(new URL(req.url,'http://localhost').pathname);const target=path.resolve(root,'.'+(filename==='/'?'/index.html':filename));if(!target.startsWith(root+path.sep)){res.writeHead(403).end();return;}const bytes=await fs.readFile(target);const types={'.html':'text/html; charset=utf-8','.png':'image/png','.css':'text/css','.mjs':'text/javascript','.js':'text/javascript','.ttf':'font/ttf','.json':'application/json; charset=utf-8'};res.writeHead(200,{'Content-Type':types[path.extname(target)]||'application/octet-stream'});res.end(bytes);}catch(_){res.writeHead(404).end('Arquivo não encontrado');}});
server.listen(4173,'127.0.0.1',()=>console.log('Abra http://localhost:4173 • Para atualizar o código, execute npm run build e recarregue.'));
