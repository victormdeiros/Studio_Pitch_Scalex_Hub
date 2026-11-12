import {nr, quarterly} from '../financials.mjs';
import {pitchPremises, premiseNotes, premiseSource} from '../pitch-premises.mjs';
import {header, foot} from '../financial-components.mjs';

const plan = quarterly.filter(q => q.period.endsWith('/27'));
const peak = Math.max(...plan.map(q => q.fat));
const totalGrowth = nr(plan[plan.length - 1].fat / plan[0].fat, 1);
const growth = (current, previous) => nr((current / previous - 1) * 100, 0);

export default {
  id:'resumo-escala',
  title:'Construímos a base. Agora é hora de escalar.',
  theme:'dark',
  number:'13',
  notes:[
    'TEMPO ALVO: 20 segundos',
    'Chegamos ao estágio atual com capital próprio, sem investimento externo. A plataforma foi desenvolvida com recursos próprios, o MVP está em operação e em processo de validação comercial, e o planejamento de crescimento e de aplicação de capital está estruturado. A projeção de EBITDA é de R$ 450 mil. O investimento representa a oportunidade de acelerar uma estrutura tecnológica que já foi construída.',
    'A projeção de EBITDA de aproximadamente R$ 450 mil está sujeita à validação do período e das premissas financeiras. É projeção, não resultado realizado.',
    'O gráfico usa a coluna FAT BOM do modelo como faturamento trimestral projetado: Q4/26, ponto de partida, R$ 3,8 mil; Q1/27 R$ 52,4 mil; Q2/27 R$ 159,0 mil; Q3/27 R$ 351,5 mil; Q4/27 R$ 586,4 mil. De Q1 para Q4, o faturamento projetado cresce 11,2 vezes. São valores de planejamento, não realizados.',
    ...premiseNotes,
    premiseSource
  ],
  html:`<div class="fin-page scenario-page scenario-bootstrap sx-bootstrap sx-base-page">
    ${header('Projeções · próxima etapa de crescimento','Construímos a base. <span class="grad-text">Agora é hora de escalar.</span>')}
    <div class="sx-boot-hero rv">
      <p class="scenario-metric-label">EBITDA projetado · 2027</p>
      <p class="scenario-amount">~R$ <span class="count" data-to="${pitchPremises.ebitda2027.pre/1000}">${pitchPremises.ebitda2027.pre/1000}</span><span class="scenario-unit">mil</span></p>
      <p class="scenario-state"><i></i>Projeção, sujeita à validação das premissas.</p>
    </div>
    <section class="sx-plan-motion rv" style="--d:1">
      <div class="sx-plan-copy"><span>Sem investimento externo</span><b>Feito com<br><em>capital próprio.</em></b></div>
      <div class="sx-plan-graph">
        <div class="sx-plan-labels"><span>Plataforma</span><span>MVP</span><span>Escala</span></div>
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
      <p class="sx-quarter-note">Valores de planejamento, não realizados.</p>
    </section>
    <div class="sx-base rv" style="--d:3">
      <span class="sx-boot-caption">A base que já existe</span>
      <ul>
        <li><svg class="ico" aria-hidden="true"><use href="#i-check"></use></svg>Plataforma construída com recursos próprios</li>
        <li><svg class="ico" aria-hidden="true"><use href="#i-check"></use></svg>MVP em operação e validação comercial</li>
        <li><svg class="ico" aria-hidden="true"><use href="#i-check"></use></svg>Plano de crescimento e de capital estruturado</li>
      </ul>
    </div>
    <div class="scenario-quote sx-boot-quote rv" style="--d:4"><p>O investimento acelera<br><span class="grad-text">o que já foi construído.</span></p></div>
    ${foot('EBITDA e faturamento de 2027 são projeções da gestão, não resultados realizados. Indicadores distintos.')}
  </div>`
};
