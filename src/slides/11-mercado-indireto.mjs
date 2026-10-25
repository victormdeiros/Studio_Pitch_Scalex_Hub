// Slide 11 · mercado indireto: empresas finais atendidas pelos parceiros.
export default {
  id: 'slide-mercado-indireto',
  title: '25,7 milhões de empresas no Brasil. 254 mil clientes finais no Nordeste até 2029.',
  theme: 'light',
  number: '07',
  notes: [
    'TEMPO ALVO: 40 segundos',
    'ROTEIRO FALADO',
    'O mercado indireto é o que os nossos parceiros atendem. No Brasil, o TAM é de 25.774.457 empresas ativas com CNPJ matriz. O SAM inicial é o Nordeste, com 1.324.850 empresas de comércio varejista e alimentação: 1.036.862 no varejo e 287.988 em bares e restaurantes. Aplicando 20% de adoção prévia de IA, 20% de expansão do mercado elegível e 20% de captura comercial, o cenário para 2029 é de 254.371 empresas finais. É importante separar: adesão, expansão e captura são três premissas diferentes, não três estatísticas observadas. O SOM representa clientes finais potencialmente atendidos pelo ecossistema de parceiros, não clientes diretos nem faturamento da ScaleX Hub.',
    'APOIO PARA PERGUNTAS',
    'TAM Brasil 25.774.457: empresas ativas com CNPJ matriz, Receita Federal/Dados Abertos do CNPJ, consolidação Waxi, referência 11/10/2026.',
    'SAM Nordeste 1.324.850: comércio varejista 1.036.862 + bares e restaurantes 287.988, empresas matrizes ativas nos nove estados, referência set/2026. A soma setorial ainda precisa de reconciliação independente.',
    'SOM 2029: 1.324.850 × (1 − 0,20) × 1,20 × 0,20 = 254.371. A adoção de 20% é aproximação internacional (Eurostat; no Nordeste, Cetic.br aponta 16%), a expansão de 20% em três anos é premissa conservadora diante do CAGR de 22,7% da Grand View Research, e a captura de 20% é meta estratégica sem histórico comprovado.',
    'Indicadores: 84% das empresas do Nordeste sem IA declarada e 16% com adoção (Cetic.br 2025); ~457.958 empresas com WhatsApp/Telegram e ~315.726 que vendem por mensagens (IBGE/Cetic.br/AllService AI, recorte de 10+ pessoas; não somar ao SAM).',
    'Limitações: TAM e SAM são aproximações do universo endereçável, não contagens de empresas com alta demanda de atendimento. O SOM não é receita da ScaleX e depende da capacidade de distribuição dos parceiros.',
    'Fontes: Receita Federal/Waxi (out/2026); SendorIA; Cetic.br TIC Empresas 2025; Eurostat 2025; Grand View Research (IA conversacional no Brasil, 2026–2033); AllService AI/IBGE.'
  ],
  html: `
    <div class="mkt">
      <header class="mkt-head">
        <p class="kicker rv" style="--d:0"><span class="k-line"></span><svg class="ico" aria-hidden="true"><use href="#i-globe"></use></svg>Mercado · cliente indireto</p>
        <h2 class="h2 rv" style="--d:1">25,7 milhões de empresas no Brasil.<br> <span class="grad-text">254 mil clientes finais no Nordeste até 2029.</span></h2>
        <p class="lead rv" style="--d:2">O mercado que os parceiros atendem: varejo e alimentação no Nordeste.</p>
      </header>

      <div class="mkt-funnel">
        <div class="mkt-row rv" style="--d:3;--w:100%;--i:0">
          <span class="k">TAM · Brasil</span>
          <span class="v">25,77 mi</span>
          <span class="d">25.774.457 empresas ativas com CNPJ matriz</span>
        </div>
        <div class="mkt-row rv" style="--d:4;--w:82%;--i:1">
          <span class="k">SAM · Nordeste</span>
          <span class="v">1,32 mi</span>
          <span class="d">1.324.850: varejo 1,04 mi + bares/rest. 288 mil</span>
        </div>
        <div class="mkt-row rv" style="--d:5;--w:62%;--i:2">
          <span class="k">Elegível · 2029</span>
          <span class="v">1,27 mi</span>
          <span class="d">1.271.856 após 20% de adoção e 20% de expansão</span>
        </div>
        <div class="mkt-row som rv" style="--d:6;--w:48%;--i:3">
          <span class="k">SOM · 2029</span>
          <span class="v">254,4 mil</span>
          <span class="d">254.371 empresas finais · 20% de captura</span>
        </div>
      </div>

      <div class="mkt-side">
        <div class="mkt-ind-pair rv" style="--d:3">
          <div><p class="big">83%</p><b>Brasil</b><span>empresas pesquisadas sem IA · Cetic.br 2025</span></div>
          <div><p class="big">80%</p><b>Mundo (UE)</b><span>empresas ainda sem IA · Eurostat 2025</span></div>
        </div>
        <div class="mkt-ind-grid rv" style="--d:4">
          <div class="mkt-ind"><p class="big">22,7%</p><div><b>ao ano</b><span>crescimento da receita de IA conversacional no Brasil · 2026–2033</span></div></div>
          <div class="mkt-ind"><p class="big">458 mil</p><div><b>com WhatsApp/Telegram</b><span>316 mil vendem por mensagens · recorte 10+</span></div></div>
        </div>
        <div class="mkt-formula rv" style="--d:5">
          <p class="h">Do SAM ao SOM</p>
          <p><b>1.324.850</b> × 0,80 × 1,20 × 0,20 = <b>254.371</b></p>
          <p class="s">Adoção, expansão e captura são premissas distintas.</p>
        </div>
      </div>

      <p class="mkt-takeaway rv" style="--d:8">O mercado final é grande. <span>O acesso passa pelo parceiro.</span></p>

      <div class="mkt-sources rv" style="--d:8">
        <span class="mkt-src-label">Fontes</span>
        <ul class="mkt-src-list">
          <li>Receita Federal/Waxi</li>
          <li>SendorIA</li>
          <li>Cetic.br · 2025</li>
          <li>Eurostat · 2025</li>
          <li>Grand View Research</li>
          <li>AllService AI/IBGE</li>
        </ul>
        <span class="mkt-premise">Adoção 20% · expansão 20% · captura 20%</span>
      </div>
      <p class="mkt-foot rv" style="--d:9">TAM e SAM são aproximações do universo, não demanda comprovada. SOM é potencial de clientes finais atendidos pelo ecossistema, não receita da ScaleX. Adoção, expansão e captura são premissas distintas, não estatísticas observadas.</p>
    </div>`
};
