import {round, brl} from '../financials.mjs';
import {pitchPremises, premiseNotes, premiseSource} from '../pitch-premises.mjs';
import {header, foot} from '../financial-components.mjs';
import {scenarioRoute} from '../scenario-components.mjs';

const {pre,post}=pitchPremises.ebitda2027;
export default {
  id:'resumo-investidor',
  title:'Com investidor: seis meses antes.',
  theme:'dark',
  number:'14',
  notes:[
    'TEMPO ALVO: 35 segundos',
    'Com R$ 300 mil de aporte, o plano é antecipado em seis meses. O cenário de 2027 estima EBITDA de aproximadamente R$ 750 mil, frente a R$ 450 mil em bootstrap. A valorização projetada de 40% e o payback aproximado de três anos são premissas informadas pela gestão. A valorização de 40% é uma premissa de valuation, não a variação percentual do EBITDA.',
    'A pedida aparece neste slide: R$ 300 mil por 10% do equity da ScaleX Hub. O mesmo valor de aporte é a base da aceleração mostrada no diagrama.',
    ...premiseNotes.slice(1,5),
    'A transição entre os dois cenários ilustra aceleração de execução. As linhas do diagrama não definem prazos absolutos nem uma curva de resultados realizados.',
    premiseSource
  ],
  html:`<div class="fin-page scenario-page scenario-funded" data-acceleration-months="${pitchPremises.accelerationMonths}">
    <div class="scenario-speed-field" aria-hidden="true">${Array.from({length:7},(_,i)=>`<i style="--lane:${i}"></i>`).join('')}</div>
    <div class="scenario-burst" aria-hidden="true">${Array.from({length:9},(_,i)=>`<i style="--lane:${i}"></i>`).join('')}</div>
    ${header('Pós-money · com investidor','A mesma visão. <span class="grad-text">Seis meses antes.</span>')}
    <div class="scenario-hero">
      <p class="scenario-metric-label">EBITDA estimado · 2027</p>
      <p class="scenario-amount">~R$ <span class="count" data-from="${pre/1000}" data-to="${post/1000}">${post/1000}</span><span class="scenario-unit">mil</span></p>
      <p class="scenario-baseline">Bootstrap: ~R$ ${pre/1000} mil <span>→</span> com investidor: ~R$ ${post/1000} mil</p>
      <div class="scenario-deal">
        <span>A pedida</span>
        <p><b>${brl(round.investment/1000)} mil</b> por <em>${round.equity*100}%</em> do equity</p>
      </div>
    </div>
    ${scenarioRoute({funded:true,months:pitchPremises.accelerationMonths})}
    <div class="scenario-outcomes">
      <article class="scenario-gain"><b>${pitchPremises.accelerationMonths}<span>meses</span></b><p>de execução antecipada</p></article>
      <article class="scenario-valuation"><b>+${pitchPremises.valuationUpliftPercent}<span>%</span></b><p>de valorização projetada</p><div class="valuation-index" role="img" aria-label="Valuation projetado: índice relativo de 100 para 140, aumento de 40%."><i style="--w:${100/(1+pitchPremises.valuationUpliftPercent/100)}%"></i><i style="--w:100%"></i></div></article>
      <article class="scenario-payback"><b>~${pitchPremises.paybackMonths/12}<span>anos</span></b><p>de payback estimado</p></article>
    </div>
    ${foot('Cenários projetados pela gestão. Valorização de 40% refere-se ao valuation. Payback aproximado, condicionado à execução e aos resultados.')}
  </div>`
};
