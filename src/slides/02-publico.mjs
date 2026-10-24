// Slide 2 · para quem é a plataforma: público direto (revendedores) e indireto (empresas finais).
export default {
  id: 'slide-publico',
  title: 'Nosso cliente é quem revende. O mercado final vem com ele.',
  theme: 'dark',
  number: '',
  notes: [
    'TEMPO ALVO: 35 segundos',
    'ROTEIRO FALADO',
    'A ScaleX Hub tem dois públicos, e é importante separar os papéis. Nosso cliente direto é o revendedor: agências de automação, agências de IA e consultorias de marketing. É para ele que vendemos a infraestrutura, é ele que aplica a própria marca, define planos e preços. O público indireto são as empresas finais atendidas por esse revendedor: elas não compram da ScaleX Hub, compram do parceiro, e recebem a operação de IA com a marca dele. Nosso foco comercial está em quem revende, porque um único parceiro atende muitos clientes finais — e cada cliente final aumenta a dependência e o valor da plataforma.',
    'APOIO PARA PERGUNTAS',
    'Público direto: agências de automação/IA e consultorias de marketing. Compram a plataforma, aplicam white-label e revendem com seus planos.',
    'Público indireto: empresas finais clientes dos revendedores. Recebem a operação com a marca do parceiro e não têm relação contratual com a ScaleX Hub.',
    'Um parceiro atende muitos clientes finais; cada cliente final aumenta a dependência do revendedor em relação à plataforma.',
    'Fonte: conteúdo e roteiro fornecidos na conversa “Informações para investidores”, 30/09/2026. https://chatgpt.com/c/6abd1706-583c-83e9-bc91-7f70a6104b7a'
  ],
  html: `
    <div class="s2a">
      <header class="s2a-head">
        <p class="kicker rv" style="--d:0"><span class="k-line"></span><svg class="ico" aria-hidden="true"><use href="#i-users"></use></svg>A plataforma · para quem é</p>
        <h1 class="s2a-title rv" style="--d:1">Nosso cliente é quem revende.<br><span class="grad-text">O mercado final vem com ele.</span></h1>
        <p class="s2a-sub rv" style="--d:2">A ScaleX Hub atende agências e consultorias diretamente. As empresas finais são atendidas por elas, com a marca delas.</p>
      </header>

      <div class="s2a-chain">
        <div class="s2a-hub rv" style="--d:3">
          <img src="assets/brand/simbolo-colorido-1024.png" alt="">
          <b>ScaleX Hub</b>
          <em>infraestrutura de IA white-label</em>
        </div>

        <div class="s2a-arrow one rv" style="--d:3"><span class="line"></span><span class="label">venda direta</span></div>

        <div class="s2a-card direct rv" style="--d:4">
          <span class="s2a-badge">Público direto · foco</span>
          <h2>Agências e consultorias</h2>
          <p>Compram a plataforma, aplicam a própria marca e revendem com seus planos.</p>
          <ul class="s2a-list">
            <li><svg class="ico" aria-hidden="true"><use href="#i-check"></use></svg>Compram a infraestrutura da ScaleX</li>
            <li><svg class="ico" aria-hidden="true"><use href="#i-check"></use></svg>Definem marca, planos e preços</li>
            <li><svg class="ico" aria-hidden="true"><use href="#i-check"></use></svg>Atendem muitos clientes finais</li>
          </ul>
          <p class="s2a-model"><b>Modelo:</b> revenda white-label com planos e preços próprios.</p>
        </div>

        <div class="s2a-arrow two rv" style="--d:5"><span class="line"></span><span class="label">revenda white-label</span><span class="sub">1 parceiro → muitos clientes</span></div>

        <div class="s2a-card indirect rv" style="--d:5">
          <span class="s2a-badge muted">Público indireto · alcance</span>
          <h2>Empresas finais</h2>
          <p>Clientes dos revendedores: recebem a operação de IA com a marca do parceiro.</p>
          <ul class="s2a-list">
            <li><svg class="ico" aria-hidden="true"><use href="#i-check"></use></svg>Contratam pelo revendedor</li>
            <li><svg class="ico" aria-hidden="true"><use href="#i-check"></use></svg>Usam a operação no dia a dia</li>
            <li><svg class="ico" aria-hidden="true"><use href="#i-check"></use></svg>Não compram direto da ScaleX</li>
          </ul>
          <p class="s2a-model"><b>Modelo:</b> operação de IA contratada do parceiro.</p>
        </div>
      </div>

      <p class="s2a-note rv" style="--d:6">1 parceiro atende muitos clientes finais — e cada cliente aumenta a dependência da plataforma.</p>
      <p class="s2a-takeaway rv" style="--d:7">Vendemos para quem vende. <span>Quem usa chega pela mão do parceiro.</span></p>
    </div>`
};
