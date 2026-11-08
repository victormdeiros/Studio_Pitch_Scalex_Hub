// Slide 15 do pitch: capital e rede estratégica — antecipação de 6 a 9 meses e estimativa de dobrar o faturamento.
export default {
  id: 'resumo-investidor',
  title: 'Capital e rede: o aporte antecipa a execução e dobra o faturamento.',
  theme: 'dark',
  number: '15',
  notes: [
    'TEMPO ALVO: 30 segundos',
    'Buscamos smart money que agregue muito além do capital financeiro: acesso enterprise, mentoria em SaaS B2B, canais de distribuição e governança. Em modelo bootstrap, a estrutura comercial e dedicação integral só aconteceriam no Q2 de 2027, e o enterprise readiness no Q3. Com o aporte, iniciamos tudo entre Q4 de 2026 e Q1 de 2027: são 6 a 9 meses de antecipação. Além disso, com a força do go-to-market e a rede do investidor, a estimativa é dobrar o faturamento projetado de 2027, saltando de R$ 1,32 milhão para R$ 2,64 milhões.'
  ],
  html: `
    <div class="cap-rede">
      <header class="cap-head">
        <p class="kicker rv" style="--d:0"><span class="k-line"></span><svg class="ico" aria-hidden="true"><use href="#i-clock"></use></svg>Capital &amp; Rede Estratégica</p>
        <h2 class="h2 rv" style="--d:1">O aporte antecipa a execução e <span class="grad-text">dobra o faturamento projetado.</span></h2>
        <p class="cap-lead rv" style="--d:2">Mais do que capital: abertura de portas, aceleração de canais e governança institucional.</p>
      </header>

      <!-- Duas métricas de impacto lado a lado -->
      <div class="cap-impacts rv" style="--d:3">
        <article class="cap-impact-card">
          <div class="cic-top">
            <span class="cic-tag"><svg class="ico" aria-hidden="true"><use href="#i-clock"></use></svg>Ganho de Tempo</span>
          </div>
          <div class="cic-body">
            <div class="cic-num-wrap">
              <span class="cic-num grad">6–9</span>
              <span class="cic-unit">meses</span>
            </div>
            <p class="cic-title">de antecipação estimada no plano</p>
            <p class="cic-desc">Estrutura comercial, founder full-time e enterprise readiness antecipados do Q2–Q3/27 para Q4/26–Q1/27.</p>
          </div>
        </article>

        <article class="cap-impact-card highlight">
          <div class="cic-top">
            <span class="cic-tag boost"><svg class="ico" aria-hidden="true"><use href="#i-spark"></use></svg>Alavancagem Comercial</span>
            <em class="cic-badge">Com Investidor</em>
          </div>
          <div class="cic-body">
            <div class="cic-num-wrap">
              <span class="cic-num boost">2x</span>
              <span class="cic-unit">faturamento</span>
            </div>
            <p class="cic-title">estimativa de dobrar o faturamento de 2027</p>
            <p class="cic-desc">Com a injeção em closer dedicado e rede de parceiros, o faturamento salta de <b>R$ 1,32 mi</b> para <b>R$ 2,64 mi</b> no ano.</p>
          </div>
        </article>
      </div>

      <!-- As 5 frentes de Smart Money -->
      <div class="cap-smart-wrap rv" style="--d:4">
        <div class="cap-smart-label">
          <svg class="ico" aria-hidden="true"><use href="#i-users"></use></svg>
          <span>Smart money esperado · Conexões e governança</span>
        </div>
        <div class="cap-smart-grid">
          <div class="cs-item">
            <span class="cs-n">01</span>
            <b>Enterprise</b>
            <p>Acesso e abertura de portas em grandes contas e canais corporativos.</p>
          </div>
          <div class="cs-item">
            <span class="cs-n">02</span>
            <b>SaaS B2B</b>
            <p>Experiência prática em vendas consultivas, ciclo longo e retenção (NDR).</p>
          </div>
          <div class="cs-item">
            <span class="cs-n">03</span>
            <b>Canais &amp; Parcerias</b>
            <p>Distribuição e conexões com redes de agências e integradores no Brasil.</p>
          </div>
          <div class="cs-item">
            <span class="cs-n">04</span>
            <b>Máquina Comercial</b>
            <p>Playbooks de escala, contratação de closers e esteira de alta conversão.</p>
          </div>
          <div class="cs-item">
            <span class="cs-n">05</span>
            <b>Governança</b>
            <p>Preparação institucional e societária para futuras rodadas de Venture Capital.</p>
          </div>
        </div>
      </div>

      <!-- Timeline comparativa -->
      <div class="cap-tl rv" style="--d:5">
        <div class="ctl-head">
          <span class="ctl-label">Cronograma</span>
          <span>Q4/26</span><span>Q1/27</span><span>Q2/27</span><span>Q3/27</span>
        </div>
        <div class="ctl-row">
          <span class="ctl-mode">Bootstrap</span>
          <span class="ctl-bar dim" style="grid-column:4">Founder full-time &amp; Comercial</span>
          <span class="ctl-bar dim" style="grid-column:5">Enterprise readiness</span>
        </div>
        <div class="ctl-row">
          <span class="ctl-mode hi">Com aporte</span>
          <span class="ctl-bar hi" style="grid-column:2 / span 2">Comercial acelerado, Founder full-time &amp; Enterprise readiness</span>
          <span class="ctl-win"><svg class="ico" aria-hidden="true"><use href="#i-spark"></use></svg>Antecipa 6–9 meses e dobra o resultado</span>
        </div>
      </div>

      <p class="cap-foot rv" style="--d:6">Janela proposta: Q4/26–Q1/27, condicionada à captação e execução. Estimativa de dobrar o faturamento fundamentada na alocação de 50% do aporte em closer e ativação de rede. Projeção interna; não é guidance de investimento.</p>
    </div>`
};
