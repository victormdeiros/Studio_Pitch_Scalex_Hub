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
  rodada,
  investidor,
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
  'resumo-escala':[35,'O planejamento revisado projeta EBITDA pós-money de R$ 497,9 mil em 2027 e R$ 1,03 milhão em 2031. No bootstrap, ticket e retenção melhoram e a margem EBITDA chega a 38% no Q4/27. São projeções; a periodicidade de ticket e churn ainda precisa ser confirmada.'],
  'resumo-rodada':[40,'Buscamos R$ 300 mil por 10%, para seis meses. São R$ 188 mil em operação, R$ 77 mil em comercial e marketing e R$ 35 mil em enterprise. A oferta implica R$ 2,7 milhões pré e R$ 3 milhões pós-money. O retorno por dividendos é apenas ilustrativo, com cenário-base em 2033.'],
  'resumo-investidor':[35,'O capital reduz o prazo projetado da meta de 15 para seis meses. O plano comercial prevê 57 vendas brutas de Q4/26 a Q4/27: 31 outbound e 26 inbound. Buscamos também acesso enterprise, canais e experiência em SaaS B2B.'],
  'resumo-fechamento':[10,'R$ 300 mil por 10% para acelerar a execução. A infraestrutura das agências de IA vai ter dono. Vamos juntos?']
};
export const slides=sequencia.map(slide=>{
  const [seconds,speech]=roteiro[slide.id];
  return {...slide,notes:[`TEMPO ALVO: ${seconds} segundos`,'ROTEIRO FALADO · PITCH DE 7 MINUTOS',speech,'APOIO PARA PERGUNTAS · FORA DO TEMPO DO PITCH',...slide.notes.slice(1)]};
});
