/* Navegação e apresentação locais. Sem bibliotecas, rede ou serviço externo. */
(function presentationRuntime(){
  'use strict';
  const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
  const stage=$('#stage'), workspace=$('.workspace');
  let slides=$$('.slide'), current=0, scale=1, toastTimer, touchStart=null, countToken=0;
  let transitioning=false, sweepTimer=null, mergeTimers=[], impactTimers=[];
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');

  /* Conteúdo publicado: ordem dos slides e textos, em content.json. */
  let content={version:1,order:[],text:{},styles:{}}, publishedContent={version:1,order:[],text:{},styles:{}}, originals={}, stale=0;
  let readyResolve; const ready=new Promise(resolve=>{readyResolve=resolve;});

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
    document.dispatchEvent(new CustomEvent('scalex:slide',{detail:{index:current,id:slides[current]?slides[current].id:null}}));
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
        {transform:'translate(165px,356px) scale(.15)'}
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
    const from=slides[current]?slides[current].id:null, to=slides[target]?slides[target].id:null;
    if(!reduced.matches&&from==='slide-1'&&to==='slide-publico'){coverTransition(target,writeHash);return;}
    if(!reduced.matches&&from==='slide-infra'&&to==='slide-concorrencia'){mergeTransition(target,writeHash);return;}
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
    if(e.target.matches('input,textarea,select,[contenteditable="true"]')||e.target.closest('[contenteditable="true"]'))return;
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
  /* ---- Edição: ordem e textos ---- */
  const BLOCK_TAGS='div,p,ul,ol,li,header,footer,section,article,figure,figcaption,table,blockquote,main,nav,h1,h2,h3,h4,h5,h6';
  const TEXT_TAGS='h1,h2,h3,h4,h5,h6,p,li,dt,dd,blockquote,figcaption,small,span,div,b,strong,em,label';
  const SKIP_EDIT='.s-top,.s-num,svg,template,script,.cover-year,.s10-ghost,.s3-ten,.s3-noise,.infra-noise';

  function editableOf(slide){
    const canvas=slide.querySelector('.slide-canvas');
    if(!canvas)return [];
    const found=[];
    canvas.querySelectorAll(TEXT_TAGS).forEach(el=>{
      if(el.closest(SKIP_EDIT))return;
      if(![...el.childNodes].some(node=>node.nodeType===3&&node.textContent.trim()))return;
      if(el.querySelector(BLOCK_TAGS))return;
      found.push(el);
    });
    return found.filter(el=>!found.some(other=>other!==el&&other.contains(el)));
  }
  function snapshotOriginals(){
    $$('.slide').forEach(slide=>{
      originals[slide.id]=editableOf(slide).map(el=>({html:el.innerHTML,text:el.textContent.replace(/\s+/g,' ').trim()}));
    });
  }
  function applyOrderToDOM(order){
    const all=$$('.slide');
    const byId=new Map(all.map(slide=>[slide.id,slide]));
    const next=[];
    (Array.isArray(order)?order:[]).forEach(id=>{
      const slide=byId.get(id);
      if(slide&&!next.includes(slide)){next.push(slide);byId.delete(id);}
    });
    // Slides novos, que ainda não existiam na ordem salva, entram na posição padrão.
    all.forEach((slide,index)=>{
      if(next.includes(slide))return;
      let anchor=null;
      for(let i=index-1;i>=0;i--){if(next.includes(all[i])){anchor=all[i];break;}}
      if(anchor){next.splice(next.indexOf(anchor)+1,0,slide);return;}
      let before=null;
      for(let i=index+1;i<all.length;i++){if(next.includes(all[i])){before=all[i];break;}}
      if(before)next.splice(next.indexOf(before),0,slide);
      else next.push(slide);
    });
    const target=$('#sweep');
    next.forEach(slide=>stage.insertBefore(slide,target));
    slides=next;
  }
  function renumber(){
    slides.filter(slide=>slide.querySelector('.s-num')).forEach((slide,index)=>{
      const node=slide.querySelector('.s-num');
      node.textContent=String(index+1).padStart(2,'0');
    });
  }
  function applyTextToDOM(map){
    stale=0;
    Object.keys(map||{}).forEach(id=>{
      const slide=document.getElementById(id);
      if(!slide)return;
      Object.keys(map[id]||{}).forEach(key=>{
        const index=Number(String(key).replace(/^e/,''));
        const el=editableOf(slide)[index], original=(originals[id]||[])[index], item=map[id][key];
        const value=typeof item==='string'?item:(item&&typeof item.v==='string'?item.v:null);
        if(!el||!value)return;
        const marker=item&&item.o;
        if(marker&&original&&!original.text.startsWith(marker)){stale++;return;}
        el.innerHTML=value;
      });
    });
  }
  function cancelTransition(){
    mergeTimers.forEach(clearTimeout);impactTimers.forEach(clearTimeout);
    mergeTimers=[];impactTimers=[];
    const merge=$('#merge-layer');
    if(merge){
      merge.classList.remove('open','close','core-on');
      merge.querySelectorAll('.merge-chip').forEach(chip=>{chip.getAnimations().forEach(animation=>animation.cancel());chip.style.transform='';chip.style.opacity='';});
    }
    const impact=$('#impact-layer');
    if(impact){
      impact.classList.remove('open','close');
      const mark=impact.querySelector('.impact-mark');
      if(mark){mark.getAnimations().forEach(animation=>animation.cancel());mark.style.transform='';}
    }
    transitioning=false;
  }
  const MANAGED_STYLE=['color','background-color','font-size','font-weight','text-align','transform','display','-webkit-text-fill-color'];
  function clearElementStyle(el){
    if(!el)return;
    MANAGED_STYLE.forEach(prop=>el.style.removeProperty(prop));
    el.querySelectorAll('.grad-text').forEach(child=>{child.style.removeProperty('color');child.style.removeProperty('-webkit-text-fill-color');});
  }
  function styleElement(el,style){
    if(!el)return;
    clearElementStyle(el);
    if(!style||typeof style!=='object')return;
    if(style.color){
      el.style.setProperty('color',style.color,'important');
      el.style.setProperty('-webkit-text-fill-color',style.color,'important');
      el.querySelectorAll('.grad-text').forEach(child=>{
        child.style.setProperty('color',style.color,'important');
        child.style.setProperty('-webkit-text-fill-color',style.color,'important');
      });
    }
    if(style.background)el.style.setProperty('background-color',style.background,'important');
    if(style.fontSize)el.style.setProperty('font-size',style.fontSize+'px','important');
    if(style.weight)el.style.setProperty('font-weight',String(style.weight),'important');
    if(style.align)el.style.setProperty('text-align',style.align,'important');
    const x=Number(style.x)||0, y=Number(style.y)||0;
    if(x||y){
      el.style.setProperty('transform','translate('+x+'px,'+y+'px)','important');
      if(getComputedStyle(el).display==='inline')el.style.setProperty('display','inline-block','important');
    }
  }
  function applyStyles(map){
    $$('.slide').forEach(slide=>editableOf(slide).forEach(clearElementStyle));
    if(!map||typeof map!=='object')return;
    Object.keys(map).forEach(id=>{
      const slide=document.getElementById(id);
      if(!slide)return;
      Object.keys(map[id]||{}).forEach(key=>{
        const index=Number(String(key).replace(/^e/,''));
        const el=editableOf(slide)[index];
        if(el)styleElement(el,map[id][key]);
      });
    });
  }
  function setOrder(order){
    cancelTransition();
    applyOrderToDOM(order);
    renumber();
    buildNavigation();
    applySlide(current,false);
  }
  function readDraft(){try{const raw=localStorage.getItem('scalex.content.draft');return raw?JSON.parse(raw):null;}catch(_){return null;}}
  function embeddedContent(){try{const node=document.getElementById('embedded-content');return node?JSON.parse(node.textContent):null;}catch(_){return null;}}
  async function loadContent(){
    let remote=null;
    if(location.protocol!=='file:'){
      try{
        const response=await fetch('content.json?v='+Date.now(),{cache:'no-store'});
        if(response.ok){const data=await response.json();if(data&&typeof data==='object')remote=data;}
      }catch(_){}
    }
    const embedded=embeddedContent();
    const published=remote||embedded||{version:1,order:[],text:{}};
    const draft=readDraft();
    if(draft&&typeof draft==='object')return {data:draft,published,source:'draft'};
    return {data:published,published,source:remote?'remote':'embedded'};
  }
  function start(){
    buildNavigation();
    const initial=location.hash.match(/^#slide-(\d+)$/);
    go(initial?Number(initial[1])-1:0,false);
    fit();
  }

  window.ScalexDeck={
    slides:()=>slides,
    current:()=>current,
    go,
    applySlide,
    setOrder,
    applyText:applyTextToDOM,
    applyStyles,
    styleElement,
    clearElementStyle,
    editableOf,
    originals:()=>originals,
    content:()=>content,
    published:()=>publishedContent,
    stale:()=>stale,
    whenReady(callback){ready.then(callback);}
  };

  (async function boot(){
    snapshotOriginals();
    const loaded=await loadContent();
    const data=loaded&&loaded.data?loaded.data:{};
    publishedContent=loaded&&loaded.published?loaded.published:{version:1,order:[],text:{},styles:{}};
    content={
      version:1,
      source:loaded&&loaded.source?loaded.source:'embedded',
      updatedAt:data&&data.updatedAt?data.updatedAt:null,
      order:data&&Array.isArray(data.order)?data.order:[],
      text:data&&data.text&&typeof data.text==='object'?data.text:{},
      styles:data&&data.styles&&typeof data.styles==='object'?data.styles:{}
    };
    applyOrderToDOM(content.order);
    renumber();
    applyTextToDOM(content.text);
    applyStyles(content.styles);
    start();
    readyResolve(content);
  })();
})();
