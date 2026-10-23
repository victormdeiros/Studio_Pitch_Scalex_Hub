# ScaleX Pitch Studio

Apresentação em código, com 12 slides, identidade ScaleX Hub e direção de arte autoral. Sem editor embutido: a composição é feita nos módulos de conteúdo e no sistema visual.

## Abrir agora

Extraia o ZIP e abra **index.html** no Chrome, Edge, Firefox ou Safari. A apresentação está pronta, com imagens e fontes incorporadas. Funciona sem internet, sem instalação e sem servidor.

Use as setas para navegar, **F** para tela cheia e **G** para ver todos os slides. No celular, deslize entre slides ou abra **Leitura**. O índice **Slides** permite saltar para qualquer página e a ajuda **?** explica os controles.

## Apresentar

- **← → / Page Up / Page Down / Espaço** navegam.
- **Home / End** vão ao primeiro ou ao último slide.
- **F** alterna tela cheia; **G** abre a visão geral; **?** abre a ajuda.
- **Leitura** mostra o conteúdo do slide em formato de artigo, com as notas do apresentador.
- **Imprimir** gera um slide por página em 16:9, para PDF.

A interface desaparece durante a apresentação em tela cheia e reaparece ao passar o mouse na parte inferior. Os slides têm entrada em camadas, contadores, gráficos animados, redes desenhadas e parallax sutil de acordo com o movimento do mouse. A abertura usa uma transição de impacto: o símbolo da capa atravessa a tela, cresce e abre o resumo no slide 2. As demais trocas usam foco, profundidade e uma varredura de luz; na passagem da fragmentação para a concorrência, as dez ferramentas convergem para o símbolo ScaleX antes de a leitura competitiva aparecer.

## Editar o projeto como código

A base é **JavaScript modular + CSS**, com HTML/SVG nos elementos visuais. Não há framework, dependência npm ou serviço externo. Com Node.js 18 ou superior:

```sh
npm run build
```

Isso gera novamente **index.html**, com todos os recursos locais incorporados. Não é necessário executar `npm install`.

Para apresentar por um servidor local:

```sh
npm run dev
```

Abra **http://localhost:4173**. Depois de alterar o código, execute `npm run build` e recarregue a página. O comando de desenvolvimento não inclui atualização automática.

## Onde mexer

| Arquivo | O que controla |
| --- | --- |
| `src/slides/01-capa.mjs` até `12-fechamento.mjs` | Conteúdo, HTML, animações de entrada e notas de cada slide |
| `src/deck.mjs` | Sequência dos slides |
| `src/styles/theme.css` | Direção de arte: paleta, tipografia, atmosfera, layouts e animações de cada cena |
| `src/styles/base.css` | Palco, chrome, navegação, leitura, responsividade e impressão |
| `src/runtime.js` | Navegação, transições, contadores, parallax, leitura e atalhos |
| `src/shell.html` | Estrutura da interface |
| `src/components.mjs` | Utilitário compartilhado de escape de HTML |
| `assets/brand/` | Os quatro arquivos originais do kit de identidade visual |
| `assets/fonts/` | Manrope regular e negrito extraídas da apresentação original |
| `original-reference.json` | Conteúdo original para conferência, incluindo todas as notas |

Cada módulo exporta `id`, `title`, `theme`, `number`, `notes` e `html`. O palco é **1280 × 720** e se ajusta à tela. As classes de animação são `rv` (entrada em camadas) e `rv-soft` (fade); a ordem é controlada por `style="--d:n"`.

Exemplo de ajuste em um slide:

```js
<p class="lead rv" style="--d:2">Seu novo texto.</p>
```

Para vídeos ou outros recursos, use arquivos locais em `assets/`. O gerador incorpora PNG, JPEG, WebP, SVG, TTF, WOFF2 e MP4. Recursos remotos dependem de internet.

## Direção visual

O sistema combina azul profundo, violeta e ciano, tipografia grande com tracking negativo, hairlines, auroras lentas e malha técnica. Cada slide tem composição própria: constelação de ferramentas, esteira de vendas, funil de mercado, gráfico de barras, cronograma comparativo, frentes de capital e fechamento cinematográfico. Os ícones são lineares, corporativos e usam um sprite SVG único; aparecem em kickers, módulos, métricas e etapas do funil, sem competir com o texto.

A abertura foi desdobrada em capa e resumo com os textos originais de posicionamento. O conteúdo de plataforma e parceria foi consolidado nesse resumo; os concorrentes diretos e indiretos foram unificados em um slide, e o mercado separa o tamanho direto do upsell indireto da base. O SOM inicial foi alinhado ao cálculo de 0,5%–1% do SAM, resultando em 130–260 clientes. O detalhamento de módulos ficou nas notas do resumo. A concorrência entrou logo após a fragmentação, com diretos e indiretos no mesmo slide, e o mercado direto e o upsell indireto ficaram no slide seguinte. O slide de vendas reúne o resultado histórico de 2025, o ticket recorrente comparativo e a esteira automatizada da ScaleX Hub. A rodada passou a enfatizar a oferta de 10% da empresa, com o valuation indicativo considerando o bootstrapping. O kit não contém manual, fontes ou versões vetoriais; as fontes vieram do PowerPoint e os acabamentos adicionais são parte da direção de arte deste projeto.
