// Slide 8 do pitch: concorrência — o conteúdo do PPTX (slide 9).
export default {
  id: 'resumo-concorrencia',
  title: 'Os concorrentes diretos validam a demanda.',
  theme: 'dark',
  number: '11',
  notes: [
    'TEMPO ALVO: 40 segundos',
    'A concorrência direta valida a demanda. A Zaia é brasileira, tem MRR autodeclarado de cerca de R$ 4,8 milhões por ano e centenas de agências revendendo. A HighLevel é global e atende 2,2 milhões de negócios, com cerca de US$ 4 bilhões de faturamento em 2025. Os indicadores são de natureza diferente e não devem ser comparados diretamente. Os concorrentes indiretos são peças do stack: CRM e vendas, conversas e agentes, automação.'
  ],
  html: `
    <div class="comp">
      <header class="comp-head">
        <p class="kicker rv" style="--d:0"><span class="k-line"></span><svg class="ico" aria-hidden="true"><use href="#i-trend"></use></svg>Concorrência · demanda validada</p>
        <h2 class="h2 rv" style="--d:1">Os concorrentes diretos <span class="grad-text">validam a demanda.</span></h2>
        <p class="lead rv" style="--d:2">Indicadores públicos de natureza diferente. Não comparar faturamento ou participação.</p>
      </header>

      <section class="comp-direct">
        <p class="micro rv" style="--d:2"><svg class="ico" aria-hidden="true"><use href="#i-users"></use></svg>Concorrentes diretos · demanda comprovada</p>
        <div class="comp-grid">
          <article class="comp-item rv" style="--d:3">
            <div class="comp-top"><p class="comp-name">Zaia</p><span class="comp-region">Brasil</span></div>
            <p class="comp-desc">Agentes de IA</p>
            <p class="comp-metric">~R$ 4,8 mi/ano</p>
            <p class="comp-sub">MRR autodeclarado · centenas de agências revendendo</p>
            <p class="comp-note">Autodeclarado, não auditado.</p>
            <div class="comp-verify"><span class="warn">◐ autodeclarado</span></div>
          </article>
          <article class="comp-item rv" style="--d:4">
            <div class="comp-top"><p class="comp-name">HighLevel</p><span class="comp-region">Global</span></div>
            <p class="comp-desc">Plataforma para agências</p>
            <p class="comp-metric">~US$ 4 bi</p>
            <p class="comp-sub">faturamento em 2025 · 2,2 mi de negócios atendidos</p>
            <p class="comp-note">Volume transacionado pelos clientes, não receita da HighLevel · site oficial.</p>
            <div class="comp-verify"><span class="ok">✓ site oficial</span><span class="warn">◐ volume dos clientes</span></div>
          </article>
          <aside class="comp-open rv" style="--d:5">
            <svg class="comp-globe" aria-hidden="true"><use href="#i-globe"></use></svg>
            <p class="comp-open-title"><svg class="ico" aria-hidden="true"><use href="#i-globe"></use></svg>Leitura</p>
            <p class="comp-open-note">A categoria existe. HighLevel e Zaia já vendem plataforma para agências. No Brasil, a escala está em construção.</p>
            <p class="comp-open-note">A ScaleX entra com a camada que falta: white-label, multiworkspace e operação centralizada.</p>
            <p class="comp-open-src">Categoria validada · escala em construção</p>
          </aside>
        </div>
      </section>

      <section class="comp-indirect">
        <p class="micro rv" style="--d:6"><svg class="ico" aria-hidden="true"><use href="#i-workflow"></use></svg>Concorrentes indiretos · peças do stack</p>
        <div class="comp-cats">
          <div class="comp-cat rv" style="--d:7"><p><svg class="ico" aria-hidden="true"><use href="#i-database"></use></svg>CRM e vendas</p><div><span>Kommo</span><span>Pipedrive</span><span>HubSpot</span></div></div>
          <div class="comp-cat rv" style="--d:8"><p><svg class="ico" aria-hidden="true"><use href="#i-message"></use></svg>Conversas e agentes</p><div><span>ManyChat</span><span>Blip</span><span>Chatbase</span></div></div>
          <div class="comp-cat rv" style="--d:9"><p><svg class="ico" aria-hidden="true"><use href="#i-workflow"></use></svg>Automação</p><div><span>n8n</span><span>Make</span><span>Zapier</span></div></div>
        </div>
      </section>

      <div class="comp-gap rv" style="--d:9">
        <span class="q-line"></span>
        <p>Os concorrentes diretos validam a demanda. <span>A ScaleX entrega a camada que falta.</span></p>
      </div>
      <p class="comp-foot rv" style="--d:10">Fontes: HighLevel, histórico institucional e site oficial (2025); Zaia, divulgação comercial (2025); Banco Central, PTAX de 23/10/2026. Dados verificados em 24/10/2026. Indicadores de natureza diferente: não comparar faturamento ou participação.</p>
    </div>`
};
