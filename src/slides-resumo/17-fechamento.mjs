// Slide 17 do pitch resumido: convite ao investidor, com QR Code do Invest3.
import base from '../slides/17-fechamento.mjs';

export default {
  ...base,
  id: 'resumo-fechamento',
  title: 'Centralize. Execute. Scale.',
  notes: [
    'TEMPO ALVO: 10 segundos',
    'Estamos construindo a infraestrutura que permite a empresas escalar soluções de automação com inteligência artificial. ScaleX Hub — Centralize. Execute. Scale. Vamos continuar essa conversa?',
    'Rodada proposta: R$ 300 mil por 10%. O QR Code leva a invest3.scalexhub.ai.'
  ],
  html: `
    <div class="s11-content s11-invite">
      <p class="kicker rv" style="--d:0"><span class="k-line"></span><svg class="ico" aria-hidden="true"><use href="#i-arrow"></use></svg>Convite ao investidor</p>
      <h1 class="display rv" style="--d:1">A infraestrutura para empresas escalarem <span class="grad-text">automação com inteligência artificial.</span></h1>
      <p class="s11-motto rv" style="--d:2"><b>ScaleX Hub</b> — Centralize. Execute. Scale.</p>
      <span class="cta rv" style="--d:3">Vamos conversar?</span>
    </div>
    <div class="s11-ring" aria-hidden="true"></div>
    <figure class="s11-mark rv-soft" style="--d:4" aria-hidden="true"><img src="assets/brand/simbolo-colorido-1024.png" alt=""></figure>
    <div class="s11-contact rv" style="--d:4">
      <img src="assets/brand/qr-invest3.png" alt="QR Code do Invest3 ScaleX Hub">
      <div><b>Acesse a rodada</b><span>invest3.scalexhub.ai</span></div>
    </div>`
};
