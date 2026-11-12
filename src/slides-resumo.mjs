import capa from './slides-resumo/01-capa.mjs';
import origem from './slides-resumo/02-origem.mjs';
import problema from './slides-resumo/03-problema.mjs';
import problemaFluxo from './slides-resumo/04-problema-fluxo.mjs';
import problemaFerramentas from './slides-resumo/05-problema-ferramentas.mjs';
import solucaoFluxo from './slides-resumo/06-solucao-fluxo.mjs';
import solucaoFerramentas from './slides-resumo/07-solucao-ferramentas.mjs';
import transformacao from './slides-resumo/08-transformacao.mjs';
import plataforma from './slides-resumo/09-plataforma.mjs';
import mercado from './slides-resumo/10-mercado.mjs';
import concorrencia from './slides-resumo/11-concorrencia.mjs';
import tracao from './slides-resumo/12-tracao.mjs';
import escala from './slides-resumo/13-escala.mjs';
import pedida from './slides-resumo/14-pedida.mjs';
import destinacao from './slides-resumo/15-destinacao.mjs';
import investidor from './slides-resumo/16-investidor.mjs';
import fechamento from './slides-resumo/17-fechamento.mjs';

/* Pitch resumido: origem → problema → solução → modelo de parceiros → mercado → tração → rodada. */
const sequencia=[
  capa,
  origem,
  problema,
  problemaFluxo,
  problemaFerramentas,
  solucaoFluxo,
  solucaoFerramentas,
  transformacao,
  plataforma,
  mercado,
  concorrencia,
  tracao,
  escala,
  pedida,
  destinacao,
  investidor,
  fechamento
];

// Em cada slide, a primeira nota é o tempo alvo e a segunda é a fala; as demais são apoio para perguntas.
export const slides=sequencia.map(slide=>{
  const [tempo,...resto]=slide.notes;
  const [fala,...apoio]=resto.filter(note=>note!=='ABERTURA');
  return {...slide,notes:[tempo,'ROTEIRO FALADO',fala,...(apoio.length?['APOIO PARA PERGUNTAS · FORA DO TEMPO DO PITCH',...apoio]:[])]};
});
