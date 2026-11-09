// Premissas do pitch resumido confirmadas pelo fundador após a revisão do PDF.
// Não substituem silenciosamente as séries de 2027–2031 do anexo financeiro.
export const pitchPremises = {
  history: [
    {year:2025, revenue:300000, stage:'Agência'},
    {year:2026, revenue:200000, stage:'Virada para plataforma'}
  ],
  ebitda2027: {pre:450000, post:750000},
  accelerationMonths:6,
  paybackMonths:30
};
export const premiseSource = 'Fonte: premissas atualizadas pelo fundador na revisão dos slides 13–15, com confirmação de que o indicador de 2027 é EBITDA.';
export const premiseNotes = [
  'Histórico de faturamento informado no pitch anterior: R$ 300 mil em 2025 e R$ 200 mil em 2026. Em 2026, a empresa priorizou a transição de agência para plataforma. O faturamento de 2026 é o valor informado pela gestão, sem presumir fechamento contábil do ano.',
  'Premissa atualizada e confirmada pelo fundador: EBITDA estimado de 2027 de aproximadamente R$ 450 mil pré-money e R$ 750 mil pós-money. Pré-money é 40% menor que pós-money: 450/750 = 60%. Esse percentual compara EBITDA; não é redução de prazo nem valuation.',
  'O fundador corrigiu a antecipação estimada para seis meses. Não se deduzem novos prazos absolutos de execução a partir dessa diferença.',
  'Payback conservador estimado informado pelo fundador: dois anos e seis meses (30 meses). A memória de cálculo e a política de distribuição dessa estimativa não foram fornecidas nesta revisão. Não atribuir a estimativa à simulação anterior de dividendos do PDF nem tratá-la como retorno garantido.',
  'Faturamento de 2025–2026 e EBITDA de 2027 são indicadores distintos. O slide 13 apresenta os dois grupos em painéis e escalas separados, sem calcular crescimento entre eles. A revisão do resumo se concentra em 2025–2027; não extrapola os novos valores para 2028–2031.'
];
