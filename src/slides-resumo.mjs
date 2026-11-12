import capa from './slides-resumo/01-capa.mjs';
import hoje from './slides-resumo/02-hoje.mjs';
import origem from './slides-resumo/03-origem.mjs';
import problema from './slides-resumo/04-problema.mjs';
import virada from './slides-resumo/05-virada.mjs';
import problemaFluxo from './slides-resumo/06-problema-fluxo.mjs';
import problemaFerramentas from './slides-resumo/07-problema-ferramentas.mjs';
import solucaoFluxo from './slides-resumo/08-solucao-fluxo.mjs';
import solucaoFerramentas from './slides-resumo/09-solucao-ferramentas.mjs';
import transformacao from './slides-resumo/10-transformacao.mjs';
import plataforma from './slides-resumo/11-plataforma.mjs';
import mercado from './slides-resumo/12-mercado.mjs';
import concorrencia from './slides-resumo/13-concorrencia.mjs';
import tracao from './slides-resumo/14-tracao.mjs';
import escala from './slides-resumo/15-escala.mjs';
import investidor from './slides-resumo/16-investidor.mjs';
import destinacao from './slides-resumo/17-destinacao.mjs';
import fechamento from './slides-resumo/18-fechamento.mjs';

/* Pitch resumido: o que somos → origem → problema → solução → modelo de parceiros → mercado → tração → rodada. */
const sequencia=[
  capa,
  hoje,
  origem,
  problema,
  virada,
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
  investidor,
  destinacao,
  fechamento
];

// Em cada slide, a primeira nota é o tempo alvo e a segunda é a fala; as demais são apoio para perguntas.
// A numeração segue a posição na sequência.
export const slides=sequencia.map((slide,i)=>{
  const [tempo,...resto]=slide.notes;
  const [fala,...apoio]=resto.filter(note=>note!=='ABERTURA');
  return {...slide,number:slide.number?String(i+1).padStart(2,'0'):'',notes:[tempo,'ROTEIRO FALADO',fala,...(apoio.length?['APOIO PARA PERGUNTAS · FORA DO TEMPO DO PITCH',...apoio]:[])]};
});
