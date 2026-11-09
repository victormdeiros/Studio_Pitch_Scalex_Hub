// A trajetória é um diagrama de execução; não representa faturamento no eixo do tempo.
export function scenarioRoute({funded=false,months=6}={}){
  const id=funded?'funded':'bootstrap';
  return `<div class="scenario-route ${funded?'is-funded':'is-bootstrap'}">
    <div class="scenario-route-caption"><span>${funded?'R$ 300 mil de aporte':'Recursos próprios'}</span><b>${funded?'O plano ganha velocidade.':'O plano já está em movimento.'}</b></div>
    <svg class="scenario-route-svg" viewBox="0 0 600 230" role="img" aria-label="${funded?`O aporte antecipa a execução do plano em ${months} meses em relação ao ritmo bootstrap.`:'Plano bootstrap: plataforma, distribuição e meta de 2027, com recursos próprios.'}">
      <defs><linearGradient id="route-${id}" gradientUnits="userSpaceOnUse" x1="30" y1="0" x2="${funded?340:550}" y2="0"><stop stop-color="#8b79ed"/><stop offset="1" stop-color="${funded?'#22d3ee':'#c084fc'}"/></linearGradient></defs>
      ${funded?`
        <text x="30" y="27" class="route-svg-label">Ritmo bootstrap</text>
        <path class="route-ghost" d="M30 58H550"/>
        <circle class="route-ghost-end" cx="550" cy="58" r="7"/>
        <path class="route-connector" d="M550 58V195M340 142V195"/>
        <text x="30" y="108" class="route-svg-label funded">Com investidor</text>
        <path class="route-track" d="M30 142H340"/>
        <path class="route-live" d="M30 142H340" stroke="url(#route-${id})"/>
        <path class="route-particles" d="M30 142H340"/>
        <circle class="route-start" cx="30" cy="142" r="5"/>
        <circle class="route-halo" cx="340" cy="142" r="19"/>
        <circle class="route-end" cx="340" cy="142" r="8"/>
        <path class="route-time-bracket" d="M340 187V199H550V187"/>
        <text x="445" y="224" text-anchor="middle" class="route-saving">${months} meses antes</text>
      `:`
        <path class="route-track" d="M30 115H550"/>
        <path class="route-live" d="M30 115H550" stroke="url(#route-${id})"/>
        <path class="route-particles" d="M30 115H550"/>
        <circle class="route-start" cx="30" cy="115" r="6"/>
        <circle class="route-middle" cx="275" cy="115" r="6"/>
        <circle class="route-halo" cx="550" cy="115" r="19"/>
        <circle class="route-end" cx="550" cy="115" r="8"/>
        <text x="30" y="157" class="route-svg-label">Plataforma</text>
        <text x="275" y="157" text-anchor="middle" class="route-svg-label">Distribuição</text>
        <text x="550" y="157" text-anchor="end" class="route-svg-label">Meta 2027</text>
      `}
    </svg>
  </div>`.replace(/^[\t ]+$/gm,'');
}
