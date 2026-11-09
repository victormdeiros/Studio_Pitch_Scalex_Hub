import {brl, nr, quarterly} from '../financials.mjs';
import {pitchPremises, premiseNotes, premiseSource} from '../pitch-premises.mjs';
import {header, foot} from '../financial-components.mjs';

const plan = quarterly.filter(q => q.period.endsWith('/27'));
const peak = Math.max(...plan.map(q => q.fat));
const totalGrowth = nr(plan[plan.length - 1].fat / plan[0].fat, 1);
const growth = (current, previous) => nr((current / previous - 1) * 100, 0);

export default {
  id:'resumo-escala',
  title:'Bootstrap: crescer já está no plano.',
  theme:'dark',
  number:'13',
  notes:[
    'TEMPO ALVO: 35 segundos',
    'Nossa perspectiva em bootstrap é EBITDA de aproximadamente R$ 450 mil em 2027, sem aporte. O negócio tem um plano de crescimento com recursos próprios. Validamos a entrega como agência em 2025 e priorizamos a plataforma em 2026: um passo atrás para avançar vários à frente. A entrada do investidor acelera esse plano, como mostra o slide seguinte.',
    'O gráfico de faturamento usa a coluna FAT BOM do modelo como faturamento trimestral projetado: Q4/26, ponto de partida, R$ 3,8 mil; Q1/27 R$ 52,4 mil; Q2/27 R$ 159,0 mil; Q3/27 R$ 351,5 mil; Q4/27 R$ 586,4 mil. O crescimento sobre o trimestre anterior é de 203%, 121% e 67% a partir de Q2/27. De Q1 para Q4, o faturamento projetado cresce 11,2 vezes. São valores de planejamento, não realizados.',
    ...premiseNotes,
    'O slide separa o faturamento histórico anual de 2025–2026 e a projeção trimestral de 2027 da meta de EBITDA de 2027. Indicadores distintos, sem cálculo de margem entre eles.',
    premiseSource
  ],
  html:`<div class="fin-page scenario-page scenario-bootstrap sx-bootstrap">
    ${header('Pré-money · bootstrap','Crescer <span class="grad-text">já está no plano.</span>')}
    <div class="sx-boot-hero rv">
      <p class="scenario-metric-label">Meta de EBITDA · 2027</p>
      <p class="scenario-amount">~R$ <span class="count" data-to="${pitchPremises.ebitda2027.pre/1000}">${pitchPremises.ebitda2027.pre/1000}</span><span class="scenario-unit">mil</span></p>
      <p class="scenario-state"><i></i>Sem aporte. Com recursos próprios.</p>
    </div>
    <section class="sx-plan-motion rv" style="--d:1">
      <div class="sx-plan-copy"><span>Recursos próprios</span><b>O plano já está<br><em>em movimento.</em></b></div>
      <div class="sx-plan-graph">
        <div class="sx-plan-labels"><span>Plataforma</span><span>Distribuição</span><span>Meta 2027</span></div>
        <i class="sx-plan-line"></i><i class="sx-plan-spark"></i>
        <i class="sx-plan-node n1"></i><i class="sx-plan-node n2"></i><i class="sx-plan-node n3"></i>
      </div>
    </section>
    <section class="sx-quarter-card rv" style="--d:2">
      <header class="sx-quarter-head">
        <div><span>Faturamento projetado · 2027</span><b>Por trimestre, em R$ mil</b></div>
        <em><b>${totalGrowth}×</b><span>de Q1 a Q4</span></em>
      </header>
      <div class="sx-quarter-rows">
        ${plan.map((q,i)=>`<div class="sx-quarter-row${i===plan.length-1?' is-peak':''}">
          <span class="sx-q-label">${q.period}</span>
          <div class="sx-q-track"><i style="--w:${q.fat/peak*100}%;--i:${i}"></i></div>
          <b class="sx-q-value">R$ ${nr(q.fat/1000,1)}</b>
          <span class="sx-q-growth">${i===0?'base':'+'+growth(q.fat,plan[i-1].fat)+'%'}</span>
        </div>`).join('')}
      </div>
      <p class="sx-quarter-note">Q4/26, ponto de partida: R$ 3,8 mil. Crescimento sobre o trimestre anterior. Valores de planejamento.</p>
    </section>
    <div class="sx-boot-history rv" style="--d:3">
      <span class="sx-boot-caption">Histórico anual · faturamento informado</span>
      <div class="sx-boot-years">${pitchPremises.history.map(h=>`<article class="${h.year===2026?'is-pivot':''}"><span>${h.year} · ${h.year===2026?'Virada para plataforma':'Agência'}</span><b>${brl(h.revenue/1000)} mil</b><small>faturamento informado</small></article>`).join('')}</div>
    </div>
    <div class="scenario-quote sx-boot-quote rv" style="--d:4"><span>2026 · A virada estratégica</span><p>Um passo atrás.<br><span class="grad-text">Vários passos à frente.</span></p></div>
    ${foot('Faturamento trimestral projetado a partir do modelo (R$ mil); histórico anual informado. Meta de EBITDA de 2027 projetada pela gestão. Indicadores distintos.')}
  </div>`
};
