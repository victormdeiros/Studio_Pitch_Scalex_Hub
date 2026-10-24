// Slide 8 · concorrência como validação de mercado e espaço de escala.
export default {
  id: 'slide-concorrencia',
  title: 'Os concorrentes diretos validam o mercado. A escala ainda está em construção.',
  theme: 'dark',
  number: '04',
  notes: [
    'TEMPO ALVO: 40 segundos',
    'ROTEIRO FALADO',
    'A concorrência aqui não é uma ameaça: é a prova de que o mercado existe. A HighLevel movimenta US$ 4,2 bilhões em vendas, atende 2,2 milhões de negócios e cresceu 72% em receita em três anos. A Zaia já criou mais de cem mil agentes no Brasil, com white-label e operação centralizada. Ao mesmo tempo, a adoção ainda está no começo: 83% das empresas pesquisadas no Brasil e 80% na União Europeia ainda não usam IA. É esse espaço que a ScaleX Hub vem disputar, com infraestrutura comercial centralizada e 100% white-label para quem revende.',
    'APOIO PARA PERGUNTAS',
    'HighLevel: US$ 4,2 bi em vendas movimentadas pela plataforma em 2025, 2,2 mi de negócios atendidos e +72% de receita em três anos (Inc. 5000, 2026).',
    'Zaia: referência brasileira em agentes de IA, com +100 mil agentes criados, white-label e operação centralizada.',
    'Adoção de IA: 83% das empresas brasileiras pesquisadas e 80% das empresas da União Europeia ainda não utilizavam IA (Cetic.br e Eurostat, 2025). Os percentuais não representam participação de mercado de software.',
    'Os nomes no bloco indireto são exemplos de ferramentas que resolvem partes do stack. O slide não é uma comparação técnica de equivalência integral entre produtos.',
    'Fonte: conteúdo e roteiro fornecidos na conversa “Informações para investidores”, 30/09/2026; HighLevel, General Atlantic e Inc. 5000 (2021–2026); Zaia — dados públicos de 2026; Cetic.br e Eurostat (2025).'
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
            <p class="comp-name">HighLevel</p>
            <p class="comp-desc">Plataforma global para agências</p>
            <p class="comp-metric">US$ 4,2 bi</p>
            <p class="comp-sub">vendas movimentadas em 2025 · 2,2 mi de negócios<br>+72% de receita em três anos</p>
          </article>
          <article class="comp-item rv" style="--d:4">
            <p class="comp-name">Zaia</p>
            <p class="comp-desc">Agentes de IA no Brasil</p>
            <p class="comp-metric">+100 mil</p>
            <p class="comp-sub">agentes criados · white-label e operação centralizada</p>
          </article>
          <aside class="comp-open rv" style="--d:5">
            <svg class="comp-globe" aria-hidden="true"><use href="#i-globe"></use></svg>
            <p class="comp-open-title"><svg class="ico" aria-hidden="true"><use href="#i-globe"></use></svg>Oportunidade de mercado</p>
            <div class="comp-stats">
              <div><b>83%</b><span>Brasil</span><em>ainda não usam IA</em></div>
              <div><b>80%</b><span>União Europeia</span><em>ainda não usam IA</em></div>
            </div>
            <p class="comp-open-note">A ScaleX entra para disputar esse mercado com infraestrutura comercial centralizada e 100% white-label.</p>
            <p class="comp-open-src">Cetic.br · Eurostat (2025)</p>
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
      <p class="comp-foot rv" style="--d:10">Fontes: HighLevel, General Atlantic e Inc. 5000 (2021–2026); Zaia — dados públicos de 2026; Cetic.br e Eurostat (2025). Percentuais de adoção de IA em empresas pesquisadas não representam participação de mercado de software. Exemplos de concorrentes indiretos; não representam comparação técnica de equivalência integral.</p>
    </div>`
};
