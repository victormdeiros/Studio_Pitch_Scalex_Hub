// Slide 7 · projeções.
export default {
  id: 'slide-8',
  title: 'Crescimento projetado em bootstrap',
  theme: 'dark',
  number: '06',
  notes: [
    'TEMPO ALVO: 40 segundos',
    'ROTEIRO FALADO',
    'Nosso cenário bootstrap projeta crescimento mesmo sem aporte. O ticket médio passa de R$ 1.050 no Q4 de 2026 para R$ 3.450 no Q4 de 2027. O faturamento trimestral chega a R$ 620 mil, e a soma de 2027 é R$ 1,32 milhão. A margem líquida prevista no último trimestre é de 35%. Aplicando as margens informadas ao faturamento, o resultado líquido acumulado de Q4 de 2026 a Q4 de 2027 é R$ 380,3 mil. A projeção também prevê redução do churn e melhora de margem bruta e EBITDA.',
    'APOIO PARA PERGUNTAS',
    'Período / Ticket médio / Faturamento / Churn / Margem bruta / EBITDA / Margem líquida / Resultado líquido recalculado',
    'Q4/26 / R$ 1.050 / R$ 20.840 / 15,0% / 62,5% / −5,0% / −7,0% / −R$ 1.458,80',
    'Q1/27 / R$ 1.800 / R$ 85.569 / 9,75% / 70,0% / 16,0% / 11,5% / R$ 9.840,44',
    'Q2/27 / R$ 2.450 / R$ 202.534 / 6,0% / 73,5% / 28,5% / 21,5% / R$ 43.544,81',
    'Q3/27 / R$ 3.100 / R$ 412.108 / 3,75% / 76,5% / 35,0% / 27,0% / R$ 111.269,16',
    'Q4/27 / R$ 3.450 / R$ 620.163 / 3,75% / 82,5% / 43,0% / 35,0% / R$ 217.057,05',
    'Faturamento de 2027: R$ 1.320.374.',
    'Resultado líquido acumulado Q4/26 a Q4/27: R$ 380.252,66, calculado antes do arredondamento de cada trimestre.',
    'Resultado líquido de 2027: R$ 381.711,46.',
    'Os resultados líquidos foram recalculados a pedido do apresentador, usando as margens da projeção fornecida. O acumulado anterior de R$ 532,6 mil não corresponde a essas margens e foi substituído. Churn e margens são indicadores do cenário informado, sem definição adicional de periodicidade do churn. Todos os números são projeções, não resultados realizados.',
    'Fonte: conteúdo e roteiro fornecidos na conversa “Informações para investidores”, 30/09/2026. https://chatgpt.com/c/6abd1706-583c-83e9-bc91-7f70a6104b7a'
  ],
  html: `
    <header class="s7-head">
      <p class="kicker rv" style="--d:0"><span class="k-line"></span><svg class="ico" aria-hidden="true"><use href="#i-chart"></use></svg>Projeções</p>
      <h2 class="h2 rv" style="--d:1">Crescimento projetado em bootstrap</h2>
    </header>
    <div class="s7-chart">
      <p class="chart-label rv" style="--d:2">Faturamento trimestral · R$ mil</p>
      <div class="plot rv-soft" style="--d:2">
        <div class="bar" style="--b:0"><i style="--h:2.89"><b class="count" data-to="20.8" data-decimals="1">20,8</b></i><em>Q4/26</em></div>
        <div class="bar" style="--b:1"><i style="--h:11.88"><b class="count" data-to="85.6" data-decimals="1">85,6</b></i><em>Q1/27</em></div>
        <div class="bar" style="--b:2"><i style="--h:28.13"><b class="count" data-to="202.5" data-decimals="1">202,5</b></i><em>Q2/27</em></div>
        <div class="bar" style="--b:3"><i style="--h:57.24"><b class="count" data-to="412.1" data-decimals="1">412,1</b></i><em>Q3/27</em></div>
        <div class="bar" style="--b:4"><i style="--h:86.13"><b class="count" data-to="620.2" data-decimals="1">620,2</b></i><em>Q4/27</em></div>
      </div>
    </div>
    <div class="s7-kpis">
      <div class="kpi rv" style="--d:3"><p class="v">R$ <span class="count" data-to="1.32" data-decimals="2">1,32</span> milhão</p><p class="l">Faturamento em 2027</p></div>
      <div class="kpi alt rv" style="--d:4"><p class="v">R$ <span class="count" data-to="380.3" data-decimals="1">380,3</span> mil</p><p class="l">Resultado líquido acumulado de Q4/26 a Q4/27</p></div>
      <div class="kpi rv" style="--d:5"><p class="v"><span class="count" data-to="35" data-decimals="0">35</span>%</p><p class="l">Margem líquida no Q4/27</p></div>
    </div>
    <div class="s7-maxis">
      <div class="maxi rv" style="--d:6"><p class="k">Ticket médio (R$)</p><p class="v">1.050 a 3.450</p></div>
      <div class="maxi rv" style="--d:7"><p class="k">Churn</p><p class="v">15% a 3,75%</p></div>
      <div class="maxi rv" style="--d:8"><p class="k">Margem bruta</p><p class="v">62,5% a 82,5%</p></div>
    </div>
    <p class="s7-foot rv" style="--d:9">Q4/26 a Q4/27. Projeções. Resultado líquido = faturamento × margem líquida. Projeção interna; não é guidance.</p>`
};
