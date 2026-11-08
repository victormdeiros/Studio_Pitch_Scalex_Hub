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
            <tr>
              <th class="col-cap">Capacidade Operacional</th>
              <th class="col-comp"><span class="th-logo">HighLevel</span><em class="th-sub">Global · Agências</em></th>
              <th class="col-comp"><span class="th-logo">Zaia</span><em class="th-sub">Brasil · Agentes</em></th>
              <th class="col-hub">
                <div class="th-hub-badge">
                  <svg class="ico" aria-hidden="true"><use href="#i-spark"></use></svg>
                  <span>ScaleX Hub</span>
                </div>
                <em class="th-hub-tag">Plataforma Completa</em>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Criação de planos para revenda</td>
              <td><span class="chk ok muted">✓ Sim</span></td>
              <td><span class="chk no">— Não</span></td>
              <td class="col-hub-cell"><span class="chk ok hub"><svg class="ico" aria-hidden="true"><use href="#i-check"></use></svg><b>Nativo</b></span></td>
            </tr>
            <tr>
              <td>Trilha comercial completa (CRM + Esteira)</td>
              <td><span class="chk ok muted">✓ Sim</span></td>
              <td><span class="chk no">— Não</span></td>
              <td class="col-hub-cell"><span class="chk ok hub"><svg class="ico" aria-hidden="true"><use href="#i-check"></use></svg><b>Nativo</b></span></td>
            </tr>
            <tr>
              <td>Implantação sem desenvolvimento (Low Code)</td>
              <td><span class="chk no">— Não</span></td>
              <td><span class="chk ok muted">✓ Sim</span></td>
              <td class="col-hub-cell"><span class="chk ok hub"><svg class="ico" aria-hidden="true"><use href="#i-check"></use></svg><b>Nativo</b></span></td>
            </tr>
            <tr>
              <td>IA automatizada e humanizada integrada</td>
              <td><span class="chk no">— Não</span></td>
              <td><span class="chk ok muted">✓ Sim</span></td>
              <td class="col-hub-cell"><span class="chk ok hub"><svg class="ico" aria-hidden="true"><use href="#i-check"></use></svg><b>Nativo</b></span></td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="tr-veredicto">
              <td>Cobertura da operação</td>
              <td><span class="ver-sub">Apenas canal</span></td>
              <td><span class="ver-sub">Apenas agentes</span></td>
              <td class="col-hub-cell ver-hub"><b>100% da operação integrada</b></td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div class="sum-dif-panels">
        <article class="sum-dif-panel rv" style="--d:4">
          <div class="panel-icon-tag"><svg class="ico" aria-hidden="true"><use href="#i-trend"></use></svg>Demanda validada</div>
          <p>HighLevel (global) e Zaia (Brasil) já vendem plataforma para agências. A categoria existe; no Brasil, a escala comercial está aberta.</p>
        </article>
        <article class="sum-dif-panel hub-panel rv" style="--d:5">
          <div class="panel-icon-tag hub"><svg class="ico" aria-hidden="true"><use href="#i-spark"></use></svg>Diferencial técnico ScaleX Hub</div>
          <p>Código 100% próprio: cada nova funcionalidade entra diretamente sobre a base arquitetural, sem retrabalho de fundação.</p>
          <div class="panel-paas"><b>Próximo salto tecnológico:</b> PaaS com SDK JavaScript/TypeScript</div>
        </article>
      </div>

      <p class="sum-dif-foot rv" style="--d:6">Comparação por categoria, a partir do posicionamento público das ferramentas. SaaS pontual: Kommo, Blip, ManyChat, Chatbase. Construtor de fluxo: n8n, Make, Zapier.</p>
    </div>`
};
