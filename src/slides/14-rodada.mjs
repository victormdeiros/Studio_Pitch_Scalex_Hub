import {valuationNotes, source} from '../financials.mjs';
import {header, foot, metric} from '../financial-components.mjs';
export default {
  id:'slide-9', title:'R$ 300 mil por 10% da ScaleX Hub.', theme:'dark', number:'',
  notes:['TEMPO ALVO: 30 segundos', 'A proposta é de R$ 300 mil por 10% pós-investimento para financiar seis meses de execução. Os valuations exibidos decorrem desses termos: R$ 2,7 milhões pré e R$ 3 milhões pós. As referências divergentes da planilha ficam registradas nas notas, sem serem usadas como equivalentes.', ...valuationNotes, source],
  html:`<div class="fin-page">${header('A rodada · proposta','R$ 300 mil <span class="grad-text">por 10% da ScaleX Hub.</span>','Captação primária proposta para seis meses de execução.')}
  <div class="fin-body fin-round-body"><section class="fin-card fin-offer"><span class="fin-tag">Termos propostos</span><b class="fin-hero">10%</b><p>de participação pós-investimento</p><div class="fin-two">${metric('R$ 2,7 mi','Valuation pré-money')}${metric('R$ 3,0 mi','Valuation pós-money')}</div><p class="fin-chart-note">Valuation implícito na oferta de R$ 300 mil por 10%.</p></section>
  <section class="fin-card"><span class="fin-tag">Smart money esperado</span><h3>Capital com acesso e experiência.</h3><ul class="fin-list"><li><b>Acesso comercial</b><span>Agências, consultorias e integradores; reduz CAC e antecipa payback.</span></li><li><b>Enterprise</b><span>Portas em grandes contas, PoCs e contratos corporativos.</span></li><li><b>Experiência em SaaS</b><span>Mentoria em pricing, CAC, LTV, churn e canais.</span></li><li><b>Governança</b><span>Societário, PI, LGPD, segurança e certificações.</span></li><li><b>Ecossistema</b><span>Nuvem, aceleradoras, fundos e parceiros de IA.</span></li></ul></section></div>
  ${foot('Fonte: PDF corrigido, pp. 1 e 6. Valuations da planilha são referências distintas, pendentes de conciliação; não fundamentam os termos exibidos.')}</div>`
};
