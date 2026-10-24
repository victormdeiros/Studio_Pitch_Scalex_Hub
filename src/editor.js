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

  let model={version:1,updatedAt:null,order:[],text:{},styles:{}};
  let originals={}, defaultOrder=[], editing=false, dirty=false, busy=false, dragId=null, draftTimer=null, toastTimer=null;
  let selected=null, selectedInfo=null, moveMode=false, dragState=null, styleCollapsed=false;
  let editorUnlocked=window.ScalexGate?window.ScalexGate.editorUnlocked():true;
  let pendingEditor=false;

  const clone=value=>JSON.parse(JSON.stringify(value||{}));
  const readJSON=key=>{try{return JSON.parse(localStorage.getItem(key)||'null');}catch(_){return null;}};
  function canonical(value){
    if(Array.isArray(value))return value.map(canonical);
    if(value&&typeof value==='object')return Object.keys(value).sort().reduce((acc,key)=>{acc[key]=canonical(value[key]);return acc;},{});
    return value;
  }
  function orderCompatible(a,b){
    const orderA=Array.isArray(a)?a:[],orderB=Array.isArray(b)?b:[];
    const setA=new Set(orderA),setB=new Set(orderB);
    const commonA=orderA.filter(id=>setB.has(id));
    const commonB=orderB.filter(id=>setA.has(id));
    return commonA.length===commonB.length&&commonA.every((id,index)=>id===commonB[index]);
  }
  function relevantMap(map,ids){
    const out={};
    Object.keys(map||{}).forEach(key=>{if(ids.has(key))out[key]=map[key];});
    return out;
  }
  function sameContent(a,b){
    if(!a||!b)return false;
    if(!orderCompatible(a.order,b.order))return false;
    const ids=new Set(a.order||[]);
    if(JSON.stringify(canonical(relevantMap(a.text,ids)))!==JSON.stringify(canonical(relevantMap(b.text,ids))))return false;
    return JSON.stringify(canonical(relevantMap(a.styles,ids)))===JSON.stringify(canonical(relevantMap(b.styles,ids)));
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
  function payload(){return {version:1,updatedAt:model.updatedAt||null,order:model.order.slice(),text:clone(model.text),styles:clone(model.styles)};}
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
  /* ---------- Seleção e aparência ---------- */
  function keyFor(el){
    const slide=el&&el.closest?el.closest('.slide'):null;
    if(!slide)return null;
    const index=deck.editableOf(slide).indexOf(el);
    if(index<0)return null;
    return {slideId:slide.id,key:'e'+index,index};
  }
  function styleEntry(){
    if(!selectedInfo)return {};
    const bucket=model.styles[selectedInfo.slideId]||{};
    return bucket[selectedInfo.key]||{};
  }
  function toHex(color){
    if(!color)return '';
    if(color.startsWith('#'))return color.slice(0,7);
    const match=color.match(/rgba?\(([^)]+)\)/);
    if(!match)return '';
    const parts=match[1].split(',').map(Number);
    if(parts.length>3&&parts[3]===0)return '';
    return '#'+parts.slice(0,3).map(value=>Math.max(0,Math.min(255,Math.round(value))).toString(16).padStart(2,'0')).join('');
  }
  function syncStyleControls(){
    if(!selected)return;
    const entry=styleEntry(), computed=getComputedStyle(selected);
    $('#style-target').textContent=selected.tagName.toLowerCase()+' · '+String(selected.textContent||'').replace(/\s+/g,' ').trim().slice(0,22);
    $('#style-color').value=toHex(entry.color||computed.color)||'#ffffff';
    $('#style-bg').value=toHex(entry.background)||'#0a1936';
    paintSwatches();
    $('#style-size').value=entry.fontSize||Math.round(parseFloat(computed.fontSize))||'';
    $('#style-weight').value=entry.weight?String(entry.weight):'';
    $('#style-pos').textContent='x '+(Number(entry.x)||0)+' · y '+(Number(entry.y)||0);
    $$('#style-controls [data-align]').forEach(button=>button.setAttribute('aria-pressed',String((entry.align||'')===button.dataset.align)));
    $('#style-move').setAttribute('aria-pressed',String(moveMode));
  }
  function paintSwatches(){
    const color=$('#style-color-view'), background=$('#style-bg-view');
    if(color)color.style.background=$('#style-color').value;
    if(background)background.style.background=$('#style-bg').value;
  }
  function selectElement(el){
    if(selected===el){if(el)syncStyleControls();return;}
    if(selected)selected.classList.remove('is-style-target');
    selected=el||null;
    selectedInfo=el?keyFor(el):null;
    if(!el){moveMode=false;document.body.classList.remove('moving-element');}
    const section=$('#studio-style'), controls=$('#style-controls'), empty=$('#style-empty');
    if(section)section.hidden=!editing;
    if(!el){if(controls)controls.hidden=true;if(empty)empty.hidden=styleCollapsed;return;}
    el.classList.add('is-style-target');
    if(controls)controls.hidden=styleCollapsed;
    if(empty)empty.hidden=true;
    syncStyleControls();
    if(section&&section.getBoundingClientRect().top<$('#studio').getBoundingClientRect().top+70)section.scrollIntoView({block:'nearest'});
  }
  function setStyle(patch){
    if(!selectedInfo||!selected)return;
    const entry=Object.assign({},styleEntry(),patch);
    ['color','background','fontSize','weight','align'].forEach(prop=>{if(entry[prop]==null||entry[prop]==='')delete entry[prop];});
    if(!entry.x)delete entry.x;
    if(!entry.y)delete entry.y;
    const bucket=model.styles[selectedInfo.slideId]||(model.styles[selectedInfo.slideId]={});
    if(Object.keys(entry).length)bucket[selectedInfo.key]=entry;
    else delete bucket[selectedInfo.key];
    if(!Object.keys(bucket).length)delete model.styles[selectedInfo.slideId];
    deck.styleElement(selected,entry);
    markDirty();
  }

  document.addEventListener('focusin',event=>{
    if(!editing)return;
    const el=editableNode(event.target);
    if(el)selectElement(el);
  });
  document.addEventListener('pointerdown',event=>{
    if(!editing||moveMode)return;
    if(event.target.closest&&event.target.closest('.studio,.app-header,.app-footer,dialog'))return;
    const el=editableNode(event.target);
    selectElement(el||null);
  },true);
  document.addEventListener('pointerdown',event=>{
    if(!editing||!moveMode||!selected)return;
    if(!selected.contains(event.target))return;
    event.preventDefault();
    const stage=$('#stage');
    const scale=Number(getComputedStyle(stage).getPropertyValue('--scale'))||1;
    const entry=styleEntry();
    dragState={startX:event.clientX,startY:event.clientY,baseX:Number(entry.x)||0,baseY:Number(entry.y)||0,x:Number(entry.x)||0,y:Number(entry.y)||0,scale};
    document.body.classList.add('dragging-element');
  });
  document.addEventListener('pointermove',event=>{
    if(!dragState||!selected)return;
    const x=dragState.baseX+Math.round((event.clientX-dragState.startX)/dragState.scale);
    const y=dragState.baseY+Math.round((event.clientY-dragState.startY)/dragState.scale);
    dragState.x=x;dragState.y=y;
    deck.styleElement(selected,Object.assign({},styleEntry(),{x,y}));
    $('#style-pos').textContent='x '+x+' · y '+y;
    if(x||y)$('#style-pos').dataset.moved='on';
  });
  function endDrag(){
    if(!dragState)return;
    const x=dragState.x,y=dragState.y;
    dragState=null;
    document.body.classList.remove('dragging-element');
    setStyle({x,y});
    $('#style-pos').textContent='x '+(x||0)+' · y '+(y||0);
  }
  document.addEventListener('pointerup',endDrag);
  document.addEventListener('pointercancel',endDrag);

  $('#style-collapse').addEventListener('click',()=>{
    styleCollapsed=!styleCollapsed;
    const button=$('#style-collapse');
    button.setAttribute('aria-expanded',String(!styleCollapsed));
    button.setAttribute('aria-label',styleCollapsed?'Expandir aparência':'Minimizar aparência');
    button.title=styleCollapsed?'Expandir aparência':'Minimizar aparência';
    const controls=$('#style-controls'), empty=$('#style-empty');
    if(controls)controls.hidden=styleCollapsed||!selected;
    if(empty)empty.hidden=styleCollapsed||!!selected;
  });
  $('#style-color').addEventListener('input',event=>{setStyle({color:event.target.value});paintSwatches();});
  $('#style-bg').addEventListener('input',event=>{setStyle({background:event.target.value});paintSwatches();});
  $('#style-color-clear').addEventListener('click',()=>{setStyle({color:null,background:null});syncStyleControls();});
  $('#style-size').addEventListener('change',event=>{
    const value=Math.max(8,Math.min(200,Number(event.target.value)||0));
    setStyle({fontSize:value||null});
    if(!value)$('#style-size').value=Math.round(parseFloat(getComputedStyle(selected).fontSize))||'';
  });
  $('#style-weight').addEventListener('change',event=>setStyle({weight:event.target.value||null}));
  $$('#style-controls [data-align]').forEach(button=>button.addEventListener('click',()=>{
    setStyle({align:styleEntry().align===button.dataset.align?null:button.dataset.align});
    syncStyleControls();
  }));
  $$('.style-nudge [data-move]').forEach(button=>button.addEventListener('click',event=>{
    const step=event.shiftKey?16:4, entry=styleEntry();
    const x=(Number(entry.x)||0)+({left:-step,right:step}[button.dataset.move]||0);
    const y=(Number(entry.y)||0)+({up:-step,down:step}[button.dataset.move]||0);
    setStyle({x,y});
    $('#style-pos').textContent='x '+x+' · y '+y;
  }));
  $('#style-move').addEventListener('click',()=>{
    if(!selected)return;
    moveMode=!moveMode;
    document.body.classList.toggle('moving-element',moveMode);
    $('#style-move').setAttribute('aria-pressed',String(moveMode));
    if(moveMode)toast('Arraste o texto selecionado no slide para mover. Shift move 16px nos botões.');
  });
  $('#style-reset').addEventListener('click',()=>{
    if(!selectedInfo)return;
    const bucket=model.styles[selectedInfo.slideId];
    if(bucket){delete bucket[selectedInfo.key];if(!Object.keys(bucket).length)delete model.styles[selectedInfo.slideId];}
    deck.styleElement(selected,{});
    markDirty();syncStyleControls();
  });

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
    const styleSection=$('#studio-style');
    if(styleSection)styleSection.hidden=!on;
    if(!on)selectElement(null);
    if(on){
      const row=list.querySelector('.is-current'); if(row)row.scrollIntoView({block:'nearest'});
      toast('Modo edição: clique em um texto do slide para alterar.');
    }
  }
  function editableNode(target){return target&&target.closest?target.closest('[contenteditable="true"]'):null;}
  function closeDialogs(){$$('dialog[open]').forEach(dialog=>dialog.close());}
  function openEditorGate(){
    pendingEditor=true;
    const dialog=$('#editor-lock-dialog'), error=$('#editor-lock-error');
    if(!dialog)return;
    $('#editor-lock-pass').value='';
    if(error){error.textContent='';error.dataset.state='';}
    if(!dialog.open)dialog.showModal();
    setTimeout(()=>{try{$('#editor-lock-pass').focus();}catch(_){}},60);
  }
  function requestEditor(){
    if(editing){setEditing(false);return;}
    if(editorUnlocked){setEditing(true);return;}
    openEditorGate();
  }

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
    const style=(model.styles[slide.id]||{})[key];
    if(style)deck.styleElement(el,style);
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
    event.preventDefault();
    if(editing){setEditing(false);return;}
    if(!editorUnlocked){pendingEditor=true;openEditorGate();return;}
    setEditing(true);
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
    selectElement(null);
    restoreOriginals();
    const ids=Array.isArray(next.order)?next.order.filter(id=>typeof id==='string'):[];
    deck.setOrder(ids.length?ids:defaultOrder.slice());
    model={version:1,updatedAt:next.updatedAt||null,order:deck.slides().map(slide=>slide.id),text:clone(next.text||{}),styles:clone(next.styles||{})};
    deck.applyText(model.text);
    deck.applyStyles(model.styles);
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
  function readPublishForm(){
    return {
      repo:$('#pub-repo').value.trim(),
      branch:$('#pub-branch').value.trim()||'main',
      path:$('#pub-path').value.trim()||'content.json',
      token:$('#pub-token').value.trim()
    };
  }
  function updateConnection(){
    const settings=readSettings();
    const button=$('#studio-connection'), label=$('#studio-connection-label');
    if(!button||!label)return;
    button.classList.toggle('is-connected',!!settings.token);
    label.textContent=settings.token?('GitHub · '+(settings.login?'@'+settings.login:'conectado')):'GitHub · conectar';
  }
  function openPublish(){
    const settings=readSettings();
    $('#pub-repo').value=settings.repo;
    $('#pub-branch').value=settings.branch;
    $('#pub-path').value=settings.path;
    $('#pub-token').value=settings.token||'';
    const target=$('#publish-status');
    target.dataset.state=settings.token?'ok':'';
    target.textContent=settings.token?('Token salvo'+(settings.login?' · @'+settings.login:'')+'. Você pode publicar sem colar novamente.'):'';
    const dialog=$('#publish-dialog');
    if(!dialog.open)dialog.showModal();
  }
  async function hydrateConnection(){
    const settings=readSettings();
    if(!settings.token||settings.login)return;
    try{
      const response=await fetch('https://api.github.com/user',{headers:{Authorization:'Bearer '+settings.token,Accept:'application/vnd.github+json','X-GitHub-Api-Version':'2022-11-28'},cache:'no-store'});
      if(!response.ok)return;
      const login=(await response.json()).login;
      if(!login)return;
      settings.login=login;writeSettings(settings);updateConnection();
    }catch(_){}
  }
  async function connect(){
    const settings=readPublishForm();
    const target=$('#publish-status');
    if(!/^[\w.-]+\/[\w.-]+$/.test(settings.repo)){target.dataset.state='error';target.textContent='Informe o repositório no formato usuario/repositorio.';return false;}
    if(!settings.token){target.dataset.state='error';target.textContent='Informe o token do GitHub.';return false;}
    target.dataset.state='';target.textContent='Testando conexão…';
    try{
      const headers={Authorization:'Bearer '+settings.token,Accept:'application/vnd.github+json','X-GitHub-Api-Version':'2022-11-28'};
      const user=await fetch('https://api.github.com/user',{headers,cache:'no-store'});
      if(!user.ok)throw new Error(user.status===401?'token inválido ou expirado':await ghError(user));
      const login=(await user.json()).login;
      const repo=await fetch('https://api.github.com/repos/'+settings.repo,{headers,cache:'no-store'});
      if(!repo.ok)throw new Error(repo.status===404?'o token não tem acesso a este repositório':await ghError(repo));
      const meta=await repo.json();
      if(!meta.permissions||!meta.permissions.push)throw new Error('o token não tem permissão de escrita (Contents: Read and write)');
      settings.login=login;
      writeSettings(settings);
      updateConnection();
      target.dataset.state='ok';target.textContent='Conectado como @'+login+'. O token ficou salvo neste navegador e não será pedido novamente.';
      toast('GitHub conectado como @'+login+'.');
      return true;
    }catch(error){
      const message=error&&error.message?error.message:'falha de rede';
      target.dataset.state='error';target.textContent='Não foi possível conectar: '+message;
      return false;
    }
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
  editBtn.addEventListener('click',()=>{
    if(!editing&&!editorUnlocked){pendingEditor=true;openEditorGate();return;}
    setEditing(!editing);
  });
  $('#studio-close').addEventListener('click',()=>setEditing(false));
  $('#studio-peek').addEventListener('click',()=>setPeek(!document.body.classList.contains('peeking')));
  $('#studio-return').addEventListener('click',()=>setPeek(false));
  $('#edit-badge').addEventListener('click',()=>setPeek(false));
  $('#editor-lock-form').addEventListener('submit',async event=>{
    event.preventDefault();
    const value=$('#editor-lock-pass').value;
    const ok=window.ScalexGate?await window.ScalexGate.checkEditor(value):true;
    const error=$('#editor-lock-error');
    if(!ok){
      if(error){error.dataset.state='error';error.textContent='Senha incorreta. Tente novamente.';}
      $('#editor-lock-pass').select();
      return;
    }
    editorUnlocked=true;
    if(window.ScalexGate)window.ScalexGate.unlockEditor();
    if(error){error.textContent='';error.dataset.state='';}
    $('#editor-lock-dialog').close();
    if(pendingEditor){pendingEditor=false;setEditing(true);}
  });
  $('#editor-lock-dialog').addEventListener('close',()=>{pendingEditor=false;});
  $('#save-draft').addEventListener('click',()=>saveDraft());
  publishBtn.addEventListener('click',publish);
  $('#settings-btn').addEventListener('click',openPublish);
  $('#publish-confirm').addEventListener('click',()=>{
    const form=readPublishForm(), previous=readSettings();
    const target=$('#publish-status');
    if(!/^[\w.-]+\/[\w.-]+$/.test(form.repo)){target.dataset.state='error';target.textContent='Informe o repositório no formato usuario/repositorio.';return;}
    if(!form.token){target.dataset.state='error';target.textContent='Informe o token do GitHub.';return;}
    if(form.token!==previous.token)delete previous.login;
    writeSettings(Object.assign({},previous,form));
    updateConnection();
    $('#publish-dialog').close();
    publish();
  });
  $('#publish-connect').addEventListener('click',()=>connect());
  $('#studio-connection').addEventListener('click',openPublish);
  $('#forget-token').addEventListener('click',()=>{
    const settings=readSettings();
    settings.token='';delete settings.login;writeSettings(settings);
    $('#pub-token').value='';
    updateConnection();
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
    selectElement(null);
    restoreOriginals();
    model.text={};model.styles={};model.updatedAt=null;
    deck.applyStyles({});
    commitOrder(defaultOrder.slice());
    saveDraft(true);
    toast('Conteúdo original restaurado.');
  });

  /* ---------- Inicialização ---------- */
  deck.whenReady(content=>{
    originals=deck.originals();
    defaultOrder=deck.slides().map(slide=>slide.id);
    model={version:1,updatedAt:content.updatedAt||null,order:deck.slides().map(slide=>slide.id),text:clone(content.text||{}),styles:clone(content.styles||{})};
    const validIds=new Set(model.order);
    Object.keys(model.text).forEach(id=>{if(!validIds.has(id))delete model.text[id];});
    Object.keys(model.styles).forEach(id=>{if(!validIds.has(id))delete model.styles[id];});
    renderList();refreshDirty();syncEditables();updateConnection();hydrateConnection();
    const styleSection=$('#studio-style'); if(styleSection)styleSection.hidden=true;
    const wantsEdit=/(^|#|&)editar\b/.test(location.hash)||new URLSearchParams(location.search).has('editar');
    if(wantsEdit){
      const startEdit=()=>setTimeout(()=>{if(!editing)requestEditor();},120);
      if(!window.ScalexGate||window.ScalexGate.viewerUnlocked())startEdit();
      else window.addEventListener('scalex:gate',startEdit,{once:true});
    }
    if(deck.stale&&deck.stale())toast(deck.stale()+' texto(s) salvo(s) não correspondem mais ao slide atual.');
  });
})();
