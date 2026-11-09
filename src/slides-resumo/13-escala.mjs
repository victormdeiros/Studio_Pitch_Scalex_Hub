import {brl} from '../financials.mjs';
import {pitchPremises, premiseNotes, premiseSource} from '../pitch-premises.mjs';
import {header, foot} from '../financial-components.mjs';
import {scenarioRoute} from '../scenario-components.mjs';

export default {
  id:'resumo-escala',
  title:'Bootstrap: crescer já está no plano.',
  theme:'dark',
  number:'13',
  notes:[
    'TEMPO ALVO: 35 segundos',
    'Nossa perspectiva em bootstrap é EBITDA de aproximadamente R$ 450 mil em 2027, sem aporte. O negócio tem um plano de crescimento com recursos próprios. Validamos a entrega como agência em 2025 e priorizamos a plataforma em 2026: um passo atrás para avançar vários à frente. A entrada do investidor acelera esse plano, como mostra o slide seguinte.',
    ...premiseNotes,
    'O diagrama representa etapas de execução, sem um eixo quantitativo de receita ou EBITDA. Os valores de 2025 e 2026 são faturamento informado; a meta de 2027 é EBITDA projetado.',
    premiseSource
  ],
  html:`<div class="fin-page scenario-page scenario-bootstrap">
    ${header('Pré-money · bootstrap','Crescer <span class="grad-text">já está no plano.</span>')}
    <div class="scenario-hero">
      <p class="scenario-metric-label">Meta de EBITDA · 2027</p>
      <p class="scenario-amount">~R$ <span class="count" data-to="${pitchPremises.ebitda2027.pre/1000}">${pitchPremises.ebitda2027.pre/1000}</span><span class="scenario-unit">mil</span></p>
      <p class="scenario-state"><i></i>Sem aporte. Com recursos próprios.</p>
    </div>
    ${scenarioRoute()}
    <div class="scenario-history">${pitchPremises.history.map(h=>`<article class="${h.year===2026?'is-pivot':''}"><span>${h.year} · ${h.year===2026?'Virada para plataforma':'Agência'}</span><b>${brl(h.revenue/1000)} mil</b><small>faturamento informado</small></article>`).join('')}</div>
    <div class="scenario-quote"><span>2026 · A virada estratégica</span><p>Um passo atrás.<br><span class="grad-text">Vários passos à frente.</span></p></div>
    ${foot('Histórico informado de faturamento em 2025–2026. Meta de EBITDA de 2027 projetada pela gestão. Indicadores distintos.')}
  </div>`
};
