// Slide 10 do pitch: tração de 2025.
import base from '../slides/12-vendas.mjs';

const html=base.html
  .replace('Resultado histórico · validação na ponta final','10 clientes pagantes · operação validada em 2025');

export default {
  ...base,
  id:'resumo-tracao',
  title:'Validamos na ponta. Agora escalamos por quem revende.',
  notes:[
    'TEMPO ALVO: 50 segundos',
    'Em 2025 faturamos R$ 300 mil revendendo agentes de IA direto ao cliente final, com 10 clientes pagantes. A virada é de canal: o produto é o mesmo, mas em vez de vender a R$ 900 por mês para um cliente final, vendemos a R$ 3.500 por mês para quem revende — 3,9 vezes o ticket. Tudo isso já está em produção.'
  ],
  html
};
