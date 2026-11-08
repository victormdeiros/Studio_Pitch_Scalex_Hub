// Slide 4 do pitch: o impacto de escalar trabalho em vez de tecnologia.
export default {
  id:'resumo-impacto',
  title:'Escalávamos trabalho, não tecnologia.',
  theme:'dark',
  number:'05',
  notes:[
    'TEMPO ALVO: 25 segundos',
    'O resultado era claro: implantação lenta, configuração e retrabalho a cada novo cliente; alto custo e receita recorrente quase nula. Mais clientes significavam mais integrações, mais complexidade e mais trabalho manual.'
  ],
  html:`
    <div class="ri">
      <div class="ri-grid" aria-hidden="true"></div>
      <div class="ri-glow" aria-hidden="true"></div>
      <header class="ri-head">
        <p class="kicker rv" style="--d:0"><span class="k-line"></span><svg class="ico" aria-hidden="true"><use href="#i-trend-down"></use></svg>O resultado</p>
        <h2 class="ri-title rv" style="--d:1">
          <span class="ri-line">escalávamos <em>trabalho,</em></span>
          <span class="ri-line">não <span class="grad-text">tecnologia.</span></span>
        </h2>
        <p class="ri-sub rv" style="--d:2">Mais clientes = mais integrações = mais complexidade.</p>
      </header>

      <div class="ri-cards">
        <article class="ri-card time rv" style="--d:4">
          <span class="ri-ico"><svg class="ico" aria-hidden="true"><use href="#i-clock"></use></svg></span>
          <div><h3>Implantação lenta</h3><p>Configuração e retrabalho a cada novo cliente.</p></div>
          <span class="ri-tag"><svg class="ico" aria-hidden="true"><use href="#i-clock"></use></svg>tempo</span>
        </article>
        <article class="ri-card money rv" style="--d:5">
          <span class="ri-ico"><svg class="ico" aria-hidden="true"><use href="#i-banknote"></use></svg></span>
          <div><h3>Alto custo</h3><p>Receita recorrente quase nula.</p></div>
          <span class="ri-tag"><svg class="ico" aria-hidden="true"><use href="#i-banknote"></use></svg>dinheiro</span>
        </article>
      </div>
      <p class="ri-foot rv" style="--d:6">O gargalo não era a IA. Era a operação em volta dela.</p>
    </div>`
};
