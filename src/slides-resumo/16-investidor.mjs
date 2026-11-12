import {round, nr} from '../financials.mjs';
import {pitchPremises, premiseNotes, premiseSource} from '../pitch-premises.mjs';
import {header, foot} from '../financial-components.mjs';
import {scenarioRoute} from '../scenario-components.mjs';

const post=round.investment/round.equity;
export default {
  id:'resumo-investidor',
  title:'Capital para antecipar crescimento.',
  theme:'dark',
  number:'16',
  notes:[
    'TEMPO ALVO: 20 segundos',
    'O investimento permite acelerar a execução comercial e operacional, antecipando marcos de crescimento previstos no planejamento. Seis meses: antecipação estimada na execução do planejamento estratégico após o investimento. Mais 40%: projeção de valorização do valuation, condicionada ao cumprimento das metas. Aproximadamente três anos: estimativa de payback do investimento, em cenário conservador, considerando a política projetada de distribuição anual de dividendos.',
    'Base do valuation: R$ 3,0 milhões post-money, implícito na oferta de R$ 300 mil por 10%. A valorização projetada de 40% é uma premissa da gestão sobre essa base, condicionada às metas.',
    'Payback: estimativa da gestão de aproximadamente três anos, em cenário conservador, com distribuição anual de dividendos. A memória de cálculo e a política de distribuição devem ser apresentadas ao investidor na diligência; a estimativa não decorre da simulação anterior de dividendos do PDF e não é retorno garantido.',
    ...premiseNotes.slice(1,5),
    'O diagrama ilustra aceleração de execução. As linhas não definem prazos absolutos nem uma curva de resultados realizados.',
    premiseSource
  ],
  html:`<div class="fin-page scenario-page scenario-funded sx-potential" data-acceleration-months="${pitchPremises.accelerationMonths}">
    <div class="scenario-speed-field" aria-hidden="true">${Array.from({length:7},(_,i)=>`<i style="--lane:${i}"></i>`).join('')}</div>
    <div class="scenario-burst" aria-hidden="true">${Array.from({length:9},(_,i)=>`<i style="--lane:${i}"></i>`).join('')}</div>
    ${header('Post-money · o potencial do investimento','Capital para <span class="grad-text">antecipar crescimento.</span>')}
    <div class="scenario-outcomes sx-proj">
      <article class="scenario-gain"><b>${pitchPremises.accelerationMonths}<span>meses</span></b><div><p>de antecipação do plano</p><small>Estimativa após o investimento</small></div></article>
      <article class="scenario-valuation"><b>+${pitchPremises.valuationUpliftPercent}<span>%</span></b><div><p>de valorização do valuation</p><small>Base: R$ ${nr(post/1e6,1)} mi post-money · condicionada às metas</small></div></article>
      <article class="scenario-payback"><b>≈ ${pitchPremises.paybackMonths/12}<span>anos</span></b><div><p>de payback estimado</p><small>Cenário conservador · dividendos anuais</small></div></article>
    </div>
    ${scenarioRoute({funded:true,months:pitchPremises.accelerationMonths})}
    <div class="scenario-quote sx-proj-quote"><p>Mais velocidade comercial e operacional.<br><span class="grad-text">Marcos de crescimento antecipados.</span></p></div>
    ${foot('Projeções da gestão, condicionadas à execução e ao cumprimento das metas. Não representam retorno garantido.')}
  </div>`
};
