// Slide 9 do pitch: a comparação por categoria do PPTX (slide 10).
export default {
  id: 'resumo-diferenciais',
  title: 'A concorrência entrega partes. A ScaleX entrega a operação inteira.',
  theme: 'light',
  number: '12',
  notes: [
    'TEMPO ALVO: 50 segundos',
    'A concorrência entrega partes. A ScaleX entrega a operação inteira. A comparação por categoria mostra que HighLevel e Zaia têm forças diferentes: HighLevel cria planos e trilha comercial; Zaia tem implantação low code e IA humanizada. A ScaleX combina as três frentes: criação de planos, trilha comercial completa, implantação sem desenvolvimento e IA automatizada e humanizada. A demanda está validada: HighLevel e Zaia já vendem plataforma para agências. A vantagem técnica é o código 100% próprio, que permite adicionar features sem refazer a fundação. O próximo salto é PaaS com SDK JS/TS.'
  ],
  html: `
    <div class="sum-dif">
      <header class="sum-dif-head">
        <p class="kicker rv" style="--d:0"><span class="k-line"></span><svg class="ico" aria-hidden="true"><use href="#i-spark"></use></svg>Como entramos</p>
        <h2 class="h2 rv" style="--d:1">A concorrência entrega partes. <span class="grad-text">A ScaleX entrega a operação inteira.</span></h2>
        <p class="lead rv" style="--d:2">Comparação por categoria, a partir do posicionamento público das ferramentas.</p>
      </header>

      <div class="sum-dif-table-wrap rv" style="--d:3">
        <table class="sum-dif-table">
          <thead>
            <tr><th>Capacidade</th><th>HighLevel</th><th>Zaia</th><th>ScaleX Hub</th></tr>
          </thead>
          <tbody>
            <tr><td>Criação de planos para revenda</td><td>✓</td><td>—</td><td>✓</td></tr>
            <tr><td>Trilha comercial completa</td><td>✓</td><td>—</td><td>✓</td></tr>
            <tr><td>Implantação sem desenvolvimento - Low Code</td><td>—</td><td>✓</td><td>✓</td></tr>
            <tr><td>IA automatizada e humanizada</td><td>—</td><td>✓</td><td>✓</td></tr>
          </tbody>
        </table>
      </div>

      <div class="sum-dif-panels">
        <article class="sum-dif-panel rv" style="--d:4">
          <h3>Demanda validada</h3>
          <p>HighLevel (global) e Zaia (Brasil) já vendem plataforma para agências. A categoria existe; no Brasil, a escala está em construção.</p>
        </article>
        <article class="sum-dif-panel rv" style="--d:5">
          <h3>Vantagem técnica</h3>
          <p>Código 100% próprio: cada nova feature entra sobre a base, sem refazer a fundação.</p>
          <p><b>Próximo salto:</b> PaaS (SDK JS/TS)</p>
        </article>
      </div>

      <p class="sum-dif-foot rv" style="--d:6">Comparação por categoria, a partir do posicionamento público das ferramentas. SaaS pontual: Kommo, Blip, ManyChat, Chatbase. Construtor de fluxo: n8n, Make, Zapier.</p>
    </div>`
};
