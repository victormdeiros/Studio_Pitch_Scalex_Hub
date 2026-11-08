// Slide 6 do pitch: a solução do problema 1 — os blocos convergem para a ativação.
export default {
  id:'resumo-solucao-fluxo',
  title:'Solução 1: da complexidade ao simples ato de ativar.',
  theme:'dark',
  number:'06',
  notes:[
    'TEMPO ALVO: 45 segundos',
    'A solução não é construir um fluxo melhor. É eliminar a necessidade de construir o fluxo. Os mesmos blocos do Flow Builder se reorganizam, convergem para um único elemento e se transformam no ScaleX Hub. O que era um diagrama de nós vira uma interface simples, com recursos de IA que o parceiro ativa e desativa. Em vez de construir automações bloco por bloco, o parceiro passa a ativar recursos de IA de maneira simples, rápida e replicável.'
  ],
  html:`
    <div class="rsf">
      <header class="rsf-head">
        <p class="kicker rv" style="--d:0"><span class="k-line"></span><svg class="ico" aria-hidden="true"><use href="#i-spark"></use></svg>Solução 01</p>
        <h2 class="rsf-title rv" style="--d:1">Da complexidade ao <span class="grad-text">simples ato de ativar.</span></h2>
        <p class="rsf-sub rv" style="--d:2">Os mesmos blocos. Um único elemento. Nenhum fluxo para reconstruir.</p>
      </header>

      <div class="rsf-stage">
        <div class="rsf-flow" aria-hidden="true">
          <svg class="rsf-edges" viewBox="0 0 1140 360">
            <g>
              <path d="M140 50C185 50 185 30 230 30"/>
              <path d="M140 50C185 50 185 130 230 130"/>
              <path d="M140 150C185 150 185 130 230 130"/>
              <path d="M140 250C185 250 185 230 230 230"/>
              <path d="M140 150C185 150 185 230 230 230"/>
              <path d="M350 30C395 30 395 70 440 70"/>
              <path d="M350 130C395 130 395 70 440 70"/>
              <path d="M350 130C395 130 395 170 440 170"/>
              <path d="M350 230C395 230 395 170 440 170"/>
              <path d="M350 230C395 230 395 270 440 270"/>
              <path d="M560 70C605 70 605 30 650 30"/>
              <path d="M560 70C605 70 605 130 650 130"/>
              <path d="M560 170C605 170 605 130 650 130"/>
              <path d="M560 170C605 170 605 230 650 230"/>
              <path d="M560 270C605 270 605 230 650 230"/>
              <path d="M560 270C605 270 605 320 650 320"/>
              <path d="M770 30C815 30 815 80 860 80"/>
              <path d="M770 130C815 130 815 80 860 80"/>
              <path d="M770 130C815 130 815 180 860 180"/>
              <path d="M770 230C815 230 815 180 860 180"/>
              <path d="M770 230C815 230 815 280 860 280"/>
            </g>
          </svg>

          <div class="rsf-block rv" style="--d:2;--i:0;--tx:490px;--ty:130px;left:20px;top:30px"><span class="rsf-ico"><svg class="ico"><use href="#i-arrow"></use></svg></span><b>Entrada</b></div>
          <div class="rsf-block rv" style="--d:3;--i:1;--tx:490px;--ty:30px;left:20px;top:130px"><span class="rsf-ico"><svg class="ico"><use href="#i-users"></use></svg></span><b>Lead</b></div>
          <div class="rsf-block rv" style="--d:3;--i:2;--tx:490px;--ty:-70px;left:20px;top:230px"><span class="rsf-ico"><svg class="ico"><use href="#i-code"></use></svg></span><b>API</b></div>

          <div class="rsf-block ai rv" style="--d:3;--i:3;--tx:280px;--ty:150px;left:230px;top:10px"><span class="rsf-ico"><svg class="ico"><use href="#i-database"></use></svg></span><b>CRM</b></div>
          <div class="rsf-block rv" style="--d:4;--i:4;--tx:280px;--ty:50px;left:230px;top:110px"><span class="rsf-ico"><svg class="ico"><use href="#i-search"></use></svg></span><b>Enriquecer</b></div>
          <div class="rsf-block rv" style="--d:4;--i:5;--tx:280px;--ty:-50px;left:230px;top:210px"><span class="rsf-ico"><svg class="ico"><use href="#i-route"></use></svg></span><b>Roteador</b></div>
          <div class="rsf-block rv" style="--d:5;--i:6;--tx:280px;--ty:-140px;left:230px;top:300px"><span class="rsf-ico"><svg class="ico"><use href="#i-cloud"></use></svg></span><b>Webhook</b></div>

          <div class="rsf-block ai rv" style="--d:4;--i:7;--tx:70px;--ty:110px;left:440px;top:50px"><span class="rsf-ico"><svg class="ico"><use href="#i-bot"></use></svg></span><b>IA 01</b></div>
          <div class="rsf-block ai rv" style="--d:5;--i:8;--tx:70px;--ty:10px;left:440px;top:150px"><span class="rsf-ico"><svg class="ico"><use href="#i-spark"></use></svg></span><b>IA 02</b></div>
          <div class="rsf-block rv" style="--d:5;--i:9;--tx:70px;--ty:-90px;left:440px;top:250px"><span class="rsf-ico"><svg class="ico"><use href="#i-repeat"></use></svg></span><b>Condição</b></div>

          <div class="rsf-block rv" style="--d:3;--i:10;--tx:-140px;--ty:150px;left:650px;top:10px"><span class="rsf-ico"><svg class="ico"><use href="#i-message"></use></svg></span><b>WhatsApp</b></div>
          <div class="rsf-block rv" style="--d:4;--i:11;--tx:-140px;--ty:50px;left:650px;top:110px"><span class="rsf-ico"><svg class="ico"><use href="#i-clock"></use></svg></span><b>Follow-up</b></div>
          <div class="rsf-block rv" style="--d:5;--i:12;--tx:-140px;--ty:-50px;left:650px;top:210px"><span class="rsf-ico"><svg class="ico"><use href="#i-megaphone"></use></svg></span><b>Áudio</b></div>
          <div class="rsf-block rv" style="--d:6;--i:13;--tx:-140px;--ty:-140px;left:650px;top:300px"><span class="rsf-ico"><svg class="ico"><use href="#i-user"></use></svg></span><b>Handoff</b></div>

          <div class="rsf-block rv" style="--d:4;--i:14;--tx:-350px;--ty:100px;left:860px;top:60px"><span class="rsf-ico"><svg class="ico"><use href="#i-chart"></use></svg></span><b>Dashboard</b></div>
          <div class="rsf-block rv" style="--d:5;--i:15;--tx:-350px;--ty:0;left:860px;top:160px"><span class="rsf-ico"><svg class="ico"><use href="#i-file"></use></svg></span><b>Planilha</b></div>
          <div class="rsf-block rv" style="--d:6;--i:16;--tx:-350px;--ty:-100px;left:860px;top:260px"><span class="rsf-ico"><svg class="ico"><use href="#i-megaphone"></use></svg></span><b>Notificar</b></div>
        </div>

        <div class="rsf-core" aria-hidden="true">
          <span class="rsf-halo"></span>
          <span class="rsf-ring r1"></span>
          <span class="rsf-ring r2"></span>
          <img src="assets/brand/simbolo-colorido-1024.png" alt="">
        </div>

        <div class="rsf-ui rv" style="--d:0">
          <div class="rsf-ui-head">
            <img src="assets/brand/simbolo-colorido-1024.png" alt="">
            <div><b>ScaleX Hub</b><em>ativação de IA</em></div>
            <span class="rsf-live"><i></i>ao vivo</span>
          </div>
          <div class="rsf-rows">
            <div class="rsf-row" style="--i:0">
              <span class="rsf-rico"><svg class="ico"><use href="#i-bot"></use></svg></span>
              <div><b>Atendimento com IA</b><small>agentes humanizados</small></div>
              <i class="rsf-sw"><span></span></i><em class="rsf-on">ativo</em>
            </div>
            <div class="rsf-row" style="--i:1">
              <span class="rsf-rico"><svg class="ico"><use href="#i-search"></use></svg></span>
              <div><b>Prospecção ativa</b><small>origem e qualificação</small></div>
              <i class="rsf-sw"><span></span></i><em class="rsf-on">ativo</em>
            </div>
            <div class="rsf-row" style="--i:2">
              <span class="rsf-rico"><svg class="ico"><use href="#i-repeat"></use></svg></span>
              <div><b>Follow-up</b><small>no melhor momento</small></div>
              <i class="rsf-sw"><span></span></i><em class="rsf-on">ativo</em>
            </div>
            <div class="rsf-row" style="--i:3">
              <span class="rsf-rico"><svg class="ico"><use href="#i-chart"></use></svg></span>
              <div><b>Insights</b><small>funil e scoring</small></div>
              <i class="rsf-sw"><span></span></i><em class="rsf-on">ativo</em>
            </div>
          </div>
          <div class="rsf-ui-foot"><svg class="ico"><use href="#i-check"></use></svg>Aplicar a todos os clientes<b>1 clique</b></div>
        </div>

        <span class="rsf-ghost left rv" style="--d:5" aria-hidden="true">18 nós</span>
        <span class="rsf-ghost right rv" style="--d:8" aria-hidden="true">1 ativação</span>
      </div>

      <p class="rsf-takeaway rv" style="--d:8">Em vez de construir automações bloco por bloco, o parceiro <span>ativa recursos de IA.</span></p>
    </div>`
};
