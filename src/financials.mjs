// Fonte financeira vigente: ScaleX_Hub_Pitch_Corrigido.pdf, páginas 1–8.
// Preserva as bases distintas do documento; valores de planejamento, não realizados.
export const source = 'Fonte: ScaleX_Hub_Pitch_Corrigido.pdf (planejamento revisado 2026–2031).';
export const round = { investment:300000, equity:0.10, months:6, monthly:40600, recurring:243600, oneOff:56400 };
export const allocations = [
  {name:'Operação', short:'Operação', value:188000, detail:'Founder full-time, desenvolvimento, supervisão, contador, IA e ferramentas; taxas e impostos.'},
  {name:'Comercial e marketing', short:'Comercial', value:77000, detail:'Closer, marketing e posicionamento, com participação em eventos.'},
  {name:'Adequação enterprise', short:'Enterprise', value:35000, detail:'Patentes, regulamentação jurídica e auditoria técnica.'}
];
export const quarterly = [
  {period:'Q4/26', ticket:1200, fat:3840, churn:4.17, gross:55, margin:0, ebitda:0, netMargin:-4, net:-147.20},
  {period:'Q1/27', ticket:2100, fat:52416, churn:3.83, gross:62, margin:10, ebitda:5040.7, netMargin:10, net:5040.67},
  {period:'Q2/27', ticket:2700, fat:159035, churn:2.33, gross:65, margin:22, ebitda:34171.4, netMargin:20, net:31064.91},
  {period:'Q3/27', ticket:3300, fat:351490, churn:1.50, gross:68, margin:28, ebitda:96940.8, netMargin:25, net:86554.31},
  {period:'Q4/27', ticket:3600, fat:586354, churn:1.50, gross:75, margin:38, ebitda:219472.2, netMargin:35, net:202145.40}
];
export const annual = [
  {year:2027, pre:408968.8, post:497875.1},
  {year:2028, pre:490762.6, post:597450.1},
  {year:2029, pre:588915.1, post:716940.1},
  {year:2030, pre:706698.1, post:860328.2},
  {year:2031, pre:848037.7, post:1032393.8}
];
export const acquisition = [
  {name:'Outbound', leads:4900, engaged:1960, booked:196, meetings:157, sales:31, modelCost:20000},
  {name:'Inbound', leads:470, engaged:306, booked:107, meetings:86, sales:26, modelCost:21620}
];
export const nr = (n,d=0) => new Intl.NumberFormat('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}).format(n);
export const brl = (n,d=0) => 'R$ '+nr(n,d);
export const allocationNotes = [
  'Aplicação em seis meses: R$ 40.600/mês × 6 = R$ 243.600 recorrentes, mais R$ 56.400 pontuais. Total: R$ 300.000. Não há reserva de contingência prevista.',
  'Recorrentes, mensal / seis meses: closer R$ 3.600 / R$ 21.600; supervisão R$ 1.500 / R$ 9.000; desenvolvedor full-time R$ 7.000 / R$ 42.000; desenvolvedor part-time R$ 3.500 / R$ 21.000; marketing R$ 6.000 / R$ 36.000; founder full-time R$ 15.000 / R$ 90.000; contador R$ 1.200 / R$ 7.200; IA + ferramentas R$ 2.800 / R$ 16.800.',
  'Pontuais: patentes R$ 7.500; regulamentação jurídica R$ 20.000; auditoria técnica R$ 7.500; taxas e impostos R$ 2.000; eventos R$ 19.400.',
  'Conciliação por finalidade: operação R$ 186.000 recorrentes + R$ 2.000 pontuais = R$ 188.000; comercial e marketing R$ 57.600 + R$ 19.400 = R$ 77.000; enterprise R$ 35.000 pontuais. Percentuais: 62,7%, 25,7% e 11,7%; a soma exibida de 100,1% decorre do arredondamento. As fatias do gráfico usam os valores exatos.'
];
export const valuationNotes = [
  'Proposta: captação primária de R$ 300.000 por 10% pós-investimento. Valuation implícito: R$ 2.700.000 pré-money e R$ 3.000.000 pós-money. São termos propostos, não laudo de avaliação.',
  'Referências distintas da planilha, pendentes de conciliação: R$ 3.043.382,40 pré-money; R$ 3.704.987,30 pós-money; capital para 10% de R$ 304.338,20. Não equivalem aos termos da oferta. A referência pós não corresponde ao pré mais R$ 300 mil.',
  'A planilha cita múltiplo de 5×; 5× o EBITDA da base trimestral de 2027 (R$ 355.625,10) = R$ 1.778.125,50. Não usar esse múltiplo para justificar os valuations não reconciliados.'
];
export const projectionNotes = [
  'Cenário bootstrap/pré-money. Todos os valores são projetados. Ticket e churn ainda não têm periodicidade definida no modelo; não rotular como mensais.',
  ...quarterly.map(q=>`${q.period}: ticket ${brl(q.ticket)}; coluna FAT BOM ${brl(q.fat)}; churn ${nr(q.churn,2)}%; margem bruta ${nr(q.gross)}%; margem EBITDA ${nr(q.margin)}%; EBITDA ${brl(q.ebitda,1)}; margem líquida ${nr(q.netMargin)}%; resultado líquido ${brl(q.net,2)}.`),
  'EBITDA somado dos quatro trimestres de 2027: R$ 355.625,10 (precisão exibida no PDF). Resultado líquido somente de 2027: R$ 324.805,29. O total de R$ 324.658,10 informado no print abrange Q4/26 a Q4/27; não corresponde ao ano de 2027 isolado.',
  'FAT BOM não tem natureza ou período confirmados. Não classificar como MRR, receita reconhecida, faturamento trimestral ou anual. Não recalcular resultados multiplicando essa coluna pelas margens: a base não foi definida.',
  'A série anual registra EBITDA pré-money de R$ 408.968,80 em 2027, distinto dos R$ 355.625,10 da base trimestral. Não tratar as bases como equivalentes. O pós-money anual é R$ 497.875,10 em 2027.',
  'A série anual cresce aproximadamente 20% a.a. de 2027 a 2031. A premissa declarada de 15% diverge da série e permanece pendente de conciliação.'
];
export const acquisitionNotes = [
  'Funis projetados de Q4/26 a Q4/27, não vendas realizadas. Outbound: 4.900 leads → 1.960 engajados → 196 aceitam reunião → 157 reuniões → 31 vendas. Inbound: 470 leads → aproximadamente 306 engajados → aproximadamente 107 aceitam reunião → 86 reuniões → 26 vendas. Total de 57 vendas brutas projetadas; não são 57 revendedores ativos, pois não descontam churn nem incluem uma base inicial validada.',
  'Conversões recalculadas de vendas/leads: outbound 31/4.900 = 0,63%; inbound 26/470 = 5,53%. O print exibe 0,64% e 5,46%, com arredondamentos distintos.',
  'Trimestres Q4/26, Q1/27, Q2/27, Q3/27, Q4/27: leads outbound 500/800/1.000/1.200/1.400; vendas 3/5/6/8/9. Leads inbound 0/50/90/150/180; vendas 0/3/5/8/10.',
  'Premissas do modelo comercial: vendedor R$ 20.000 em 2027; tráfego R$ 21.620 no total do funil; mídia 60% Meta e 40% Google Search; CPL R$ 30 e R$ 70. Esses custos não são aportes adicionais: não somar novamente ao orçamento de closer, marketing e eventos sem conciliar escopo e períodos.',
  'Vida estimada: 25/35/66 meses (conservador/base/alta performance). CAC e LTV monetário não foram calculados nos anexos; não inferir a partir de escopos ou períodos incompatíveis.'
];
export const returnNotes = [
  'Simulação ilustrativa de dividendos: aporte R$ 300.000; participação de 10%; conversão hipotética de 70% do EBITDA pós-money em lucro distribuível; payout-base de 75%. Dividendo = EBITDA pós × 70% × 75% × 10%. EBITDA não é lucro diretamente distribuível.',
  'Dividendos anuais do investidor / acumulados: 2027 R$ 26.138,44 / R$ 26.138,44; 2028 R$ 31.366,13 / R$ 57.504,57; 2029 R$ 37.639,36 / R$ 95.143,93; 2030 R$ 45.167,23 / R$ 140.311,16; 2031 R$ 54.200,67 / R$ 194.511,83.',
  'Extrapolações, não projeções dos prints: 2032 EBITDA R$ 1.187.252,90 e dividendo R$ 62.330,78; 2033 EBITDA R$ 1.365.340,80 e dividendo R$ 71.680,39. Crescimento assumido de 15% a.a. após 2031. Acumulado em 2033: R$ 328.523,00; payback-base ilustrativo em 2033.',
  'Sensibilidade do payout: 50% → R$ 129.674,56 acumulados até 2031 e payback em 2035; 75% → R$ 194.511,83 e 2033; 100% → R$ 259.349,11 e 2032.',
  'Depende de lucro disponível, caixa, aprovação de dividendos e resultado futuro. Não inclui venda da participação, diluição, tributação ou valor do dinheiro no tempo. As políticas de distribuição são hipóteses, não compromissos societários. Não há suporte neste documento para payback em 24 meses.'
];
