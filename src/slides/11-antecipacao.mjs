// Slide 8 · antecipação com aporte.
export default {
  id: 'slide-11',
  title: 'O aporte antecipa o plano',
  theme: 'dark',
  number: '09',
  notes: [
    'TEMPO ALVO: 25 segundos',
    'ROTEIRO FALADO',
    'O aporte comprime o tempo de execução do plano. Em bootstrap, a estrutura comercial mais relevante e minha dedicação integral ficam para Q2 de 2027. As adequações de enterprise readiness ficam para Q3. Com capital, a proposta é iniciar esses movimentos entre Q4 de 2026 e Q1 de 2027, antecipando a execução em aproximadamente seis a nove meses.',
    'APOIO PARA PERGUNTAS',
    'A antecipação de 6–9 meses é a estimativa de execução fornecida no pitch. As datas com aporte representam uma janela proposta, condicionada à rodada e à execução, e não compromissos já contratados.',
    'Fonte: conteúdo e roteiro fornecidos na conversa “Informações para investidores”, 30/09/2026. https://chatgpt.com/c/6abd1706-583c-83e9-bc91-7f70a6104b7a'
  ],
  html: `
    <header class="s8-head">
      <p class="kicker rv" style="--d:0"><span class="k-line"></span><svg class="ico" aria-hidden="true"><use href="#i-clock"></use></svg>Cronograma</p>
      <h2 class="h2 rv" style="--d:1">O aporte antecipa o plano</h2>
    </header>
    <div class="s8-big rv" style="--d:2">
      <p class="v">6–9</p>
      <p class="u">meses</p>
      <p class="s">de antecipação estimada na execução do plano</p>
    </div>
    <div class="tl rv-soft" style="--d:3">
      <div class="tl-head"><span></span><span>Q4/26</span><span>Q1/27</span><span>Q2/27</span><span>Q3/27</span></div>
      <div class="tl-row">
        <span class="rl">Bootstrap</span>
        <span class="tl-bar on" style="--i:0;grid-column:4">Founder full-time · Estrutura comercial</span>
        <span class="tl-bar on" style="--i:1;grid-column:5">Enterprise readiness</span>
      </div>
      <div class="tl-row">
        <span class="rl">Com aporte</span>
        <span class="tl-bar hi" style="--i:2;grid-column:2 / span 2">Founder full-time, comercial e enterprise readiness</span>
      </div>
      <svg class="s8-arc" viewBox="0 0 636 168" aria-hidden="true">
        <defs><linearGradient id="s8Arc" x1="1" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8ea2ff"/><stop offset="1" stop-color="#c084fc"/></linearGradient></defs>
        <path d="M520 10 C520 148 150 150 118 62"/>
        <circle cx="520" cy="10" r="3"/><circle cx="118" cy="62" r="3"/>
      </svg>
      <p class="s8-arc-label">antecipação de 6–9 meses</p>
    </div>
    <div class="s8-note rv" style="--d:6">
      <p>Bootstrap: estrutura comercial em Q2/27 e enterprise readiness em Q3/27. Proposta condicionada à rodada e à execução.</p>
      <span class="window"><svg class="ico" aria-hidden="true"><use href="#i-calendar"></use></svg>Janela proposta · Q4/26–Q1/27</span>
    </div>`
};
