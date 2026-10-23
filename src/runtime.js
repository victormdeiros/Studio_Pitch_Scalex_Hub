/* Navegação e apresentação locais. Sem bibliotecas, rede ou serviço externo. */
(function presentationRuntime(){
  'use strict';
  const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
  const stage=$('#stage'), workspace=$('.workspace');
  let slides=$$('.slide'), current=0, scale=1, toastTimer, touchStart=null, countToken=0;
  let transitioning=false, sweepTimer=null, mergeTimers=[], impactTimers=[];
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');

  function fit(){
    const r=workspace.getBoundingClientRect(), pad=innerWidth<600?8:26;
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

  const fmt=(value,decimals)=>new Intl.NumberFormat('pt-BR',{minimumFractionDigits:decimals,maximumFractionDigits:decimals}).format(value);
  function countUp(slide){
    const nodes=[...slide.querySelectorAll('.count')];
    if(!nodes.length||reduced.matches)return;
    const token=++countToken;
    nodes.forEach(n=>{n.textContent=fmt(0,parseInt(n.dataset.decimals||'0',10));});
    const start=performance.now()+260,duration=1050;
    function frame(now){
      if(token!==countToken)return;
      const t=Math.min(1,Math.max(0,(now-start)/duration)),e=1-Math.pow(1-t,3);
      nodes.forEach(n=>{const to=parseFloat(n.dataset.to)||0;n.textContent=fmt(to*e,parseInt(n.dataset.decimals||'0',10));});
      if(t<1)requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  function applySlide(i,writeHash=true){
    current=Math.max(0,Math.min(slides.length-1,Number(i)||0));
    slides.forEach((s,j)=>{s.classList.toggle('active',j===current);s.setAttribute('aria-hidden',j===current?'false':'true');});
    $('#counter').textContent=(current+1)+' / '+slides.length;$('#slide-picker').value=current;
    $('#prev-btn').disabled=current===0;$('#next-btn').disabled=current===slides.length-1;
    $$('#slide-dots button').forEach((d,j)=>d.setAttribute('aria-current',String(j===current)));
    $('#progress').style.setProperty('--progress',((current+1)/slides.length*100)+'%');
    if(writeHash){try{window.history.replaceState(null,'','#slide-'+(current+1));}catch(_){}}
    document.body.dataset.slide=String(current+1);
    fit();
    countUp(slides[current]);
  }

  function playSweep(dir){
    if(reduced.matches)return;
    const sweep=$('#sweep');if(!sweep)return;
    sweep.classList.remove('play-next','play-prev');
    void sweep.offsetWidth;
    sweep.classList.add(dir==='prev'?'play-prev':'play-next');
    clearTimeout(sweepTimer);
    sweepTimer=setTimeout(()=>sweep.classList.remove('play-next','play-prev'),1050);
  }

  function mergeTransition(target,writeHash){
    const layer=$('#merge-layer');
    if(!layer){applySlide(target,writeHash);return;}
    transitioning=true;
    const chips=[...layer.querySelectorAll('.merge-chip')];
    const cx=640,cy=360;
    mergeTimers.forEach(clearTimeout);mergeTimers=[];
    chips.forEach(c=>{c.getAnimations().forEach(a=>a.cancel());c.style.transform='none';c.style.opacity='1';});
    layer.classList.remove('close','core-on');
    layer.classList.add('open');
    void layer.offsetWidth;
    stage.dataset.dir='next';
    mergeTimers.push(setTimeout(()=>{
      chips.forEach((chip,i)=>{
        const dx=cx-(chip.offsetLeft+chip.offsetWidth/2);
        const dy=cy-(chip.offsetTop+chip.offsetHeight/2);
        chip.animate([
          {transform:'translate(0,0) scale(1)',opacity:1},
          {transform:`translate(${dx}px,${dy}px) scale(.1)`,opacity:0}
        ],{duration:520,delay:i*18,easing:'cubic-bezier(.55,.06,.3,1)',fill:'forwards'});
      });
    },110));
    mergeTimers.push(setTimeout(()=>layer.classList.add('core-on'),660));
    mergeTimers.push(setTimeout(()=>applySlide(target,writeHash),900));
    mergeTimers.push(setTimeout(()=>layer.classList.add('close'),1260));
    mergeTimers.push(setTimeout(()=>{
      layer.classList.remove('open','close','core-on');
      chips.forEach(c=>{c.getAnimations().forEach(a=>a.cancel());c.style.transform='';c.style.opacity='';});
      transitioning=false;
      mergeTimers=[];
    },1620));
  }


  function coverTransition(target,writeHash){
    const layer=$('#impact-layer');
    if(!layer){applySlide(target,writeHash);return;}
    transitioning=true;
    stage.dataset.dir='next';
    const img=layer.querySelector('.impact-mark');
    const coverImg=document.querySelector('.cover-mark img');
    const stageRect=stage.getBoundingClientRect();
    const stageScale=stageRect.width/1280;
    let sx=810,sy=270;
    if(coverImg){
      const r=coverImg.getBoundingClientRect();
      sx=(r.left-stageRect.left)/stageScale;
      sy=(r.top-stageRect.top)/stageScale;
    }
    impactTimers.forEach(clearTimeout);impactTimers=[];
    img.getAnimations().forEach(a=>a.cancel());
    img.style.transform=`translate(${sx}px,${sy}px) scale(1)`;
    layer.classList.remove('close');
    layer.classList.add('open');
    void layer.offsetWidth;
    impactTimers.push(setTimeout(()=>{
      img.animate([
        {transform:`translate(${sx}px,${sy}px) scale(1)`},
        {transform:'translate(320px,40px) scale(1.6)'}
      ],{duration:1000,easing:'cubic-bezier(.6,.05,.2,1)',fill:'forwards'});
    },180));
    impactTimers.push(setTimeout(()=>applySlide(target,writeHash),1180));
    impactTimers.push(setTimeout(()=>layer.classList.add('close'),1250));
    impactTimers.push(setTimeout(()=>{
      layer.classList.remove('open','close');
      img.getAnimations().forEach(a=>a.cancel());
      img.style.transform='';
      transitioning=false;
      impactTimers=[];
    },1720));
  }

  function go(i,writeHash=true){
    const target=Math.max(0,Math.min(slides.length-1,Number(i)||0));
    if(transitioning)return;
    if(target===current){applySlide(target,writeHash);return;}
    if(!reduced.matches&&current===0&&target===1){coverTransition(target,writeHash);return;}
    if(!reduced.matches&&current===3&&target===4){mergeTransition(target,writeHash);return;}
    stage.dataset.dir=target>current?'next':'prev';
    playSweep(stage.dataset.dir);
    applySlide(target,writeHash);
  }

  function finalCounts(){
    $$('.count').forEach(n=>{n.textContent=fmt(parseFloat(n.dataset.to)||0,parseInt(n.dataset.decimals||'0',10));});
  }
  addEventListener('beforeprint',finalCounts);

  const decorative='.s-top,.s-num,svg,img,figure,.cover-year,.s3-ten,.s10-ghost,.s11-ring,.s11-mark,.s3-tangle,.s2-sig,.fun-fade';
  function renderReading(){
    const slide=slides[current],target=$('#reading-content');target.replaceChildren();
    const article=document.createElement('article');article.className='reading-slide';
    const clone=slide.querySelector('.slide-canvas').cloneNode(true);
    clone.querySelectorAll(`${decorative},script,template`).forEach(el=>el.remove());
    clone.querySelectorAll('*').forEach(el=>{el.removeAttribute('class');el.removeAttribute('style');el.removeAttribute('id');});
    clone.querySelectorAll('div,header,section,article,figure,span').forEach(el=>{if(!el.textContent.trim())el.remove();});
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
  $$('dialog').forEach(d=>{d.addEventListener('click',e=>{if(e.target.closest('[data-close]'))d.close();});});

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

  stage.addEventListener('pointermove',e=>{
    const r=stage.getBoundingClientRect();
    const x=Math.min(1,Math.max(0,(e.clientX-r.left)/r.width)),y=Math.min(1,Math.max(0,(e.clientY-r.top)/r.height));
    stage.style.setProperty('--mx',(x*2-1).toFixed(3));
    stage.style.setProperty('--my',(y*2-1).toFixed(3));
    stage.style.setProperty('--px',(x*100).toFixed(1)+'%');
    stage.style.setProperty('--py',(y*100).toFixed(1)+'%');
  },{passive:true});
  stage.addEventListener('pointerleave',()=>{
    stage.style.setProperty('--mx','0');stage.style.setProperty('--my','0');
    stage.style.setProperty('--px','50%');stage.style.setProperty('--py','42%');
  },{passive:true});

  stage.addEventListener('touchstart',e=>{touchStart={x:e.touches[0].clientX,y:e.touches[0].clientY};},{passive:true});
  stage.addEventListener('touchend',e=>{
    if(!touchStart)return;const dx=e.changedTouches[0].clientX-touchStart.x,dy=e.changedTouches[0].clientY-touchStart.y;touchStart=null;
    if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.4)go(current+(dx<0?1:-1));
  },{passive:true});

  addEventListener('hashchange',()=>{const match=location.hash.match(/^#slide-(\d+)$/);if(match)go(Number(match[1])-1,false);});
  buildNavigation();const initial=location.hash.match(/^#slide-(\d+)$/);go(initial?Number(initial[1])-1:0,false);fit();
})();
