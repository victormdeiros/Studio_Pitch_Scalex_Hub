// Capa do pitch resumido, com a mesma direção de arte da apresentação completa.
import base from '../slides/01-capa.mjs';

const html=base.html
  .replace('ScaleX Hub · 2026','ScaleX Hub · Pitch para investidores')
  .replace('Apresentação para investidores','Pitch para investidores · 7 minutos')
  .replace('</p>\n      </div>\n      <div class="cover-mark','</p>\n        <div class="cover-badge rv" style="--d:3"><i></i>17 slides · 7 minutos</div>\n      </div>\n      <div class="cover-mark');

export default {
  ...base,
  id:'resumo-capa',
  title:'A tecnologia por trás de quem vende tecnologia.',
  notes:[
    'TEMPO ALVO: 20 segundos',
    'ABERTURA',
    'Somos a ScaleX Hub: a infraestrutura de IA de quem vende IA. Em sete minutos: por que existimos, como funciona, o mercado, a tração, a projeção para 2027 e o que propomos ao investidor: 10% por R$ 300 mil.'
  ],
  html
};
