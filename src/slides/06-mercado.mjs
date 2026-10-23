// Slide 6 · mercado direto e indireto em TAM, SAM e SOM.
export default {
  id: 'slide-6',
  title: 'O mercado direto abre a porta. A base multiplica o upsell.',
  theme: 'light',
  number: '04',
  notes: [
    'TEMPO ALVO: 35 segundos',
    'ROTEIRO FALADO',
    'O mercado direto é quem compra a ScaleX: estimamos um TAM superior a cem mil empresas, um SAM de vinte e seis mil e uma captura inicial de 0,5% a 1%, ou 130 a 260 revendedores. O mercado indireto é quem esses revendedores atendem. Com a premissa ilustrativa de dez empresas finais por revendedor, o TAM indireto chega a 1 milhão, o SAM a 260 mil e o SOM inicial a 1,3–2,6 mil empresas finais. Sobre esse SOM, há ainda o cliente do cliente: com dez clientes por empresa final, chegamos a 13–26 mil clientes. Tudo isso é uma expansão de upsell a validar com a base, não um TAM auditado.',
    'APOIO PARA PERGUNTAS',
    'Mercado direto: TAM +100 mil, SAM ~26 mil, SOM 130–260 revendedores (0,5%–1% do SAM).',
    'Mercado indireto: premissa ilustrativa de 10 empresas finais por revendedor. TAM 100 mil × 10 = 1 milhão; SAM 26 mil × 10 = 260 mil; SOM 130–260 × 10 = 1,3–2,6 mil empresas finais.',
    'Cliente do cliente: 1,3–2,6 mil × 10 = 13–26 mil clientes das empresas finais.',
    'TAM, SAM e SOM diretos são estimativas internas fornecidas no pitch. O mercado indireto é uma expansão de upsell a partir da base e depende da premissa de 10× em cada camada; não é um TAM auditado.',
    'Fonte: conteúdo e roteiro fornecidos na conversa “Informações para investidores”, 30/09/2026. https://chatgpt.com/c/6abd1706-583c-83e9-bc91-7f70a6104b7a'
  ],
  html: `
    <div class="market">
      <header class="market-head">
        <p class="kicker rv" style="--d:0"><span class="k-line"></span><svg class="ico" aria-hidden="true"><use href="#i-globe"></use></svg>Mercado</p>
        <h2 class="h2 rv" style="--d:1">O mercado direto abre a porta. <span class="grad-text">A base multiplica o upsell.</span></h2>
        <p class="lead rv" style="--d:2">Vendemos para quem revende. Cada parceiro ativa empresas finais — e os clientes delas.</p>
      </header>
      <div class="market-body">
        <section class="market-direct">
          <p class="micro rv" style="--d:2"><svg class="ico" aria-hidden="true"><use href="#i-globe"></use></svg>Mercado direto · quem compra a ScaleX</p>
          <div class="mk-funnel">
            <div class="mk-row rv" style="--d:3;--i:0;--w:100%"><span class="k">TAM</span><span class="v">+100 mil</span><span class="d">empresas no mercado potencial</span></div>
            <div class="mk-row rv" style="--d:4;--i:1;--w:76%"><span class="k">SAM</span><span class="v">~26 mil</span><span class="d">empresas atendíveis hoje</span></div>
            <div class="mk-row som rv" style="--d:5;--i:2;--w:54%"><span class="k">SOM inicial</span><span class="v">130–260</span><span class="d">revendedores · 0,5%–1% do SAM</span></div>
          </div>
        </section>
        <section class="market-indirect">
          <p class="micro rv" style="--d:2"><svg class="ico" aria-hidden="true"><use href="#i-users"></use></svg>Mercado indireto · quem é atendido pelos revendedores</p>
          <div class="mk-funnel">
            <div class="mk-row rv" style="--d:3;--i:0;--w:100%"><span class="k">TAM</span><span class="v">1 mi</span><span class="d">empresas finais atendíveis</span></div>
            <div class="mk-row rv" style="--d:4;--i:1;--w:76%"><span class="k">SAM</span><span class="v">260 mil</span><span class="d">empresas finais no SAM</span></div>
            <div class="mk-row som rv" style="--d:5;--i:2;--w:54%"><span class="k">SOM inicial</span><span class="v">1,3–2,6 mil</span><span class="d">empresas finais · 0,5%–1% do SAM indireto</span></div>
          </div>
        </section>
      </div>
      <div class="market-upsell rv" style="--d:7">
        <span class="label">Upsell adicional · cliente do cliente</span>
        <span class="v">13–26 mil</span>
        <span class="d">clientes das empresas finais · ×10 sobre o SOM indireto</span>
      </div>
      <p class="market-note rv" style="--d:8">Premissa ilustrativa: 10 empresas finais por revendedor e 10 clientes por empresa final. Validar com a base. TAM, SAM e SOM diretos são estimativas internas; o indireto é uma expansão de upsell, não um TAM auditado.</p>
      <p class="market-foot rv" style="--d:9">Fontes: conteúdo e roteiro fornecidos no pitch. O mercado indireto depende da premissa de 10× em cada camada.</p>
    </div>`
};
