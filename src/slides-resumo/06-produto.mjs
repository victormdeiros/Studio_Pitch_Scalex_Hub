// Slide 6 do pitch: white-label + jornada completa + centralidade (tempo e dinheiro).
export default {
  id:'resumo-produto',
  title:'Sua marca, sua operação. Um só lugar.',
  theme:'dark',
  number:'',
  notes:[
    'TEMPO ALVO: 50 segundos',
    'A agência coloca a própria marca, define planos e gerencia os workspaces dos clientes. O cliente direto economiza tempo de implantação: a operação já nasce pronta, sem desenvolvimento. O cliente indireto economiza dinheiro: contrata uma operação completa com a marca do parceiro, sem montar a stack. E a jornada comercial inteira — captura, prospecção, atendimento, follow-up, oportunidades, proposta e reunião — roda em um só lugar.'
  ],
  html:`
    <div class="rp">
      <header class="rp-head">
        <p class="kicker rv" style="--d:0"><span class="k-line"></span><svg class="ico" aria-hidden="true"><use href="#i-layers"></use></svg>05 · O produto</p>
        <h2 class="rp-title rv" style="--d:1">Sua marca. Sua operação. <span class="grad-text">Um só lugar.</span></h2>
        <p class="rp-sub rv" style="--d:2">White-label para o parceiro. Operação pronta para o cliente final.</p>
      </header>

      <div class="rp-top">
        <div class="rp-ui rv" style="--d:3">
          <div class="rp-mock">
            <div class="rp-bar"><i></i><i></i><i></i><span>Sua marca</span></div>
            <div class="rp-brand"><b>S</b><div><strong>Sua marca</strong><em>identidade própria</em></div></div>
            <div class="rp-dots"><i></i><i></i><i></i><i></i></div>
            <div class="rp-field"><span>Domínio</span><b>app.suamarca.com.br</b></div>
            <div class="rp-preview"><i></i><i></i><i></i></div>
          </div>
          <div class="rp-mock">
            <div class="rp-bar"><i></i><i></i><i></i><span>Planos de workspace</span></div>
            <div class="rp-plan"><b>Starter</b><span>até 5 usuários</span></div>
            <div class="rp-plan"><b>Pro</b><span>até 20 usuários</span></div>
            <div class="rp-plan"><b>Enterprise</b><span>ilimitado</span></div>
            <div class="rp-note">Limites por usuário, agentes e módulos.</div>
            <div class="rp-preview"><i></i><i></i><i></i></div>
          </div>
          <div class="rp-mock">
            <div class="rp-bar"><i></i><i></i><i></i><span>Meus workspaces</span></div>
            <div class="rp-client"><i>A</i><b>Cliente A</b><span>Ativo</span></div>
            <div class="rp-client"><i>B</i><b>Cliente B</b><span>Ativo</span></div>
            <div class="rp-client"><i>C</i><b>Cliente C</b><span>Ativo</span></div>
            <div class="rp-note">Agentes e automação por workspace.</div>
            <div class="rp-preview"><i></i><i></i><i></i></div>
          </div>
        </div>

        <div class="rp-benefits">
          <article class="rp-benefit time rv" style="--d:4">
            <span class="rp-bico"><svg class="ico" aria-hidden="true"><use href="#i-clock"></use></svg></span>
            <div><b>Cliente direto ganha tempo</b><p>Implantação sem desenvolvimento. A operação já nasce pronta para revender.</p></div>
          </article>
          <article class="rp-benefit money rv" style="--d:5">
            <span class="rp-bico"><svg class="ico" aria-hidden="true"><use href="#i-banknote"></use></svg></span>
            <div><b>Cliente indireto ganha dinheiro</b><p>Não monta stack. Contrata uma operação completa com a marca do parceiro.</p></div>
          </article>
        </div>
      </div>

      <div class="rp-journey rv" style="--d:6">
        <div class="s2j-step"><span class="s2j-node">1</span><span class="s2j-ico"><svg class="ico" aria-hidden="true"><use href="#i-target"></use></svg></span><h3>Captura</h3><p>origem e tracking</p></div>
        <div class="s2j-step"><span class="s2j-node">2</span><span class="s2j-ico"><svg class="ico" aria-hidden="true"><use href="#i-search"></use></svg></span><h3>Prospecção</h3><p>ativa ou passiva</p></div>
        <div class="s2j-step"><span class="s2j-node">3</span><span class="s2j-ico"><svg class="ico" aria-hidden="true"><use href="#i-message"></use></svg></span><h3>Atendimento</h3><p>humanizado</p></div>
        <div class="s2j-step"><span class="s2j-node">4</span><span class="s2j-ico"><svg class="ico" aria-hidden="true"><use href="#i-repeat"></use></svg></span><h3>Follow-up</h3><p>no melhor momento</p></div>
        <div class="s2j-step"><span class="s2j-node">5</span><span class="s2j-ico"><svg class="ico" aria-hidden="true"><use href="#i-chart"></use></svg></span><h3>Oportunidades</h3><p>funil e scoring</p></div>
        <div class="s2j-step"><span class="s2j-node">6</span><span class="s2j-ico"><svg class="ico" aria-hidden="true"><use href="#i-file"></use></svg></span><h3>Proposta</h3><p>personalizada</p></div>
        <div class="s2j-step"><span class="s2j-node">7</span><span class="s2j-ico"><svg class="ico" aria-hidden="true"><use href="#i-calendar"></use></svg></span><h3>Reunião</h3><p>confirmação</p></div>
      </div>

      <div class="rp-stack rv" style="--d:7">
        <span class="rp-stack-label">Tudo conectado</span>
        <span><svg class="ico" aria-hidden="true"><use href="#i-message"></use></svg>WhatsApp</span>
        <span><svg class="ico" aria-hidden="true"><use href="#i-message"></use></svg>Telegram</span>
        <span><svg class="ico" aria-hidden="true"><use href="#i-message"></use></svg>Instagram</span>
        <span><svg class="ico" aria-hidden="true"><use href="#i-users"></use></svg>CRM</span>
        <span><svg class="ico" aria-hidden="true"><use href="#i-calendar"></use></svg>Agenda</span>
        <span><svg class="ico" aria-hidden="true"><use href="#i-workflow"></use></svg>Automação</span>
        <span><svg class="ico" aria-hidden="true"><use href="#i-chart"></use></svg>Insights</span>
      </div>

      <p class="rp-impact rv" style="--d:8">Menos tempo montando. <span>Menos dinheiro contratando.</span></p>
      <p class="rp-foot rv" style="--d:8">Canais: WhatsApp · Telegram · Instagram &nbsp;·&nbsp; CRM · Agenda · Automação · Insights</p>
    </div>`
};
