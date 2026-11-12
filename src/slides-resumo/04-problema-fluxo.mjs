// Slide 4 do pitch: o problema da complexidade das automações, no Flow Builder.
export default {
  id:'resumo-problema-fluxo',
  title:'Problema 1: a complexidade da automação convencional.',
  theme:'dark',
  number:'04',
  notes:[
    'TEMPO ALVO: 15 segundos',
    'Onde perdíamos mais tempo? Mesmo com inteligência artificial, automatizar ainda exige tempo para construir, integrar, aprender e manter. A estrutura tradicional exige configurar e conectar diversos processos, aprender diferentes ferramentas e fluxos, corrigir falhas e fazer manutenções — e repetir grande parte desse trabalho a cada novo cliente. Perdíamos tempo construindo automações quando deveríamos estar resolvendo as dores dos clientes.'
  ],
  html:`
    <div class="rpb">
      <header class="rpb-head">
        <p class="kicker rv" style="--d:0"><span class="k-line"></span><svg class="ico" aria-hidden="true"><use href="#i-workflow"></use></svg>Problema 01 — Onde perdíamos mais tempo?</p>
        <h2 class="rpb-title rv" style="--d:1">A complexidade da <span class="grad-text">automação convencional.</span></h2>
      </header>

      <div class="rpb-board rv" style="--d:2">
        <div class="rpb-bar">
          <span class="rpb-dots" aria-hidden="true"><i></i><i></i><i></i></span>
          <span class="rpb-btitle">Workflow convencional · cliente X</span>
          <span class="rpb-stats"><b>construir</b><span>·</span><b>integrar</b><span>·</span><b>aprender</b><span>·</span><b class="bad">manter</b></span>
        </div>

        <div class="rpb-canvas">
          <svg class="rpb-edges" viewBox="0 0 1140 404" aria-hidden="true">
            <g class="rpb-wires">
              <path style="--i:0" d="M160 64C195 64 195 42 225 42"/>
              <path style="--i:1" d="M160 64C195 64 195 152 225 152"/>
              <path style="--i:2" d="M160 174C195 174 195 152 225 152"/>
              <path style="--i:3" d="M160 174C195 174 195 262 225 262"/>
              <path style="--i:4" d="M160 284C195 284 195 262 225 262"/>
              <path style="--i:5" d="M160 284C195 284 195 354 225 354"/>
              <path style="--i:6" d="M365 42C400 42 400 82 435 82"/>
              <path style="--i:7" d="M365 152C400 152 400 82 435 82"/>
              <path style="--i:8" d="M365 152C400 152 400 192 435 192"/>
              <path style="--i:9" d="M365 262C400 262 400 192 435 192"/>
              <path style="--i:10" d="M365 262C400 262 400 302 435 302"/>
              <path style="--i:11" d="M365 354C400 354 400 302 435 302"/>
              <path style="--i:12" d="M575 82C610 82 610 42 645 42"/>
              <path style="--i:13" d="M575 82C610 82 610 152 645 152"/>
              <path style="--i:14" d="M575 192C610 192 610 42 645 42"/>
              <path style="--i:15" d="M575 192C610 192 610 152 645 152"/>
              <path style="--i:16" d="M575 192C610 192 610 262 645 262"/>
              <path style="--i:17" d="M575 302C610 302 610 262 645 262"/>
              <path style="--i:18" d="M575 302C610 302 610 362 645 362"/>
              <path style="--i:19" d="M785 42C820 42 820 92 855 92"/>
              <path style="--i:20" d="M785 152C820 152 820 92 855 92"/>
              <path style="--i:21" d="M785 152C820 152 820 202 855 202"/>
              <path style="--i:22" d="M785 262C820 262 820 202 855 202"/>
              <path style="--i:23" d="M785 262C820 262 820 312 855 312"/>
              <path style="--i:24" d="M785 362C820 362 820 312 855 312"/>
              <path class="cross" style="--i:25" d="M365 42C500 42 500 152 645 152"/>
              <path class="cross" style="--i:26" d="M575 82C720 82 720 202 855 202"/>
              <path class="cross" style="--i:27" d="M575 192C730 192 730 92 855 92"/>
            </g>
            <path class="rpb-broken" d="M365 354C500 354 500 262 645 262"/>
            <g class="rpb-cut" aria-hidden="true">
              <path d="M493 300l14 16m0-16-14 16"/>
              <circle cx="500" cy="308" r="10"/>
            </g>
            <text class="rpb-cutlabel" x="462" y="286">API mudou</text>
            <g class="rpb-ports">
              <circle cx="160" cy="64" r="2.5"/><circle cx="160" cy="174" r="2.5"/><circle cx="160" cy="284" r="2.5"/>
              <circle cx="575" cy="82" r="2.5"/><circle cx="575" cy="192" r="2.5"/><circle cx="575" cy="302" r="2.5"/>
              <circle cx="785" cy="42" r="2.5"/><circle cx="785" cy="152" r="2.5"/><circle cx="785" cy="262" r="2.5"/><circle cx="785" cy="362" r="2.5"/>
              <circle cx="855" cy="92" r="2.5"/><circle cx="855" cy="202" r="2.5"/><circle cx="855" cy="312" r="2.5"/>
            </g>
          </svg>

          <span class="rpb-dot" style="offset-path:path('M160 64C195 64 195 42 225 42');animation-duration:2.8s"></span>
          <span class="rpb-dot alt" style="offset-path:path('M575 192C610 192 610 152 645 152');animation-duration:3.4s;animation-delay:.7s"></span>
          <span class="rpb-dot" style="offset-path:path('M785 262C820 262 820 312 855 312');animation-duration:3.1s;animation-delay:1.4s"></span>
          <span class="rpb-dot alt" style="offset-path:path('M365 42C500 42 500 152 645 152');animation-duration:4.6s;animation-delay:.4s"></span>

          <div class="rpb-node trigger rv" style="--d:3;left:20px;top:40px"><span class="rpb-ico"><svg class="ico" aria-hidden="true"><use href="#i-arrow"></use></svg></span><div><b>Entrada</b><em>trigger</em></div></div>
          <div class="rpb-node rv" style="--d:3;left:20px;top:150px"><span class="rpb-ico"><svg class="ico" aria-hidden="true"><use href="#i-users"></use></svg></span><div><b>Lead</b><em>origem</em></div></div>
          <div class="rpb-node bad rv" style="--d:4;left:20px;top:260px"><span class="rpb-ico"><svg class="ico" aria-hidden="true"><use href="#i-code"></use></svg></span><div><b>API</b><em>dependência</em></div></div>

          <div class="rpb-node data rv" style="--d:3;left:225px;top:18px"><span class="rpb-ico"><svg class="ico" aria-hidden="true"><use href="#i-database"></use></svg></span><div><b>CRM</b><em>dados</em></div></div>
          <div class="rpb-node data rv" style="--d:4;left:225px;top:128px"><span class="rpb-ico"><svg class="ico" aria-hidden="true"><use href="#i-search"></use></svg></span><div><b>Enriquecer</b><em>lead</em></div></div>
          <div class="rpb-node logic rv" style="--d:4;left:225px;top:238px"><span class="rpb-ico"><svg class="ico" aria-hidden="true"><use href="#i-route"></use></svg></span><div><b>Roteador</b><em>condição</em></div></div>
          <div class="rpb-node bad rv" style="--d:5;left:225px;top:330px"><span class="rpb-ico"><svg class="ico" aria-hidden="true"><use href="#i-cloud"></use></svg></span><div><b>Webhook</b><em>externo</em></div></div>

          <div class="rpb-node ai rv" style="--d:4;left:435px;top:58px"><span class="rpb-ico"><svg class="ico" aria-hidden="true"><use href="#i-bot"></use></svg></span><div><b>IA 01</b><em>atendimento</em></div></div>
          <div class="rpb-node ai rv" style="--d:5;left:435px;top:168px"><span class="rpb-ico"><svg class="ico" aria-hidden="true"><use href="#i-spark"></use></svg></span><div><b>IA 02</b><em>qualificação</em></div></div>
          <div class="rpb-node logic rv" style="--d:5;left:435px;top:278px"><span class="rpb-ico"><svg class="ico" aria-hidden="true"><use href="#i-repeat"></use></svg></span><div><b>Condição</b><em>regra</em></div></div>

          <div class="rpb-node channel rv" style="--d:3;left:645px;top:18px"><span class="rpb-ico"><svg class="ico" aria-hidden="true"><use href="#i-message"></use></svg></span><div><b>WhatsApp</b><em>canal</em></div></div>
          <div class="rpb-node rv" style="--d:4;left:645px;top:128px"><span class="rpb-ico"><svg class="ico" aria-hidden="true"><use href="#i-clock"></use></svg></span><div><b>Follow-up</b><em>tempo</em></div></div>
          <div class="rpb-node rv" style="--d:5;left:645px;top:238px"><span class="rpb-ico"><svg class="ico" aria-hidden="true"><use href="#i-megaphone"></use></svg></span><div><b>Áudio</b><em>mídia</em></div></div>
          <div class="rpb-node bad rv" style="--d:6;left:645px;top:338px"><span class="rpb-ico"><svg class="ico" aria-hidden="true"><use href="#i-user"></use></svg></span><div><b>Handoff</b><em>humano</em></div></div>

          <div class="rpb-node data rv" style="--d:4;left:855px;top:68px"><span class="rpb-ico"><svg class="ico" aria-hidden="true"><use href="#i-chart"></use></svg></span><div><b>Dashboard</b><em>BI</em></div></div>
          <div class="rpb-node bad rv" style="--d:5;left:855px;top:178px"><span class="rpb-ico"><svg class="ico" aria-hidden="true"><use href="#i-file"></use></svg></span><div><b>Planilha</b><em>manual</em></div></div>
          <div class="rpb-node rv" style="--d:6;left:855px;top:288px"><span class="rpb-ico"><svg class="ico" aria-hidden="true"><use href="#i-megaphone"></use></svg></span><div><b>Notificar</b><em>time</em></div></div>

          <div class="rpb-alert rv" style="--d:6" aria-hidden="true"><i></i>API alterada<small>3 nós afetados</small></div>
          <div class="rpb-replicate rv" style="--d:7" aria-hidden="true"><svg class="ico"><use href="#i-layers"></use></svg><span><b>a cada</b> cliente</span><small>repetir o trabalho</small></div>
        </div>
      </div>

      <p class="rpb-takeaway rv" style="--d:7">Perdíamos tempo construindo automações. <span>Deveríamos estar resolvendo as dores dos clientes.</span></p>
    </div>`
};
