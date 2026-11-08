// Slide 12 do pitch: a rodada de R$ 300 mil por 10%, com uso do capital (PPTX slide 13).
import base from '../slides/14-rodada.mjs';

const usaCapital = `<ul class="smart-list">
            <li><span class="sn">01</span><div><h4>Comercial</h4><p>50% · R$ 150.000 · Investir apenas em closer para fazer reuniões — o resto é a própria esteira automatizada.</p></div></li>
            <li><span class="sn">02</span><div><h4>Enterprise readiness</h4><p>30% · R$ 90.000 · Segurança e LGPD, infraestrutura, observabilidade, governança.</p></div></li>
            <li><span class="sn">03</span><div><h4>Founder full-time</h4><p>20% · R$ 60.000 · Dedicação integral a produto e execução comercial.</p></div></li>
          </ul>`;

const html = base.html
  .replace('<h2 class="h2 rv" style="--d:1">10% da empresa <span class="grad-text">para acelerar o plano.</span></h2>', '<h2 class="h2 rv" style="--d:1">10% da ScaleX Hub <span class="grad-text">por R$ 300 mil.</span></h2>')
  .replace('<p class="round-big rv" style="--d:2">10%</p>', '<p class="round-big rv" style="--d:2">R$ 300 mil</p>')
  .replace('<p class="round-of rv" style="--d:3">da ScaleX Hub</p>', '<p class="round-of rv" style="--d:3">por 10% da ScaleX Hub</p>')
  .replace('<p><b>R$ 2,88 mi</b>, com o pre-money da rodada abaixo desse indicativo.</p>', '<p><b>R$ 3,0 mi</b>, pré-money abaixo do valuation indicativo de ~R$ 3 mi.</p><div class="round-alloc rv" style="--d:6"><p class="ra-title">Uso do capital · R$ 300 mil</p><div class="ra-bar"><i class="a" style="width:50%"></i><i class="b" style="width:30%"></i><i class="c" style="width:20%"></i></div><div class="ra-legend"><div><b>50%</b><span>Comercial</span></div><div><b>30%</b><span>Enterprise</span></div><div><b>20%</b><span>Founder</span></div></div></div>')
  .replace('Smart money esperado', 'Uso do capital')
  .replace(/<ul class="smart-list">[\s\S]*?<\/ul>/, usaCapital)
  .replace('<p class="round-foot rv" style="--d:6">Oferta de 10% da empresa. Valuation indicativo com o bootstrapping considerado; pre-money da rodada a negociar abaixo do indicativo. Indicativo interno; não é auditoria.</p>', '<p class="round-foot rv" style="--d:6">Oferta de 10% da ScaleX Hub por R$ 300 mil. Valuation indicativo de R$ 3,0 mi com o bootstrapping considerado. Indicativo interno; não é auditoria. Referência usual em rodadas pré-seed de SaaS B2B: a maior fatia vai para go-to-market. Percentuais a validar com o plano financeiro da ScaleX.</p>');

export default {
  ...base,
  id: 'resumo-rodada',
  number: '14',
  title: '10% da ScaleX Hub por R$ 300 mil.',
  notes: [
    'TEMPO ALVO: 30 segundos',
    'Propomos 10% da ScaleX por R$ 300 mil, o que dá R$ 3 milhões pós-money e R$ 2,7 milhões pré-money. Metade do capital vai para a máquina comercial, 30% para enterprise readiness e 20% para o founder em tempo integral. A referência usual em rodadas pré-seed de SaaS B2B é concentrar a maior fatia em go-to-market; os percentuais devem ser validados com o plano financeiro.'
  ],
  html
};
