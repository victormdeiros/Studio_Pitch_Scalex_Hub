/* Acesso ao pitch: trava de interface para o link de investidores.
   Não é criptografia do conteúdo: o HTML continua no repositório. */
(function accessGate(){
  'use strict';
  const VIEW_SHA='045fcbd5698fbca972356ea903d561231ec27497e49ae3f1e37db77c871f92ba';
  const VIEW_FNV='6e9c5e5d';
  const EDIT_SHA='f5d467de14f2ed073653dd68eb25435b5439aaa95b855db464ee873218c2425a';
  const EDIT_FNV='f3de2dfa';
  const VIEW_KEY='scalex.gate.v1';
  const EDIT_KEY='scalex.editor.v1';
  const root=document.documentElement;
  const gate=document.getElementById('gate');
  const form=document.getElementById('gate-form');
  const input=document.getElementById('gate-pass');
  const error=document.getElementById('gate-error');
  if(!gate||!form||!input||!error)return;

  function fnv(value){
    let h=0x811c9dc5;
    for(let i=0;i<value.length;i++){h^=value.charCodeAt(i);h=Math.imul(h,0x01000193)>>>0;}
    return h.toString(16).padStart(8,'0');
  }
  async function sha256(value){
    if(!(window.crypto&&crypto.subtle&&window.TextEncoder))return null;
    try{
      const buffer=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(value));
      return [...new Uint8Array(buffer)].map(byte=>byte.toString(16).padStart(2,'0')).join('');
    }catch(_){return null;}
  }
  async function matches(value,sha,fallback){
    const normalized=String(value||'').trim();
    if(!normalized)return false;
    const digest=await sha256(normalized);
    return digest?digest===sha:fnv(normalized)===fallback;
  }
  function viewerUnlocked(){
    try{return localStorage.getItem(VIEW_KEY)==='open';}catch(_){return false;}
  }
  function editorUnlocked(){
    try{return sessionStorage.getItem(EDIT_KEY)==='open';}catch(_){return false;}
  }
  function openGate(){
    root.classList.add('gate-locked');
    gate.hidden=false;
    gate.classList.remove('gate-out');
    setTimeout(()=>{try{input.focus();}catch(_){}},80);
  }
  function unlockViewer(){
    try{localStorage.setItem(VIEW_KEY,'open');}catch(_){}
    error.textContent='';
    input.value='';
    gate.classList.add('gate-out');
    root.classList.remove('gate-locked');
    setTimeout(()=>{gate.hidden=true;},460);
    window.dispatchEvent(new CustomEvent('scalex:gate'));
  }

  try{
    if(new URLSearchParams(location.search).has('lock')){
      localStorage.removeItem(VIEW_KEY);
      sessionStorage.removeItem(EDIT_KEY);
      const url=new URL(location.href);
      url.searchParams.delete('lock');
      history.replaceState(null,'',url.pathname+url.search+url.hash);
    }
  }catch(_){}

  if(viewerUnlocked()){
    root.classList.remove('gate-locked');
    gate.hidden=true;
    window.dispatchEvent(new CustomEvent('scalex:gate'));
  }else{
    openGate();
  }

  form.addEventListener('submit',async event=>{
    event.preventDefault();
    const value=input.value;
    if(await matches(value,VIEW_SHA,VIEW_FNV)){
      unlockViewer();
      return;
    }
    error.textContent='Senha incorreta. Tente novamente.';
    gate.classList.remove('shake');
    void gate.offsetWidth;
    gate.classList.add('shake');
    input.select();
    setTimeout(()=>gate.classList.remove('shake'),450);
  });

  document.getElementById('lock-app')?.addEventListener('click',()=>{
    try{
      localStorage.removeItem(VIEW_KEY);
      sessionStorage.removeItem(EDIT_KEY);
    }catch(_){}
    location.reload();
  });

  window.ScalexGate={
    viewerUnlocked,
    editorUnlocked,
    unlockEditor(){try{sessionStorage.setItem(EDIT_KEY,'open');}catch(_){}},
    checkViewer(value){return matches(value,VIEW_SHA,VIEW_FNV);},
    checkEditor(value){return matches(value,EDIT_SHA,EDIT_FNV);}
  };
})();
