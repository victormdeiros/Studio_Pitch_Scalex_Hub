// Slide 11 do pitch: projeção 2027 com os números do PPTX (slide 12).
import base from '../slides/13-projecoes.mjs';

const kpis = `<div class="s7-kpis">
      <div class="kpi rv" style="--d:3"><p class="v">R$ <span class="count" data-to="1.32" data-decimals="2">1,32</span> mi</p><p class="l">faturamento projetado em 2027</p></div>
      <div class="kpi alt rv" style="--d:4"><p class="v">≈ R$ <span class="count" data-to="528.2" data-decimals="1">528,2</span> mil</p><p class="l">resultado líquido 2027 · margem líquida estimada de 40%</p></div>
      <div class="kpi rv" style="--d:5"><p class="v">≈ <span class="count" data-to="59" data-decimals="0">59</span></p><p class="l">revendedores no Q4/27 a R$ 3.500/mês · 0,9% do SOM 2029</p></div>
    </div>`;

const maxis = `<div class="s7-maxis">
      <div class="maxi rv" style="--d:6"><p class="k">Ticket médio</p><p class="v">R$ 1.050 → 4.450</p></div>
      <div class="maxi rv" style="--d:7"><p class="k">Churn</p><p class="v">4,75% → 2,60%</p></div>
      <div class="maxi rv" style="--d:8"><p class="k">Margem bruta</p><p class="v">62,5% → 82,5%</p></div>
    </div>`;

const html = base.html
  .replace('<h2 class="h2 rv" style="--d:1">Crescimento projetado em bootstrap</h2>', '<h2 class="h2 rv" style="--d:1;font-size:40px;max-width:1080px">R$ 1,32 mi de faturamento em 2027, ainda em bootstrap</h2>')
  .replace(/<div class="s7-kpis">[\s\S]*?<\/div>\s*<\/div>/, kpis)
  .replace(/<div class="s7-maxis">[\s\S]*?<\/div>\s*<\/div>/, maxis)
  .replace('<p class="s7-foot rv" style="--d:9">Q4/26 a Q4/27. Projeções. Resultado líquido = faturamento × margem líquida. Projeção interna; não é guidance.</p>', '<p class="s7-foot rv" style="--d:9">Projeção interna; não é guidance. Premissas no anexo.</p>');

export default {
  ...base,
  id: 'resumo-projecao',
  title: 'R$ 1,32 mi de faturamento em 2027, ainda em bootstrap.',
  notes: [
    'TEMPO ALVO: 40 segundos',
    'Mesmo sem aporte, projetamos R$ 1,32 milhão de faturamento em 2027, com margem líquida estimada de 40%: cerca de R$ 528 mil de resultado. Para chegar ao último trimestre, precisamos de cerca de 59 revendedores ativos, menos de 1% do mercado que mapeamos para 2029. Ticket médio de R$ 1.050 a R$ 4.450, churn de 4,75% a 2,60% e margem bruta de 62,5% a 82,5%. Projeção interna; não é guidance.'
  ],
  html
};
