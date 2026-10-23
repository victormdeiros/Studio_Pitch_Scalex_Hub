// Slide 5 · vendas: validação na ponta, foco no revendedor e esteira automatizada.
export default {
  id: 'slide-7',
  title: 'Validamos na ponta. Agora escalamos por quem revende.',
  theme: 'light',
  number: '05',
  notes: [
    'TEMPO ALVO: 40 segundos',
    'ROTEIRO FALADO',
    'Em 2025, vendemos R$ 300 mil em agentes de IA na ponta final. Esse resultado validou o mercado. Para a fase de tração, a tese muda: 100% do foco em quem revende. O ticket médio recorrente do cliente final é R$ 900; o do revendedor é R$ 3.500, cerca de 3,9 vezes maior. E a venda é dirigida pela automação da própria esteira ScaleX Hub: prospecção, atendimento, follow-up e tracking no mesmo ambiente, com menos custo operacional no comercial. Um parceiro ScaleX atende muitas empresas finais, cada uma com workspace independente.',
    'APOIO PARA PERGUNTAS',
    'Ticket médio recorrente: cliente final R$ 900/mês; revendedor R$ 3.500/mês. O múltiplo é 3,9× (3.500 ÷ 900).',
    'R$ 300 mil em 2025: resultado histórico de vendas de agentes de IA na ponta final, usado como validação de mercado.',
    'A automação da esteira é uma alavanca de economia operacional no comercial. O material não fixa percentual de redução de custo.',
    'Fonte: conteúdo e roteiro fornecidos na conversa “Informações para investidores”, 30/09/2026. https://chatgpt.com/c/6abd1706-583c-83e9-bc91-7f70a6104b7a'
  ],
  html: `
    <div class="sales">
      <header class="sales-head">
        <p class="kicker rv" style="--d:0"><span class="k-line"></span><svg class="ico" aria-hidden="true"><use href="#i-trend"></use></svg>Vendas · tração</p>
        <h2 class="h2 rv" style="--d:1">Validamos na ponta. <span class="grad-text">Agora escalamos por quem revende.</span></h2>
        <p class="lead rv" style="--d:2">A fase de tração é 100% focada no revendedor.</p>
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
        </div>
        <div class="sales-engine">
          <p class="micro rv" style="--d:3">Venda dirigida pela automação da própria esteira</p>
          <ol class="sales-steps">
            <li class="rv" style="--d:4"><span class="ico-wrap"><svg class="ico" aria-hidden="true"><use href="#i-search"></use></svg></span><b>Prospecção</b></li>
            <li class="rv" style="--d:5"><span class="ico-wrap"><svg class="ico" aria-hidden="true"><use href="#i-message"></use></svg></span><b>Atendimento</b></li>
            <li class="rv" style="--d:6"><span class="ico-wrap"><svg class="ico" aria-hidden="true"><use href="#i-repeat"></use></svg></span><b>Follow-up</b></li>
            <li class="rv" style="--d:7"><span class="ico-wrap"><svg class="ico" aria-hidden="true"><use href="#i-target"></use></svg></span><b>Tracking</b></li>
          </ol>
          <p class="sales-note rv" style="--d:5"><b>Menos custo operacional no comercial:</b> a esteira automatiza a passagem entre etapas e concentra os dados no mesmo ambiente.</p>
        </div>
      </div>
      <p class="sales-foot rv" style="--d:8">ICP: agências de automação/IA e consultorias de marketing. 1 parceiro atende muitos clientes finais; cada cliente final aumenta a dependência do revendedor.</p>
    </div>`
};
