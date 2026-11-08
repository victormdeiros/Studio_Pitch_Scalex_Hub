// Slide 2 do pitch: a dor real, reduzida ao essencial.
export default {
  id:'resumo-origem',
  title:'Nascemos de uma dor real.',
  theme:'dark',
  number:'02',
  notes:[
    'TEMPO ALVO: 40 segundos',
    'Antes de ser plataforma, fomos agência (Hub ConverseIA). Foram dois anos vendendo automação de atendimento humanizada com agentes de IA. Na prática, a IA atendia onde o cliente já estava — WhatsApp, Instagram e site — com contexto, tom natural, memória da conversa e passagem para o time humano quando necessário. E executava nas ferramentas que o cliente já usava: CRM, agenda e ERP. Tentamos centralizar, executar com velocidade e escalar. Cada cliente novo exigia um workspace novo, com cerca de 10 ferramentas diferentes: 10 acessos, 10 cobranças e 10 pontos de falha. Foi aí que a conta não fechou. Antes de construir a solução, nós éramos o cliente.'
  ],
  html:`
    <div class="dor">
      <header class="dor-head">
        <p class="kicker rv" style="--d:0"><span class="k-line"></span><svg class="ico" aria-hidden="true"><use href="#i-route"></use></svg>01 — A dor do mercado</p>
        <h2 class="dor-title rv" style="--d:1">Nascemos de <span class="grad-text">uma dor real.</span></h2>
      </header>

      <div class="dor-grid">
        <article class="dor-card rv" style="--d:2">
          <span class="dor-n">01</span>
          <span class="dor-ico"><svg class="ico" aria-hidden="true"><use href="#i-briefcase"></use></svg></span>
          <h3>Agência Hub ConverseIA</h3>
          <p>Dois anos vendendo automação de atendimento para empresas.</p>
        </article>
        <article class="dor-card rv" style="--d:3">
          <span class="dor-n">02</span>
          <span class="dor-ico"><svg class="ico" aria-hidden="true"><use href="#i-bot"></use></svg></span>
          <h3>O propósito era claro</h3>
          <p>Levar atendimento humanizado com agentes de IA para a operação.</p>
        </article>
        <article class="dor-card rv" style="--d:4">
          <span class="dor-n">03</span>
          <span class="dor-ico"><svg class="ico" aria-hidden="true"><use href="#i-trend"></use></svg></span>
          <h3>Tentamos centralizar, executar e escalar</h3>
          <p>Cada cliente novo pedia um workspace novo. O trabalho crescia junto.</p>
        </article>
      </div>

      <section class="dor-ev rv" style="--d:5" aria-label="Como o propósito funcionava na prática">
        <p class="dor-ev-cap"><svg class="ico" aria-hidden="true"><use href="#i-route"></use></svg>O propósito na prática</p>
        <div class="dor-ev-row">
          <div class="dor-ev-side">
            <span class="dor-ev-lbl">Canais</span>
            <div class="dor-ev-chips">
              <span class="dorchip"><svg class="ico" aria-hidden="true"><use href="#i-message"></use></svg>WhatsApp</span>
              <span class="dorchip"><svg class="ico" aria-hidden="true"><use href="#i-megaphone"></use></svg>Instagram</span>
              <span class="dorchip"><svg class="ico" aria-hidden="true"><use href="#i-globe"></use></svg>Site</span>
            </div>
          </div>
          <span class="dor-ev-wire" aria-hidden="true"><i><b>conversa</b></i></span>
          <div class="dor-ev-core">
            <span class="dor-ev-orb"><svg class="ico" aria-hidden="true"><use href="#i-spark"></use></svg></span>
            <div class="dor-ev-copy"><b>IA humanizada</b><small>contexto · tom natural · memória · handoff</small></div>
          </div>
          <span class="dor-ev-wire" aria-hidden="true"><i><b>executa</b></i></span>
          <div class="dor-ev-side right">
            <span class="dor-ev-lbl">Ferramentas</span>
            <div class="dor-ev-chips">
              <span class="dorchip"><svg class="ico" aria-hidden="true"><use href="#i-database"></use></svg>CRM</span>
              <span class="dorchip"><svg class="ico" aria-hidden="true"><use href="#i-calendar"></use></svg>Agenda</span>
              <span class="dorchip"><svg class="ico" aria-hidden="true"><use href="#i-layers"></use></svg>ERP</span>
            </div>
          </div>
        </div>
      </section>

      <div class="dor-turn rv" style="--d:6">
        <span class="dor-line"></span>
        <p>Foi aí que <span class="grad-text">a conta não fechou.</span></p>
        <span class="dor-line"></span>
      </div>
    </div>`
};
