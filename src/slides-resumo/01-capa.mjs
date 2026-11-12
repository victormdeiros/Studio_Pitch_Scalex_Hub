// Capa do pitch resumido, com a mesma direção de arte da apresentação completa.
import base from '../slides/01-capa.mjs';

const html=base.html
  .replace('ScaleX Hub · 2026','ScaleX Hub · Pitch para investidores')
  .replace('Apresentação para investidores','Pitch para investidores')
  .replace('Scale • Execute • Centralize','Centralize • Execute • Scale')
  .replace('</p>\n      </div>\n      <div class="cover-mark','</p>\n        <div class="cover-badge rv" style="--d:3"><i></i>Victor Medeiros · Fundador e criador</div>\n      </div>\n      <div class="cover-mark');

export default {
  ...base,
  id:'resumo-capa',
  title:'A tecnologia por trás de quem vende tecnologia.',
  notes:[
    'TEMPO ALVO: 10 segundos',
    'ABERTURA',
    'Sou Victor, fundador e criador da ScaleX Hub.'
  ],
  html
};
