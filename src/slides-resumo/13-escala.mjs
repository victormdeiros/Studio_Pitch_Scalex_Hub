import {brl} from '../financials.mjs';
import {pitchPremises, premiseNotes, premiseSource} from '../pitch-premises.mjs';
import {header, foot} from '../financial-components.mjs';

export default {
  id:'resumo-escala',
  title:'2026: um passo atrás para avançar vários à frente.',
  theme:'dark',
  number:'13',
  notes:[
    'TEMPO ALVO: 35 segundos',
    'Em 2025, validamos a entrega como agência, com R$ 300 mil de faturamento informado. Em 2026, com R$ 200 mil informados, demos o passo atrás estratégico para consolidar a plataforma. Foi a mudança necessária para escalar por parceiros. A meta pré-money para 2027 é EBITDA de aproximadamente R$ 450 mil, em bootstrap, sem aporte. O plano tem perspectiva de crescimento com recursos próprios; o aporte acelera essa execução.',
    ...premiseNotes,
    premiseSource
  ],
  html:`<div class="fin-page fin-summary sx-scale">
    ${header('Tração → plataforma → escala','2026: <span class="grad-text">a virada para escalar.</span>')}
    <div class="sx-journey-graph">
      <section class="sx-history-panel">
        <p class="sx-chart-caption">Faturamento informado <span>Histórico · R$ mil</span></p>
        <div class="sx-history-plot" role="img" aria-label="Faturamento informado: 2025, R$ 300 mil, agência; 2026, R$ 200 mil, virada estratégica para plataforma.">
          ${pitchPremises.history.map(h=>`<div class="sx-journey-year${h.year===2026?' is-pivot':''}">
            ${h.year===2026?'<span class="sx-pivot-tag">Virada estratégica</span>':'<!-- Histórico -->'}
            <div class="sx-journey-column"><div class="sx-journey-bar" style="--height:${h.revenue/350000*100}%"><b>${brl(h.revenue/1000)} mil</b></div></div>
            <b class="sx-journey-date">${h.year}</b><span class="sx-journey-stage">${h.stage}</span>
          </div>`).join('')}
        </div>
      </section>
      <section class="sx-future-panel">
        <p class="sx-chart-caption">Meta de EBITDA <span>Pré-money · bootstrap</span></p>
        <div class="sx-future-plot" role="img" aria-label="Meta pré-money de 2027, em bootstrap e sem aporte: EBITDA aproximado de R$ 450 mil.">
          <div class="sx-journey-year is-future"><div class="sx-journey-column"><div class="sx-journey-bar" style="--height:${pitchPremises.ebitda2027.pre/550000*100}%"><b>~${brl(pitchPremises.ebitda2027.pre/1000)} mil</b></div></div><b class="sx-journey-date">2027</b><span class="sx-journey-stage">Meta sem aporte</span></div>
        </div>
      </section>
    </div>
    <div class="sx-pivot-quote"><span>2026 · De agência para plataforma</span><p>Um passo atrás <span class="grad-text">para avançar vários à frente.</span></p></div>
    ${foot('2025–2026: faturamento informado. 2027: meta projetada de EBITDA pré-money, sem aporte. Indicadores e escalas distintos; não representam uma série de crescimento comparável.')}
  </div>`
};
