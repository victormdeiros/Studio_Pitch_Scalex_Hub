// Slide 13 do pitch: da validação à escala — 2025, 2026 e 2027 com simulador.
export default {
  id: 'resumo-escala',
  title: 'Da validação à escala: 2025 → 2027.',
  theme: 'dark',
  number: '13',
  notes: [
    'TEMPO ALVO: 50 segundos',
    'Em 2025, como agência, faturamos R$ 300 mil vendendo direto ao cliente final e atendemos cerca de 28 clientes. Em 2026 viramos a chave: foi o passo atrás estratégico para consolidar a arquitetura e a governança, saindo de agência para plataforma com 10 clientes pagantes e R$ 200 mil. Para 2027, o cenário base projeta R$ 1,32 milhão no ano. Com a entrada do investidor, o simulador traz a terceira opção: 3 cliques no botão do meio ativam a dinâmica de aceleração, dobrando o faturamento projetado de 2027 para R$ 2,64 milhões.'
  ],
  html: `
    <div class="esc">
      <header class="esc-head">
        <p class="kicker rv" style="--d:0"><span class="k-line"></span><svg class="ico" aria-hidden="true"><use href="#i-trend"></use></svg>Tração e projeção</p>
        <h2 class="esc-title rv" style="--d:1">Da validação à escala: <span class="grad-text">2025 → 2027</span></h2>
      </header>

      <div class="esc-cards">
        <article class="esc-card past rv" style="--d:2">
          <div class="esc-year"><span class="esc-dot"></span><b>2025</b><em class="esc-badge done">Realizado</em></div>
          <p class="esc-desc">Agência: venda direta ao cliente final.</p>
          <div class="esc-rows">
            <div><span>Clientes</span><b>≈ 28 finais*</b></div>
            <div><span>Faturamento</span><b>R$ 300 mil</b></div>
          </div>
        </article>

        <article class="esc-card now rv" style="--d:3">
          <div class="esc-year"><span class="esc-dot"></span><b>2026</b><em class="esc-badge now">Hoje</em></div>
          <p class="esc-desc">Virada de canal: agência <span>→</span> plataforma.</p>
          <div class="esc-rows">
            <div><span>Clientes</span><b>10 pagantes</b></div>
            <div><span>Faturamento 2026</span><b>R$ 200 mil</b></div>
          </div>
          <div class="esc-turnaround">
            <svg class="ico" aria-hidden="true"><use href="#i-refresh"></use></svg>
            <p>“O passo atrás estratégico: consolidamos a plataforma em 2026 para avançar dez passos à frente.”</p>
          </div>
        </article>

        <article class="esc-card next rv" style="--d:4" data-card="2027">
          <div class="esc-year"><span class="esc-dot"></span><b>2027</b><em class="esc-badge plan" data-badge="2027">Projeção</em></div>
          <p class="esc-desc">Revenda: parceiros com ticket de R$ 3.500.</p>
          <div class="esc-rows">
            <div><span>Revendedores no Q4/27</span><b data-out="card-rev">≈ 59</b></div>
            <div><span>Faturamento no ano</span><b data-out="card-annual">R$ 1,32 mi</b></div>
          </div>
          <div class="esc-boost-pill" data-out="boost-banner" style="display:none">
            <svg class="ico" aria-hidden="true"><use href="#i-spark"></use></svg>
            <span>Com Investidor: dobrado para <b>R$ 2,64 mi</b></span>
          </div>
        </article>
      </div>

      <section class="esc-sim rv" style="--d:5" data-simulator data-som="6430">
        <div class="esc-slider is-active" data-control="rev">
          <div class="esc-slabel"><span>Revendedores ativos</span><b data-out="rev">59</b></div>
          <input type="range" min="0" max="150" step="1" value="59" data-sim="rev" aria-label="Revendedores ativos" style="--p:39.3%">
          <div class="esc-ticks"><span style="left:6.7%">hoje: 10</span><span style="left:39.3%">59 · Q4/27</span><span style="left:100%">150</span></div>
        </div>

        <div class="esc-slider" data-control="ticket">
          <div class="esc-slabel"><span>Ticket mensal por revendedor</span><b data-out="ticket">R$ 3.500/mês</b></div>
          <input type="range" min="1050" max="4450" step="50" value="3500" data-sim="ticket" aria-label="Ticket mensal por revendedor" style="--p:72.1%">
          <div class="esc-ticks"><span style="left:0">R$ 1.050</span><span style="left:100%">R$ 4.450</span></div>
        </div>

        <div class="esc-slider esc-boost-control" data-control="boost">
          <div class="esc-slabel">
            <span class="boost-slabel-tag"><svg class="ico" aria-hidden="true"><use href="#i-spark"></use></svg>3ª Opção · Entrada do Investidor</span>
            <b data-out="boost-state" class="boost-state-text">Cenário Base (1x)</b>
          </div>
          <button type="button" class="esc-boost-btn" data-sim="boost" aria-pressed="false">
            <span class="boost-dot-indicator"></span>
            <span class="boost-btn-label"><b>Aceleração com Investidor:</b> dobra o faturamento de 2027 (R$ 1,32 mi <span>→</span> <b>R$ 2,64 mi</b>)</span>
            <em class="boost-action-chip">3 cliques no botão do meio ou clique aqui</em>
          </button>
        </div>

        <p class="esc-hint"><svg class="ico" aria-hidden="true"><use href="#i-repeat"></use></svg>Arraste para simular.<em class="esc-mouse">Tela cheia · <b>roda</b> ajusta · <b>clique do meio</b> troca controles · <b>3 cliques</b> dobram 2027</em><em data-out="step">1 / 3</em></p>

        <div class="esc-results">
          <div class="esc-result"><span>Receita mensal</span><b data-out="monthly">R$ 207 mil</b></div>
          <div class="esc-result annual"><span>Faturamento anual</span><b data-out="annual">R$ 2,48 mi</b></div>
          <div class="esc-result som"><span>Fatia do SOM 2029</span><b data-out="som">0,9%</b></div>
        </div>
      </section>

      <p class="esc-foot rv" style="--d:6">*28 clientes finais atendidos pela agência em 2025. Faturamento anual = receita mensal × 12 (ritmo do mês). Aceleração com investidor dobra a projeção de 2027 para R$ 2,64 mi. SOM 2029 de 6,4 mil parceiros. Projeção interna; não é guidance.</p>
    </div>`
};
