// Variante do slide de projeção para o pitch de 7 minutos (números do PPTX).
import base from '../slides/13-projecoes.mjs';

const html=base.html
  .replace('Crescimento projetado em bootstrap','R$ 1,32 mi em 2027, ainda em bootstrap')
  .replace('data-to="380.3" data-decimals="1">380,3','data-to="528.2" data-decimals="1">528,2')
  .replace('Resultado líquido acumulado de Q4/26 a Q4/27','Resultado líquido em 2027')
  .replace('data-to="35" data-decimals="0">35','data-to="40" data-decimals="0">40')
  .replace('Margem líquida no Q4/27','Margem líquida em 2027');

export default {
  ...base,
  id:'resumo-projecao',
  title:'R$ 1,32 mi em 2027, ainda em bootstrap',
  number:'06',
  notes:[
    'TEMPO ALVO: 40 segundos',
    'ROTEIRO FALADO',
    'Mesmo sem aporte, projetamos R$ 1,32 milhão de faturamento em 2027, com margem líquida estimada de 40%: cerca de R$ 528 mil de resultado. Para chegar ao último trimestre, precisamos de cerca de 59 revendedores ativos, menos de 1% do mercado que mapeamos para 2029. O plano é conservador frente ao mercado.',
    'APOIO PARA PERGUNTAS',
    'Base: receita mensal média do Q4/27 (R$ 206,7 mil) ÷ R$ 3.500 = aproximadamente 59 revendedores. Estimativa, não meta formal.',
    'Projeção interna da ScaleX Hub, cenário bootstrap, sem aporte. Não é guidance.'
  ],
  html
};
