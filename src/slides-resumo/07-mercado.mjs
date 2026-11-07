// Slide 7 do pitch: mercado direto e indireto em uma composição só.
export default {
  id:'resumo-mercado',
  title:'O mercado está mapeado: o desafio agora é distribuição.',
  theme:'light',
  number:'05',
  notes:[
    'TEMPO ALVO: 40 segundos',
    'São 422 mil empresas no Brasil que podem revender IA sob a própria marca; 259 mil nos CNAEs prioritários. Começamos pelo Nordeste: 26,8 mil empresas. O cenário para 2029 é de 6,4 mil parceiros. Só 17% das empresas pesquisadas no Brasil usam IA, e os parceiros podem levar a operação a 254,4 mil empresas finais no Nordeste até 2029.'
  ],
  html:`
    <div class="rm">
      <header class="rm-head">
        <p class="kicker rv" style="--d:0"><span class="k-line"></span><svg class="ico" aria-hidden="true"><use href="#i-users"></use></svg>06 · Mercado</p>
        <h2 class="rm-title rv" style="--d:1">O mercado está mapeado. <span class="grad-text">O desafio agora é distribuição.</span></h2>
        <p class="rm-sub rv" style="--d:2">Fornecedores que podem revender IA sob a própria marca — e as empresas finais que eles alcançam.</p>
      </header>

      <div class="rm-left">
        <div class="rm-row rv" style="--d:3;--w:100%">
          <span class="rm-k">TAM · Brasil</span><b>422,3 mil</b><span class="rm-d">estabelecimentos de TI, agências e marketing direto</span>
          <i class="rm-bar" style="--w:100%"></i>
        </div>
        <div class="rm-row rv" style="--d:4;--w:82%">
          <span class="rm-k">SAM · Brasil</span><b>259,1 mil</b><span class="rm-d">cinco CNAEs prioritários</span>
          <i class="rm-bar" style="--w:82%"></i>
        </div>
        <div class="rm-row rv" style="--d:5;--w:62%">
          <span class="rm-k">Base · Nordeste</span><b>26,8 mil</b><span class="rm-d">estabelecimentos nos nove estados</span>
          <i class="rm-bar" style="--w:62%"></i>
        </div>
        <div class="rm-row som rv" style="--d:6;--w:48%">
          <span class="rm-k">SOM · 2029</span><b>6,4 mil</b><span class="rm-d">parceiros · base +20% × captura de 20%</span>
          <i class="rm-bar" style="--w:48%"></i>
        </div>
      </div>

      <div class="rm-right">
        <article class="rm-kpi violet rv" style="--d:3">
          <b>17%</b>
          <p>das empresas pesquisadas no Brasil usam IA</p>
          <em>Cetic.br 2025</em>
        </article>
        <article class="rm-kpi cyan rv" style="--d:4">
          <b>254,4 mil</b>
          <p>empresas finais no Nordeste até 2029 que os parceiros podem atender</p>
          <em>Varejo e alimentação · cenário</em>
        </article>
        <p class="rm-note rv" style="--d:5"><svg class="ico" aria-hidden="true"><use href="#i-layers"></use></svg>Um parceiro atende muitos clientes finais — e cada cliente aumenta a dependência da plataforma.</p>
      </div>

      <div class="rm-bridge rv" style="--d:6">
        <span class="rm-b-label">Mercado direto</span><b>parceiros</b><i>→</i><span class="rm-b-label">Mercado indireto</span><b>empresas finais</b><em>1 parceiro atende N clientes</em>
      </div>

      <p class="rm-foot rv" style="--d:7">TAM e SAM são fornecedores potenciais por atividade (CNAE), não vendedores comprovados de IA. SOM é cenário estratégico, não resultado observado. Fontes: Receita Federal/CNPJ, API PJ e Radar da Telecom (set/2026); Cetic.br 2025.</p>
    </div>`
};
