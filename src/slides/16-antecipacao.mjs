import {source} from '../financials.mjs';
import {header, foot, metric, timingChart} from '../financial-components.mjs';
export default {
  id:'slide-11', title:'De 15 para 6 meses: o capital antecipa o plano.', theme:'dark', number:'',
  notes:['TEMPO ALVO: 25 segundos', 'A meta tem prazo de 15 meses no modelo; o cenário acelerado prevê seis meses. São nove meses a menos, redução de 60% no prazo. Os 40% citados na planilha representam a fração restante, 6/15, e não o percentual de redução. A execução depende da captação e do avanço do plano; não há suporte no PDF para dobrar faturamento.', source],
  html:`<div class="fin-page">${header('Aceleração · premissa do plano','De 15 para 6 meses. <span class="grad-text">Capital que antecipa a execução.</span>','Operação, expansão comercial e adequação enterprise na mesma janela de execução.')}
  <div class="fin-body fin-round-body"><section class="fin-card"><span class="fin-tag">Prazo da meta · comparação projetada</span>${timingChart()}</section><aside class="fin-metrics">${metric('9 meses','De antecipação projetada')}${metric('60%','De redução no prazo','6 meses equivalem a 40% do prazo original.')}${metric('6 meses','De aplicação do aporte','Sem promessa de duplicação de receita.')}</aside></div>
  ${foot('Fonte: PDF corrigido, pp. 1 e 3. Prazos relativos à execução; sujeitos à captação e aos resultados futuros.')}</div>`
};
