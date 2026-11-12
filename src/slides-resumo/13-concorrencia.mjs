// Slide 11 do pitch: a concorrência valida a demanda; a ScaleX compete por simplicidade, centralização e escala.
const yes='<span class="cmp-y">✓</span>',no='<span class="cmp-n">—</span>',hub='<span class="cmp-h"><svg class="ico" aria-hidden="true"><use href="#i-check"></use></svg></span>';
const rows=[
  ['Planos para revenda',yes,no],
  ['Trilha comercial completa',yes,no],
  ['Implantação sem desenvolvimento',no,yes],
  ['IA automatizada e humanizada',no,yes]
];

export default {
  id: 'resumo-concorrencia',
  title: 'Os concorrentes diretos validam a demanda.',
  theme: 'dark',
  number: '11',
  notes: [
    'TEMPO ALVO: 15 segundos',
    'Empresas já identificaram o potencial de oferecer infraestrutura de automação por meio de parceiros. Isso valida a demanda pelo modelo de negócio que estamos construindo. A oportunidade já foi identificada pelo mercado. Nossa estratégia é competir pela simplicidade, centralização e capacidade de escala.',
    'Zaia: brasileira, agentes de IA, MRR autodeclarado de cerca de R$ 4,8 milhões por ano e centenas de agências revendendo; dado autodeclarado, não auditado. HighLevel: global, plataforma para agências, US$ 4,2 bilhões em vendas movimentadas pela plataforma em 2025 — volume transacionado pelos clientes, não receita da HighLevel — e 2,2 milhões de negócios atendidos. Os indicadores são de natureza diferente e não devem ser comparados entre si.',
    'Comparação por categoria, a partir do posicionamento público das ferramentas: HighLevel cria planos e tem trilha comercial; Zaia tem implantação low code e IA humanizada. A ScaleX combina as quatro capacidades. Diferencial técnico: código 100% próprio. Concorrentes indiretos, peças do stack: Kommo, Pipedrive, HubSpot, ManyChat, Blip, Chatbase, n8n, Make e Zapier.',
    'Fontes: HighLevel, histórico institucional e site oficial (2025); Zaia, divulgação comercial (2025); Banco Central, PTAX de 23/10/2026. Dados verificados em 24/10/2026.'
  ],
  html: `
    <div class="comp cmp">
      <header class="comp-head">
        <p class="kicker rv" style="--d:0"><span class="k-line"></span><svg class="ico" aria-hidden="true"><use href="#i-trend"></use></svg>Concorrência · demanda validada</p>
        <h2 class="h2 rv" style="--d:1">Os concorrentes diretos <span class="grad-text">validam a demanda.</span></h2>
        <p class="cmp-lead rv" style="--d:2">Já existe quem venda infraestrutura de automação por meio de parceiros.</p>
      </header>

      <section class="cmp-cards">
        <article class="cmp-card rv" style="--d:3">
          <div class="comp-top"><p class="comp-name">Zaia</p><span class="comp-region">Brasil</span></div>
          <p class="comp-metric">~R$ 4,8 mi/ano</p>
          <p class="comp-sub">MRR autodeclarado · centenas de agências revendendo</p>
        </article>
        <article class="cmp-card rv" style="--d:4">
          <div class="comp-top"><p class="comp-name">HighLevel</p><span class="comp-region">Global</span></div>
          <p class="comp-metric">US$ 4,2 bi</p>
          <p class="comp-sub">em vendas movimentadas pela plataforma em 2025 · 2,2 milhões de negócios atendidos</p>
        </article>
      </section>

      <section class="cmp-table rv" style="--d:5" aria-label="Comparação por capacidade">
        <div class="cmp-row cmp-th"><span></span><span>HighLevel</span><span>Zaia</span><span class="cmp-hubcol"><img src="assets/brand/simbolo-colorido-1024.png" alt="">ScaleX Hub</span></div>
        ${rows.map(([name,a,b])=>`<div class="cmp-row"><span>${name}</span><span>${a}</span><span>${b}</span><span class="cmp-hubcol">${hub}</span></div>`).join('')}
      </section>

      <div class="comp-gap rv" style="--d:6">
        <span class="q-line"></span>
        <p>A oportunidade já foi identificada. <span>Competimos por simplicidade, centralização e escala.</span></p>
      </div>
      <p class="comp-foot rv" style="--d:7">Comparação por categoria, a partir do posicionamento público. Indicadores de natureza diferente, não comparáveis entre si. Fontes: HighLevel, site oficial (2025); Zaia, divulgação comercial (2025).</p>
    </div>`
};
