// Slide 8 · concorrência como validação de mercado e espaço de escala.
export default {
  id: 'slide-concorrencia',
  title: 'Os concorrentes diretos validam o mercado. A escala ainda está em construção.',
  theme: 'dark',
  number: '04',
  notes: [
    'TEMPO ALVO: 40 segundos',
    'ROTEIRO FALADO',
    'A concorrência aqui é validação de mercado. A HighLevel atendeu 2,2 milhões de negócios em 2025 e movimentou R$ 21,2 bilhões em vendas facilitadas, um valor conservador: o site principal exibe aproximadamente R$ 26,2 bilhões. A Zaia tem centenas de agências revendendo sua plataforma e um faturamento anual estimado em cerca de US$ 1 milhão em 2025, a partir de um MRR autodeclarado de aproximadamente US$ 80 mil; a meta conservadora de ARR divulgada pela empresa era de US$ 1,3 milhão. Os números são autodeclarados pelas empresas, não necessariamente auditados, e não representam receita recorrente. Como os indicadores de escala são diferentes, não dá para comparar diretamente faturamento ou participação. Ao mesmo tempo, a oportunidade segue aberta: 84% das empresas do Nordeste não declaram uso de IA e a receita de IA conversacional no Brasil cresce 22,7% ao ano. A ScaleX entra para disputar esse mercado com infraestrutura comercial centralizada e 100% white-label.',
    'APOIO PARA PERGUNTAS',
    'HighLevel: 2,2 milhões de negócios atendidos em 2025 (confirmado no site oficial); R$ 21,2 bilhões em vendas facilitadas, conversão do valor histórico de US$ 4,2 bilhões pela PTAX de venda de R$ 5,0377 de 23/10/2026. O site principal exibe ~R$ 26,2 bilhões; usamos o valor conservador.',
    'Zaia: faturamento anual estimado em ~US$ 1,0 milhão em 2025, anualizando o MRR autodeclarado de ~US$ 80 mil; a empresa divulgou uma meta conservadora de ARR de US$ 1,3 milhão. Centenas de agências comercializando soluções (autodeclarado em material comercial, sem contagem atual precisa). Alcance Brasil.',
    'Validação: HighLevel 2,2 mi confirmado no site oficial; R$ 21,2 bi é conversão do valor histórico. Zaia: receita estimada a partir de MRR/ARR autodeclarados; centenas de agências é autodeclarado. Números não auditados; a receita da Zaia é uma estimativa, não um ARR auditado.',
    'Oportunidade: 83% das empresas brasileiras pesquisadas ainda não usam IA (Cetic.br 2025); 80% das empresas da União Europeia ainda não usam IA (Eurostat 2025). O Brasil é o mercado nacional e a UE é a referência global disponível.',
    'Os dois concorrentes têm indicadores de escala diferentes; o slide não calcula comparação direta de faturamento ou participação de mercado. Exemplos de concorrentes indiretos não representam equivalência técnica integral.',
    'Fontes: HighLevel — histórico institucional e indicadores do site (2025); Zaia — indicadores 2025 (MRR/ARR autodeclarados) e divulgação comercial; Banco Central — PTAX de 23/10/2026; Cetic.br 2025; Eurostat 2025.'
  ],
  html: `
    <div class="comp">
      <header class="comp-head">
        <p class="kicker rv" style="--d:0"><span class="k-line"></span><svg class="ico" aria-hidden="true"><use href="#i-trend"></use></svg>Concorrência · validação de mercado</p>
        <h2 class="h2 rv" style="--d:1">Os concorrentes diretos validam o mercado. <span class="grad-text">A escala ainda está em construção.</span></h2>
        <p class="lead rv" style="--d:2">Estamos no início da onda: a adoção de IA ainda é baixa no Brasil e no mundo.</p>
      </header>

      <section class="comp-direct">
        <p class="micro rv" style="--d:2"><svg class="ico" aria-hidden="true"><use href="#i-users"></use></svg>Concorrentes diretos · demanda comprovada</p>
        <div class="comp-grid">
          <article class="comp-item rv" style="--d:3">
            <div class="comp-top"><p class="comp-name">HighLevel</p><span class="comp-region">Global</span></div>
            <p class="comp-desc">Plataforma global para agências</p>
            <p class="comp-metric">R$ 21,2 bi</p>
            <p class="comp-sub">vendas facilitadas em 2025 · 2,2 mi de negócios atendidos</p>
            <p class="comp-note">Valor conservador: o site principal exibe ~R$ 26,2 bi.</p>
            <div class="comp-verify"><span class="ok">✓ site oficial</span><span class="warn">≈ conversão</span></div>
          </article>
          <article class="comp-item rv" style="--d:4">
            <div class="comp-top"><p class="comp-name">Zaia</p><span class="comp-region">Brasil</span></div>
            <p class="comp-desc">Plataforma de agentes de IA no Brasil</p>
            <p class="comp-metric">~US$ 1,0 mi</p>
            <p class="comp-sub">faturamento anual estimado em 2025 · centenas de agências revendendo</p>
            <p class="comp-note">MRR autodeclarado de ~US$ 80 mil; meta ARR conservadora de US$ 1,3 mi.</p>
            <div class="comp-verify"><span class="warn">◐ receita: autodeclarada</span><span class="warn">◐ agências: autodeclarado</span></div>
          </article>
          <aside class="comp-open rv" style="--d:5">
            <svg class="comp-globe" aria-hidden="true"><use href="#i-globe"></use></svg>
            <p class="comp-open-title"><svg class="ico" aria-hidden="true"><use href="#i-globe"></use></svg>Oportunidade de mercado</p>
            <div class="comp-stats">
              <div><b>83%</b><span>Brasil</span><em>empresas pesquisadas sem IA</em></div>
              <div><b>80%</b><span>União Europeia</span><em>empresas ainda sem IA</em></div>
            </div>
            <p class="comp-open-note">A ScaleX entra com infraestrutura white-label para quem revende.</p>
            <p class="comp-open-src">Cetic.br 2025 · Eurostat 2025</p>
          </aside>
        </div>
      </section>

      <section class="comp-indirect">
        <p class="micro rv" style="--d:6"><svg class="ico" aria-hidden="true"><use href="#i-workflow"></use></svg>Concorrentes indiretos · peças do stack</p>
        <div class="comp-cats">
          <div class="comp-cat rv" style="--d:7"><p><svg class="ico" aria-hidden="true"><use href="#i-database"></use></svg>CRM &amp; vendas</p><div><span>Kommo</span><span>Pipedrive</span><span>HubSpot</span></div></div>
          <div class="comp-cat rv" style="--d:8"><p><svg class="ico" aria-hidden="true"><use href="#i-message"></use></svg>Conversas &amp; agentes</p><div><span>ManyChat</span><span>Blip</span><span>Chatbase</span></div></div>
          <div class="comp-cat rv" style="--d:9"><p><svg class="ico" aria-hidden="true"><use href="#i-workflow"></use></svg>Automação</p><div><span>n8n</span><span>Make</span><span>Zapier</span></div></div>
        </div>
      </section>

      <div class="comp-gap rv" style="--d:9">
        <span class="q-line"></span>
        <p>HighLevel e Zaia provam a demanda. <span>A ScaleX entra com a camada que falta: white-label, multiworkspace e operação centralizada.</span></p>
      </div>
      <p class="comp-foot rv" style="--d:10">Fontes: HighLevel — histórico institucional e site principal (2025); Zaia — indicadores 2025 (MRR/ARR autodeclarados) e divulgação comercial; Banco Central — PTAX de 23/10/2026 (R$ 5,0377); Cetic.br 2025; Eurostat 2025. Dados verificados em 24/10/2026; a receita da Zaia é estimativa anualizada, autodeclarada. Números não auditados; não representam receita recorrente auditada; indicadores de escala diferentes, sem comparação direta de faturamento ou participação.</p>
    </div>`
};
