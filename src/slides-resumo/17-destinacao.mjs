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
const pct=a=>nr(a.value/round.investment*100,1)+'%';
const [operacao,comercial,enterprise]=allocations;
// Ordem e nomes das frentes neste slide; valores e percentuais vêm do planejamento financeiro.
const fronts=[
  {...comercial,c:1,name:'Comercial e Marketing',icon:'target',items:['Operação comercial','Clientes e parceiros','Eventos estratégicos','Closer dedicado']},
  {...operacao,c:0,name:'Operação',icon:'layers',items:['Evolução da plataforma','Capacidade operacional','Estrutura para crescer']},
  {...enterprise,c:2,name:'Adequação para entrada no mercado Enterprise',icon:'shield',items:['Jurídico e regulatório','Propriedade intelectual','Auditoria e segurança']}
];
const legendName={[enterprise.name]:'Entrada no mercado Enterprise'};

export default {
  id:'resumo-rodada',
  title:'A rodada: destinação do investimento.',
  theme:'dark',
  number:'15',
  notes:[
    'TEMPO ALVO: 20 segundos',
    'O investimento se divide em três frentes. Comercial e Marketing, 25,7%: estruturação da operação comercial, aquisição de clientes e parceiros, participação em eventos estratégicos e um profissional comercial dedicado, o closer. Operação, 62,7%: sustentação e evolução da plataforma, ampliação da capacidade operacional e a estrutura necessária ao crescimento. Adequação para entrada no mercado Enterprise, 11,7%: adequações jurídicas e regulatórias, proteção de propriedade intelectual, auditorias técnicas e requisitos de segurança.',
    'A dedicação integral do fundador está dentro da frente de operação. Os percentuais são de alocação do aporte, não de esforço ou prioridade.',
    ...allocationNotes,
    source
  ],
  html:`<div class="fin-page fin-summary sx-round sx-distribution">
    ${header('A rodada · destinação do investimento','Onde o capital <span class="grad-text">vira execução.</span>')}
    <section class="sx-dist-card rv">
      <div class="sx-dist-head"><span class="sx-card-label">Destinação do investimento</span><b>${brl(round.investment/1000)} mil</b></div>
      <div class="sx-dist-body">
        <div class="sx-dist-donut">
          <svg viewBox="0 0 160 160" role="img" aria-label="${allocations.map(a=>`${legendName[a.name]||a.name}: ${pct(a)}`).join('. ')}."><circle cx="80" cy="80" r="${radius}" class="sx-dist-track"/>${donut}</svg>
          <div class="sx-dist-center"><b>100%</b><span>alocado</span></div>
        </div>
        <div class="sx-dist-legend">${allocations.map((a,i)=>`<div class="sx-legend-row c${i}"><i></i><span><b>${pct(a)}</b><span>${legendName[a.name]||a.name}</span></span><em>${brl(a.value/1000)} mil</em></div>`).join('')}</div>
      </div>
      <p class="sx-dist-note">Seis meses de execução.</p>
    </section>
    <section class="sx-actions sx-fronts">
      <div class="sx-action-list">
        ${fronts.map((f,i)=>`<article class="sx-action c${f.c} rv" style="--d:${i+1}">
          <span class="sx-action-num">0${i+1}</span>
          <div class="sx-action-copy"><b>${f.name}</b><p class="sx-front-items">${f.items.map(item=>`<span>${item}</span>`).join('')}</p></div>
          <em class="sx-front-pct">${pct(f)}<small>${brl(f.value/1000)} mil</small></em>
        </article>`).join('')}
      </div>
    </section>
    ${foot('Percentuais e valores do planejamento financeiro. Percentuais arredondados; valores somam R$ 300 mil.')}
  </div>`
};
