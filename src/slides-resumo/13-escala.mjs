import {projectionNotes, source} from '../financials.mjs';
import {header, foot, metric, annualChart} from '../financial-components.mjs';
export default {
  id:'resumo-escala', title:'Escala projetada com eficiência.', theme:'dark', number:'13',
  notes:['TEMPO ALVO: 40 segundos', 'A operação nasceu da experiência como agência. O histórico de R$ 300 mil em 2025 foi informado internamente e não é comprovado pelos anexos financeiros. O plano revisado projeta EBITDA pós-money de R$ 497,9 mil em 2027, chegando a R$ 1,03 milhão em 2031. No cenário bootstrap, o ticket vai de R$ 1.200 a R$ 3.600 e o churn de 4,17% a 1,50%; a periodicidade desses indicadores precisa ser confirmada.', ...projectionNotes, source],
  html:`<div class="fin-page fin-summary">${header('Escala · projeções','Crescer com <span class="grad-text">eficiência.</span>','R$ 300 mil em vendas em 2025 (histórico informado). Agora, distribuição por parceiros.')}
  <div class="fin-body fin-split">${annualChart({both:false})}<aside class="fin-metrics">${metric('R$ 1.200 → 3.600','Ticket médio · premissa bootstrap')}${metric('4,17% → 1,50%','Churn · premissa bootstrap')}${metric('38%','Margem EBITDA · Q4/27','Cenário bootstrap projetado.')}</aside></div>
  ${foot('Histórico: dados internos anteriores. Projeções: PDF corrigido, pp. 3–4. Gráfico: série anual pós-money. Premissas: Q4/26–Q4/27; periodicidade de ticket e churn a confirmar. Indicadores do modelo são projeções.')}</div>`
};
