// Slide 6 · concorrência direta e indireta em uma única leitura.
export default {
  id: 'slide-5',
  title: 'Eles resolvem partes. A ScaleX integra a operação.',
  theme: 'dark',
  number: '03',
  notes: [
    'TEMPO ALVO: 40 segundos',
    'ROTEIRO FALADO',
    'O mercado tem concorrentes diretos e indiretos. Na camada direta, a HighLevel é a referência global para agências: US$ 4,2 bilhões em vendas movimentadas, 2,2 milhões de negócios atendidos e 721% de crescimento de receita em três anos. A Zaia é a referência brasileira em agentes de IA, com mais de cem mil agentes criados, white-label e operação centralizada. A ScaleX não disputa a peça: entrega operação, canais e IA em uma camada white-label multiworkspace para quem revende. Na camada indireta, Kommo, ManyChat, n8n e outras ferramentas resolvem partes do stack, mas não a operação integrada.',
    'APOIO PARA PERGUNTAS',
    'HighLevel: US$ 4,2 bi em vendas movimentadas pela plataforma em 2025, 2,2 mi negócios atendidos, +721% de receita em três anos (Inc. 5000, 2026) e +US$ 60 mi de investimento institucional em 2021 (PeakEquity → General Atlantic).',
    'Zaia: referência brasileira em agentes de IA, com +100 mil agentes criados, white-label e operação centralizada.',
    'Os nomes no bloco indireto são exemplos de ferramentas que resolvem partes do stack. O slide não é uma comparação técnica de equivalência integral entre produtos.',
    'Fonte: conteúdo e roteiro fornecidos na conversa “Informações para investidores”, 30/09/2026; HighLevel, General Atlantic, Inc. 5000 (2021–2026); Zaia — dados públicos de 2026. https://chatgpt.com/c/6abd1706-583c-83e9-bc91-7f70a6104b7a'
  ],
  html: `
    <div class="comp">
      <header class="comp-head">
        <p class="kicker rv" style="--d:0"><span class="k-line"></span><svg class="ico" aria-hidden="true"><use href="#i-workflow"></use></svg>Concorrência</p>
        <h2 class="h2 rv" style="--d:1">Eles resolvem partes. <span class="grad-text">A ScaleX integra a operação.</span></h2>
        <p class="lead rv" style="--d:2">Diretos disputam a camada de plataforma. Indiretos resolvem peças do stack.</p>
      </header>
      <section class="comp-direct">
        <p class="micro rv" style="--d:2"><svg class="ico" aria-hidden="true"><use href="#i-users"></use></svg>Concorrentes diretos</p>
        <div class="comp-grid">
          <article class="comp-item rv" style="--d:3">
            <p class="comp-name">HighLevel</p>
            <p class="comp-desc">Plataforma global para agências</p>
            <p class="comp-metric">US$ 4,2 bi</p>
            <p class="comp-sub">vendas movimentadas · 2,2 mi negócios (2025)<br>+721% de receita em três anos</p>
          </article>
          <article class="comp-item rv" style="--d:4">
            <p class="comp-name">Zaia</p>
            <p class="comp-desc">Agentes de IA no Brasil</p>
            <p class="comp-metric">+100 mil</p>
            <p class="comp-sub">agentes criados · white-label e operação centralizada</p>
          </article>
          <article class="comp-item self rv" style="--d:5">
            <img class="comp-symbol" src="assets/brand/simbolo-colorido-1024.png" alt="" aria-hidden="true">
            <p class="comp-name">ScaleX Hub</p>
            <p class="comp-desc">Operação, canais e IA para quem revende</p>
            <p class="comp-metric">White-label + multiworkspace</p>
            <p class="comp-sub">A camada de infraestrutura do parceiro</p>
          </article>
        </div>
      </section>
      <section class="comp-indirect">
        <p class="micro rv" style="--d:5"><svg class="ico" aria-hidden="true"><use href="#i-workflow"></use></svg>Concorrentes indiretos</p>
        <div class="comp-cats">
          <div class="comp-cat rv" style="--d:6"><p><svg class="ico" aria-hidden="true"><use href="#i-database"></use></svg>CRM &amp; vendas</p><div><span>Kommo</span><span>Pipedrive</span><span>HubSpot</span></div></div>
          <div class="comp-cat rv" style="--d:7"><p><svg class="ico" aria-hidden="true"><use href="#i-message"></use></svg>Conversas &amp; agentes</p><div><span>ManyChat</span><span>Blip</span><span>Chatbase</span></div></div>
          <div class="comp-cat rv" style="--d:8"><p><svg class="ico" aria-hidden="true"><use href="#i-workflow"></use></svg>Automação</p><div><span>n8n</span><span>Make</span><span>Zapier</span></div></div>
        </div>
      </section>
      <div class="comp-gap rv" style="--d:9">
        <span class="q-line"></span>
        <p>O que falta quando você junta as peças: <span>operação multiworkspace + white-label + IA.</span></p>
      </div>
      <p class="comp-foot rv" style="--d:10">Fontes: HighLevel, General Atlantic e Inc. 5000 (2021–2026); Zaia — dados públicos de 2026. Exemplos de concorrentes indiretos; não representam comparação técnica de equivalência integral.</p>
    </div>`
};
