/* Navegação e apresentação locais. Sem bibliotecas, rede ou serviço externo. */
(function presentationRuntime(){
  'use strict';
  const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
  const stage=$('#stage'), workspace=$('.workspace');
  const deckRoot=document.documentElement;
  const applyOrder=deckRoot.dataset.applyOrder!=='false';
  const contentPath=deckRoot.dataset.content||'content.json';
  let slides=$$('.slide'), current=0, scale=1, toastTimer, touchStart=null, countToken=0;
  let transitioning=false, sweepTimer=null, mergeTimers=[], impactTimers=[];
  let accelerationTimers=[], pendingAcceleration=null;
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
    if(!nodes.length)return;
    const token=++countToken;
    if(reduced.matches){nodes.forEach(n=>{n.textContent=fmt(parseFloat(n.dataset.to)||0,parseInt(n.dataset.decimals||'0',10));});return;}
    nodes.forEach(n=>{n.textContent=fmt(parseFloat(n.dataset.from)||0,parseInt(n.dataset.decimals||'0',10));});
    const start=performance.now()+260,duration=1050;
    function frame(now){
      if(token!==countToken)return;
      const t=Math.min(1,Math.max(0,(now-start)/duration)),e=1-Math.pow(1-t,3);
      nodes.forEach(n=>{const to=parseFloat(n.dataset.to)||0,from=parseFloat(n.dataset.from)||0;n.textContent=fmt(from+(to-from)*e,parseInt(n.dataset.decimals||'0',10));});
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

  function resetAcceleration(){
    accelerationTimers.forEach(clearTimeout);
    accelerationTimers=[];
    pendingAcceleration=null;
    stage.classList.remove('scenario-accelerating');
    const layer=$('#acceleration-layer');
    if(layer)layer.classList.remove('open','closing');
  }

  function accelerationTransition(target,writeHash){
    const layer=$('#acceleration-layer');
    if(!layer){applySlide(target,writeHash);return;}
    resetAcceleration();
    transitioning=true;
    pendingAcceleration={target,writeHash};
    stage.dataset.dir='next';
    const months=slides[target].querySelector('[data-acceleration-months]');
    layer.querySelector('[data-acceleration-label]').textContent=(months?months.dataset.accelerationMonths:'6')+' meses antes';
    stage.classList.add('scenario-accelerating');
    void layer.offsetWidth;
    layer.classList.add('open');
    accelerationTimers.push(setTimeout(()=>applySlide(target,writeHash),650));
    accelerationTimers.push(setTimeout(()=>layer.classList.add('closing'),1050));
    accelerationTimers.push(setTimeout(()=>{resetAcceleration();transitioning=false;},1450));
  }

  function completeAcceleration(){
    const next=pendingAcceleration;
    if(!next)return;
    cancelTransition();
    applySlide(next.target,next.writeHash);
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
    notifyPeer(target);
    const from=slides[current]?slides[current].id:null, to=slides[target]?slides[target].id:null;
    if(!reduced.matches&&from==='resumo-escala'&&to==='resumo-investidor'){accelerationTransition(target,writeHash);return;}
    if(!reduced.matches&&from==='slide-1'&&to==='slide-publico'){coverTransition(target,writeHash);return;}
    if(!reduced.matches&&from==='slide-infra'&&to==='slide-concorrencia'){mergeTransition(target,writeHash);return;}
    stage.dataset.dir=target>current?'next':'prev';
    playSweep(stage.dataset.dir);
    applySlide(target,writeHash);
  }

  function finalCounts(){
    countToken++;
    $$('.count').forEach(n=>{n.textContent=fmt(parseFloat(n.dataset.to)||0,parseInt(n.dataset.decimals||'0',10));});
  }
  addEventListener('beforeprint',()=>{completeAcceleration();finalCounts();});
  reduced.addEventListener('change',()=>{if(reduced.matches){completeAcceleration();finalCounts();}});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)completeAcceleration();});

  /* Exportação em PDF: usa a impressão do navegador com os slides em 16:9.
     Opcionalmente insere uma página de notas depois de cada slide com roteiro. */
  const pdfDialog=$('#pdf-dialog');
  let pdfNotes=[];
  function clearPdfNotes(){pdfNotes.forEach(page=>page.remove());pdfNotes=[];}
  function buildPdfNotes(){
    clearPdfNotes();
    slides.forEach((slide,index)=>{
      const notes=slide.querySelector('.speaker-notes');
      if(!notes||!notes.content.textContent.trim())return;
      const page=document.createElement('section');page.className='pdf-notes-page';
      const kicker=document.createElement('p');kicker.className='pdf-notes-kicker';
      kicker.textContent='Notas do apresentador · Slide '+String(index+1).padStart(2,'0');
      const heading=document.createElement('h2');heading.textContent=titleOf(slide);
      const body=document.createElement('div');body.className='pdf-notes-body';
      body.append(...notes.content.cloneNode(true).childNodes);
      page.append(kicker,heading,body);slide.after(page);pdfNotes.push(page);
    });
  }
  function openPdf(){
    $$('dialog[open]').forEach(d=>d.close());
    $('#pdf-count').textContent=slides.length;
    pdfDialog.showModal();
  }
  function exportPdf(){
    const includeNotes=$('#pdf-notes').checked;
    pdfDialog.close();
    $$('dialog[open]').forEach(d=>d.close());
    finalCounts();
    if(includeNotes)buildPdfNotes();else clearPdfNotes();
    if(document.fullscreenElement&&document.exitFullscreen)document.exitFullscreen().catch(()=>{});
    try{getSelection().removeAllRanges();}catch(_){}
    setTimeout(()=>window.print(),140);
  }
  addEventListener('afterprint',clearPdfNotes);

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
  document.addEventListener('fullscreenchange',()=>{document.body.classList.toggle('fullscreen',audienceMode||!!document.fullscreenElement);fit();});

  /* Apresentar: projetor duplicado (tela cheia nesta janela) ou projetor espelhado
     (slides em outra janela, no projetor; cronômetro e roteiro nesta tela). */
  const audienceMode=new URLSearchParams(location.search).has('projetor');
  const presentDialog=$('#present-dialog'), presenter=$('#presenter');
  const TIMER_KEY='scalex.present.minutes';
  let peer=audienceMode?window.opener:null, peerWatch=null, syncing=false, pendingSync=null;
  const timer={limit:300,elapsed:0,running:false,last:0,tick:null};

  function notifyPeer(index){
    if(syncing||!peer||peer.closed)return;
    try{peer.postMessage({scalex:'slide',index},'*');}catch(_){}
  }
  function syncTo(index){
    pendingSync=index;
    (function attempt(){
      if(pendingSync===null)return;
      if(transitioning){setTimeout(attempt,120);return;}
      const target=pendingSync;pendingSync=null;
      if(target===current)return;
      syncing=true;try{go(target);}finally{syncing=false;}
    })();
  }
  addEventListener('message',e=>{
    const data=e.data;
    if(!data||!peer||e.source!==peer)return;
    if(data.scalex==='slide')syncTo(Number(data.index)||0);
    else if(data.scalex==='hello'&&!audienceMode)notifyPeer(current);
    else if(data.scalex==='end'&&audienceMode)window.close();
  });

  function clock(seconds){
    const s=seconds>=0?Math.ceil(seconds):Math.floor(-seconds);
    return (seconds<0?'+':'')+String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0');
  }
  function timerElapsed(){return timer.elapsed+(timer.running?(performance.now()-timer.last)/1000:0);}
  function renderTimer(){
    const elapsed=timerElapsed(), left=timer.limit-elapsed;
    $('#presenter-clock').textContent=clock(left);
    $('#presenter-clock-label').textContent=left<0?'Tempo excedido':'Tempo restante';
    presenter.dataset.state=left<0?'over':left<=Math.min(60,timer.limit*.2)?'warn':'ok';
    $('#presenter-bar').style.setProperty('--p',Math.min(100,elapsed/timer.limit*100)+'%');
    $('#presenter-limit').textContent='Limite '+clock(timer.limit);
    $('#presenter-toggle').textContent=timer.running?'Pausar':elapsed>0?'Continuar':'Iniciar';
  }
  function startTimer(){
    if(timer.running)return;
    timer.running=true;timer.last=performance.now();
    timer.tick=setInterval(renderTimer,250);renderTimer();
  }
  function pauseTimer(){
    if(!timer.running)return;
    timer.elapsed=timerElapsed();timer.running=false;clearInterval(timer.tick);renderTimer();
  }
  function resetTimer(limit){
    pauseTimer();timer.elapsed=0;
    if(limit)timer.limit=limit;
    renderTimer();
  }
  function adjustLimit(delta){
    timer.limit=Math.max(60,Math.min(180*60,timer.limit+delta));
    try{localStorage.setItem(TIMER_KEY,String(timer.limit/60));}catch(_){}
    renderTimer();
  }

  function speechOf(slide){
    const notes=slide&&slide.querySelector('.speaker-notes');
    if(!notes)return [];
    const out=[];
    for(const p of notes.content.querySelectorAll('p')){
      const text=p.textContent.trim();
      if(/^APOIO PARA PERGUNTAS/.test(text)||/^Fonte:/.test(text))break;
      if(!text||/^TEMPO ALVO/.test(text)||/^ROTEIRO FALADO/.test(text)||text==='ABERTURA')continue;
      out.push(text);
    }
    return out;
  }
  function updatePresenter(){
    if(!document.body.classList.contains('presenting'))return;
    $('#presenter-pos').textContent='Slide '+(current+1)+' de '+slides.length;
    $('#presenter-now').textContent=titleOf(slides[current]);
    const next=slides[current+1];
    $('#presenter-next').textContent=next?titleOf(next):'Fim da apresentação';
    const notes=$('#presenter-notes');notes.replaceChildren();
    speechOf(slides[current]).forEach(text=>{const p=document.createElement('p');p.textContent=text;notes.append(p);});
    notes.scrollTop=0;
  }
  function watchPeer(){
    clearInterval(peerWatch);
    peerWatch=setInterval(()=>{
      const closed=!peer||peer.closed;
      $('#presenter-status').textContent=closed?'Janela do projetor fechada.':'Janela do projetor aberta. Arraste-a para o projetor e clique nela para tela cheia.';
      $('#presenter-reopen').hidden=!closed;
    },800);
  }
  function openAudience(){
    const url=location.href.split(/[?#]/)[0]+'?projetor=1#slide-'+(current+1);
    const left=(screen.availLeft||0)+screen.availWidth;
    peer=window.open(url,'scalex-projetor','popup=yes,width=1280,height=720,left='+left+',top=0');
    if(!peer){toast('Permita pop-ups neste site para abrir a janela do projetor.');return false;}
    // Com permissão de gerenciamento de janelas, a janela já abre ocupando a outra tela.
    if(window.getScreenDetails){
      window.getScreenDetails().then(details=>{
        const other=details.screens.find(s=>s!==details.currentScreen);
        if(other&&peer&&!peer.closed){peer.moveTo(other.availLeft,other.availTop);peer.resizeTo(other.availWidth,other.availHeight);}
      }).catch(()=>{});
    }
    return true;
  }
  function presentMinutes(){
    const value=parseFloat(String($('#present-minutes').value).replace(',','.'));
    return Math.max(1,Math.min(180,value||5));
  }
  function startPresenter(){
    const minutes=presentMinutes();
    try{localStorage.setItem(TIMER_KEY,String(minutes));}catch(_){}
    presentDialog.close();
    if(!openAudience())return;
    resetTimer(minutes*60);
    document.body.classList.add('presenting');
    presenter.hidden=false;
    updatePresenter();watchPeer();fit();
  }
  function stopPresenter(){
    clearInterval(peerWatch);pauseTimer();
    try{if(peer&&!peer.closed){peer.postMessage({scalex:'end'},'*');peer.close();}}catch(_){}
    peer=null;
    document.body.classList.remove('presenting');
    presenter.hidden=true;
    fit();
  }
  function openPresent(){
    if(audienceMode||document.fullscreenElement||document.body.classList.contains('fullscreen')){toggleFullscreen();return;}
    if(document.body.classList.contains('presenting'))return;
    if(document.body.classList.contains('studio-open')){toast('Saia do estúdio para apresentar.');return;}
    $$('dialog[open]').forEach(d=>d.close());
    let saved=5;try{saved=parseFloat(localStorage.getItem(TIMER_KEY))||5;}catch(_){}
    $('#present-minutes').value=String(saved).replace('.',',');
    presentDialog.showModal();
  }
  $('#present-duplicate').addEventListener('click',()=>{presentDialog.close();toggleFullscreen();});
  $('#present-mirror').addEventListener('click',startPresenter);
  $('#present-minutes').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();startPresenter();}});
  $('#presenter-toggle').addEventListener('click',()=>timer.running?pauseTimer():startTimer());
  $('#presenter-reset').addEventListener('click',()=>resetTimer());
  $('#presenter-minus').addEventListener('click',()=>adjustLimit(-60));
  $('#presenter-plus').addEventListener('click',()=>adjustLimit(60));
  $('#presenter-end').addEventListener('click',stopPresenter);
  $('#presenter-reopen').addEventListener('click',openAudience);
  document.addEventListener('scalex:slide',e=>{
    if(!document.body.classList.contains('presenting'))return;
    updatePresenter();
    // O cronômetro começa sozinho quando a apresentação sai do primeiro slide.
    if(!timer.running&&timerElapsed()===0&&e.detail.index>0)startTimer();
  });
  addEventListener('pagehide',()=>{if(!audienceMode&&peer&&!peer.closed){try{peer.close();}catch(_){}}});
  if(audienceMode){
    document.body.classList.add('fullscreen','audience');
    const hint=$('#audience-hint');hint.hidden=false;
    hint.addEventListener('click',toggleFullscreen);
    document.addEventListener('fullscreenchange',()=>{hint.hidden=!!document.fullscreenElement;});
  }

  $('#prev-btn').addEventListener('click',()=>go(current-1));$('#next-btn').addEventListener('click',()=>go(current+1));
  $('#slide-picker').addEventListener('change',e=>go(e.target.value));
  $('#fullscreen-btn').addEventListener('click',openPresent);
  $('#pdf-btn').addEventListener('click',openPdf);
  $('#pdf-run').addEventListener('click',exportPdf);
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
    else if(e.key==='f'||e.key==='F'){openPresent();}
    else if((e.key==='t'||e.key==='T')&&document.body.classList.contains('presenting')){timer.running?pauseTimer():startTimer();}
    else if(e.key==='g'||e.key==='G'){$('#overview-dialog').showModal();}
    else if(e.key==='?'){$('#help-dialog').showModal();}
    else if(e.key==='p'||e.key==='P'){openPdf();}
    else if(e.key==='Escape'){$$('dialog[open]').forEach(d=>d.close());}
  });

  /* Mouse em tela cheia: botão direito avança, botão esquerdo volta; a roda e os botões laterais também navegam. */
  const MOUSE_SKIP='a,button,input,select,textarea,summary,dialog,label,.app-footer,.studio,#toast,[contenteditable="true"]';
  let wheelLock=0;
  function mouseNavActive(e){
    if(!document.body.classList.contains('fullscreen')&&!document.fullscreenElement)return false;
    if(document.body.classList.contains('editing')||document.body.classList.contains('studio-open'))return false;
    if(document.querySelector('dialog[open]'))return false;
    return !(e.target.closest&&e.target.closest(MOUSE_SKIP));
  }
  document.addEventListener('click',e=>{
    if(e.button!==0||!mouseNavActive(e))return;
    const selection=getSelection();if(selection&&!selection.isCollapsed)return;
    go(current-1);
  });
  document.addEventListener('contextmenu',e=>{
    if(!mouseNavActive(e))return;
    e.preventDefault();
    go(current+1);
  });
  document.addEventListener('mouseup',e=>{
    if((e.button!==3&&e.button!==4)||!mouseNavActive(e))return;
    e.preventDefault();go(current+(e.button===4?1:-1));
  });
  document.addEventListener('wheel',e=>{
    if(!mouseNavActive(e)||Math.abs(e.deltaY)<8||e.ctrlKey)return;
    e.preventDefault();
    const now=performance.now();if(now<wheelLock)return;
    wheelLock=now+650;go(current+(e.deltaY>0?1:-1));
  },{passive:false});

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
  const SKIP_EDIT='.s-top,.s-num,svg,template,script,.cover-year,.s10-ghost,.s3-ten,.s3-noise,.infra-noise,.esc-slabel b,.esc-result b,.esc-ticks span';

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
    slides.forEach((slide,index)=>{
      const node=slide.querySelector('.s-num');
      if(!node)return;
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
    resetAcceleration();
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
        const response=await fetch(contentPath+'?v='+Date.now(),{cache:'no-store'});
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
    $('#overview-title').textContent='Os '+slides.length+' slides';
    const initial=location.hash.match(/^#slide-(\d+)$/);
    go(initial?Number(initial[1])-1:0,false);
    fit();
    if(audienceMode&&peer){try{peer.postMessage({scalex:'hello'},'*');}catch(_){}}
    // Usado pela exportação automatizada (npm run pdf -- --notes).
    if(new URLSearchParams(location.search).has('notes'))buildPdfNotes();
  }

  function initAllocCharts(){
    $$('[data-alloc-chart]').forEach(chart=>{
      const slices=chart.querySelectorAll('.donut-slice');
      const items=chart.querySelectorAll('.alloc-item');
      const pctOut=chart.querySelector('[data-out="alloc-pct"]');
      const valOut=chart.querySelector('[data-out="alloc-val"]');
      const tagOut=chart.querySelector('[data-out="alloc-tag"]');
      const data=[...items].map(item=>({pct:item.dataset.pct,val:item.dataset.value,tag:item.dataset.tag}));
      function setSlice(index){
        const item=data[index]||data[0];
        slices.forEach((s,i)=>s.classList.toggle('is-active',i===index));
        items.forEach((it,i)=>{it.classList.toggle('is-active',i===index);it.setAttribute('aria-pressed',String(i===index));});
        if(pctOut)pctOut.textContent=item.pct;
        if(valOut)valOut.textContent=item.val;
        if(tagOut)tagOut.textContent=item.tag;
      }
      items.forEach((item,index)=>{
        item.addEventListener('mouseenter',()=>setSlice(index));
        item.addEventListener('focus',()=>setSlice(index));
        item.addEventListener('click',()=>setSlice(index));
      });
      slices.forEach((slice,index)=>{
        slice.addEventListener('mouseenter',()=>setSlice(index));
        slice.addEventListener('click',()=>setSlice(index));
      });
    });
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
    if(applyOrder)applyOrderToDOM(content.order);
    renumber();
    applyTextToDOM(content.text);
    applyStyles(content.styles);
    initAllocCharts();
    start();
    readyResolve(content);
  })();
})();
