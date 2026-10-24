// Slide 5 · o problema estrutural: falta infraestrutura como serviço e os fluxos por nós quebram.
export default {
  id: 'slide-infra',
  title: 'O mercado entrega blocos. Falta a infraestrutura.',
  theme: 'dark',
  number: '03',
  notes: [
    'TEMPO ALVO: 35 segundos',
    'ROTEIRO FALADO',
    'O mercado resolve o problema com SaaS pontual e construtores de fluxo. Cada ferramenta cobre um bloco; cada ligação entre blocos é um nó que alguém precisa desenhar, testar e manter. O conhecimento fica no diagrama, não na operação. Quando uma API muda, o fluxo inteiro para. E cada cliente novo exige um diagrama novo. O que falta não é mais uma ferramenta: é infraestrutura como serviço, uma base pronta para operar, manter e revender por baixo dos blocos.',
    'APOIO PARA PERGUNTAS',
    'O diagrama é ilustrativo de um fluxo típico de automação por nós. “API mudou” representa qualquer dependência externa que quebra a cadeia.',
    'Infraestrutura como serviço, no contexto do pitch: a camada que já entrega operação, workspace, white-label e manutenção, em vez de obrigar a agência a montar e sustentar o fluxo de cada cliente.',
    'Fonte: conteúdo e roteiro fornecidos na conversa “Informações para investidores”, 30/09/2026. https://chatgpt.com/c/6abd1706-583c-83e9-bc91-7f70a6104b7a'
  ],
  html: `
    <div class="infra">
      <header class="infra-head">
        <p class="kicker rv" style="--d:0"><span class="k-line"></span><svg class="ico" aria-hidden="true"><use href="#i-layers"></use></svg>O problema · infraestrutura</p>
        <h2 class="h2 rv" style="--d:1">O mercado entrega blocos. <span class="grad-text">Falta a infraestrutura.</span></h2>
        <p class="lead rv" style="--d:2">SaaS pontual resolve partes. Construtores de fluxo conectam as partes. Nenhum dos dois entrega a base para quem revende IA.</p>
      </header>

      <ul class="infra-points">
        <li class="rv" style="--d:3"><span class="ip-ico"><svg class="ico" aria-hidden="true"><use href="#i-layers"></use></svg></span><div><b>SaaS pontual</b><p>Cada ferramenta cobre um bloco. Integrar, manter e operar continua sendo trabalho da agência.</p></div></li>
        <li class="rv" style="--d:4"><span class="ip-ico"><svg class="ico" aria-hidden="true"><use href="#i-workflow"></use></svg></span><div><b>Fluxo sob medida</b><p>O conhecimento fica no diagrama de nós. Cada cliente novo pede um fluxo novo.</p></div></li>
        <li class="rv" style="--d:5"><span class="ip-ico"><svg class="ico" aria-hidden="true"><use href="#i-trend-down"></use></svg></span><div><b>Operação frágil</b><p>Um nó alterado ou uma API que muda derruba a cadeia inteira.</p></div></li>
      </ul>

      <div class="infra-graph infra-noise rv" style="--d:4" aria-hidden="true">
        <div class="infra-bar">
          <span class="ib-dots"><i></i><i></i><i></i></span>
          <span class="ib-title">Flow builder · cliente X</span>
          <span class="ib-state"><i></i>4 nós parados</span>
        </div>
        <div class="infra-canvas">
          <svg class="infra-edges" viewBox="0 0 600 416">
            <path class="live" d="M112 173H142"/>
            <path class="cut" d="M254 173H266"/>
            <path class="cut" d="M278 173H288"/>
            <path class="down" d="M400 173C430 173 432 53 460 53"/>
            <path class="down" d="M400 173H460"/>
            <path class="down" d="M400 173C430 173 432 293 460 293"/>
            <circle class="port" cx="112" cy="173" r="2.6"/>
            <circle class="port" cx="142" cy="173" r="2.6"/>
            <circle class="port" cx="254" cy="173" r="2.6"/>
            <circle class="port" cx="288" cy="173" r="2.6"/>
            <circle class="port" cx="400" cy="173" r="2.6"/>
            <circle class="port" cx="460" cy="53" r="2.6"/>
            <circle class="port" cx="460" cy="173" r="2.6"/>
            <circle class="port" cx="460" cy="293" r="2.6"/>
            <path class="cross" d="m264 167 10 12m0-12-10 12"/>
            <text class="cut-label" x="228" y="153">API mudou</text>
          </svg>

          <div class="flow-node rv" style="--d:5;left:0;top:150px"><span class="fn-ico"><svg class="ico"><use href="#i-arrow"></use></svg></span><b>Entrada</b><em>trigger</em></div>
          <div class="flow-node rv" style="--d:6;left:142px;top:150px"><span class="fn-ico"><svg class="ico"><use href="#i-database"></use></svg></span><b>CRM</b><em>dados</em></div>
          <div class="flow-node down rv" style="--d:7;left:288px;top:150px"><span class="fn-ico"><svg class="ico"><use href="#i-bot"></use></svg></span><b>IA</b><em>modelo</em></div>
          <div class="flow-node down rv" style="--d:8;left:460px;top:30px"><span class="fn-ico"><svg class="ico"><use href="#i-message"></use></svg></span><b>WhatsApp</b><em>canal</em></div>
          <div class="flow-node down rv" style="--d:8;left:460px;top:150px"><span class="fn-ico"><svg class="ico"><use href="#i-repeat"></use></svg></span><b>Follow-up</b><em>tempo</em></div>
          <div class="flow-node down rv" style="--d:9;left:460px;top:270px"><span class="fn-ico"><svg class="ico"><use href="#i-chart"></use></svg></span><b>Dashboard</b><em>BI</em></div>

          <div class="infra-gap">
            <span class="ig-left"><svg class="ico"><use href="#i-lock"></use></svg>Infraestrutura como serviço</span>
            <span class="ig-right">não existe pronta no mercado</span>
          </div>
        </div>
      </div>

      <p class="infra-takeaway rv" style="--d:7">O que falta não é mais um bloco. <span>É a infraestrutura onde os blocos rodam.</span></p>
    </div>`
};
