// Slide 2 do pitch: a dor real, reduzida ao essencial.
export default {
  id:'resumo-origem',
  title:'Nascemos de uma dor real.',
  theme:'dark',
  number:'02',
  notes:[
    'TEMPO ALVO: 20 segundos',
    'Entre 2024 e 2025, automatizamos o atendimento de mais de 70 empresas. O propósito: usar inteligência artificial para centralizar, automatizar e humanizar o atendimento e o relacionamento com clientes — integrando canais de comunicação, redes sociais, ferramentas de gestão, métricas e processos em uma experiência centralizada, intuitiva e realmente utilizada pelas equipes. Depois de dois anos, foi aí que a conta não fechou.',
    'Apoio: a operação anterior era a agência Hub ConverseIA. As 70 empresas são clientes de serviço dessa operação (cerca de 20 em 2024 e 50 em 2025), não clientes pagantes da plataforma SaaS.'
  ],
  html:`
    <div class="dor">
      <header class="dor-head">
        <p class="kicker rv" style="--d:0"><span class="k-line"></span><svg class="ico" aria-hidden="true"><use href="#i-route"></use></svg>Nossa origem</p>
        <h2 class="dor-title rv" style="--d:1">Nascemos de <span class="grad-text">uma dor real.</span></h2>
      </header>

      <div class="dor-grid two">
        <article class="dor-card big rv" style="--d:2">
          <span class="dor-n">01 · Nossa experiência</span>
          <span class="dor-ico"><svg class="ico" aria-hidden="true"><use href="#i-briefcase"></use></svg></span>
          <h3><b class="grad-text">+70</b> empresas</h3>
          <p>Atendimento automatizado entre 2024 e 2025.</p>
        </article>
        <article class="dor-card big rv" style="--d:3">
          <span class="dor-n">02 · Nosso propósito</span>
          <span class="dor-ico"><svg class="ico" aria-hidden="true"><use href="#i-bot"></use></svg></span>
          <h3>Centralizar, automatizar <span class="grad-text">e humanizar.</span></h3>
          <p>IA no atendimento e no relacionamento com clientes.</p>
        </article>
      </div>

      <section class="dor-ev rv" style="--d:5" aria-label="Como o propósito funcionava na prática">
        <p class="dor-ev-cap"><svg class="ico" aria-hidden="true"><use href="#i-route"></use></svg>Canais, gestão e métricas em um só lugar</p>
        <div class="dor-ev-row">
          <div class="dor-ev-side">
            <span class="dor-ev-lbl">Canais</span>
            <div class="dor-ev-chips">
              <span class="dorchip"><svg class="ico" aria-hidden="true"><use href="#i-message"></use></svg>WhatsApp</span>
              <span class="dorchip"><svg class="ico" aria-hidden="true"><use href="#i-megaphone"></use></svg>Instagram</span>
              <span class="dorchip"><svg class="ico" aria-hidden="true"><use href="#i-globe"></use></svg>Site</span>
            </div>
          </div>
          <span class="dor-ev-wire" aria-hidden="true"><i><b>centraliza</b></i></span>
          <div class="dor-ev-core">
            <span class="dor-ev-orb"><svg class="ico" aria-hidden="true"><use href="#i-spark"></use></svg></span>
            <div class="dor-ev-copy"><b>IA humanizada</b><small>uma experiência só</small></div>
          </div>
          <span class="dor-ev-wire" aria-hidden="true"><i><b>automatiza</b></i></span>
          <div class="dor-ev-side right">
            <span class="dor-ev-lbl">Gestão</span>
            <div class="dor-ev-chips">
              <span class="dorchip"><svg class="ico" aria-hidden="true"><use href="#i-database"></use></svg>CRM</span>
              <span class="dorchip"><svg class="ico" aria-hidden="true"><use href="#i-calendar"></use></svg>Agenda</span>
              <span class="dorchip"><svg class="ico" aria-hidden="true"><use href="#i-chart"></use></svg>Métricas</span>
            </div>
          </div>
        </div>
      </section>

      <div class="dor-turn rv" style="--d:6">
        <span class="dor-line"></span>
        <p>Depois de dois anos, foi aí que <span class="grad-text">a conta não fechou.</span></p>
        <span class="dor-line"></span>
      </div>
    </div>`
};
