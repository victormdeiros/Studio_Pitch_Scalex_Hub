/* Estúdio de edição: ordem dos slides, textos e publicação no GitHub Pages.
   O conteúdo publicado vive em content.json, no próprio repositório. */
(function studio(){
  'use strict';
  const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
  const deck=window.ScalexDeck;
  if(!deck)return;
  const DRAFT_KEY='scalex.content.draft';
  const SNAPSHOT_KEY='scalex.published.snapshot';
  const SETTINGS_KEY='scalex.publish.settings';
  const INLINE='B,STRONG,EM,I,BR,SMALL,SPAN,SUP,SUB,U';
  const list=$('#studio-list'), status=$('#studio-status'), studio=$('#studio'), publishBtn=$('#publish-btn'), editBtn=$('#edit-btn');

  let model={version:1,updatedAt:null,order:[],text:{}};
  let originals={}, defaultOrder=[], editing=false, dirty=false, busy=false, dragId=null, draftTimer=null, toastTimer=null;

  const clone=value=>JSON.parse(JSON.stringify(value||{}));
  const readJSON=key=>{try{return JSON.parse(localStorage.getItem(key)||'null');}catch(_){return null;}};
  function canonical(value){
    if(Array.isArray(value))return value.map(canonical);
    if(value&&typeof value==='object')return Object.keys(value).sort().reduce((acc,key)=>{acc[key]=canonical(value[key]);return acc;},{});
    return value;
  }
  function sameContent(a,b){
    if(!a||!b)return false;
    const orderA=Array.isArray(a.order)?a.order:[],orderB=Array.isArray(b.order)?b.order:[];
    if(orderA.length!==orderB.length||orderA.some((id,index)=>id!==orderB[index]))return false;
    return JSON.stringify(canonical(a.text||{}))===JSON.stringify(canonical(b.text||{}));
  }

  function toast(message){
    const node=$('#toast'); if(!node)return;
    clearTimeout(toastTimer); node.textContent=message; node.hidden=false;
    toastTimer=setTimeout(()=>{node.hidden=true;},3800);
  }

  /* ---------- Configuração de publicação ---------- */
  function defaultSettings(){
    const host=location.hostname, parts=location.pathname.split('/').filter(Boolean);
    const repo=host.endsWith('.github.io')&&parts[0]?`${host.split('.')[0]}/${parts[0]}`:'victormdeiros/Studio_Pitch_Scalex_Hub';
    return {repo,branch:'main',path:'content.json',token:''};
  }
  function readSettings(){
    let saved=null; try{saved=JSON.parse(localStorage.getItem(SETTINGS_KEY)||'null');}catch(_){saved=null;}
    return Object.assign(defaultSettings(),saved&&typeof saved==='object'?saved:{});
  }
  function writeSettings(settings){try{localStorage.setItem(SETTINGS_KEY,JSON.stringify(settings));}catch(_){}}

  /* ---------- Modelo e status ---------- */
  function payload(){return {version:1,updatedAt:model.updatedAt||null,order:model.order.slice(),text:clone(model.text)};}
  function saveDraft(silent){
    try{
      localStorage.setItem(DRAFT_KEY,JSON.stringify(payload()));
      if(!silent)toast('Rascunho salvo neste navegador.');
    }catch(_){if(!silent)toast('Não foi possível salvar o rascunho neste navegador.');}
  }
  function scheduleDraft(){clearTimeout(draftTimer);draftTimer=setTimeout(()=>saveDraft(true),700);}
  function refreshDirty(){
    const snapshot=readJSON(SNAPSHOT_KEY), published=deck.published?deck.published():{};
    dirty=!sameContent(payload(),published)&&!sameContent(payload(),snapshot);
    updateStatus();
  }
  function markDirty(){scheduleDraft();refreshDirty();}

  function updateStatus(){
    const stamp=model.updatedAt?new Date(model.updatedAt):null;
    const when=stamp&&!Number.isNaN(stamp.getTime())
      ?stamp.toLocaleString('pt-BR',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'})
      :'';
    if(busy){status.dataset.state='busy';status.innerHTML='<b>Publicando…</b><span>Enviando content.json para o repositório.</span>';}
    else if(dirty){status.dataset.state='dirty';status.innerHTML='<b>Alterações não publicadas</b><span>Salvas neste navegador. Publique para atualizar o link.</span>';}
    else if(model.updatedAt){status.dataset.state='published';status.innerHTML='<b>Publicado</b><span>Última publicação: '+when+'.</span>';}
    else{status.dataset.state='original';status.innerHTML='<b>Versão original</b><span>Nenhuma alteração publicada.</span>';}
    publishBtn.classList.toggle('attention',dirty&&!busy);
  }

  /* ---------- Modo edição ---------- */
  function syncEditables(){
    $$('.slide').forEach(slide=>{
      deck.editableOf(slide).forEach(el=>{
        if(editing){el.setAttribute('contenteditable','true');el.setAttribute('spellcheck','false');el.setAttribute('role','textbox');}
        else{el.removeAttribute('contenteditable');el.removeAttribute('spellcheck');el.removeAttribute('role');}
      });
    });
  }
  function openStudio(open){
    document.body.classList.toggle('studio-open',!!open);
    studio.setAttribute('aria-hidden',String(!open));
    if(open){renderList();updateStatus();}
  }
  function setPeek(on){
    if(on&&!editing)return;
    document.body.classList.toggle('peeking',on);
    const button=$('#studio-peek'), back=$('#studio-return');
    if(button)button.setAttribute('aria-pressed',String(on));
    if(back)back.hidden=!on;
    if(on)closeDialogs();
  }
  function setEditing(on){
    if(editing===on)return;
    editing=on;
    document.body.classList.toggle('editing',on);
    editBtn.setAttribute('aria-pressed',String(on));
    openStudio(on);
    setPeek(false);
    if(on)closeDialogs();
    syncEditables();
    if(on){
      const row=list.querySelector('.is-current'); if(row)row.scrollIntoView({block:'nearest'});
      toast('Modo edição: clique em um texto do slide para alterar.');
    }
  }
  function editableNode(target){return target&&target.closest?target.closest('[contenteditable="true"]'):null;}
  function closeDialogs(){$$('dialog[open]').forEach(dialog=>dialog.close());}

  function sanitize(el){
    [...el.querySelectorAll('*')].forEach(node=>{
      if(!INLINE.split(',').includes(node.tagName)){node.replaceWith(...node.childNodes);return;}
      [...node.attributes].forEach(attribute=>{
        if(attribute.name==='class'&&/^[\w -]{1,80}$/.test(attribute.value))return;
        node.removeAttribute(attribute.name);
      });
    });
  }

  function remember(el){
    const slide=el.closest('.slide'); if(!slide)return;
    const index=deck.editableOf(slide).indexOf(el); if(index<0)return;
    const key='e'+index;
    const original=(originals[slide.id]||[])[index];
    const html=el.innerHTML;
    const bucket=model.text[slide.id]||(model.text[slide.id]={});
    if(original&&html===original.html)delete bucket[key];
    else bucket[key]={v:html,o:original?original.text.slice(0,60):''};
    if(!Object.keys(bucket).length)delete model.text[slide.id];
    markDirty();
  }

  document.addEventListener('input',event=>{const el=editableNode(event.target);if(el)remember(el);});
  document.addEventListener('focusout',event=>{
    const el=editableNode(event.target);
    if(!el)return;
    sanitize(el);remember(el);
  });
  document.addEventListener('paste',event=>{
    const el=editableNode(event.target); if(!el)return;
    event.preventDefault();
    const text=(event.clipboardData||window.clipboardData).getData('text/plain').replace(/\r/g,'');
    document.execCommand('insertText',false,text);
  });
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&editableNode(event.target)){event.preventDefault();event.target.blur();return;}
    if(event.key!=='e'&&event.key!=='E')return;
    if(event.metaKey||event.ctrlKey||event.altKey)return;
    if(event.target.closest&&event.target.closest('input,textarea,select,[contenteditable="true"]'))return;
    event.preventDefault();setEditing(!editing);
  });

  /* ---------- Lista de ordem ---------- */
  function markCurrent(){
    const slide=deck.slides()[deck.current()];
    const id=slide?slide.id:null;
    [...list.children].forEach(row=>row.classList.toggle('is-current',row.dataset.id===id));
  }
  function renderList(){
    list.replaceChildren(...deck.slides().map((slide,index)=>{
      const row=document.createElement('li');
      row.className='studio-item';row.draggable=true;row.dataset.id=slide.id;

      const grip=document.createElement('span');
      grip.className='studio-grip';grip.setAttribute('aria-hidden','true');
      grip.innerHTML='<svg class="ico"><use href="#i-grip"></use></svg>';

      const num=document.createElement('span');
      num.className='studio-num';num.textContent=String(index+1).padStart(2,'0');

      const title=document.createElement('button');
      title.type='button';title.className='studio-title';title.textContent=slide.dataset.title||slide.id;
      title.title='Ir para este slide';
      title.addEventListener('click',()=>{const target=deck.slides().indexOf(slide);if(target>=0)deck.go(target);});

      const acts=document.createElement('span');
      acts.className='studio-acts';
      [['-1','up','Mover para cima'],['1','down','Mover para baixo']].forEach(([dir,icon,label])=>{
        const button=document.createElement('button');
        button.type='button';button.className='studio-move';button.dataset.dir=dir;
        button.setAttribute('aria-label',label);button.title=label;
        button.innerHTML=`<svg class="ico" aria-hidden="true"><use href="#i-${icon}"></use></svg>`;
        acts.append(button);
      });

      row.append(grip,num,title,acts);
      return row;
    }));
    markCurrent();
  }
  function commitOrder(ids){
    const active=deck.slides()[deck.current()], activeId=active?active.id:null;
    model.order=ids.slice();
    deck.setOrder(ids);
    if(activeId){const index=deck.slides().findIndex(slide=>slide.id===activeId);if(index>=0)deck.applySlide(index,false);}
    renderList();markDirty();saveDraft(true);
  }

  list.addEventListener('click',event=>{
    const button=event.target.closest('.studio-move'); if(!button)return;
    const row=button.closest('.studio-item'), ids=deck.slides().map(slide=>slide.id);
    const from=ids.indexOf(row.dataset.id), to=from+Number(button.dataset.dir);
    if(from<0||to<0||to>=ids.length)return;
    ids.splice(to,0,ids.splice(from,1)[0]);
    commitOrder(ids);
  });
  list.addEventListener('dragstart',event=>{
    const row=event.target.closest('.studio-item'); if(!row)return;
    dragId=row.dataset.id;row.classList.add('dragging');
    event.dataTransfer.effectAllowed='move';
    try{event.dataTransfer.setData('text/plain',dragId);}catch(_){}
  });
  list.addEventListener('dragover',event=>{
    if(!dragId)return;
    event.preventDefault();
    const row=event.target.closest('.studio-item'), dragged=list.querySelector('.dragging');
    if(!row||!dragged||row===dragged)return;
    const rect=row.getBoundingClientRect();
    list.insertBefore(dragged,event.clientY>rect.top+rect.height/2?row.nextSibling:row);
  });
  list.addEventListener('drop',event=>{
    if(!dragId)return;
    event.preventDefault();
    const ids=[...list.children].map(row=>row.dataset.id);
    dragId=null;
    commitOrder(ids);
  });
  list.addEventListener('dragend',()=>{
    dragId=null;
    const dragged=list.querySelector('.dragging'); if(dragged)dragged.classList.remove('dragging');
  });

  document.addEventListener('scalex:slide',markCurrent);

  /* ---------- Aplicar conteúdo externo ---------- */
  function restoreOriginals(){
    Object.keys(originals).forEach(id=>{
      const slide=document.getElementById(id); if(!slide)return;
      originals[id].forEach((original,index)=>{
        const el=deck.editableOf(slide)[index];
        if(el)el.innerHTML=original.html;
      });
    });
  }
  function applyModel(next){
    restoreOriginals();
    const ids=Array.isArray(next.order)?next.order.filter(id=>typeof id==='string'):[];
    deck.setOrder(ids.length?ids:defaultOrder.slice());
    model={version:1,updatedAt:next.updatedAt||null,order:deck.slides().map(slide=>slide.id),text:clone(next.text||{})};
    deck.applyText(model.text);
    renderList();refreshDirty();saveDraft(true);
  }

  /* ---------- Publicação ---------- */
  function toBase64(text){
    const bytes=new TextEncoder().encode(text);let binary='';
    for(let i=0;i<bytes.length;i+=0x8000)binary+=String.fromCharCode.apply(null,bytes.subarray(i,i+0x8000));
    return btoa(binary);
  }
  async function ghError(response){
    try{const data=await response.json();if(data&&data.message)return data.message;}catch(_){}
    return 'HTTP '+response.status;
  }
  function openPublish(){
    const settings=readSettings();
    $('#pub-repo').value=settings.repo;
    $('#pub-branch').value=settings.branch;
    $('#pub-path').value=settings.path;
    $('#pub-token').value=settings.token||'';
    const target=$('#publish-status');
    target.textContent='';target.dataset.state='';
    const dialog=$('#publish-dialog');
    if(!dialog.open)dialog.showModal();
  }
  async function publish(){
    const settings=readSettings();
    if(!settings.token){toast('Informe um token do GitHub para publicar.');openPublish();return;}
    if(busy)return;
    busy=true;updateStatus();
    const label=publishBtn.textContent;
    publishBtn.textContent='Publicando…';publishBtn.disabled=true;
    try{
      const data=payload();data.updatedAt=new Date().toISOString();
      const json=JSON.stringify(data,null,2)+'\n';
      const branch=settings.branch||'main';
      const path=String(settings.path||'content.json').split('/').map(encodeURIComponent).join('/');
      const base=`https://api.github.com/repos/${settings.repo}/contents/${path}`;
      const headers={Authorization:'Bearer '+settings.token,Accept:'application/vnd.github+json','X-GitHub-Api-Version':'2022-11-28'};
      let sha=null;
      const head=await fetch(`${base}?ref=${encodeURIComponent(branch)}`,{headers,cache:'no-store'});
      if(head.ok){const meta=await head.json();sha=meta&&meta.sha?meta.sha:null;}
      else if(head.status!==404)throw new Error(await ghError(head));
      const body={message:'Atualiza o conteúdo da apresentação',content:toBase64(json),branch};
      if(sha)body.sha=sha;
      const response=await fetch(base,{method:'PUT',headers:Object.assign({},headers,{'Content-Type':'application/json'}),body:JSON.stringify(body)});
      if(!response.ok)throw new Error(await ghError(response));
      await response.json();
      model.updatedAt=data.updatedAt;dirty=false;
      try{localStorage.setItem(SNAPSHOT_KEY,JSON.stringify(payload()));}catch(_){}
      saveDraft(true);updateStatus();renderList();
      const dialog=$('#publish-dialog'); if(dialog.open)dialog.close();
      toast('Publicado. O GitHub Pages atualiza em cerca de 1 minuto.');
    }catch(error){
      const message=error&&error.message?error.message:'falha de rede';
      openPublish();
      const target=$('#publish-status');
      target.dataset.state='error';target.textContent='Não foi possível publicar: '+message;
      toast('Falha ao publicar.');
    }finally{
      busy=false;publishBtn.disabled=false;publishBtn.textContent=label;updateStatus();
    }
  }

  /* ---------- Ações ---------- */
  editBtn.addEventListener('click',()=>setEditing(!editing));
  $('#studio-close').addEventListener('click',()=>setEditing(false));
  $('#studio-peek').addEventListener('click',()=>setPeek(!document.body.classList.contains('peeking')));
  $('#studio-return').addEventListener('click',()=>setPeek(false));
  $('#edit-badge').addEventListener('click',()=>setPeek(false));
  $('#save-draft').addEventListener('click',()=>saveDraft());
  publishBtn.addEventListener('click',publish);
  $('#settings-btn').addEventListener('click',openPublish);
  $('#publish-confirm').addEventListener('click',()=>{
    const settings={
      repo:$('#pub-repo').value.trim(),
      branch:$('#pub-branch').value.trim()||'main',
      path:$('#pub-path').value.trim()||'content.json',
      token:$('#pub-token').value.trim()
    };
    const target=$('#publish-status');
    if(!/^[\w.-]+\/[\w.-]+$/.test(settings.repo)){target.dataset.state='error';target.textContent='Informe o repositório no formato usuario/repositorio.';return;}
    if(!settings.token){target.dataset.state='error';target.textContent='Informe o token do GitHub.';return;}
    writeSettings(settings);
    $('#publish-dialog').close();
    publish();
  });
  $('#forget-token').addEventListener('click',()=>{
    const settings=readSettings();settings.token='';writeSettings(settings);
    $('#pub-token').value='';
    toast('Token esquecido neste navegador.');
  });
  $('#discard-draft').addEventListener('click',()=>{
    if(!confirm('Descartar o rascunho local e recarregar o conteúdo publicado?'))return;
    localStorage.removeItem(DRAFT_KEY);
    location.reload();
  });
  $('#download-btn').addEventListener('click',()=>{
    const data=payload();data.updatedAt=data.updatedAt||new Date().toISOString();
    const blob=new Blob([JSON.stringify(data,null,2)+'\n'],{type:'application/json'});
    const url=URL.createObjectURL(blob), link=document.createElement('a');
    link.href=url;link.download='scalex-conteudo.json';document.body.append(link);link.click();link.remove();
    setTimeout(()=>URL.revokeObjectURL(url),2000);
    toast('Conteúdo exportado em JSON.');
  });
  $('#import-btn').addEventListener('click',()=>$('#import-file').click());
  $('#import-file').addEventListener('change',async event=>{
    const file=event.target.files&&event.target.files[0]; if(!file)return;
    try{
      const data=JSON.parse(await file.text());
      if(!data||typeof data!=='object'||(!Array.isArray(data.order)&&!data.text))throw new Error('formato');
      applyModel(data);
      toast('Conteúdo importado. Publique para atualizar o site.');
    }catch(_){toast('Arquivo inválido. Use um JSON exportado pelo Estúdio.');}
    event.target.value='';
  });
  $('#reset-btn').addEventListener('click',()=>{
    if(!confirm('Restaurar todos os textos e a ordem original? As alterações não publicadas serão descartadas.'))return;
    restoreOriginals();
    model.text={};model.updatedAt=null;
    commitOrder(defaultOrder.slice());
    saveDraft(true);
    toast('Conteúdo original restaurado.');
  });

  /* ---------- Inicialização ---------- */
  deck.whenReady(content=>{
    originals=deck.originals();
    defaultOrder=deck.slides().map(slide=>slide.id);
    model={version:1,updatedAt:content.updatedAt||null,order:defaultOrder.slice(),text:clone(content.text||{})};
    if(Array.isArray(content.order)&&content.order.length)model.order=content.order.slice();
    renderList();refreshDirty();syncEditables();
    if(/(^|#|&)editar\b/.test(location.hash)||new URLSearchParams(location.search).has('editar'))setEditing(true);
    if(deck.stale&&deck.stale())toast(deck.stale()+' texto(s) salvo(s) não correspondem mais ao slide atual.');
  });
})();
