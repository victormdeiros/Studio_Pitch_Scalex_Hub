import {allocationNotes, valuationNotes, returnNotes, source} from '../financials.mjs';
import {header, foot, metric, allocationChart} from '../financial-components.mjs';
export default {
  id:'resumo-rodada', title:'R$ 300 mil por 10%: seis meses de execução.', theme:'dark', number:'14',
  notes:['TEMPO ALVO: 40 segundos', 'A proposta é R$ 300 mil por 10%, para seis meses. São R$ 188 mil em operação, R$ 77 mil em comercial e marketing e R$ 35 mil em adequação enterprise. O valuation implícito é R$ 2,7 milhões pré e R$ 3 milhões pós. O retorno por dividendos é apenas uma simulação com cenário-base em 2033, sem garantia.', ...allocationNotes, ...valuationNotes, ...returnNotes, source],
  html:`<div class="fin-page fin-summary">${header('A rodada · proposta','R$ 300 mil por 10%. <span class="grad-text">Seis meses de execução.</span>')}
  <div class="fin-body fin-budget-body"><section class="fin-card fin-summary-terms"><div class="fin-two">${metric('R$ 2,7 mi','Pré-money implícito')}${metric('R$ 3,0 mi','Pós-money implícito')}</div><div class="fin-budget-equation"><b>R$ 40,6 mil/mês</b><span>× 6 meses + R$ 56,4 mil pontuais</span></div><div class="fin-return-note"><b>Dividendos: cenário-base em 2033</b><p>Retorno ilustrativo; hipóteses e sensibilidade nas notas.</p></div></section>${allocationChart()}</div>
  ${foot('Fonte: PDF corrigido, pp. 1–2 e 6–7. Valuations implícitos nos termos propostos. Retorno depende de lucro, caixa e aprovação de dividendos; não é garantia.')}</div>`
};
