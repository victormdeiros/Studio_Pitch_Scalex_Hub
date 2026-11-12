import {round, brl, nr, valuationNotes} from '../financials.mjs';
import {header, foot} from '../financial-components.mjs';

const post=round.investment/round.equity, pre=post-round.investment;
const mi=value=>'R$ '+nr(value/1e6,1)+' mi';

export default {
  id:'resumo-pedida',
  title:'Uma nova etapa para a ScaleX Hub.',
  theme:'dark',
  number:'14',
  notes:[
    'TEMPO ALVO: 20 segundos',
    'Chegamos até aqui com capital próprio. Agora buscamos capital estratégico para acelerar a expansão comercial e preparar a ScaleX Hub para novos mercados. A rodada é de R$ 300 mil por 10% de participação: valuation de R$ 2,7 milhões pre-money e R$ 3,0 milhões post-money. O capital será direcionado à execução de um plano de crescimento já estruturado.',
    ...valuationNotes,
    'Capital estratégico, para perguntas: além do aporte, esperamos acesso comercial e distribuição, abertura de portas no mercado enterprise, experiência em crescimento de SaaS, governança e ecossistema de parcerias tecnológicas. É uma expectativa de apoio, condicionada ao perfil e à rede do investidor; não representa compromisso contratual de resultado.'
  ],
  html:`<div class="fin-page sx-pedida">
    ${header('A rodada · oportunidade de investimento','Uma nova etapa <span class="grad-text">para a ScaleX Hub.</span>','Chegamos até aqui com capital próprio. Agora buscamos capital estratégico.')}
    <section class="sx-ask-card sx-pedida-ask rv">
      <span class="sx-card-label">Valor da rodada</span>
      <p class="sx-ask-amount">${brl(round.investment/1000)} mil</p>
      <p class="sx-ask-equity">por <b>${round.equity*100}%</b> de participação</p>
      <div class="sx-pedida-val">
        <div><span>Pre-money</span><b>${mi(pre)}</b></div>
        <i aria-hidden="true">+ aporte</i>
        <div class="is-post"><span>Post-money</span><b>${mi(post)}</b></div>
      </div>
    </section>
    <section class="sx-actions sx-pedida-goals">
      <header class="sx-actions-head"><span>Metas do investimento</span><b>Para onde o capital nos leva</b></header>
      <div class="sx-action-list">
        <article class="sx-action rv" style="--d:1">
          <span class="sx-action-num">01</span>
          <div class="sx-action-copy"><b>Acelerar a expansão comercial</b></div>
          <svg class="ico" aria-hidden="true"><use href="#i-target"></use></svg>
        </article>
        <article class="sx-action rv" style="--d:2">
          <span class="sx-action-num">02</span>
          <div class="sx-action-copy"><b>Entrar no mercado Enterprise</b></div>
          <svg class="ico" aria-hidden="true"><use href="#i-building"></use></svg>
        </article>
        <article class="sx-action rv" style="--d:3">
          <span class="sx-action-num">03</span>
          <div class="sx-action-copy"><b>Preparar a ScaleX Hub para novos mercados</b></div>
          <svg class="ico" aria-hidden="true"><use href="#i-globe"></use></svg>
        </article>
      </div>
    </section>
    <p class="sx-pedida-msg rv" style="--d:4">O capital executa <span class="grad-text">um plano de crescimento já estruturado.</span></p>
    ${foot('Termos propostos, não laudo de avaliação. Valuation implícito na oferta de R$ 300 mil por 10%.')}
  </div>`
};
