// Slide 10 do pitch: tração de 2025 — os três indicadores do PPTX (slide 11).
export default {
  id: 'resumo-tracao',
  title: 'Validamos na ponta. Agora escalamos por quem revende.',
  theme: 'light',
  number: '05',
  notes: [
    'TEMPO ALVO: 50 segundos',
    'Em 2025 faturamos R$ 300 mil revendendo agentes de IA direto ao cliente final, com 10 clientes pagantes. A virada é de canal: o produto é o mesmo, mas em vez de vender a R$ 900 por mês para um cliente final, vendemos a R$ 3.500 por mês para quem revende — 3,9 vezes o ticket. O que está de pé hoje inclui white-label com marca e domínio próprios, workspace por cliente, CRM 360, páginas, chat omnichannel, agentes de IA e tracking. Tudo em produção; não é roadmap.'
  ],
  html: `
    <div class="sum-sales">
      <header class="sum-sales-head">
        <p class="kicker rv" style="--d:0"><span class="k-line"></span><svg class="ico" aria-hidden="true"><use href="#i-trend"></use></svg>05 · Tração</p>
        <h2 class="h2 rv" style="--d:1">Validamos na ponta. <span class="grad-text">Agora escalamos por quem revende.</span></h2>
        <p class="lead rv" style="--d:2">A plataforma já está de pé. A virada é de canal: da venda direta ao cliente final para a revenda por quem já atende esse cliente.</p>
      </header>

      <div class="sum-sales-cards">
        <article class="sum-sales-card rv" style="--d:3">
          <p class="v">R$ 300 mil</p>
          <p class="l">receita com revenda de agentes de IA ao cliente final em 2025</p>
          <p class="s">Resultado histórico · validação na ponta</p>
        </article>
        <article class="sum-sales-card rv" style="--d:4">
          <p class="v">10 clientes</p>
          <p class="l">clientes pagantes na operação que validaram o MVP</p>
          <p class="s">2026: foco na criação da plataforma</p>
        </article>
        <article class="sum-sales-card rv" style="--d:5">
          <p class="v">3,9×</p>
          <p class="l">ticket do revendedor (R$ 3.500) vs. cliente final (R$ 900)</p>
          <p class="s">2027: foco na venda da plataforma</p>
        </article>
      </div>

      <div class="sum-sales-body">
        <div class="sum-sales-ticket rv" style="--d:6">
          <p class="micro">Ticket médio recorrente</p>
          <div class="sum-sales-row">
            <span>Cliente final <em>antes</em></span>
            <b>R$ 900/mês</b>
            <i style="--w:26%"></i>
          </div>
          <div class="sum-sales-row focus">
            <span>Revendedor <em>novo ICP</em></span>
            <b>R$ 3.500/mês</b>
            <i style="--w:100%"></i>
          </div>
          <p class="sum-sales-note">Cada parceiro atende vários clientes finais, e cada cliente aumenta a dependência da plataforma.</p>
        </div>

        <div class="sum-sales-delivered rv" style="--d:7">
          <p class="micro">Em produção hoje, não é roadmap</p>
          <ul>
            <li><b>Plataforma white-label</b><span>marca, domínio e workspace por cliente</span></li>
            <li><b>Stack de IA</b><span>CRM 360, páginas, chat omnichannel, agentes e tracking</span></li>
            <li><b>Operação validada</b><span>com clientes pagantes</span></li>
          </ul>
        </div>
      </div>

      <p class="sum-sales-foot rv" style="--d:8">Fonte: dados internos de vendas e tickets da ScaleX Hub (2025). Novo ICP: agências de automação/IA e consultorias de marketing.</p>
    </div>`
};
