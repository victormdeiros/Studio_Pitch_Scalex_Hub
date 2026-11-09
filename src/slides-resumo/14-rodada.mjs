import {allocations, allocationNotes, round, nr} from '../financials.mjs';
import {pitchPremises, premiseNotes, premiseSource} from '../pitch-premises.mjs';
import {header, foot} from '../financial-components.mjs';

export default {
  id:'resumo-rodada',
  title:'R$ 300 mil por 10%. Payback estimado em aproximadamente 3 anos.',
  theme:'dark',
  number:'15',
  notes:[
    'TEMPO ALVO: 40 segundos',
    'A pedida é R$ 300 mil por 10% da ScaleX Hub. O payback estimado informado pela gestão é de aproximadamente três anos. A destinação é 62,7% para operação, 25,7% para comercial e marketing e 11,7% para adequação enterprise.',
    'O slide apresenta apenas pedida, prazo estimado de payback e percentuais de destinação. Valuations e despesas detalhadas foram retirados para dar objetividade.',
    ...allocationNotes,
    ...premiseNotes.slice(3,4),
    premiseSource
  ],
  html:`<div class="fin-page fin-summary sx-round">
    ${header('A rodada','Capital para <span class="grad-text">o próximo passo.</span>')}
    <div class="sx-round-main">
      <section class="sx-ask-card"><span class="sx-card-label">A pedida</span><p class="sx-ask-amount">R$ 300 mil</p><p class="sx-ask-equity">por <b>10%</b> da ScaleX Hub</p></section>
      <section class="sx-payback-card"><span class="sx-card-label">Payback estimado</span><p class="sx-payback-period">~${pitchPremises.paybackMonths/12} anos <span>Retorno aproximado</span></p></section>
    </div>
    <section class="sx-allocation"><h3>Destinação do investimento</h3><div class="sx-allocation-bar" role="img" aria-label="Operação: 62,7%. Comercial e marketing: 25,7%. Adequação enterprise: 11,7%.">${allocations.map((a,i)=>`<i class="sx-alloc-${i}" style="flex:${a.value}"></i>`).join('')}</div><div class="sx-allocation-labels">${allocations.map((a,i)=>`<div class="sx-alloc-${i}"><b>${nr(a.value/round.investment*100,1)}%</b><span>${a.name}</span></div>`).join('')}</div></section>
    ${foot('Payback estimado informado pela gestão, sujeito à execução e aos resultados. Percentuais de alocação arredondados.')}
  </div>`
};
