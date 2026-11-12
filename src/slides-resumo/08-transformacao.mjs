// Slide 8 do pitch: a mudança estratégica — plataforma para quem implementa e revende automação.
const dots=n=>Array.from({length:n},(_,i)=>`<i style="--i:${i}"></i>`).join('');

export default {
  id:'resumo-transformacao',
  title:'Mudamos a forma de escalar automação.',
  theme:'dark',
  number:'08',
  notes:[
    'TEMPO ALVO: 25 segundos',
    'Quantos softwares vocês conhecem que vendem automação diretamente para empresas? Agora, quantos softwares vocês conhecem que são feitos para quem implementa e revende automação? A ScaleX Hub não busca apenas atender diretamente cada empresa final. Desenvolvemos a infraestrutura para que empresas especializadas possam implementar, personalizar e revender soluções de automação em escala. A ScaleX Hub evolui a tecnologia, acompanha as inovações e simplifica a infraestrutura. O parceiro concentra sua expertise nas dores dos clientes, na implementação e no relacionamento comercial. Nós escalamos a tecnologia. Nossos parceiros escalam as soluções.',
    'As duas perguntas são retóricas. Os pontos do slide ilustram a percepção de um mercado com muitas opções de venda direta e poucas voltadas a quem revende; não representam uma contagem de empresas.'
  ],
  html:`
    <div class="rme">
      <header class="rme-head">
        <p class="kicker rv" style="--d:0"><span class="k-line"></span><svg class="ico" aria-hidden="true"><use href="#i-route"></use></svg>Mudança estratégica · modelo de negócio</p>
        <h2 class="rme-title rv" style="--d:1">Mudamos a forma de <span class="grad-text">escalar automação.</span></h2>
      </header>

      <div class="rme-asks">
        <article class="rme-ask many rv" style="--d:2">
          <span class="rme-q">Pergunta 1</span>
          <h3>Quantos softwares vendem automação <b>direto para empresas?</b></h3>
          <div class="rme-dots" aria-hidden="true">${dots(44)}</div>
          <em>Muitos.</em>
        </article>
        <article class="rme-ask few rv" style="--d:3">
          <span class="rme-q">Pergunta 2</span>
          <h3>E quantos são feitos para <b>quem implementa e revende automação?</b></h3>
          <div class="rme-dots" aria-hidden="true">${dots(3)}</div>
          <em>É aqui que estamos.</em>
        </article>
      </div>

      <div class="rme-split">
        <article class="rme-role hub rv" style="--d:4">
          <img src="assets/brand/simbolo-colorido-1024.png" alt="">
          <div><span>ScaleX Hub</span><b>Evolui a tecnologia.</b><p>Inovação e infraestrutura simplificada.</p></div>
        </article>
        <div class="rme-link rv" style="--d:4" aria-hidden="true"><span></span></div>
        <article class="rme-role partner rv" style="--d:5">
          <i><svg class="ico" aria-hidden="true"><use href="#i-users"></use></svg></i>
          <div><span>Parceiro</span><b>Resolve a dor do cliente.</b><p>Implementação e relacionamento comercial.</p></div>
        </article>
      </div>

      <p class="rme-takeaway rv" style="--d:6">Nós escalamos a tecnologia. <span>Nossos parceiros escalam as soluções.</span></p>
    </div>`
};
