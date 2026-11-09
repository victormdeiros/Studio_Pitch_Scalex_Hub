import {quarterly, projectionNotes, source, nr} from '../financials.mjs';
import {header, foot, metric} from '../financial-components.mjs';
export default {
  id:'slide-8', title:'Bootstrap: eficiência projetada até Q4/27.', theme:'dark', number:'',
  notes:['TEMPO ALVO: 45 segundos', 'O cenário bootstrap projeta EBITDA consolidado de R$ 355,6 mil em 2027, margem EBITDA de 38% no Q4 e resultado líquido anual de R$ 324,8 mil. Ticket e churn são premissas do modelo, com periodicidade a confirmar.', ...projectionNotes, source],
  html:`<div class="fin-page">${header('Projeções · bootstrap','Eficiência projetada <span class="grad-text">até Q4/27.</span>','Cenário pré-money · indicadores de planejamento, sem resultados realizados.')}
  <div class="fin-body fin-split"><div class="fin-chart-card"><div class="fin-chart-caption"><b>EBITDA por trimestre · R$ mil</b></div><div class="fin-annual fin-quarterly" role="img" aria-label="EBITDA projetado: Q4/26 zero; Q1/27 5 mil; Q2/27 34,2 mil; Q3/27 96,9 mil; Q4/27 219,5 mil.">${quarterly.map(q=>`<div class="fin-year"><div class="fin-pair"><div class="fin-bar post" style="--height:${q.ebitda/240000*100}%"><b>${nr(q.ebitda/1000,1)}</b></div></div><span>${q.period}</span></div>`).join('')}</div><p class="fin-chart-note">Q4/26 é ponto de partida; o consolidado de 2027 soma Q1–Q4/27.</p></div>
  <aside class="fin-metrics">${metric('R$ 355,6 mil','EBITDA projetado · 2027','Soma dos quatro trimestres.')}${metric('R$ 324,8 mil','Resultado líquido · 2027','R$ 324.805,29 na soma anual.')}${metric('38%','Margem EBITDA · Q4/27','Margem líquida: 35%.')}</aside></div>
  <div class="fin-strip">${metric('R$ 1.200 → R$ 3.600','Ticket médio projetado')}${metric('4,17% → 1,50%','Churn projetado')}${metric('55% → 75%','Margem bruta projetada')}</div>
  ${foot('Fonte: PDF corrigido, p. 4 · Q4/26–Q4/27. Periodicidade de ticket e churn a confirmar. “FAT BOM” não é classificado como receita. Valores projetados.')}</div>`
};
