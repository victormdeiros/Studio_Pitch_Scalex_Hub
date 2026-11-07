// Slide 2 do pitch: origem + fragmentação, condensados em uma única cena.
export default {
  id:'resumo-origem',
  title:'Nascemos de uma dor real. Escalávamos trabalho, não tecnologia.',
  theme:'dark',
  number:'01',
  notes:[
    'TEMPO ALVO: 45 segundos',
    'Antes de ser plataforma, fomos agência (Hub ConverseIA). Foram dois anos vendendo automação de atendimento humanizada com agentes de IA. Tentamos centralizar, executar com velocidade e escalar. Mas cada cliente novo exigia um workspace novo, com cerca de 10 ferramentas diferentes: 10 acessos, 10 cobranças e 10 pontos de falha. Crescer significava mais trabalho manual, não mais tecnologia.'
  ],
  html:`
    <div class="ro">
      <header class="ro-head">
        <p class="kicker rv" style="--d:0"><span class="k-line"></span><svg class="ico" aria-hidden="true"><use href="#i-route"></use></svg>01 · A dor do mercado e como começamos</p>
        <h2 class="ro-title rv" style="--d:1">Nascemos de uma dor real. <span class="grad-text">Escalávamos trabalho, não tecnologia.</span></h2>
        <p class="ro-sub rv" style="--d:2">Dois anos como agência de automação de atendimento. O desafio nunca foi criar IA: era implantar, operar e escalar cada cliente.</p>
      </header>

      <div class="ro-grid">
        <div class="ro-story">
          <div class="ro-step rv" style="--d:3">
            <span class="ro-n">01</span>
            <div><h3>Agência Hub ConverseIA</h3><p>Dois anos vendendo automação de atendimento para empresas.</p></div>
          </div>
          <div class="ro-step rv" style="--d:4">
            <span class="ro-n">02</span>
            <div><h3>O propósito era claro</h3><p>Levar atendimento humanizado com agentes de IA para a operação.</p></div>
          </div>
          <div class="ro-step rv" style="--d:5">
            <span class="ro-n">03</span>
            <div><h3>Tentamos centralizar, executar e escalar</h3><p>Cada cliente novo pedia um workspace novo. O trabalho crescia junto.</p></div>
          </div>
          <p class="ro-turn rv" style="--d:6">Foi aí que a conta não fechou:</p>
          <p class="ro-quote rv" style="--d:7">“Antes de construir a solução, <span>nós éramos o cliente.</span>”</p>
        </div>

        <aside class="ro-cost rv" style="--d:5">
          <p class="ro-cost-label">Custo escondido da operação fragmentada</p>
          <div class="ro-cost-main">
            <p class="ro-ten">10</p>
            <div class="ro-cost-list">
              <div><b>acessos</b><span>diferentes</span></div>
              <div><b>cobranças</b><span>mensais</span></div>
              <div><b>pontos de falha</b><span>na operação</span></div>
            </div>
          </div>
          <div class="ro-chips" aria-label="Ferramentas da operação fragmentada">
            <span><svg class="ico" aria-hidden="true"><use href="#i-database"></use></svg>CRM</span>
            <span><svg class="ico" aria-hidden="true"><use href="#i-workflow"></use></svg>Automação</span>
            <span><svg class="ico" aria-hidden="true"><use href="#i-chart"></use></svg>Dashboards</span>
            <span><svg class="ico" aria-hidden="true"><use href="#i-message"></use></svg>Omnichannel</span>
            <span><svg class="ico" aria-hidden="true"><use href="#i-bot"></use></svg>Agentes de IA</span>
            <span><svg class="ico" aria-hidden="true"><use href="#i-target"></use></svg>Tracking</span>
          </div>
        </aside>
      </div>

      <p class="ro-takeaway rv" style="--d:7">Mais clientes = mais integrações = <span>mais complexidade.</span></p>
    </div>`
};
