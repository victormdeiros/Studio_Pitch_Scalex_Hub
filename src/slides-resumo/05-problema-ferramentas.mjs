// Slide 5 do pitch: o problema das ferramentas descentralizadas.
export default {
  id:'resumo-problema-ferramentas',
  title:'Problema 2: ferramentas fragmentadas, custos multiplicados.',
  theme:'dark',
  number:'05',
  notes:[
    'TEMPO ALVO: 15 segundos',
    'Onde o cliente perdia mais dinheiro? Para operar uma única jornada de atendimento, as empresas precisavam contratar e utilizar diversas ferramentas. As consequências: múltiplas assinaturas de software, informações e processos descentralizados, baixa adesão dos colaboradores e desperdício de investimento em ferramentas pouco utilizadas. O problema não era apenas contratar ferramentas. Era fazer com que as pessoas realmente as utilizassem.'
  ],
  html:`
    <div class="rpt">
      <header class="rpt-head">
        <p class="kicker rv" style="--d:0"><span class="k-line"></span><svg class="ico" aria-hidden="true"><use href="#i-grid"></use></svg>Problema 02 — Onde o cliente perdia mais dinheiro?</p>
        <h2 class="rpt-title rv" style="--d:1">Ferramentas fragmentadas, <span class="grad-text">custos multiplicados.</span></h2>
      </header>

      <div class="rpt-board rv" style="--d:2">
        <div class="rpt-bar">
          <span class="rpt-dots" aria-hidden="true"><i></i><i></i><i></i></span>
          <span class="rpt-btitle">Uma jornada de atendimento · dez ferramentas</span>
          <span class="rpt-stats"><b>10</b> assinaturas <span>·</span> <b>10</b> logins <span>·</span> <b class="bad">baixa</b> adesão</span>
        </div>

        <div class="rpt-canvas">
          <span class="rpt-ten" aria-hidden="true">10</span>
          <svg class="rpt-tangle" viewBox="0 0 1140 360" aria-hidden="true">
            <g class="rpt-wires">
              <path style="--i:0" d="M196 36C262 78 302 62 406 82"/>
              <path style="--i:1" d="M408 32C502 48 566 28 654 70"/>
              <path style="--i:2" d="M652 34C752 76 820 46 936 74"/>
              <path style="--i:3" d="M196 236C296 196 362 246 476 228"/>
              <path style="--i:4" d="M478 240C584 210 642 258 766 248"/>
              <path style="--i:5" d="M766 256C860 230 924 254 1012 236"/>
              <path style="--i:6" d="M256 104C322 142 366 120 438 160"/>
              <path style="--i:7" d="M524 110C566 158 628 178 706 170"/>
              <path style="--i:8" d="M792 102C838 142 880 166 930 190"/>
              <path style="--i:9" d="M170 174C260 216 340 226 428 244"/>
              <path style="--i:10" d="M300 96C360 120 404 138 452 152"/>
              <path style="--i:11" d="M612 92C592 116 578 132 562 150"/>
              <path style="--i:12" d="M780 100C760 120 742 140 726 158"/>
              <path style="--i:13" d="M330 20C386 8 432 22 488 48"/>
              <path style="--i:14" d="M700 22C760 6 818 14 872 36"/>
              <path style="--i:15" d="M118 254C180 280 224 286 292 276"/>
              <path style="--i:16" d="M820 278C878 290 924 286 990 268"/>
              <path style="--i:17" d="M382 254C420 230 446 212 470 196"/>
            </g>
            <g class="rpt-broken">
              <path d="M452 158L504 170"/>
              <path d="M556 150L610 160"/>
              <path d="M720 160L768 150"/>
              <path d="M330 120L374 134"/>
            </g>
            <g class="rpt-cross">
              <path d="m504 166 9 9m0-9-9 9"/>
              <path d="m610 156 9 9m0-9-9 9"/>
              <path d="m768 146 9 9m0-9-9 9"/>
              <path d="m374 130 9 9m0-9-9 9"/>
            </g>
            <g class="rpt-ports">
              <circle cx="196" cy="36" r="2.4"/><circle cx="654" cy="70" r="2.4"/><circle cx="936" cy="74" r="2.4"/>
              <circle cx="476" cy="228" r="2.4"/><circle cx="766" cy="248" r="2.4"/><circle cx="1012" cy="236" r="2.4"/>
            </g>
          </svg>

          <span class="rpt-dot" style="offset-path:path('M196 36C262 78 302 62 406 82');animation-duration:7s"></span>
          <span class="rpt-dot alt" style="offset-path:path('M408 32C502 48 566 28 654 70');animation-duration:8.5s;animation-delay:2.2s"></span>
          <span class="rpt-dot" style="offset-path:path('M524 110C566 158 628 178 706 170');animation-duration:6.5s;animation-delay:1.1s"></span>
          <span class="rpt-dot alt" style="offset-path:path('M300 96C360 120 404 138 452 152');animation-duration:7.5s;animation-delay:3.6s"></span>

          <div class="rpt-chip rv" style="--d:3;left:0;top:8px;width:190px"><div class="rpt-chip-in" style="--rot:-2.4deg"><span class="rpt-flag">dado duplicado</span><h3><svg class="ico" aria-hidden="true"><use href="#i-database"></use></svg>CRM</h3><p>Pipedrive · HubSpot · RD CRM</p></div></div>
          <div class="rpt-chip rv" style="--d:4;left:210px;top:-2px;width:198px"><div class="rpt-chip-in" style="--rot:2.1deg"><span class="rpt-flag">integração manual</span><h3><svg class="ico" aria-hidden="true"><use href="#i-workflow"></use></svg>Automação</h3><p>Make · Zapier · Pluga</p></div></div>
          <div class="rpt-chip rv" style="--d:5;left:432px;top:16px;width:190px"><div class="rpt-chip-in" style="--rot:-1.6deg"><span class="rpt-flag low">planilha no meio</span><h3><svg class="ico" aria-hidden="true"><use href="#i-chart"></use></svg>Dashboards</h3><p>Power BI · Databox</p></div></div>
          <div class="rpt-chip rv" style="--d:6;left:648px;top:0;width:198px"><div class="rpt-chip-in" style="--rot:2.6deg"><h3><svg class="ico" aria-hidden="true"><use href="#i-search"></use></svg>Prospecção</h3><p>Apollo · Lusha · Hunter</p></div></div>
          <div class="rpt-chip rv" style="--d:7;left:868px;top:12px;width:190px"><div class="rpt-chip-in" style="--rot:-2.1deg"><h3><svg class="ico" aria-hidden="true"><use href="#i-layout"></use></svg>Páginas</h3><p>Wix · WordPress · Webflow</p></div></div>

          <div class="rpt-chip rv" style="--d:4;left:44px;top:210px;width:192px"><div class="rpt-chip-in" style="--rot:2.4deg"><span class="rpt-flag">login separado</span><h3><svg class="ico" aria-hidden="true"><use href="#i-message"></use></svg>Omnichannel</h3><p>Zenvia · Kommo · ChatGuru</p></div></div>
          <div class="rpt-chip rv" style="--d:5;left:278px;top:228px;width:190px"><div class="rpt-chip-in" style="--rot:-2.6deg"><h3><svg class="ico" aria-hidden="true"><use href="#i-users"></use></svg>Gestão de grupos</h3><p>Periskope · TimelinesAI</p></div></div>
          <div class="rpt-chip rv" style="--d:6;left:508px;top:198px;width:198px"><div class="rpt-chip-in" style="--rot:1.9deg"><h3><svg class="ico" aria-hidden="true"><use href="#i-bot"></use></svg>Agentes de IA</h3><p>Chatbase · Blip</p></div></div>
          <div class="rpt-chip rv" style="--d:7;left:740px;top:236px;width:194px"><div class="rpt-chip-in" style="--rot:-2.8deg"><h3><svg class="ico" aria-hidden="true"><use href="#i-spark"></use></svg>Assistentes de IA</h3><p>Adapta.org · Abacus</p></div></div>
          <div class="rpt-chip rv" style="--d:8;left:946px;top:202px;width:188px"><div class="rpt-chip-in" style="--rot:1.5deg"><h3><svg class="ico" aria-hidden="true"><use href="#i-target"></use></svg>Tracking</h3><p>timtim.app</p></div></div>

          <div class="rpt-knot rv" style="--d:7" aria-hidden="true"><i></i>operação fragmentada</div>
        </div>
      </div>

      <div class="rpt-cost rv" style="--d:8">
        <span><svg class="ico" aria-hidden="true"><use href="#i-banknote"></use></svg>Múltiplas assinaturas</span>
        <span><svg class="ico" aria-hidden="true"><use href="#i-grid"></use></svg>Dados descentralizados</span>
        <span><svg class="ico" aria-hidden="true"><use href="#i-users"></use></svg>Baixa adesão</span>
        <span><svg class="ico" aria-hidden="true"><use href="#i-trend-down"></use></svg>Investimento desperdiçado</span>
      </div>

      <p class="rpt-takeaway rv" style="--d:9">O problema não era apenas contratar ferramentas. <span>Era fazer com que as pessoas realmente as utilizassem.</span></p>
    </div>`
};
