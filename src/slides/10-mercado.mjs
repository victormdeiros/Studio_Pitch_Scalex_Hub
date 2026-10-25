// Slide 10 · mercado direto: fornecedores que podem revender a ScaleX.
export default {
  id: 'slide-6',
  title: '422 mil fornecedores no Brasil. 6,4 mil parceiros no Nordeste até 2029.',
  theme: 'light',
  number: '06',
  notes: [
    'TEMPO ALVO: 40 segundos',
    'ROTEIRO FALADO',
    'O nosso mercado direto são os fornecedores que podem comercializar IA sob a própria marca: agências, consultorias, integradores e desenvolvedores. No Brasil, o TAM ampliado é de 422.269 estabelecimentos, somando serviços de TI, agências de publicidade e marketing direto. O SAM prioriza cinco atividades com maior afinidade — consultoria em TI, software sob encomenda, software customizável, agências e marketing direto — e chega a 259.108 estabelecimentos. No Nordeste, a base regional é de 26.790. Com crescimento acumulado de 20% e uma meta de captura de 20%, o cenário para 2029 é de 6.430 parceiros. TAM e SAM são fornecedores potenciais por atividade, não vendedores comprovados de automação por IA; o SOM é um cenário estratégico, não um resultado observado.',
    'APOIO PARA PERGUNTAS',
    'TAM Brasil 422.269: serviços de TI 339.911 + agências de publicidade 33.650 + marketing direto 48.708.',
    'SAM Brasil 259.108: consultoria em TI 71.113; desenvolvimento sob encomenda 68.270; software customizável 37.367; agências 33.650; marketing direto 48.708. Cada estabelecimento tem uma atividade principal, sem duplicação entre as cinco subclasses.',
    'Base Nordeste 26.790: consultoria 5.166; desenvolvimento 7.406; software customizável 4.252; agências 5.001; marketing direto 4.965. Soma dos nove estados.',
    'SOM 2029: 26.790 × 1,20 × 20% = 6.430. O crescimento de 20% e a captura de 20% são premissas comerciais, não taxas históricas comprovadas.',
    'Limitações: a agregação do TAM reúne levantamentos secundários e deve ser reconciliada em uma extração única da Receita Federal. O SAM mede afinidade econômica, não disposição de contratar white-label. Profissionais sem CNPJ não estão contemplados.',
    'Fontes: API PJ (CNAEs, set/2026); Receita Federal (CNPJ); Radar da Telecom (empresas de TI, set/2026); Grand View Research (IA conversacional no Brasil, 22,7% a.a., 2026–2033).'
  ],
  html: `
    <div class="mkt">
      <header class="mkt-head">
        <p class="kicker rv" style="--d:0"><span class="k-line"></span><svg class="ico" aria-hidden="true"><use href="#i-users"></use></svg>Mercado · cliente direto</p>
        <h2 class="h2 rv" style="--d:1">422 mil fornecedores no Brasil.<br> <span class="grad-text">6,4 mil parceiros no Nordeste até 2029.</span></h2>
        <p class="lead rv" style="--d:2">Agências, consultorias, integradores e desenvolvedores que podem comercializar IA sob a própria marca.</p>
      </header>

      <div class="mkt-funnel">
        <div class="mkt-row rv" style="--d:3;--w:100%;--i:0">
          <span class="k">TAM · Brasil</span>
          <span class="v">422,3 mil</span>
          <span class="d">422.269 estabelecimentos em TI, agências e marketing direto</span>
        </div>
        <div class="mkt-row rv" style="--d:4;--w:82%;--i:1">
          <span class="k">SAM · Brasil</span>
          <span class="v">259,1 mil</span>
          <span class="d">259.108 em cinco CNAEs prioritários</span>
        </div>
        <div class="mkt-row rv" style="--d:5;--w:62%;--i:2">
          <span class="k">Base · Nordeste</span>
          <span class="v">26,8 mil</span>
          <span class="d">26.790 estabelecimentos nos nove estados</span>
        </div>
        <div class="mkt-row som rv" style="--d:6;--w:48%;--i:3">
          <span class="k">SOM · 2029</span>
          <span class="v">6,4 mil</span>
          <span class="d">6.430 parceiros · 20% de captura</span>
        </div>
      </div>

      <div class="mkt-side">
        <p class="micro rv" style="--d:3"><svg class="ico" aria-hidden="true"><use href="#i-layers"></use></svg>Composição do SAM · Brasil</p>
        <div class="mkt-bars rv" style="--d:4">
          <div class="mkt-bar"><span>Consultoria em TI</span><span class="track"><i style="width:100%"></i></span><b>71.113</b></div>
          <div class="mkt-bar"><span>Software sob encomenda</span><span class="track"><i style="width:96%"></i></span><b>68.270</b></div>
          <div class="mkt-bar"><span>Marketing direto</span><span class="track"><i style="width:69%"></i></span><b>48.708</b></div>
          <div class="mkt-bar"><span>Software customizável</span><span class="track"><i style="width:53%"></i></span><b>37.367</b></div>
          <div class="mkt-bar"><span>Agências de publicidade</span><span class="track"><i style="width:47%"></i></span><b>33.650</b></div>
          <div class="mkt-total"><span>Total SAM · cinco CNAEs</span><b>259.108</b></div>
        </div>
        <div class="mkt-formula rv" style="--d:5">
          <p class="h">Do Nordeste ao SOM</p>
          <p><b>26.790</b> × 1,20 × 20% = <b>6.430</b></p>
          <p class="s">Crescimento e captura são premissas do cenário, não histórico observado.</p>
        </div>
      </div>

      <p class="mkt-takeaway rv" style="--d:8">O mercado está mapeado. <span>O desafio agora é distribuição.</span></p>

      <div class="mkt-sources rv" style="--d:8">
        <span class="mkt-src-label">Fontes</span>
        <ul class="mkt-src-list">
          <li>API PJ · set/2026</li>
          <li>Receita Federal · CNPJ</li>
          <li>Radar da Telecom · set/2026</li>
          <li>Grand View Research</li>
        </ul>
        <span class="mkt-premise">Base +20% · captura 20%</span>
      </div>
      <p class="mkt-foot rv" style="--d:9">TAM e SAM são fornecedores potenciais classificados por atividade, não vendedores comprovados de automação por IA. SOM é cenário estratégico, não resultado observado. Não inclui profissionais sem CNPJ.</p>
    </div>`
};
