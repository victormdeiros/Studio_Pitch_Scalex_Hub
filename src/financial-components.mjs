import {allocations, annual, round, nr, brl} from './financials.mjs';
import {escapeHTML as esc} from './components.mjs';

export const header = (label,title,lead='') => `<header class="fin-head"><p class="kicker rv"><span class="k-line"></span>${label}</p><h2 class="rv" style="--d:1">${title}</h2>${lead?`<p class="fin-lead rv" style="--d:2">${lead}</p>`:''}</header>`;
export const foot = text => `<p class="fin-foot">${text}</p>`;
export const metric = (value,label,detail='') => `<article class="fin-metric"><b>${value}</b><span>${label}</span>${detail?`<p>${detail}</p>`:''}</article>`;

export function annualChart({both=true}={}){
  return `<div class="fin-chart-card"><div class="fin-chart-caption"><b>EBITDA anual projetado · R$ mil</b><span class="fin-legend">${both?'<i class="pre"></i>Pré-money · série anual':''}<i class="post"></i>Pós-money</span></div>
    <div class="fin-annual" role="img" aria-label="EBITDA anual projetado de 2027 a 2031. ${annual.map(a=>`${a.year}: ${both?'pré '+brl(a.pre,1)+'; ':''}pós ${brl(a.post,1)}`).join('. ')}">
    ${annual.map(a=>`<div class="fin-year"><div class="fin-pair">${both?`<div class="fin-bar pre" style="--height:${a.pre/1100000*100}%"><b>${nr(a.pre/1000,1)}</b></div>`:''}<div class="fin-bar post" style="--height:${a.post/1100000*100}%"><b>${nr(a.post/1000,1)}</b></div></div><span>${a.year}</span></div>`).join('')}
    </div></div>`;
}

export function allocationChart(){
  const circumference=2*Math.PI*58;
  let offset=0;
  return `<div class="alloc-card fin-allocation" data-alloc-chart><div class="alloc-head"><div><span class="alloc-kicker">Orçamento proposto · seis meses</span><h3 class="alloc-title">Destinação dos R$ 300 mil</h3></div></div><div class="alloc-body"><div class="alloc-donut-wrap"><svg class="alloc-donut" viewBox="0 0 160 160" role="img" aria-label="Operação: R$ 188 mil. Comercial e marketing: R$ 77 mil. Enterprise: R$ 35 mil."><circle cx="80" cy="80" r="58" class="donut-track"/>${allocations.map((a,i)=>{const length=a.value/round.investment*circumference; const shape=`<circle cx="80" cy="80" r="58" class="donut-slice c${i+1}${i===0?' is-active':''}" stroke-dasharray="${length} ${circumference}" stroke-dashoffset="${-offset}" data-slice="${i}"/>`;offset+=length;return shape;}).join('')}</svg><div class="donut-center-info"><span class="d-pct" data-out="alloc-pct">62,7%</span><b class="d-val" data-out="alloc-val">R$ 188 mil</b><em class="d-tag" data-out="alloc-tag">Operação</em></div></div><div class="alloc-list">${allocations.map((a,i)=>`<button type="button" class="alloc-item${i===0?' is-active':''}" data-slice="${i}" data-pct="${nr(a.value/round.investment*100,1)}%" data-value="${brl(a.value/1000)} mil" data-tag="${esc(a.short)}" aria-pressed="${i===0}"><span class="ai-bullet c${i+1}"></span><span class="ai-text"><span class="ai-row"><b>${nr(a.value/round.investment*100,1)}% · ${a.name}</b><span class="ai-money">${brl(a.value/1000)} mil</span></span><span class="fin-alloc-detail">${a.detail}</span></span></button>`).join('')}</div></div><p class="fin-chart-note">100% alocado · sem reserva de contingência.<br>Percentuais arredondados; valores somam R$ 300 mil.</p></div>`;
}

export function timingChart(){
  return `<div class="fin-timing"><div class="fin-time-row"><span>Sem aporte</span><div style="--width:100%"><b>15 meses</b></div></div><div class="fin-time-row hi"><span>Com aporte</span><div style="--width:40%"><b>6 meses</b></div></div><p>9 meses a menos · redução projetada de 60% no prazo.</p></div>`;
}
