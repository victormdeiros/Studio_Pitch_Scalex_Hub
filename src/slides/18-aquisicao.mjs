import {acquisition, acquisitionNotes, source, nr} from '../financials.mjs';
import {header, foot, metric} from '../financial-components.mjs';
export default {
  id:'slide-aquisicao', title:'Aquisição: 57 vendas projetadas em dois canais.', theme:'dark', number:'',
  notes:['TEMPO ALVO: 45 segundos', 'A estratégia combina outbound e inbound. De Q4/26 a Q4/27, o modelo projeta 31 vendas em outbound e 26 em inbound: 57 vendas brutas. Não se trata de carteira ativa ou de vendas realizadas.', ...acquisitionNotes, source],
  html:`<div class="fin-page">${header('Go-to-market · projeção','Dois canais. <span class="grad-text">57 vendas projetadas.</span>','Janela Q4/26–Q4/27 · volume bruto de aquisição, antes do churn.')}
  <div class="fin-body fin-channel-grid">${acquisition.map((a,i)=>`<section class="fin-card"><span class="fin-tag">${a.name}</span><h3>${nr(a.leads)} leads <span class="grad-text">→ ${a.sales} vendas</span></h3><div class="fin-funnel">${[['Leads gerados',a.leads],['Engajados'+(i?' ≈':''),a.engaged],['Reuniões marcadas'+(i?' ≈':''),a.booked],['Reuniões realizadas',a.meetings],['Vendas projetadas',a.sales]].map(([label,value],j)=>`<div><span>${label}</span><b>${nr(value)}</b><i style="--width:${value/a.leads*100}%"></i></div>`).join('')}</div><p class="fin-chart-note">Conversão vendas/leads: <b>${nr(a.sales/a.leads*100,2)}%</b> · calculada sobre os totais.</p></section>`).join('')}</div>
  ${foot('Fonte: PDF corrigido, p. 5. CAC e LTV monetário pendentes. Custos do funil não devem ser somados novamente ao aporte sem conciliação de escopo e período.')}</div>`
};
