// Slide 10 do pitch: TAM, SAM e SOM, com o recorte inicial do Nordeste em destaque.
export default {
  id:'resumo-mercado',
  title:'O mercado está mapeado. Sabemos onde começar.',
  theme:'light',
  number:'10',
  notes:[
    'TEMPO ALVO: 20 segundos',
    'O mercado está mapeado e sabemos onde começar. O dimensionamento foi desenvolvido com apoio de mentorias recebidas durante nosso processo de pré-aceleração, o que permitiu uma análise mais direcionada do mercado e das oportunidades. A ScaleX Hub é uma empresa incubada no Porto Digital, em Recife, e usa essa inserção no ecossistema de inovação como ponto estratégico para iniciar a expansão. Nosso recorte inicial é o Nordeste: um cenário de 6,4 mil parceiros até 2029, antes da expansão para outros mercados.',
    'TAM: 422,3 mil estabelecimentos de TI, agências e marketing direto no Brasil. SAM: 259,1 mil, nos cinco CNAEs prioritários. Base do Nordeste: 26,8 mil estabelecimentos nos nove estados. SOM 2029: 6,4 mil parceiros (base +20% × captura de 20%).',
    'TAM e SAM são fornecedores potenciais por atividade (CNAE), não vendedores comprovados de IA. SOM é cenário estratégico, não resultado observado nem carteira contratada. Fontes: Receita Federal/CNPJ, API PJ e Radar da Telecom (set/2026).',
    'Mercado indireto, para perguntas: os parceiros podem levar a operação a 254,4 mil empresas finais no Nordeste até 2029 (varejo e alimentação, cenário). Só 17% das empresas pesquisadas no Brasil usam IA (Cetic.br 2025).'
  ],
  html:`
    <div class="rm rmk">
      <header class="rm-head">
        <p class="kicker rv" style="--d:0"><span class="k-line"></span><svg class="ico" aria-hidden="true"><use href="#i-target"></use></svg>Mercado · TAM, SAM e SOM</p>
        <h2 class="rm-title rv" style="--d:1">O mercado está mapeado. <span class="grad-text">Sabemos onde começar.</span></h2>
      </header>

      <div class="rmk-funnel">
        <div class="rmk-step rv" style="--d:2;--w:100%"><span>TAM · Brasil</span><b>422,3 mil</b><em>empresas de TI, agências e marketing</em></div>
        <div class="rmk-step rv" style="--d:3;--w:84%"><span>SAM · Brasil</span><b>259,1 mil</b><em>nos CNAEs prioritários</em></div>
        <div class="rmk-step rv" style="--d:4;--w:68%"><span>Base · Nordeste</span><b>26,8 mil</b><em>nos nove estados</em></div>
        <p class="rmk-arrow rv" style="--d:5">Onde começamos <i>→</i></p>
      </div>

      <article class="rmk-som rv" style="--d:4">
        <span class="rmk-som-k">SOM · Nordeste · até 2029</span>
        <p class="rmk-som-n"><b>6,4 mil</b><span>parceiros</span></p>
        <p class="rmk-som-d">A oportunidade que vamos endereçar primeiro.</p>
        <div class="rmk-proof">
          <span><svg class="ico" aria-hidden="true"><use href="#i-building"></use></svg><b>Porto Digital · Recife</b>Empresa incubada</span>
          <span><svg class="ico" aria-hidden="true"><use href="#i-check"></use></svg><b>Pré-aceleração</b>Dimensionado com mentorias</span>
        </div>
      </article>

      <p class="rm-foot rv" style="--d:6">SOM é cenário estratégico, não carteira contratada. TAM e SAM: fornecedores potenciais por atividade (CNAE). Fontes: Receita Federal/CNPJ, API PJ e Radar da Telecom (set/2026).</p>
    </div>`
};
