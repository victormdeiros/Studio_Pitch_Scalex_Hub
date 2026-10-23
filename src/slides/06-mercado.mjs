// Slide 7 · mercado direto e mercado indireto (upsell da base).
export default {
  id: 'slide-6',
  title: 'O mercado direto abre a porta. A base multiplica o upsell.',
  theme: 'light',
  number: '04',
  notes: [
    'TEMPO ALVO: 35 segundos',
    'ROTEIRO FALADO',
    'O mercado direto é quem compra a ScaleX: estimamos um TAM superior a cem mil empresas, um SAM de vinte e seis mil e uma captura inicial de 0,5% a 1%, ou 130 a 260 revendedores. A expansão vem do mercado indireto, pelo upsell da base: cada revendedor ativa várias empresas finais e cada empresa final tem seus próprios clientes. Com uma premissa ilustrativa de dez empresas finais por revendedor e dez clientes por empresa final, a base de 130 a 260 revendedores chega a 1,3–2,6 mil empresas finais e 13–26 mil clientes dessas empresas. É uma camada de upsell a validar com a base, não um TAM auditado.',
    'APOIO PARA PERGUNTAS',
    'TAM, SAM e SOM são estimativas internas fornecidas no pitch, sem estudo externo ou memória de cálculo detalhada anexados.',
    'Cálculo do SOM inicial: 26.000 × 0,5% = 130; 26.000 × 1% = 260.',
    'Mercado indireto ilustrativo: 130–260 revendedores × 10 empresas finais = 1.300–2.600; × 10 clientes por empresa final = 13.000–26.000. A premissa de 10× em cada camada é uma modelagem para conversa, não um dado auditado.',
    'O upside inclui o cliente do cliente: a base do parceiro pode ser ativada com novos módulos e a base das empresas finais pode ser trabalhada em uma camada adicional.',
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
            <div class="mk-row tam rv" style="--d:3;--i:0"><span class="k">TAM</span><span class="v">+100 mil</span><span class="d">empresas no mercado potencial</span></div>
            <div class="mk-row sam rv" style="--d:4;--i:1"><span class="k">SAM</span><span class="v">~26 mil</span><span class="d">empresas atendíveis hoje</span></div>
            <div class="mk-row som rv" style="--d:5;--i:2"><span class="k">SOM inicial</span><span class="v">130–260</span><span class="d">revendedores · 0,5%–1% do SAM</span></div>
          </div>
          <p class="mk-bridge rv" style="--d:6"><svg class="ico" aria-hidden="true"><use href="#i-arrow"></use></svg>O revendedor é a porta de entrada para uma base maior.</p>
        </section>
        <section class="market-indirect">
          <p class="micro rv" style="--d:2"><svg class="ico" aria-hidden="true"><use href="#i-users"></use></svg>Mercado indireto · upsell da base</p>
          <div class="mk-cascade">
            <div class="mk-stage base rv" style="--d:3"><span class="v">130–260</span><span class="l">revendedores</span></div>
            <div class="mk-arrow rv" style="--d:4">↓ <b>×10</b></div>
            <div class="mk-stage rv" style="--d:5"><span class="v">1,3–2,6 mil</span><span class="l">empresas finais atendidas</span></div>
            <div class="mk-arrow rv" style="--d:6">↓ <b>×10</b></div>
            <div class="mk-stage accent rv" style="--d:7"><span class="v">13–26 mil</span><span class="l">clientes das empresas finais</span></div>
          </div>
          <p class="mk-note rv" style="--d:7">Premissa ilustrativa de 10 empresas finais por revendedor e 10 clientes por empresa final. Validar com a base.</p>
        </section>
      </div>
      <p class="market-foot rv" style="--d:8">TAM, SAM e SOM são estimativas internas. O mercado indireto é uma expansão de upsell a partir da base, não um TAM auditado.</p>
    </div>`
};
