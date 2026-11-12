// Slide 3 do pitch: o problema descoberto — escalar trabalho em vez de tecnologia.
export default {
  id:'resumo-impacto',
  title:'Estávamos escalando trabalho, não tecnologia.',
  theme:'dark',
  number:'03',
  notes:[
    'TEMPO ALVO: 20 segundos',
    'Quanto mais clientes atendíamos, mais trabalho precisávamos executar. E, mesmo depois da implantação, as ferramentas nem sempre eram utilizadas. O modelo convencional de automação tinha duas consequências: implantação cara e demorada — desenvolvimento, configuração, manutenção e aprendizado — e ferramentas descentralizadas — múltiplas contratações, custos elevados e baixa adesão dos usuários.',
    'O diagrama de esforço, custo e resultado é ilustrativo: representa a relação percebida na operação, não uma medição.'
  ],
  html:`
    <div class="ri">
      <div class="ri-grid" aria-hidden="true"></div>
      <div class="ri-glow" aria-hidden="true"></div>
      <header class="ri-head">
        <p class="kicker rv" style="--d:0"><span class="k-line"></span><svg class="ico" aria-hidden="true"><use href="#i-trend-down"></use></svg>O problema que descobrimos</p>
        <h2 class="ri-title rv" style="--d:1">
          <span class="ri-line">Estávamos escalando</span>
          <span class="ri-line"><em>trabalho,</em> não <span class="grad-text">tecnologia.</span></span>
        </h2>
        <p class="ri-sub rv" style="--d:2">Mais clientes, mais trabalho. E as ferramentas nem sempre eram usadas.</p>
      </header>

      <div class="ri-cards">
        <article class="ri-card time rv" style="--d:3">
          <span class="ri-ico"><svg class="ico" aria-hidden="true"><use href="#i-clock"></use></svg></span>
          <div><h3>Implantação cara e demorada</h3><p>Construir, configurar, manter e ensinar.</p></div>
          <span class="ri-tag"><svg class="ico" aria-hidden="true"><use href="#i-clock"></use></svg>tempo</span>
        </article>
        <article class="ri-card money rv" style="--d:4">
          <span class="ri-ico"><svg class="ico" aria-hidden="true"><use href="#i-banknote"></use></svg></span>
          <div><h3>Ferramentas descentralizadas</h3><p>Várias contratações, custo alto, baixa adesão.</p></div>
          <span class="ri-tag"><svg class="ico" aria-hidden="true"><use href="#i-banknote"></use></svg>dinheiro</span>
        </article>
      </div>

      <div class="ri-meter rv" style="--d:5" role="img" aria-label="Contraste ilustrativo: esforço de implantação alto, custo alto e resultado para o cliente baixo.">
        <div class="ri-m hi"><span>Esforço de implantação</span><i style="--w:92%"></i><b>alto</b></div>
        <div class="ri-m hi"><span>Custo</span><i style="--w:84%"></i><b>alto</b></div>
        <div class="ri-m lo"><span>Resultado para o cliente</span><i style="--w:26%"></i><b>baixo</b></div>
      </div>
    </div>`
};
