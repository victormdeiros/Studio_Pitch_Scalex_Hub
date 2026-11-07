// Slide 11 do pitch: projeção 2027 com os números do PPTX.
import base from '../slides/13-projecoes.mjs';

const html=base.html
  .replace('Crescimento projetado em bootstrap','R$ 1,32 mi em 2027, ainda em bootstrap')
  .replace('data-to="380.3" data-decimals="1">380,3','data-to="528.2" data-decimals="1">528,2')
  .replace('Resultado líquido acumulado de Q4/26 a Q4/27','Resultado líquido em 2027')
  .replace('data-to="35" data-decimals="0">35','data-to="40" data-decimals="0">40')
  .replace('Margem líquida no Q4/27','Margem líquida em 2027')
  .replace('<div class="kpi rv" style="--d:5"><p class="v"><span class="count" data-to="40" data-decimals="0">40</span>%</p><p class="l">Margem líquida em 2027</p></div>','<div class="kpi rv" style="--d:5"><p class="v"><span class="count" data-to="40" data-decimals="0">40</span>%</p><p class="l">Margem líquida em 2027</p></div><div class="kpi rv" style="--d:6"><p class="v">≈<span class="count" data-to="59" data-decimals="0">59</span></p><p class="l">revendedores no Q4/27 a R$ 3.500/mês</p></div>')
  .replace('Q4/26 a Q4/27. Projeções. Resultado líquido = faturamento × margem líquida. Projeção interna; não é guidance.','Projeções. Resultado líquido = faturamento × margem líquida. Projeção interna; não é guidance.');

export default {
  ...base,
  id:'resumo-projecao',
  title:'R$ 1,32 mi em 2027, ainda em bootstrap.',
  notes:[
    'TEMPO ALVO: 40 segundos',
    'Mesmo sem aporte, projetamos R$ 1,32 milhão de faturamento em 2027, com margem líquida estimada de 40%: cerca de R$ 528 mil de resultado. Para chegar ao último trimestre, precisamos de cerca de 59 revendedores ativos, menos de 1% do mercado que mapeamos para 2029.'
  ],
  html
};
