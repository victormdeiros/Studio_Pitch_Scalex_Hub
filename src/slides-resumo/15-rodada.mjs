import {allocations, allocationNotes, round, nr, brl, source} from '../financials.mjs';
import {header, foot} from '../financial-components.mjs';

const radius=54;
const circumference=2*Math.PI*radius;
let offset=0;
const donut=allocations.map((a,i)=>{
  const length=a.value/round.investment*circumference;
  const slice=`<circle cx="80" cy="80" r="${radius}" class="sx-dist-slice c${i}" stroke-dasharray="${length} ${circumference}" stroke-dashoffset="${-offset}"/>`;
  offset+=length;
  return slice;
}).join('');

export default {
  id:'resumo-rodada',
  title:'R$ 300 mil: destinação e os três movimentos do pós-aporte.',
  theme:'dark',
  number:'15',
  notes:[
    'TEMPO ALVO: 40 segundos',
    'O aporte de R$ 300 mil está 100% alocado em seis meses: 62,7% em operação, 25,7% em comercial e marketing e 11,7% em adequação enterprise. O slide não repete a pedida; ele mostra onde o capital entra e os três movimentos que destravam a execução.',
    'As três ações principais são: contratar um closer dedicado no comercial; adequar juridicamente a empresa para entrar no mercado enterprise; e antecipar a vinda full time do fundador, prevista originalmente para o Q2 de 2027.',
    'A ação do closer está dentro da frente comercial e marketing; a adequação jurídica, dentro de enterprise; a dedicação integral do fundador, dentro de operação. Os percentuais são de alocação do aporte, não de esforço ou prioridade.',
    ...allocationNotes,
    source
  ],
  html:`<div class="fin-page fin-summary sx-round sx-distribution">
    ${header('A rodada · destinação','Onde o capital <span class="grad-text">vira execução.</span>','R$ 300 mil alocados em seis meses de execução.')}
    <section class="sx-dist-card rv">
      <div class="sx-dist-head"><span class="sx-card-label">Destinação do investimento</span><b>R$ 300 mil</b></div>
      <div class="sx-dist-body">
        <div class="sx-dist-donut">
          <svg viewBox="0 0 160 160" role="img" aria-label="Operação: 62,7%. Comercial e marketing: 25,7%. Adequação enterprise: 11,7%."><circle cx="80" cy="80" r="${radius}" class="sx-dist-track"/>${donut}</svg>
          <div class="sx-dist-center"><b>100%</b><span>alocado</span></div>
        </div>
        <div class="sx-dist-legend">${allocations.map((a,i)=>`<div class="sx-legend-row c${i}"><i></i><span><b>${nr(a.value/round.investment*100,1)}%</b><span>${a.name}</span></span><em>${brl(a.value/1000)} mil</em></div>`).join('')}</div>
      </div>
      <p class="sx-dist-note">Seis meses de execução. Sem reserva de contingência.</p>
    </section>
    <section class="sx-actions">
      <header class="sx-actions-head"><span>3 movimentos pós-aporte</span><b>O que muda na prática</b></header>
      <div class="sx-action-list">
        <article class="sx-action rv" style="--d:1">
          <span class="sx-action-num">01</span>
          <div class="sx-action-copy"><span class="sx-action-kicker">Comercial · 25,7%</span><b>Closer dedicado</b><p>Investir no comercial com um closer para converter o pipeline e sustentar a meta de faturamento.</p></div>
          <svg class="ico" aria-hidden="true"><use href="#i-target"></use></svg>
        </article>
        <article class="sx-action rv" style="--d:2">
          <span class="sx-action-num">02</span>
          <div class="sx-action-copy"><span class="sx-action-kicker">Enterprise · 11,7%</span><b>Adequação jurídica</b><p>Preparar contratos, estrutura societária e conformidade para vender no mercado enterprise.</p></div>
          <svg class="ico" aria-hidden="true"><use href="#i-shield"></use></svg>
        </article>
        <article class="sx-action rv" style="--d:3">
          <span class="sx-action-num">03</span>
          <div class="sx-action-copy"><span class="sx-action-kicker">Operação · 62,7%</span><b>Founder full time</b><p>Antecipar a dedicação integral do fundador, prevista originalmente para o Q2 de 2027.</p></div>
          <svg class="ico" aria-hidden="true"><use href="#i-user"></use></svg>
        </article>
      </div>
    </section>
    ${foot('R$ 300 mil alocados em seis meses. Percentuais arredondados; valores somam R$ 300 mil. Sem reserva de contingência.')}
  </div>`
};
