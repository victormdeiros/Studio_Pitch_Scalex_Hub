// Slide 3 do pitch: a dispersão das ferramentas e os workflows complexos.
import base from '../slides/07-infra.mjs';

const html=base.html
  .replace('O problema · infraestrutura','02 · Como a operação se dispersa')
  .replace('O mercado entrega blocos. <span class="grad-text">Falta a infraestrutura.</span>','Exemplo da dispersão das ferramentas. <span class="grad-text">Workflows complexos.</span>')
  .replace('SaaS pontual resolve partes. Construtores de fluxo conectam as partes. Nenhum dos dois entrega a base para quem revende IA.','Fluxos difíceis de construir, ensinar e manter. Cada ferramenta cobre um bloco; cada ligação depende de alguém.');

export default {
  ...base,
  id:'resumo-dispersao',
  title:'Exemplo da dispersão das ferramentas.',
  notes:[
    'TEMPO ALVO: 30 segundos',
    'O mercado resolve o problema com SaaS pontual e construtores de fluxo. Cada ferramenta cobre um bloco; cada ligação entre blocos é um nó que alguém precisa desenhar, testar e manter. Quando uma API muda, o fluxo inteiro para. O que falta não é mais uma ferramenta: é infraestrutura como serviço.'
  ],
  html
};
