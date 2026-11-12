// Slide 18 do pitch resumido: convite ao investidor, com QR Code do Invest3.
import base from '../slides/17-fechamento.mjs';

export default {
  ...base,
  id: 'resumo-fechamento',
  title: 'A infraestrutura da automação do atendimento por IA vai ter dono.',
  notes: [
    'TEMPO ALVO: 10 segundos',
    'A infraestrutura da automação do atendimento por IA vai ter dono. A pergunta é: quem? ScaleX Hub — Centralize. Execute. Scale. Vamos juntos?',
    'Rodada proposta: R$ 300 mil por 10%. O QR Code leva a invest3.scalexhub.ai.'
  ],
  html: `
    <div class="s11-content s11-invite">
      <p class="kicker rv" style="--d:0"><span class="k-line"></span><svg class="ico" aria-hidden="true"><use href="#i-arrow"></use></svg>Convite ao investidor</p>
      <h1 class="display rv" style="--d:1">A infraestrutura da automação do atendimento por IA vai ter dono.<br><span class="grad-text">A pergunta é: quem?</span></h1>
      <p class="s11-motto rv" style="--d:2"><b>ScaleX Hub</b> — Centralize. Execute. Scale.</p>
      <span class="cta rv" style="--d:3">Vamos juntos?</span>
    </div>
    <div class="s11-ring" aria-hidden="true"></div>
    <figure class="s11-mark rv-soft" style="--d:4" aria-hidden="true"><img src="assets/brand/simbolo-colorido-1024.png" alt=""></figure>
    <div class="s11-contact rv" style="--d:4">
      <img src="assets/brand/qr-invest3.png" alt="QR Code do Invest3 ScaleX Hub">
      <div><b>Acesse a rodada</b><span>invest3.scalexhub.ai</span></div>
    </div>`
};
