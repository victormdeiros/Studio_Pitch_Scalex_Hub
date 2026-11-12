// Slide 14 do pitch: a trajetória — clientes reais e capital próprio, com fatos e estimativas separados.
import {pitchPremises, premiseNotes} from '../pitch-premises.mjs';
import {brl} from '../financials.mjs';

const revenue=year=>brl(pitchPremises.history.find(h=>h.year===year).revenue/1000)+' mil';
// Clientes que validaram o MVP da plataforma em 2026, informado pelo fundador.
const mvpClients=10;

export default {
  id:'resumo-tracao',
  title:'Crescemos com clientes reais e capital próprio.',
  theme:'light',
  number:'14',
  notes:[
    'TEMPO ALVO: 20 segundos',
    'Antes de escalar a plataforma, validamos o problema na prática, atendendo mais de 70 empresas. Em 2024, aproximadamente 20 empresas atendidas e experiência prática na implementação de automações. Em 2025, aproximadamente 50 empresas atendidas e faturamento de R$ 300 mil. Em 2026, construímos a plataforma ScaleX Hub com capital próprio e validamos o MVP com 10 clientes. Demos um passo para trás para ganhar a corrida lá na frente.',
    'Faturamento estimado de 2026: R$ 200 mil. O ano foi dedicado à construção e consolidação da plataforma, desenvolvida com capital próprio.',
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
          <div class="rtr-top"><b>2026</b><span class="rtr-tag est">MVP validado</span></div>
          <p class="rtr-n"><b${mvpClients?'':' class="rtr-todo"'}>${mvpClients??'nº'}</b><span>clientes validaram o MVP da plataforma</span></p>
          <p class="rtr-d"><strong>Plataforma feita com capital próprio.</strong></p>
          <p class="rtr-s">Faturamento estimado: ${revenue(2026)}</p>
        </article>
      </div>

      <div class="rtr-msg rv" style="--d:5">
        <p>Demos um passo para trás <span class="grad-text">para ganhar a corrida lá na frente.</span></p>
      </div>
      <p class="rtr-foot rv" style="--d:6">2024 e 2025: empresas atendidas na operação anterior, de serviço. 2026: clientes que validaram o MVP da plataforma.</p>
    </div>`
};
