import {brl} from '../financials.mjs';
import {pitchPremises, premiseNotes, premiseSource} from '../pitch-premises.mjs';
import {header, foot} from '../financial-components.mjs';

const {pre,post}=pitchPremises.ebitda2027;
export default {
  id:'resumo-investidor',
  title:'O aporte antecipa seis meses e amplia o EBITDA projetado.',
  theme:'dark',
  number:'15',
  notes:[
    'TEMPO ALVO: 35 segundos',
    'O aporte antecipa o plano em seis meses. Para 2027, o EBITDA estimado é de aproximadamente R$ 450 mil no pré-money, sem aporte, e R$ 750 mil no pós-money, com aporte. O pré-money é 40% menor que o pós-money. São cenários projetados, não valuations ou resultados realizados.',
    ...premiseNotes.slice(1,4),
    premiseSource
  ],
  html:`<div class="fin-page fin-summary sx-investor">
    ${header('O efeito do aporte','O aporte antecipa <span class="grad-text">seis meses.</span>')}
    <div class="sx-impact-grid">
      <section class="sx-ebitda-card"><p class="sx-chart-caption">EBITDA estimado · 2027 <span>Comparativo de cenários</span></p><div class="sx-ebitda-plot" role="img" aria-label="EBITDA estimado para 2027: pré-money, sem aporte, aproximadamente R$ 450 mil; pós-money, com aporte, aproximadamente R$ 750 mil. O pré-money é 40% menor que o pós-money.">
        <div class="sx-ebitda-scenario"><span class="sx-ebitda-mode">Pré-money <em>Sem aporte</em></span><b>~${brl(pre/1000)} mil</b><div class="sx-ebitda-track"><i style="width:${pre/post*100}%"></i></div></div>
        <div class="sx-ebitda-scenario is-funded"><span class="sx-ebitda-mode">Pós-money <em>Com aporte</em></span><b>~${brl(post/1000)} mil</b><div class="sx-ebitda-track"><i style="width:100%"></i></div></div>
      </div><p class="sx-ebitda-insight">Pré-money: <b>40% menos EBITDA</b> que o pós-money.</p></section>
      <aside class="sx-time-card"><span class="sx-card-label">Antecipação do plano</span><p class="sx-month-number">${pitchPremises.accelerationMonths}<span>meses</span></p><p class="sx-time-copy">de avanço na execução<br>com a entrada do investidor.</p></aside>
    </div>
    ${foot('Projeções aproximadas e antecipação estimada informadas pela gestão. Pré e pós-money identificam cenários de EBITDA; não são valores de valuation.')}
  </div>`
};
