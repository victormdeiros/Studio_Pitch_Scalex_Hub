// Slide 5 do pitch: o gancho da transformação — cliente direto e indireto.
export default {
  id:'resumo-transformacao',
  title:'O parceiro vende, a ScaleX sustenta.',
  theme:'dark',
  number:'08',
  notes:[
    'TEMPO ALVO: 35 segundos',
    'Vendemos para quem vende. A agência compra a nossa infraestrutura, coloca a marca dela, define seus planos e revende como SaaS. Um parceiro atende muitos clientes finais, e cada cliente aumenta a dependência da plataforma.'
  ],
  html:`
    <div class="rt">
      <header class="rt-head">
        <p class="kicker rv" style="--d:0"><span class="k-line"></span><svg class="ico" aria-hidden="true"><use href="#i-users"></use></svg>A transformação</p>
        <h2 class="rt-title rv" style="--d:1">O parceiro vende. <span class="grad-text">A ScaleX sustenta.</span></h2>
        <p class="rt-sub rv" style="--d:2">Um produto, dois públicos: quem revende e quem usa a operação.</p>
      </header>

      <div class="rt-chain">
        <article class="rt-node hub rv" style="--d:3">
          <img src="assets/brand/simbolo-colorido-1024.png" alt="">
          <b>ScaleX Hub</b>
          <em>infraestrutura de IA white-label</em>
        </article>
        <div class="rt-arrow rv" style="--d:3"><span></span><small>venda</small></div>
        <article class="rt-node direct rv" style="--d:4">
          <span class="rt-badge">Cliente direto · foco</span>
          <h3>Agências e consultorias</h3>
          <p>Compram a infraestrutura, aplicam a própria marca e revendem como SaaS.</p>
          <ul><li>Definem planos e preços</li><li>Atendem muitos clientes finais</li></ul>
        </article>
        <div class="rt-arrow rv" style="--d:5"><span></span><small>1 → N</small></div>
        <article class="rt-node indirect rv" style="--d:5">
          <span class="rt-badge muted">Cliente indireto</span>
          <h3>Empresas finais</h3>
          <p>Usam a operação de IA com a marca do parceiro, sem contratar a ScaleX diretamente.</p>
          <ul><li>Contratam pelo parceiro</li><li>Operação pronta no dia a dia</li></ul>
        </article>
      </div>

      <p class="rt-impact rv" style="--d:6">1 parceiro atende muitos clientes finais. <b>Cada cliente aumenta a dependência da plataforma.</b></p>
    </div>`
};
