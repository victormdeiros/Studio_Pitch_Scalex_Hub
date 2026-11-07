// Slide 13 do pitch: papel do investidor e antecipação do plano.
import base from '../slides/16-antecipacao.mjs';

const smart=`</header>
    <div class="rs-smart rv" style="--d:2">
      <span class="rs-label">Smart money esperado</span>
      <span><svg class="ico" aria-hidden="true"><use href="#i-building"></use></svg>Enterprise</span>
      <span><svg class="ico" aria-hidden="true"><use href="#i-briefcase"></use></svg>SaaS B2B</span>
      <span><svg class="ico" aria-hidden="true"><use href="#i-route"></use></svg>Canais e parcerias</span>
      <span><svg class="ico" aria-hidden="true"><use href="#i-trend"></use></svg>Máquina comercial</span>
      <span><svg class="ico" aria-hidden="true"><use href="#i-shield"></use></svg>Governança</span>
    </div>`;

const html=base.html
  .replace('Cronograma','08 · O papel do investidor')
  .replace('O aporte antecipa o plano','Capital e rede antecipam o plano')
  .replace('</header>',smart);

export default {
  ...base,
  id:'resumo-investidor',
  title:'Capital e rede antecipam o plano.',
  notes:[
    'TEMPO ALVO: 25 segundos',
    'Buscamos mais que capital: acesso a empresas enterprise, experiência em venda B2B complexa, canais, apoio à máquina comercial e governança. Com o aporte, a execução começa já no Q4/26, antecipando o plano em 6 a 9 meses.'
  ],
  html
};
