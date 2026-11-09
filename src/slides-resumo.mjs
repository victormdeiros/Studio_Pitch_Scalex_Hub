import capa from './slides-resumo/01-capa.mjs';
import origem from './slides-resumo/02-origem.mjs';
import problemaFluxo from './slides-resumo/03-problema-fluxo.mjs';
import problemaFerramentas from './slides-resumo/04-problema-ferramentas.mjs';
import impacto from './slides-resumo/05-impacto.mjs';
import solucaoFluxo from './slides-resumo/06-solucao-fluxo.mjs';
import solucaoFerramentas from './slides-resumo/07-solucao-ferramentas.mjs';
import transformacao from './slides-resumo/08-transformacao.mjs';
import plataforma from './slides-resumo/09-plataforma.mjs';
import mercado from './slides-resumo/10-mercado.mjs';
import concorrencia from './slides-resumo/11-concorrencia.mjs';
import diferenciais from './slides-resumo/12-diferenciais.mjs';
import escala from './slides-resumo/13-escala.mjs';
import rodada from './slides-resumo/14-rodada.mjs';
import investidor from './slides-resumo/15-investidor.mjs';
import fechamento from './slides-resumo/16-fechamento.mjs';

/* Pitch de 7 minutos: narrativa problema → solução, na direção de arte da apresentação completa. */
const sequencia=[
  capa,
  origem,
  problemaFluxo,
  problemaFerramentas,
  impacto,
  solucaoFluxo,
  solucaoFerramentas,
  transformacao,
  plataforma,
  mercado,
  concorrencia,
  diferenciais,
  escala,
  investidor,
  rodada,
  fechamento
];

// Sete minutos de fala. Notas de conferência ficam fora do roteiro principal.
const roteiro = {
  'resumo-capa':[10,'A ScaleX Hub é a tecnologia por trás de quem vende tecnologia. Infraestrutura para parceiros venderem IA com a própria marca.'],
  'resumo-origem':[30,'Nascemos como a agência Hub ConverseIA. Vivemos a dor de entregar automação para vários clientes: cada implantação exigia outro workspace e cerca de dez ferramentas. Construímos a solução primeiro para nossa própria operação.'],
  'resumo-problema-fluxo':[25,'Os fluxos por nós exigiam manutenção e ajustes a cada cliente. A complexidade da operação crescia junto com as vendas e limitava a escala da agência.'],
  'resumo-problema-ferramentas':[20,'O stack era fragmentado: múltiplos acessos, cobranças e pontos de falha. O parceiro precisava montar e sustentar a infraestrutura antes de conseguir vender a solução.'],
  'resumo-impacto':[15,'Escalávamos trabalho. Implantação lenta, retrabalho e alto custo consumiam a capacidade da operação. O gargalo estava na estrutura em volta da IA.'],
  'resumo-solucao-fluxo':[30,'Centralizamos a operação para configurar e replicar a entrega. O parceiro pode implantar agentes e automações em um ambiente organizado, sem remontar a infraestrutura para cada cliente.'],
  'resumo-solucao-ferramentas':[25,'As ferramentas passam a funcionar em uma plataforma integrada: CRM, atendimento, agentes, páginas e tracking. Menos integrações dispersas e mais controle da operação.'],
  'resumo-transformacao':[20,'A transformação é de agência para plataforma. Nossa entrega se torna a infraestrutura que outras empresas usam para vender e operar suas próprias soluções.'],
  'resumo-plataforma':[30,'O parceiro usa sua marca, seus planos e seus preços. Cada cliente tem seu workspace, enquanto o revendedor centraliza a gestão. Um parceiro pode atender muitos clientes finais.'],
  'resumo-mercado':[35,'O mercado direto reúne 422 mil fornecedores potenciais no Brasil; 259 mil nos CNAEs prioritários. Começamos pelo Nordeste. O SOM de 6,4 mil parceiros até 2029 é um cenário estratégico, não uma carteira contratada.'],
  'resumo-concorrencia':[25,'HighLevel e Zaia validam a categoria de plataformas para agências. Seus indicadores têm bases diferentes. Nossa proposta combina operação centralizada, marca própria e múltiplos workspaces.'],
  'resumo-diferenciais':[35,'A combinação é o diferencial: marca própria, multiworkspace e stack integrado para quem revende. O parceiro concentra sua energia na expertise e na distribuição; a ScaleX fornece a base tecnológica.'],
  'resumo-escala':[35,'Em bootstrap, nossa meta de EBITDA para 2027 é de aproximadamente R$ 450 mil, sem aporte. Já temos uma perspectiva com recursos próprios. Em 2026, consolidamos a plataforma: um passo atrás para avançar vários à frente. O próximo slide mostra o que muda com a entrada do investidor.'],
  'resumo-investidor':[35,'R$ 300 mil de aporte antecipam o plano em seis meses. O EBITDA estimado para 2027 passa de aproximadamente R$ 450 mil no bootstrap para R$ 750 mil com investidor. A gestão projeta valorização de 40% no valuation e payback aproximado de três anos. São projeções, condicionadas à execução.'],
  'resumo-rodada':[40,'A pedida é R$ 300 mil por 10% da ScaleX Hub. O payback estimado é de aproximadamente três anos. O investimento vai para operação, 62,7%; comercial e marketing, 25,7%; e adequação enterprise, 11,7%. São as três frentes para acelerar o plano.'],
  'resumo-fechamento':[10,'R$ 300 mil por 10% para acelerar a execução. A infraestrutura das agências de IA vai ter dono. Vamos juntos?']
};
export const slides=sequencia.map(slide=>{
  const [seconds,speech]=roteiro[slide.id];
  return {...slide,notes:[`TEMPO ALVO: ${seconds} segundos`,'ROTEIRO FALADO · PITCH DE 7 MINUTOS',speech,'APOIO PARA PERGUNTAS · FORA DO TEMPO DO PITCH',...slide.notes.slice(1)]};
});
