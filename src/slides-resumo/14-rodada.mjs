// Variante do slide da rodada para o pitch de 7 minutos (proposta do PPTX).
import base from '../slides/14-rodada.mjs';

const html=base.html
  .replace('<p class="round-big rv" style="--d:2">10%</p>','<p class="round-big rv" style="--d:2">R$ 300 mil</p>')
  .replace('<p class="round-of rv" style="--d:3">da ScaleX Hub</p>','<p class="round-of rv" style="--d:3">por 10% da ScaleX Hub</p>')
  .replace('<b>R$ 2,88 mi</b>, com o pre-money da rodada abaixo desse indicativo.','<b>R$ 3,00 mi</b>, pré-money abaixo do valuation indicativo de ~R$ 3 mi.')
  .replace('Oferta de 10% da empresa. Valuation indicativo com o bootstrapping considerado; pre-money da rodada a negociar abaixo do indicativo. Indicativo interno; não é auditoria.','Oferta de 10% da ScaleX Hub por R$ 300 mil. Uso do capital: 50% comercial · 30% enterprise readiness · 20% founder full-time. Valuation indicativo de R$ 3,0 mi com o bootstrapping considerado. Indicativo interno; não é auditoria.');

export default {
  ...base,
  id:'resumo-rodada',
  title:'10% da ScaleX Hub por R$ 300 mil.',
  number:'07',
  notes:[
    'TEMPO ALVO: 30 segundos',
    'ROTEIRO FALADO',
    'Propomos 10% da ScaleX por R$ 300 mil, o que dá R$ 3 milhões pós-money e R$ 2,7 milhões pré-money, cerca de 1,2 vez a receita anualizada que projetamos para o fim de 2027. Metade do capital vai para a máquina comercial, 30% para preparar a plataforma para clientes enterprise e 20% para o founder em tempo integral.',
    'APOIO PARA PERGUNTAS',
    'Alocação sugerida: comercial 50% (R$ 150 mil); enterprise readiness 30% (R$ 90 mil); founder full-time 20% (R$ 60 mil). Percentuais a validar com o plano financeiro.',
    'Valuation indicativo interno, não é auditoria.'
  ],
  html
};
