import {annual, projectionNotes, source, brl} from '../financials.mjs';
import {header, foot, metric, annualChart} from '../financial-components.mjs';
export default {
  id:'slide-longo-prazo', title:'EBITDA projetado: cenários de 2027 a 2031.', theme:'dark', number:'',
  notes:['TEMPO ALVO: 40 segundos', 'A série anual pós-money projeta R$ 497,9 mil de EBITDA em 2027 e R$ 1,03 milhão em 2031. A trajetória da série é de aproximadamente 20% ao ano. O EBITDA pré-money da série anual e o consolidado trimestral de 2027 são bases diferentes e ainda precisam ser conciliados.', ...annual.map(a=>`${a.year}: EBITDA pré-money ${brl(a.pre,1)}; pós-money ${brl(a.post,1)}.`), ...projectionNotes.slice(-2), source],
  html:`<div class="fin-page">${header('Visão de longo prazo · projeções','EBITDA projetado. <span class="grad-text">2027 → 2031.</span>','Séries anuais pré e pós-money do documento revisado.')}
  <div class="fin-body fin-split">${annualChart()}<aside class="fin-metrics">${metric('R$ 497,9 mil','EBITDA pós-money · 2027')}${metric('R$ 1,03 mi','EBITDA pós-money · 2031')}${metric('≈ 20% a.a.','Crescimento derivado da série','A premissa declarada de 15% exige conciliação.')}</aside></div>
  <div class="fin-callout">2027 pré-money: <b>R$ 409,0 mil na série anual</b> e <b>R$ 355,6 mil na base trimestral</b>. Referências distintas, pendentes de conciliação.</div>
  ${foot('Fonte: PDF corrigido, pp. 3–4. Rótulos pré/pós-money preservados do modelo. Projeções, sem evidência de realização.')}</div>`
};
