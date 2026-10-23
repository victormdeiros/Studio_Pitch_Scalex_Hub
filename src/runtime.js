/* Navegação e apresentação locais. Sem bibliotecas, rede ou serviço externo. */
(function presentationRuntime(){
  'use strict';
  const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
  const stage=$('#stage'), workspace=$('.workspace');
  let slides=$$('.slide'), current=0, scale=1, toastTimer, touchStart=null;

  function fit(){
    const r=workspace.getBoundingClientRect(), pad=innerWidth<600?8:28;
    scale=Math.max(.04,Math.min((r.width-pad)/1280,(r.height-pad)/720));
    stage.style.setProperty('--scale',scale);
    stage.style.setProperty('--stage-w',(1280*scale)+'px');
    stage.style.setProperty('--stage-h',(720*scale)+'px');
  }
  function toast(message){clearTimeout(toastTimer);const t=$('#toast');t.textContent=message;t.hidden=false;toastTimer=setTimeout(()=>t.hidden=true,3000);}
  const ro=new ResizeObserver(fit);ro.observe(workspace);addEventListener('resize',fit);
  if(document.fonts)document.fonts.ready.then(fit);

  function titleOf(s){return s.dataset.title||'Slide';}
  function buildNavigation(){
    $('#slide-picker').replaceChildren();$('#slide-dots').replaceChildren();$('#overview-grid').replaceChildren();
    slides.forEach((s,i)=>{
      const option=document.createElement('option');option.value=i;option.textContent=String(i+1).padStart(2,'0')+'  '+titleOf(s);$('#slide-picker').append(option);
      const dot=document.createElement('button');dot.type='button';dot.setAttribute('aria-label','Ir para o slide '+(i+1));dot.addEventListener('click',()=>go(i));$('#slide-dots').append(dot);
      const tile=document.createElement('button');tile.className='overview-tile';
      const b=document.createElement('b');b.textContent=String(i+1).padStart(2,'0');const t=document.createElement('span');t.textContent=titleOf(s);tile.append(b,t);
      tile.addEventListener('click',()=>{$('#overview-dialog').close();go(i);});$('#overview-grid').append(tile);
    });
  }
  function go(i,writeHash=true){
    current=Math.max(0,Math.min(slides.length-1,Number(i)||0));
    slides.forEach((s,j)=>{s.classList.toggle('active',j===current);s.setAttribute('aria-hidden',j===current?'false':'true');});
    $('#counter').textContent=(current+1)+' / '+slides.length;$('#slide-picker').value=current;
    $('#prev-btn').disabled=current===0;$('#next-btn').disabled=current===slides.length-1;
    $$('#slide-dots button').forEach((d,j)=>d.setAttribute('aria-current',String(j===current)));
    $('#progress').style.setProperty('--progress',((current+1)/slides.length*100)+'%');
    if(writeHash){try{window.history.replaceState(null,'','#slide-'+(current+1));}catch(_){}}
    fit();
  }

  function renderReading(){
    const slide=slides[current],target=$('#reading-content');target.replaceChildren();
    const article=document.createElement('article');article.className='reading-slide';
    const clone=slide.querySelector('.slide-canvas').cloneNode(true);
    clone.querySelectorAll('img,svg,figure,.s-num,.s-top,script,template').forEach(el=>el.remove());
    clone.querySelectorAll('[style]').forEach(el=>el.removeAttribute('style'));
    article.append(...clone.childNodes);
    target.append(article);
    const notes=slide.querySelector('.speaker-notes');
    if(notes&&notes.content.childNodes.length){
      const details=document.createElement('details'),summary=document.createElement('summary');
      summary.textContent='Notas do apresentador';details.append(summary,...notes.content.cloneNode(true).childNodes);target.append(details);
    }
  }

  function toggleFullscreen(){
    if(document.fullscreenElement){document.exitFullscreen();return;}
    const root=document.documentElement;
    (root.requestFullscreen?root.requestFullscreen():Promise.reject()).catch(()=>document.body.classList.toggle('fullscreen'));
  }
  document.addEventListener('fullscreenchange',()=>{document.body.classList.toggle('fullscreen',!!document.fullscreenElement);fit();});

  $('#prev-btn').addEventListener('click',()=>go(current-1));$('#next-btn').addEventListener('click',()=>go(current+1));
  $('#slide-picker').addEventListener('change',e=>go(e.target.value));
  $('#fullscreen-btn').addEventListener('click',toggleFullscreen);
  $('#print-btn').addEventListener('click',()=>window.print());
  $('#overview-btn').addEventListener('click',()=>$('#overview-dialog').showModal());
  $('#reading-btn').addEventListener('click',()=>{renderReading();$('#reading-dialog').showModal();});
  $('#help-btn').addEventListener('click',()=>$('#help-dialog').showModal());
  $$('dialog').forEach(d=>{d.addEventListener('click',e=>{if(e.target===d||e.target.closest('[data-close]'))d.close();});});

  document.addEventListener('keydown',e=>{
    if(e.target.matches('input,textarea,select'))return;
    if(e.key==='ArrowRight'||e.key==='PageDown'||e.key===' '){e.preventDefault();go(current+1);}
    else if(e.key==='ArrowLeft'||e.key==='PageUp'){e.preventDefault();go(current-1);}
    else if(e.key==='Home'){e.preventDefault();go(0);}
    else if(e.key==='End'){e.preventDefault();go(slides.length-1);}
    else if(e.key==='f'||e.key==='F'){toggleFullscreen();}
    else if(e.key==='g'||e.key==='G'){$('#overview-dialog').showModal();}
    else if(e.key==='?'){$('#help-dialog').showModal();}
    else if(e.key==='Escape'){$$('dialog[open]').forEach(d=>d.close());}
  });

  stage.addEventListener('touchstart',e=>{touchStart={x:e.touches[0].clientX,y:e.touches[0].clientY};},{passive:true});
  stage.addEventListener('touchend',e=>{
    if(!touchStart)return;const dx=e.changedTouches[0].clientX-touchStart.x,dy=e.changedTouches[0].clientY-touchStart.y;touchStart=null;
    if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.4)go(current+(dx<0?1:-1));
  },{passive:true});

  addEventListener('hashchange',()=>{const match=location.hash.match(/^#slide-(\d+)$/);if(match)go(Number(match[1])-1,false);});
  buildNavigation();const initial=location.hash.match(/^#slide-(\d+)$/);go(initial?Number(initial[1])-1:0,false);fit();
})();
