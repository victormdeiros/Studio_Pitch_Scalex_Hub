// Slide 2 · origem e problema.
export default {
  id: 'slide-3',
  title: 'Não nascemos de uma ideia. Nascemos de uma dor real.',
  theme: 'dark',
  number: '01',
  notes: [
    'TEMPO ALVO: 40 segundos',
    'ROTEIRO FALADO',
    'Nós começamos como a Hub ConverseIA, uma agência de automação com IA para escritórios de advocacia, clínicas e imobiliárias. Vivemos na prática a dificuldade de implantar, operar e escalar soluções para vários clientes. Construímos uma infraestrutura centralizada, replicável, fácil de implantar e vender para resolver nossa própria operação e validamos o MVP com clientes reais. Depois percebemos que outras agências tinham a mesma dor. Dessa transformação nasceu a ScaleX Hub, fornecedora da tecnologia que permite a outras empresas escalarem suas operações. Antes de construir a solução, nós éramos o cliente.',
    'Fonte: conteúdo e roteiro fornecidos na conversa “Informações para investidores”, 30/09/2026. https://chatgpt.com/c/6abd1706-583c-83e9-bc91-7f70a6104b7a'
  ],
  html: `
    <header class="s2-head">
      <p class="kicker rv" style="--d:0"><span class="k-line"></span><svg class="ico" aria-hidden="true"><use href="#i-route"></use></svg>Origem &amp; problema</p>
      <h2 class="h2 rv" style="--d:1">Não nascemos de uma ideia. <span class="grad-text">Nascemos de uma dor real.</span></h2>
      <p class="lead rv" style="--d:2">Nós vivemos essa dor por dentro, como agência, antes de construir a solução. O maior desafio não era desenvolver IA, mas implementá-la, gerenciá-la e escalá-la de forma sustentável.</p>
    </header>
    <div class="s2-body">
      <ul class="prob-list">
        <li class="prob rv" style="--d:3"><span class="p-n">01</span><div><h3><svg class="ico" aria-hidden="true"><use href="#i-grid"></use></svg>Ferramentas dispersas</h3><p>Várias plataformas para uma única entrega.</p></div></li>
        <li class="prob rv" style="--d:4"><span class="p-n">02</span><div><h3><svg class="ico" aria-hidden="true"><use href="#i-workflow"></use></svg>Workflows complexos</h3><p>Fluxos difíceis de construir, ensinar e manter.</p></div></li>
        <li class="prob rv" style="--d:5"><span class="p-n">03</span><div><h3><svg class="ico" aria-hidden="true"><use href="#i-clock"></use></svg>Implantação lenta</h3><p>Configurações e retrabalho a cada cliente.</p></div></li>
        <li class="prob rv" style="--d:6"><span class="p-n">04</span><div><h3><svg class="ico" aria-hidden="true"><use href="#i-trend-down"></use></svg>Margens pressionadas</h3><p>Custos elevados e limitações à revenda.</p></div></li>
      </ul>
      <div class="s2-side">
        <figure class="s2-quote rv" style="--d:4">
          <p class="kicker">Nós fomos o cliente</p>
          <p class="q">“Estávamos escalando trabalho, <span class="grad-text">não tecnologia.</span>”</p>
          <p class="sub">Transformamos esses gargalos em uma infraestrutura para todo um mercado.</p>
        </figure>
        <div class="s2-band rv" style="--d:5"><h4>Escala manual, não SaaS</h4><p>Cada cliente exigia criar e configurar um workspace individualmente.</p></div>
        <p class="s2-sig rv" style="--d:6">SCALE • EXECUTE • CENTRALIZE</p>
      </div>
    </div>
    <div class="origin-line rv" style="--d:7" aria-label="Da agência à plataforma">
      <span class="o-step"><b>01</b>Agência Hub ConverseIA</span>
      <span class="o-bar"></span>
      <span class="o-step"><b>02</b>Infraestrutura própria</span>
      <span class="o-bar"></span>
      <span class="o-step now"><b>03</b>ScaleX Hub</span>
    </div>`
};
