// Slide 13 do pitch: papel do investidor e antecipação do plano (PPTX slide 14).
import base from '../slides/16-antecipacao.mjs';

const smart = `</header>
    <div class="rs-smart rv" style="--d:2">
      <span class="rs-label">Smart money esperado</span>
      <span class="rs-item"><b>Enterprise</b><em>Acesso e abertura de portas</em></span>
      <span class="rs-item"><b>SaaS B2B</b><em>Experiência em vendas complexas</em></span>
      <span class="rs-item"><b>Canais e parcerias</b><em>Distribuição e relações estratégicas</em></span>
      <span class="rs-item"><b>Máquina comercial</b><em>Estruturação e crescimento</em></span>
      <span class="rs-item"><b>Governança</b><em>Preparação para futuras rodadas</em></span>
    </div>`;

const html = base.html
  .replace('Cronograma', '08 · O papel do investidor')
  .replace('O aporte antecipa o plano', 'Capital e rede: o aporte antecipa o plano em 6 a 9 meses')
  .replace('</header>', smart);

export default {
  ...base,
  id: 'resumo-investidor',
  title: 'Capital e rede: o aporte antecipa o plano em 6 a 9 meses.',
  notes: [
    'TEMPO ALVO: 25 segundos',
    'Buscamos mais que capital: acesso a empresas enterprise, experiência em venda B2B complexa, canais, apoio à máquina comercial e governança. Em bootstrap, a estrutura comercial chega no Q2/27 e o enterprise readiness no Q3/27. Com o aporte, tudo isso começa já no Q4/26: de 6 a 9 meses de antecipação. Janela proposta: Q4/26–Q1/27, condicionada à rodada e à execução.'
  ],
  html
};
