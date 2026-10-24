// Slide 4 · fragmentação: o custo visual de operar com 10 ferramentas soltas.
export default {
  id: 'slide-4',
  title: 'Revender IA pode exigir até 10 ferramentas desconectadas',
  theme: 'light',
  number: '02',
  notes: [
    'TEMPO ALVO: 25 segundos',
    'ROTEIRO FALADO',
    'Para entregar uma operação completa, a agência precisa contratar, integrar e gerenciar ferramentas de CRM, automação, dashboards, prospecção, páginas, omnichannel, grupos, agentes e assistentes de IA e tracking. São dez ferramentas, dez acessos, dez cobranças e dez pontos de falha. Isso fragmenta a operação, aumenta o custo e dificulta implantação, manutenção e replicação. Quanto mais clientes a agência conquista, mais complexa fica essa estrutura.',
    'APOIO PARA PERGUNTAS',
    'Os nomes no diagrama são exemplos de ferramentas em cada categoria, fornecidos no pitch. Eles ilustram a fragmentação e não representam uma comparação técnica de equivalência integral entre produtos.',
    'Os selos “dado duplicado”, “integração manual”, “login separado” e “planilha no meio” são dores típicas da operação fragmentada, não afirmações sobre um produto específico.',
    'Fonte: conteúdo e roteiro fornecidos na conversa “Informações para investidores”, 30/09/2026. https://chatgpt.com/c/6abd1706-583c-83e9-bc91-7f70a6104b7a'
  ],
  html: `
    <header class="s3-head">
      <p class="kicker rv" style="--d:0"><span class="k-line"></span><svg class="ico" aria-hidden="true"><use href="#i-grid"></use></svg>O problema</p>
      <h2 class="h2 rv" style="--d:1">Revender IA pode exigir até 10 ferramentas desconectadas</h2>
    </header>
    <div class="s3-ten" aria-hidden="true">10</div>
    <div class="s3-cloud">
      <div class="s3-glow" aria-hidden="true"></div>
      <svg class="s3-tangle" viewBox="0 0 1140 320" aria-hidden="true">
        <g class="s3-wires">
          <path style="--i:0" d="M196 36C262 78 302 62 406 82"/>
          <path style="--i:1" d="M408 32C502 48 566 28 654 70"/>
          <path style="--i:2" d="M652 34C752 76 820 46 936 74"/>
          <path style="--i:3" d="M196 196C296 156 362 206 476 188"/>
          <path style="--i:4" d="M478 200C584 170 642 218 766 208"/>
          <path style="--i:5" d="M766 216C860 190 924 214 1012 196"/>
          <path style="--i:6" d="M256 104C322 142 366 120 438 160"/>
          <path style="--i:7" d="M524 110C566 158 628 178 706 170"/>
          <path style="--i:8" d="M792 102C838 142 880 166 930 190"/>
          <path style="--i:9" d="M170 134C260 176 340 186 428 204"/>
          <path style="--i:10" d="M300 96C360 120 404 138 452 152"/>
          <path style="--i:11" d="M612 92C592 116 578 132 562 150"/>
          <path style="--i:12" d="M780 100C760 120 742 140 726 158"/>
          <path style="--i:13" d="M330 20C386 8 432 22 488 48"/>
          <path style="--i:14" d="M700 22C760 6 818 14 872 36"/>
          <path style="--i:15" d="M118 214C180 240 224 246 292 236"/>
          <path style="--i:16" d="M820 238C878 250 924 246 990 228"/>
          <path style="--i:17" d="M382 214C420 190 446 172 470 156"/>
        </g>
        <g class="s3-broken">
          <path d="M452 158L504 170"/>
          <path d="M556 150L610 160"/>
          <path d="M720 160L768 150"/>
          <path d="M330 120L374 134"/>
        </g>
        <g class="s3-cross">
          <path d="m504 166 9 9m0-9-9 9"/>
          <path d="m610 156 9 9m0-9-9 9"/>
          <path d="m768 146 9 9m0-9-9 9"/>
          <path d="m374 130 9 9m0-9-9 9"/>
        </g>
        <circle cx="196" cy="36" r="2.4"/><circle cx="654" cy="70" r="2.4"/><circle cx="936" cy="74" r="2.4"/>
        <circle cx="476" cy="188" r="2.4"/><circle cx="766" cy="208" r="2.4"/><circle cx="1012" cy="196" r="2.4"/>
      </svg>
      <div class="tool-chip rv" style="--d:2;left:0;top:14px;--rot:-3.2deg;width:198px"><span class="s3-flag s3-noise" style="top:-10px;right:-9px;--rot:4deg">dado duplicado</span><h3><svg class="ico" aria-hidden="true"><use href="#i-database"></use></svg>CRM</h3><p>Pipedrive, HubSpot, RD CRM</p></div>
      <div class="tool-chip rv" style="--d:3;left:210px;top:-2px;--rot:2.6deg;width:200px"><span class="s3-flag s3-noise" style="top:-10px;right:-9px;--rot:-3deg">integração manual</span><h3><svg class="ico" aria-hidden="true"><use href="#i-workflow"></use></svg>Automação</h3><p>Make, Zapier, Pluga</p></div>
      <div class="tool-chip rv" style="--d:4;left:432px;top:20px;--rot:-1.6deg;width:190px"><span class="s3-flag s3-noise" style="bottom:-10px;left:14px;--rot:-2deg">planilha no meio</span><h3><svg class="ico" aria-hidden="true"><use href="#i-chart"></use></svg>Dashboards</h3><p>Power BI, Databox</p></div>
      <div class="tool-chip rv" style="--d:5;left:648px;top:-4px;--rot:3.1deg;width:202px"><h3><svg class="ico" aria-hidden="true"><use href="#i-search"></use></svg>Prospecção</h3><p>Apollo, Lusha, Hunter</p></div>
      <div class="tool-chip rv" style="--d:6;left:868px;top:16px;--rot:-2.4deg;width:196px"><h3><svg class="ico" aria-hidden="true"><use href="#i-layout"></use></svg>Páginas</h3><p>Wix, WordPress, Webflow</p></div>
      <div class="tool-chip rv" style="--d:3;left:44px;top:162px;--rot:2.7deg;width:196px"><span class="s3-flag s3-noise" style="top:-10px;right:-9px;--rot:3deg">login separado</span><h3><svg class="ico" aria-hidden="true"><use href="#i-message"></use></svg>Omnichannel</h3><p>Zenvia, Kommo, ChatGuru</p></div>
      <div class="tool-chip rv" style="--d:4;left:278px;top:188px;--rot:-2.9deg;width:196px"><h3><svg class="ico" aria-hidden="true"><use href="#i-users"></use></svg>Gestão de grupos</h3><p>Periskope, TimelinesAI</p></div>
      <div class="tool-chip rv" style="--d:5;left:508px;top:150px;--rot:2.1deg;width:202px"><h3><svg class="ico" aria-hidden="true"><use href="#i-bot"></use></svg>Agentes de IA</h3><p>Chatbase, Blip</p></div>
      <div class="tool-chip rv" style="--d:6;left:740px;top:192px;--rot:-3deg;width:198px"><h3><svg class="ico" aria-hidden="true"><use href="#i-spark"></use></svg>Assistentes de IA</h3><p>Adapta.org, Abacus</p></div>
      <div class="tool-chip rv" style="--d:7;left:946px;top:152px;--rot:1.7deg;width:190px"><h3><svg class="ico" aria-hidden="true"><use href="#i-target"></use></svg>Tracking</h3><p>timtim.app</p></div>
      <div class="s3-knot s3-noise" aria-hidden="true"><i></i>operação fragmentada</div>
    </div>
    <div class="s3-alert s3-noise" aria-hidden="true">
      <p class="s3-alert-title">Custo escondido</p>
      <ul>
        <li><b>10</b> acessos</li>
        <li><b>10</b> cobranças</li>
        <li><b>10</b> pontos de falha</li>
      </ul>
    </div>
    <div class="s3-conclusion rv" style="--d:8">
      <p class="big">Mais clientes = mais integrações = mais complexidade</p>
      <ul class="tag-list">
        <li class="tag">Custo alto</li>
        <li class="tag">Implantação e manutenção difíceis</li>
        <li class="tag">Replicação lenta</li>
      </ul>
    </div>`
};
