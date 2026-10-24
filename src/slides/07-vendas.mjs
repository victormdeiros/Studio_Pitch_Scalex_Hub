// Slide 7 · vendas: o que já entregamos e a virada de agência para plataforma.
export default {
  id: 'slide-7',
  title: 'Validamos na ponta. Agora escalamos por quem revende.',
  theme: 'light',
  number: '05',
  notes: [
    'TEMPO ALVO: 40 segundos',
    'ROTEIRO FALADO',
    'Em 2025, vendemos R$ 300 mil em agentes de IA na ponta final. Mais do que faturamento, isso provou entrega: a plataforma já opera com clientes pagantes. O que está de pé hoje inclui white-label com marca e domínio próprios, workspace independente por cliente, CRM 360, páginas, chat omnichannel, agentes de IA e tracking. A virada é de estratégia comercial, não de produto: saímos da venda direta ao cliente final para vender a infraestrutura para quem já atende esse cliente. O ticket médio recorrente do cliente final é R$ 900; o do revendedor é R$ 3.500, cerca de 3,9 vezes maior. O produto é o mesmo; o canal é que escala.',
    'APOIO PARA PERGUNTAS',
    'Ticket médio recorrente: cliente final R$ 900/mês; revendedor R$ 3.500/mês. O múltiplo é 3,9× (3.500 ÷ 900).',
    'R$ 300 mil em 2025: resultado histórico de vendas de agentes de IA na ponta final, usado como validação de entrega e de mercado.',
    'Já entregue: white-label até o domínio, workspace por cliente, CRM 360, páginas, chat omnichannel, agentes e assistentes de IA e tracking ponta a ponta.',
    'A mudança é de canal: a ScaleX deixa de vender a entrega para o cliente final e passa a vender a plataforma para agências e consultorias que revendem. O ICP atual são agências de automação/IA e consultorias de marketing.',
    'Fonte: conteúdo e roteiro fornecidos na conversa “Informações para investidores”, 30/09/2026. https://chatgpt.com/c/6abd1706-583c-83e9-bc91-7f70a6104b7a'
  ],
  html: `
    <div class="sales">
      <header class="sales-head">
        <p class="kicker rv" style="--d:0"><span class="k-line"></span><svg class="ico" aria-hidden="true"><use href="#i-trend"></use></svg>Vendas · tração</p>
        <h2 class="h2 rv" style="--d:1">Validamos na ponta. <span class="grad-text">Agora escalamos por quem revende.</span></h2>
        <p class="lead rv" style="--d:2">A plataforma já está de pé. A virada é de canal: da venda direta ao cliente final para a revenda por quem já atende esse cliente.</p>
      </header>
      <aside class="sales-proof rv" style="--d:2">
        <span class="ico-wrap"><svg class="ico" aria-hidden="true"><use href="#i-banknote"></use></svg></span>
        <div><p class="v">R$ 300 mil</p><p class="l">revendendo agentes de IA ao cliente final em 2025</p><p class="s">Resultado histórico · validação na ponta final</p></div>
      </aside>
      <div class="sales-body">
        <div class="sales-ticket">
          <p class="micro rv" style="--d:3">Ticket médio recorrente · antes e agora</p>
          <div class="ticket-row rv" style="--d:3">
            <div class="ticket-head"><span class="who"><svg class="ico" aria-hidden="true"><use href="#i-user"></use></svg>Cliente final <em>antes</em></span><span class="v">R$ 900<span>/mês</span></span></div>
            <span class="bar" style="--w:26%"></span>
          </div>
          <div class="ticket-row focus rv" style="--d:4">
            <div class="ticket-head"><span class="who"><svg class="ico" aria-hidden="true"><use href="#i-layers"></use></svg>Revendedor <em>agora · novo ICP</em></span><span class="v">R$ 3.500<span>/mês</span></span></div>
            <span class="bar" style="--w:100%"></span>
          </div>
          <div class="sales-mult rv" style="--d:5"><b>3,9×</b><span>o ticket do cliente final</span></div>
          <p class="ticket-note rv" style="--d:6">Ticket recorrente mensal. O múltiplo compara o revendedor com o cliente final.</p>
        </div>
        <div class="sales-shift">
          <p class="micro rv" style="--d:3">A virada · de agência para plataforma</p>
          <div class="strategy-track rv" style="--d:3">
            <div class="strategy-node">
              <span class="strategy-state">Antes</span>
              <b>Agência</b>
              <em>venda direta ao cliente final</em>
            </div>
            <span class="strategy-arrow" aria-hidden="true"><svg class="ico"><use href="#i-arrow"></use></svg></span>
            <div class="strategy-node now">
              <span class="strategy-state">Agora</span>
              <b>Plataforma</b>
              <em>infraestrutura para quem revende</em>
            </div>
          </div>
          <div class="sales-delivered rv" style="--d:5">
            <p class="micro">O que já entregamos</p>
            <ul class="delivered-list">
              <li><span class="ico-wrap"><svg class="ico" aria-hidden="true"><use href="#i-layers"></use></svg></span><div><b>Plataforma white-label</b><span>marca e domínio próprios, workspace por cliente</span></div></li>
              <li><span class="ico-wrap"><svg class="ico" aria-hidden="true"><use href="#i-bot"></use></svg></span><div><b>Stack de IA em produção</b><span>CRM 360, páginas, chat omnichannel, agentes e tracking</span></div></li>
              <li><span class="ico-wrap"><svg class="ico" aria-hidden="true"><use href="#i-users"></use></svg></span><div><b>Operação validada na ponta</b><span>clientes finais pagantes e entrega rodando em 2025</span></div></li>
            </ul>
            <p class="delivered-note rv" style="--d:6">Tudo em produção na operação atual — não é roadmap.</p>
          </div>
        </div>
      </div>
      <p class="sales-takeaway rv" style="--d:7">O produto é o mesmo. <span>O canal é que escala.</span></p>
      <p class="sales-foot rv" style="--d:8">Novo ICP: agências de automação/IA e consultorias de marketing. Cada parceiro atende muitos clientes finais — e cada cliente aumenta a dependência da plataforma.</p>
    </div>`
};
