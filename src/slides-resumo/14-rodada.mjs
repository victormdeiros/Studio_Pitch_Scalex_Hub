// Slide 14 do pitch: a rodada de investimento (10% por R$ 300 mil), payback em 2 anos e uso dinâmico do capital.
export default {
  id: 'resumo-rodada',
  title: 'A rodada de captação: 10% da ScaleX Hub por R$ 300 mil.',
  theme: 'dark',
  number: '14',
  notes: [
    'TEMPO ALVO: 35 segundos',
    'A rodada busca R$ 300 mil por 10% de participação na ScaleX Hub, com valuation pré-money de R$ 2,7 milhões (R$ 3,0 milhões pós-money). O diferencial é a disciplina de capital: temos estimativa de payback do investimento em 2 anos, sustentada pela margem projetada e tração de revendedores em 2027. O uso do capital foca 50% em máquina comercial (closer para conversão direta), 30% em enterprise readiness (segurança, LGPD e governança) e 20% em founder full-time.'
  ],
  html: `
    <div class="rodada">
      <header class="rodada-head">
        <p class="kicker rv" style="--d:0"><span class="k-line"></span><svg class="ico" aria-hidden="true"><use href="#i-banknote"></use></svg>A rodada de captação</p>
        <h2 class="rodada-title rv" style="--d:1">10% da ScaleX Hub <span class="grad-text">por R$ 300 mil.</span></h2>
        <p class="rodada-lead rv" style="--d:2">Entrada pré-seed para acelerar go-to-market, maturidade enterprise e dedicação integral.</p>
      </header>

      <div class="rodada-grid">
        <!-- Coluna Esquerda: Termos da Rodada e Payback em 2 anos -->
        <div class="rodada-terms rv" style="--d:3">
          <div class="terms-card">
            <span class="terms-badge">Proposta de Entrada</span>
            <div class="terms-metrics">
              <div class="term-col">
                <span class="term-label">Aporte proposto</span>
                <b class="term-val grad">R$ 300 mil</b>
              </div>
              <div class="term-col">
                <span class="term-label">Participação</span>
                <b class="term-val">10% equity</b>
              </div>
            </div>

            <div class="terms-val-row">
              <div class="term-mini">
                <span>Valuation Pré-Money</span>
                <b>R$ 2,70 mi</b>
              </div>
              <div class="term-mini">
                <span>Valuation Pós-Money</span>
                <b>R$ 3,00 mi</b>
              </div>
            </div>

            <!-- Destaque de Payback em 2 anos -->
            <div class="rodada-payback">
              <div class="pb-tag">
                <svg class="ico" aria-hidden="true"><use href="#i-spark"></use></svg>
                <span>Estimativa de Retorno</span>
              </div>
              <div class="pb-headline">
                <b>Payback em 2 anos</b>
                <em>(24 meses)</em>
              </div>
              <p class="pb-desc">Retorno projetado do capital investido em 24 meses, impulsionado pela alavancagem de margem e expansão dos revendedores ativos em 2027.</p>
            </div>
          </div>
        </div>

        <!-- Coluna Direita: Gráfico Dinâmico de Alocação de Capital -->
        <div class="rodada-alloc rv" style="--d:4" data-alloc-chart>
          <div class="alloc-card">
            <div class="alloc-head">
              <div>
                <span class="alloc-kicker">Destinação dos Recursos</span>
                <h3 class="alloc-title">Uso do Capital · R$ 300 mil</h3>
              </div>
              <span class="alloc-hint-chip">Passe o mouse ou toque para detalhar</span>
            </div>

            <div class="alloc-body">
              <!-- Gráfico Donut Visual SVG -->
              <div class="alloc-donut-wrap">
                <svg class="alloc-donut" viewBox="0 0 160 160" aria-label="Gráfico de pizza do uso do capital">
                  <!-- Círculo de fundo -->
                  <circle cx="80" cy="80" r="58" class="donut-track" />
                  <!-- Fatias com stroke-dasharray (circunferência = 2 * PI * 58 ≈ 364.42) -->
                  <!-- Slice 1: Comercial 50% = 182.2, offset = 0 -->
                  <circle cx="80" cy="80" r="58" class="donut-slice c1 is-active" stroke-dasharray="182.2 364.4" stroke-dashoffset="0" data-slice="0" />
                  <!-- Slice 2: Enterprise 30% = 109.3, offset = -182.2 -->
                  <circle cx="80" cy="80" r="58" class="donut-slice c2" stroke-dasharray="109.3 364.4" stroke-dashoffset="-182.2" data-slice="1" />
                  <!-- Slice 3: Founder 20% = 72.9, offset = -291.5 -->
                  <circle cx="80" cy="80" r="58" class="donut-slice c3" stroke-dasharray="72.9 364.4" stroke-dashoffset="-291.5" data-slice="2" />
                </svg>
                <div class="donut-center-info">
                  <span class="d-pct" data-out="alloc-pct">50%</span>
                  <b class="d-val" data-out="alloc-val">R$ 150 mil</b>
                  <em class="d-tag" data-out="alloc-tag">Comercial</em>
                </div>
              </div>

              <!-- Lista interativa de frentes -->
              <div class="alloc-list">
                <article class="alloc-item is-active" data-slice="0">
                  <div class="ai-bullet c1"></div>
                  <div class="ai-text">
                    <div class="ai-row">
                      <b>50% · Comercial &amp; Go-To-Market</b>
                      <span class="ai-money">R$ 150 mil</span>
                    </div>
                    <p>Contratação de closer sênior para conversão direta de reuniões. A prospecção e nutrição rodam 100% na esteira automatizada da ScaleX.</p>
                  </div>
                </article>

                <article class="alloc-item" data-slice="1">
                  <div class="ai-bullet c2"></div>
                  <div class="ai-text">
                    <div class="ai-row">
                      <b>30% · Enterprise Readiness</b>
                      <span class="ai-money">R$ 90 mil</span>
                    </div>
                    <p>Adequação a LGPD, governança, segurança da informação, arquitetura multi-tenant avançada e observabilidade em nuvem.</p>
                  </div>
                </article>

                <article class="alloc-item" data-slice="2">
                  <div class="ai-bullet c3"></div>
                  <div class="ai-text">
                    <div class="ai-row">
                      <b>20% · Founder Full-Time</b>
                      <span class="ai-money">R$ 60 mil</span>
                    </div>
                    <p>Dedicação integral do fundador à liderança do produto, arquitetura PaaS e relacionamento estratégico com parceiros-chave.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p class="rodada-foot rv" style="--d:5">Oferta de 10% da ScaleX Hub por R$ 300 mil. Valuation indicativo de R$ 3,0 mi pós-money com bootstrapping considerado. Estimativa de payback em 2 anos baseada nas projeções de 2027. Projeção interna; não é guidance de investimento.</p>
    </div>`
};
