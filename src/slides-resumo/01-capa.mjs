// Capa do pitch de 7 minutos (rótulo do PPTX).
import base from '../slides/01-capa.mjs';

const html=base.html
  .replace('ScaleX Hub · 2026','ScaleX Hub · Pitch para investidores')
  .replace('Apresentação para investidores','Pitch para investidores · 7 minutos');

export default {
  ...base,
  id:'resumo-capa',
  title:base.title,
  number:'',
  notes:[
    'TEMPO ALVO: 20 segundos',
    'ABERTURA',
    'Somos a ScaleX Hub: a infraestrutura de IA de quem vende IA. Em sete minutos: por que existimos, como funciona, o mercado, a tração, a projeção para 2027 e o que propomos ao investidor: 10% por R$ 300 mil.'
  ],
  html
};
