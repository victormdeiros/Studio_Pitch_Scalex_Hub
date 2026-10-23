// Slide 5 · distribuição.
export default {
  id: 'slide-5',
  title: 'Um cliente ScaleX distribui para muitos',
  theme: 'light',
  number: '04',
  notes: [
    'TEMPO ALVO: 30 segundos',
    'ROTEIRO FALADO',
    'Nosso cliente principal é a agência de automação e IA que já atende múltiplas empresas e precisa de infraestrutura white-label e replicável. O segundo perfil são consultorias comerciais e agências de marketing que têm carteira e querem incorporar CRM, automação e IA à oferta. Nós conquistamos quem já possui clientes. Cada cliente ScaleX pode trazer várias empresas finais, cada uma com seu workspace independente.',
    'APOIO PARA PERGUNTAS',
    'ICP principal: escalar a operação sem reconstruí-la a cada contrato.',
    'ICP secundário: ampliar recorrência, ticket e participação na operação do cliente por meio de CRM, automação e IA. O desenho ilustra o modelo de distribuição, sem pressupor quantidade real de clientes por agência.',
    'Fonte: conteúdo e roteiro fornecidos na conversa “Informações para investidores”, 30/09/2026. https://chatgpt.com/c/6abd1706-583c-83e9-bc91-7f70a6104b7a'
  ],
  html: `
    <header class="head">
      <p class="eyebrow rv" style="--d:0">Distribuição</p>
      <h2 class="title rv" style="--d:1">Um cliente ScaleX distribui para muitos</h2>
    </header>
    <div class="flow">
      <div class="hub rv" style="--d:2">
        <img src="assets/image4.png" alt="ScaleX Hub">
        <p>Infraestrutura white-label e replicável: cada cliente atende várias empresas finais com workspace independente.</p>
      </div>
      <div class="icps">
        <div class="icp hx rv" style="--d:3"><p class="tag">ICP principal</p><h3>Agências de Automação e IA</h3></div>
        <div class="icp hx rv" style="--d:4"><p class="tag">ICP secundário</p><h3>Consultorias comerciais e agências de marketing</h3></div>
      </div>
      <div class="clients rv" style="--d:5">
        <span class="client hx">Cliente final 1</span>
        <span class="client hx">Cliente final 2</span>
        <span class="client hx">Cliente final 3</span>
        <span class="client hx">Cliente final 4</span>
        <span class="client hx">Cliente final 5</span>
        <span class="client hx">Cliente final 6</span>
        <p class="cap">Cada cliente final tem seu workspace independente</p>
      </div>
    </div>
    <div class="process">
      <div class="step hx rv" style="--d:6"><p class="n">01</p><h3>A ScaleX Hub cria</h3><p>Novos agentes, integrações e recursos de IA a cada ciclo</p></div>
      <div class="step hx rv" style="--d:7"><p class="n">02</p><h3>A agência vende</h3><p>Foca em trazer clientes finais, a partir da carteira que já tem</p></div>
      <div class="step hx alt rv" style="--d:8"><p class="n">03</p><h3>Revendedor mais dependente</h3><p>Cada cliente final na plataforma torna mais caro sair da ScaleX Hub</p></div>
    </div>`
};
