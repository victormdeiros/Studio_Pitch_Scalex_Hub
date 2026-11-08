// Slide 7 do pitch: a solução do problema 2 — as ferramentas convergem para uma plataforma.
export default {
  id:'resumo-solucao-ferramentas',
  title:'Solução 2: da dispersão a uma única plataforma.',
  theme:'dark',
  number:'07',
  notes:[
    'TEMPO ALVO: 45 segundos',
    'As mesmas dez ferramentas do problema convergem progressivamente para o centro. O que era um conjunto de logins, cobranças e pontos de falha se unifica no ScaleX Hub. Em vez de operar dez ferramentas desconectadas, o parceiro passa a operar um único ecossistema: white-label, multiworkspace e a operação inteira em um só lugar. O que antes exigia múltiplas ferramentas passa a ser centralizado.'
  ],
  html:`
    <div class="rsp">
      <header class="rsp-head">
        <p class="kicker rv" style="--d:0"><span class="k-line"></span><svg class="ico" aria-hidden="true"><use href="#i-layers"></use></svg>Solução 02</p>
        <h2 class="rsp-title rv" style="--d:1">Da dispersão a <span class="grad-text">uma única plataforma.</span></h2>
        <p class="rsp-sub rv" style="--d:2">As mesmas dez ferramentas. Um só ecossistema. A operação inteira conectada.</p>
      </header>

      <div class="rsp-stage">
        <div class="rsp-flow" aria-hidden="true">
          <svg class="rsp-edges" viewBox="0 0 1140 360">
            <g>
              <path d="M190 58C300 90 380 120 500 160"/>
              <path d="M410 43C450 100 480 130 510 160"/>
              <path d="M630 68C610 100 590 130 570 160"/>
              <path d="M850 40C760 90 690 130 610 165"/>
              <path d="M1070 62C900 100 780 130 640 170"/>
              <path d="M260 258C350 220 450 190 520 175"/>
              <path d="M480 278C510 230 540 200 565 180"/>
              <path d="M700 248C660 220 630 195 600 178"/>
              <path d="M920 283C800 240 700 200 620 182"/>
              <path d="M1140 253C940 230 800 200 650 185"/>
            </g>
          </svg>

          <div class="rsp-chip rv" style="--d:2;--i:0;--tx:465px;--ty:122px;left:20px;top:30px"><span class="rsp-ico"><svg class="ico"><use href="#i-database"></use></svg></span><b>CRM</b></div>
          <div class="rsp-chip rv" style="--d:3;--i:1;--tx:245px;--ty:137px;left:240px;top:15px"><span class="rsp-ico"><svg class="ico"><use href="#i-workflow"></use></svg></span><b>Automação</b></div>
          <div class="rsp-chip rv" style="--d:4;--i:2;--tx:25px;--ty:112px;left:460px;top:40px"><span class="rsp-ico"><svg class="ico"><use href="#i-chart"></use></svg></span><b>Dashboards</b></div>
          <div class="rsp-chip rv" style="--d:5;--i:3;--tx:-195px;--ty:140px;left:680px;top:12px"><span class="rsp-ico"><svg class="ico"><use href="#i-search"></use></svg></span><b>Prospecção</b></div>
          <div class="rsp-chip rv" style="--d:6;--i:4;--tx:-415px;--ty:118px;left:900px;top:34px"><span class="rsp-ico"><svg class="ico"><use href="#i-layout"></use></svg></span><b>Páginas</b></div>

          <div class="rsp-chip rv" style="--d:3;--i:5;--tx:395px;--ty:-78px;left:90px;top:230px"><span class="rsp-ico"><svg class="ico"><use href="#i-message"></use></svg></span><b>Omnichannel</b></div>
          <div class="rsp-chip rv" style="--d:4;--i:6;--tx:175px;--ty:-98px;left:310px;top:250px"><span class="rsp-ico"><svg class="ico"><use href="#i-users"></use></svg></span><b>Grupos</b></div>
          <div class="rsp-chip rv" style="--d:5;--i:7;--tx:-45px;--ty:-68px;left:530px;top:220px"><span class="rsp-ico"><svg class="ico"><use href="#i-bot"></use></svg></span><b>Agentes IA</b></div>
          <div class="rsp-chip rv" style="--d:6;--i:8;--tx:-265px;--ty:-103px;left:750px;top:255px"><span class="rsp-ico"><svg class="ico"><use href="#i-spark"></use></svg></span><b>Assistentes</b></div>
          <div class="rsp-chip rv" style="--d:7;--i:9;--tx:-485px;--ty:-73px;left:970px;top:225px"><span class="rsp-ico"><svg class="ico"><use href="#i-target"></use></svg></span><b>Tracking</b></div>
        </div>

        <div class="rsp-core" aria-hidden="true">
          <span class="rsp-halo"></span>
          <span class="rsp-ring r1"></span>
          <span class="rsp-ring r2"></span>
          <img src="assets/brand/simbolo-colorido-1024.png" alt="">
        </div>

        <div class="rsp-ui rv" style="--d:0">
          <div class="rsp-ui-head">
            <img src="assets/brand/simbolo-colorido-1024.png" alt="">
            <div><b>ScaleX Hub</b><em>uma única plataforma</em></div>
            <span class="rsp-tag">white-label</span>
          </div>
          <div class="rsp-ui-body">
            <aside class="rsp-side">
              <span class="rsp-side-label">Workspaces</span>
              <i><b>A</b>Cliente A<em>ativo</em></i>
              <i><b>B</b>Cliente B<em>ativo</em></i>
              <i><b>C</b>Cliente C<em>ativo</em></i>
            </aside>
            <div class="rsp-grid">
              <span><svg class="ico"><use href="#i-message"></use></svg>Atendimento<i></i></span>
              <span><svg class="ico"><use href="#i-users"></use></svg>CRM<i></i></span>
              <span><svg class="ico"><use href="#i-workflow"></use></svg>Automação<i></i></span>
              <span><svg class="ico"><use href="#i-bot"></use></svg>Agentes de IA<i></i></span>
              <span><svg class="ico"><use href="#i-chart"></use></svg>Dados<i></i></span>
              <span><svg class="ico"><use href="#i-target"></use></svg>Tracking<i></i></span>
            </div>
          </div>
          <div class="rsp-ui-foot"><span>10 ferramentas</span><i>→</i><b>1 ecossistema centralizado</b></div>
        </div>

        <span class="rsp-ghost left rv" style="--d:5" aria-hidden="true">10 logins</span>
        <span class="rsp-ghost right rv" style="--d:8" aria-hidden="true">1 plataforma</span>
      </div>

      <p class="rsp-takeaway rv" style="--d:8">O que antes exigia múltiplas ferramentas agora é <span>um único ecossistema.</span></p>
    </div>`
};
