import {round, brl, nr, valuationNotes} from '../financials.mjs';
import {pitchPremises, premiseNotes, premiseSource} from '../pitch-premises.mjs';
import {header, foot} from '../financial-components.mjs';
import {scenarioRoute} from '../scenario-components.mjs';

const post=round.investment/round.equity, pre=post-round.investment;
const mi=value=>'R$ '+nr(value/1e6,1)+' mi';
export default {
  id:'resumo-investidor',
  title:'Capital para antecipar crescimento.',
  theme:'dark',
  number:'16',
  notes:[
    'TEMPO ALVO: 25 segundos',
    'Construímos a base com capital próprio. Agora buscamos capital estratégico para antecipar o crescimento: R$ 300 mil por 10% de participação. O investimento acelera a execução comercial e operacional e antecipa em seis meses os marcos do planejamento. Projetamos valorização de 40% no valuation, condicionada ao cumprimento das metas, e payback de aproximadamente três anos, em cenário conservador. Além do capital, o smart money que esperamos: experiência em escalar SaaS na fase em que estamos, abrir oportunidades no mercado Enterprise e aumentar as oportunidades com futuros parceiros.',
    ...valuationNotes,
    'Base do valuation: R$ 3,0 milhões post-money, implícito na oferta de R$ 300 mil por 10%. A valorização projetada de 40% é uma premissa da gestão sobre essa base, condicionada às metas.',
    'Payback: estimativa da gestão de aproximadamente três anos, em cenário conservador, considerando a política projetada de distribuição anual de dividendos. A memória de cálculo e a política de distribuição devem ser apresentadas ao investidor na diligência; a estimativa não decorre da simulação anterior de dividendos do PDF e não é retorno garantido.',
    ...premiseNotes.slice(1,5),
    'Smart money é uma expectativa de apoio estratégico, condicionada ao perfil e à rede do investidor. Não representa compromisso contratual de resultado.',
    'O diagrama ilustra aceleração de execução. As linhas não definem prazos absolutos nem uma curva de resultados realizados.',
    premiseSource
  ],
  html:`<div class="fin-page scenario-page scenario-funded sx-potential" data-acceleration-months="${pitchPremises.accelerationMonths}">
    <div class="scenario-speed-field" aria-hidden="true">${Array.from({length:7},(_,i)=>`<i style="--lane:${i}"></i>`).join('')}</div>
    <div class="scenario-burst" aria-hidden="true">${Array.from({length:9},(_,i)=>`<i style="--lane:${i}"></i>`).join('')}</div>
    ${header('Com investidor · a rodada','Capital para <span class="grad-text">antecipar crescimento.</span>')}
    <section class="sx-ask2">
      <span>A pedida</span>
      <p><b>${brl(round.investment/1000)} mil</b> por <em>${round.equity*100}%</em></p>
      <small>Pre-money ${mi(pre)} <i>·</i> Post-money ${mi(post)}</small>
    </section>
    <div class="scenario-outcomes sx-proj2">
      <article class="scenario-gain"><b>${pitchPremises.accelerationMonths}<span>meses</span></b><p>de antecipação do plano</p></article>
      <article class="scenario-valuation"><b>+${pitchPremises.valuationUpliftPercent}<span>%</span></b><p>de valorização projetada</p></article>
      <article class="scenario-payback"><b>≈ ${pitchPremises.paybackMonths/12}<span>anos</span></b><p>de payback estimado</p></article>
    </div>
    ${scenarioRoute({funded:true,months:pitchPremises.accelerationMonths})}
    <section class="sx-smart2">
      <span>Smart money esperado</span>
      <div>
        <p><svg class="ico" aria-hidden="true"><use href="#i-trend"></use></svg>Experiência em escalar SaaS na fase em que estamos</p>
        <p><svg class="ico" aria-hidden="true"><use href="#i-building"></use></svg>Abrir oportunidades no mercado Enterprise</p>
        <p><svg class="ico" aria-hidden="true"><use href="#i-users"></use></svg>Aumentar as oportunidades com futuros parceiros</p>
      </div>
    </section>
    ${foot('Projeções da gestão, condicionadas às metas; não representam retorno garantido. Valorização sobre R$ 3,0 mi post-money. Payback em cenário conservador, com dividendos anuais.')}
  </div>`
};
