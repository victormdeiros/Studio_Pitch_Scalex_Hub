// Slide 17 do pitch resumido: fechamento do PPTX, com QR Code do resumo.
import base from '../slides/17-fechamento.mjs';

const contact = `
      <div class="s11-contact rv" style="--d:4">
        <img src="../qr/pitch-resumo.png" alt="QR Code do pitch resumido">
        <div><b>Contato / QR Code do site</b><span>Acesse o pitch resumido</span></div>
      </div>`;

const html = base.html
  .replace('</span>\n    </div>', '</span>\n    </div>\n    ' + contact);

export default {
  ...base,
  id: 'resumo-fechamento',
  title: 'A infraestrutura das agências de IA vai ter dono. A questão é quem entra antes.',
  notes: [
    'TEMPO ALVO: 20 segundos',
    'Fechamento. A infraestrutura das agências de IA vai ter dono. A questão é quem entra antes. Estamos abrindo 10% da ScaleX por R$ 300 mil, para seis meses de execução. Vamos juntos?'
  ],
  html
};
