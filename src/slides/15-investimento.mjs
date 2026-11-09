import {allocationNotes, source} from '../financials.mjs';
import {header, foot, metric, allocationChart} from '../financial-components.mjs';
export default {
  id:'slide-10', title:'R$ 300 mil: seis meses de execução.', theme:'dark', number:'',
  notes:['TEMPO ALVO: 40 segundos', 'O orçamento está integralmente alocado: R$ 188 mil em operação, R$ 77 mil em comercial e marketing e R$ 35 mil em adequação enterprise. A operação mensal é de R$ 40,6 mil; em seis meses são R$ 243,6 mil recorrentes, mais R$ 56,4 mil pontuais. A dedicação integral do founder está dentro de operação.', ...allocationNotes, source],
  html:`<div class="fin-page">${header('Uso do aporte · planejamento','Seis meses de execução. <span class="grad-text">100% do orçamento alocado.</span>')}
  <div class="fin-body fin-budget-body"><aside class="fin-metrics">${metric('R$ 40,6 mil','Despesas recorrentes por mês')}${metric('R$ 243,6 mil','Recorrentes · seis meses')}${metric('+ R$ 56,4 mil','Investimentos pontuais')}</aside>${allocationChart()}</div>
  ${foot('Fonte: PDF corrigido, pp. 1–2. Founder: R$ 90 mil dentro de operação. Eventos dentro de comercial. Detalhamento dos 13 itens nas notas do apresentador.')}</div>`
};
