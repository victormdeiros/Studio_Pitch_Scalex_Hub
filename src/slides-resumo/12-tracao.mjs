// Slide 12 do pitch: a trajetória — clientes reais e capital próprio, com fatos e estimativas separados.
import {pitchPremises, premiseNotes} from '../pitch-premises.mjs';
import {brl} from '../financials.mjs';

const revenue=year=>brl(pitchPremises.history.find(h=>h.year===year).revenue/1000)+' mil';

export default {
  id:'resumo-tracao',
  title:'Crescemos com clientes reais e capital próprio.',
  theme:'light',
  number:'12',
  notes:[
    'TEMPO ALVO: 20 segundos',
    'Antes de escalar a plataforma, validamos o problema na prática, atendendo mais de 70 empresas. Em 2024, aproximadamente 20 empresas atendidas e experiência prática na implementação de automações. Em 2025, aproximadamente 50 empresas atendidas e faturamento de R$ 300 mil. Em 2026, faturamento estimado de R$ 200 mil: um ano dedicado à construção e consolidação da plataforma ScaleX Hub, desenvolvida com capital próprio.',
    'As empresas atendidas em 2024 e 2025 são clientes da operação anterior, de serviço. Não são clientes pagantes da nova plataforma SaaS.',
    premiseNotes[0]
  ],
  html:`
    <div class="rtr">
      <header class="rtr-head">
        <p class="kicker rv" style="--d:0"><span class="k-line"></span><svg class="ico" aria-hidden="true"><use href="#i-trend"></use></svg>Tração · nossa trajetória</p>
        <h2 class="rtr-title rv" style="--d:1">Crescemos com clientes reais <span class="grad-text">e capital próprio.</span></h2>
      </header>

      <div class="rtr-years">
        <article class="rtr-year rv" style="--d:2">
          <div class="rtr-top"><b>2024</b><span class="rtr-tag">Realizado</span></div>
          <p class="rtr-n"><b>~20</b><span>empresas atendidas</span></p>
          <p class="rtr-d">Automação implementada na prática.</p>
        </article>
        <article class="rtr-year rv" style="--d:3">
          <div class="rtr-top"><b>2025</b><span class="rtr-tag">Realizado</span></div>
          <p class="rtr-n"><b>~50</b><span>empresas atendidas</span></p>
          <p class="rtr-d"><strong>${revenue(2025)}</strong> de faturamento.</p>
        </article>
        <article class="rtr-year build rv" style="--d:4">
          <div class="rtr-top"><b>2026</b><span class="rtr-tag est">Estimado</span></div>
          <p class="rtr-n"><b>${revenue(2026)}</b><span>de faturamento estimado</span></p>
          <p class="rtr-d">O ano de construir a plataforma. <strong>Com capital próprio.</strong></p>
        </article>
      </div>

      <div class="rtr-msg rv" style="--d:5">
        <b>+70</b>
        <p>Antes de escalar a plataforma, <span class="grad-text">validamos o problema na prática.</span></p>
      </div>
      <p class="rtr-foot rv" style="--d:6">Empresas atendidas na operação anterior, de serviço. Não são clientes pagantes da plataforma SaaS.</p>
    </div>`
};
