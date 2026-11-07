import capa from './slides-resumo/01-capa.mjs';
import origem from './slides-resumo/02-origem.mjs';
import dispersao from './slides-resumo/03-dispersao.mjs';
import impacto from './slides-resumo/04-impacto.mjs';
import transformacao from './slides-resumo/05-transformacao.mjs';
import produto from './slides-resumo/06-produto.mjs';
import mercado from './slides-resumo/07-mercado.mjs';
import concorrenciaBase from './slides/08-concorrentes.mjs';
import diferenciaisBase from './slides/09-diferenciais.mjs';
import tracao from './slides-resumo/10-tracao.mjs';
import projecao from './slides-resumo/11-projecao.mjs';
import rodada from './slides-resumo/12-rodada.mjs';
import investidor from './slides-resumo/13-investidor.mjs';
import fechamentoBase from './slides/17-fechamento.mjs';

const concorrencia={...concorrenciaBase,id:'resumo-concorrencia'};
const diferenciais={...diferenciaisBase,id:'resumo-diferenciais'};
const fechamento={...fechamentoBase,id:'resumo-fechamento'};

/* Pitch de 7 minutos: conteúdo do PPTX na direção de arte da apresentação completa. */
export const slides=[
  capa,
  origem,
  dispersao,
  impacto,
  transformacao,
  produto,
  mercado,
  concorrencia,
  diferenciais,
  tracao,
  projecao,
  rodada,
  investidor,
  fechamento
];
