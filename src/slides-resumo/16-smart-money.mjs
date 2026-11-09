import {header, foot} from '../financial-components.mjs';

export default {
  id:'resumo-smart-money',
  title:'Smart money: capital que abre portas.',
  theme:'dark',
  number:'16',
  notes:[
    'TEMPO ALVO: 25 segundos',
    'Além do cheque, esperamos um investidor que ajude a abrir portas. O smart money tem cinco frentes: acesso comercial e distribuição, abertura de portas no mercado enterprise, experiência em crescimento de SaaS, governança e preparação para enterprise, e ecossistema e parcerias tecnológicas.',
    'Acesso comercial e distribuição: conexões com agências, consultorias, integradores de tecnologia e empresas que possam se tornar parceiros revendedores. O objetivo é transformar relacionamentos em contratos e receita recorrente imediata. Esse é o vetor que ajuda a reduzir o CAC e a antecipar o payback previsto.',
    'Abertura enterprise: aproximação com grandes empresas e decisores de tecnologia e inovação, apoio na negociação de contratos corporativos, provas de conceito e parcerias estratégicas.',
    'Experiência em SaaS: mentoria prática em precificação, CAC, LTV, churn, retenção, canais de vendas e construção de uma operação comercial previsível e escalável.',
    'Governança e preparação enterprise: apoio em estruturação societária, propriedade intelectual, LGPD, segurança da informação, auditorias, certificações e preparação para futuras rodadas.',
    'Ecossistema e parcerias tecnológicas: conexões com provedores de nuvem, programas de startups, aceleradoras, fundos e parceiros de IA que possam reduzir custos operacionais e fortalecer a infraestrutura.',
    'O smart money é uma expectativa de apoio estratégico, condicionada ao perfil e à rede do investidor. Não representa compromisso contratual de resultado.'
  ],
  html:`<div class="fin-page sx-smart">
    ${header('Pós-investimento · smart money','Capital que <span class="grad-text">abre portas.</span>','O que esperamos além do cheque: acesso, experiência e governança para encurtar o caminho até a receita.')}
    <div class="sx-smart-grid">
      <article class="sx-smart-card sx-smart-lead rv" style="--d:1">
        <div class="sx-smart-top"><span class="sx-smart-num">01</span><svg class="ico" aria-hidden="true"><use href="#i-route"></use></svg><span class="sx-smart-badge">Reduz CAC · antecipa payback</span></div>
        <h3>Acesso comercial e distribuição</h3>
        <p>Conexões com agências, consultorias, integradores de tecnologia e empresas que possam se tornar parceiros revendedores.</p>
        <div class="sx-smart-flow" aria-label="Do relacionamento ao contrato, e do contrato à receita recorrente."><span>Relacionamento</span><i></i><span>Contrato</span><i></i><span>Receita recorrente imediata</span></div>
      </article>
      <article class="sx-smart-card rv" style="--d:2">
        <div class="sx-smart-top"><span class="sx-smart-num">02</span><svg class="ico" aria-hidden="true"><use href="#i-building"></use></svg></div>
        <h3>Abertura enterprise</h3>
        <p>Aproximação com grandes empresas e decisores de tecnologia e inovação. Apoio na negociação de contratos corporativos, provas de conceito e parcerias estratégicas.</p>
        <span class="sx-smart-impact">Contratos maiores · ciclos mais longos</span>
      </article>
      <article class="sx-smart-card rv" style="--d:3">
        <div class="sx-smart-top"><span class="sx-smart-num">03</span><svg class="ico" aria-hidden="true"><use href="#i-trend"></use></svg></div>
        <h3>Experiência em SaaS</h3>
        <p>Mentoria prática em precificação, CAC, LTV, churn, retenção, canais de vendas e construção de uma operação comercial previsível e escalável.</p>
        <span class="sx-smart-impact">Operação previsível · menos churn</span>
      </article>
      <article class="sx-smart-card rv" style="--d:4">
        <div class="sx-smart-top"><span class="sx-smart-num">04</span><svg class="ico" aria-hidden="true"><use href="#i-shield"></use></svg></div>
        <h3>Governança enterprise</h3>
        <p>Estrutura societária, propriedade intelectual, LGPD, segurança da informação, auditorias, certificações e preparação para futuras rodadas de investimento.</p>
        <span class="sx-smart-impact">Menos risco · pronta para rodadas</span>
      </article>
      <article class="sx-smart-card rv" style="--d:5">
        <div class="sx-smart-top"><span class="sx-smart-num">05</span><svg class="ico" aria-hidden="true"><use href="#i-cloud"></use></svg></div>
        <h3>Ecossistema e parcerias</h3>
        <p>Provedores de nuvem, programas de startups, aceleradoras, fundos e parceiros de IA para reduzir custos operacionais e fortalecer a infraestrutura.</p>
        <span class="sx-smart-impact">Custos menores · base mais forte</span>
      </article>
    </div>
    ${foot('Smart money esperado: apoio estratégico condicionado ao perfil e à rede do investidor. Não representa compromisso contratual de resultado.')}
  </div>`
};
