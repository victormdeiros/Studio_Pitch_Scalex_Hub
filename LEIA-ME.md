# ScaleX Pitch Studio

Apresentação em código, com 13 slides, identidade ScaleX Hub e direção de arte autoral. Reordene slides, edite textos e ajuste cores e posições direto no navegador; o resultado é publicado em `content.json`, no próprio repositório, e o GitHub Pages atualiza o link.

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

## Editar no navegador

Abra a apresentação e clique em **Editar** (ou pressione **E**). O estúdio abre ao lado do palco:

- **Textos** — clique em qualquer texto do slide e escreva. Os destaques visuais (gradientes, negritos, ícones) são preservados.
- **Aparência** — com um texto selecionado, o painel mostra cor, fundo, tamanho, peso, alinhamento e posição. Use **↑ ← ↓ →** para deslocar (Shift = 16px), **Arrastar** para mover com o mouse e **Limpar** para voltar ao estilo original. O painel pode ser minimizado pelo chevron.
- **Ordem** — arraste as linhas da lista ou use **↑ ↓**. A numeração dos slides e o índice acompanham a nova ordem.
- **Ver o slide inteiro** — o ícone de olho recolhe o estúdio sem sair da edição. O botão **Estúdio** traz o painel de volta.
- **Rascunho** — cada alteração fica salva automaticamente neste navegador (`localStorage`), mesmo sem internet. Nada é publicado até você clicar em **Publicar no site**.
- **Restaurar original** — volta todos os textos, estilos e a ordem ao conteúdo de `content.json`/código.

O botão **Publicar no site** grava `content.json` na raiz do repositório pelo GitHub. O GitHub Pages republica o link em cerca de um minuto. É necessário um **token fine-grained** do GitHub, criado em [github.com/settings/personal-access-tokens](https://github.com/settings/personal-access-tokens/new), com acesso somente a este repositório e permissão **Contents: Read and write**. O token fica salvo apenas neste navegador e nunca é gravado no repositório.

Na primeira vez, cole o token e clique em **Salvar e testar**. O estúdio mostra **GitHub · @seu-usuário** quando a conexão está válida. Depois disso, publicar é um clique em **Publicar no site** — o token não é pedido novamente neste navegador. Em outro dispositivo, conecte uma vez com o mesmo token.

Sem token, use **Baixar JSON** para exportar as alterações e **Importar** para carregá-las em outro navegador. O arquivo pode ser commitado como `content.json` manualmente.

### Como o conteúdo é aplicado

- O site busca `content.json` ao abrir. Se o arquivo não existir (ou o arquivo for aberto direto por `file://`), usa o conteúdo embutido no `index.html` na hora do `npm run build`.
- A ordem guarda os ids dos slides (`slide-1` a `slide-12`). Os textos são guardados por slide, no elemento editável, junto da marcação original — se um slide mudar no código, o texto antigo não é aplicado no lugar errado.
- Aparência fica em `styles`, por slide e por elemento: cor, fundo, tamanho, peso, alinhamento e deslocamento (x/y). São estilos aplicados por cima do CSS, sem alterar o layout original.
- Para conferir o site publicado, abra [victormdeiros.github.io/Studio_Pitch_Scalex_Hub](https://victormdeiros.github.io/Studio_Pitch_Scalex_Hub/). Se o navegador tiver um rascunho local, use **Descartar rascunho local** (na configuração de publicação) para ver a versão publicada.

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
| `src/slides/01-capa.mjs` até `13-fechamento.mjs` | Conteúdo, HTML, animações de entrada e notas de cada slide |
| `src/deck.mjs` | Sequência padrão dos slides (usada quando `content.json` não define outra) |
| `src/styles/theme.css` | Direção de arte: paleta, tipografia, atmosfera, layouts e animações de cada cena |
| `src/styles/base.css` | Palco, chrome, navegação, leitura, responsividade e impressão |
| `src/runtime.js` | Navegação, transições, contadores, parallax, leitura, atalhos e aplicação do `content.json` |
| `src/editor.js` | Estúdio: textos, aparência, reordenação, rascunho e publicação no GitHub |
| `src/styles/editor.css` | Painel do estúdio, realce dos textos editáveis, controles de aparência e diálogo de publicação |
| `content.json` | Ordem, textos e estilos publicados pelo estúdio |
| `src/shell.html` | Estrutura da interface |
| `src/components.mjs` | Utilitário compartilhado de escape de HTML |
| `assets/brand/` | Os quatro arquivos originais do kit de identidade visual |
| `assets/fonts/` | Manrope regular e negrito extraídas da apresentação original |
| `original-reference.json` | Conteúdo original para conferência, incluindo todas as notas |

Cada módulo exporta `id`, `title`, `theme`, `number`, `notes` e `html`. O palco é **1280 × 720** e se ajusta à tela. As classes de animação são `rv` (entrada em camadas) e `rv-soft` (fade); a ordem é controlada por `style="--d:n"`. Ao regerar o `index.html`, o conteúdo publicado é embutido como reserva para uso offline; o site continua lendo o `content.json` mais recente.

Exemplo de ajuste em um slide:

```js
<p class="lead rv" style="--d:2">Seu novo texto.</p>
```

Para vídeos ou outros recursos, use arquivos locais em `assets/`. O gerador incorpora PNG, JPEG, WebP, SVG, TTF, WOFF2 e MP4. Recursos remotos dependem de internet.

## Direção visual

O sistema combina azul profundo, violeta e ciano, tipografia grande com tracking negativo, hairlines, auroras lentas e malha técnica. Cada slide tem composição própria: jornada comercial, constelação de ferramentas, fluxo de automação, funil de mercado, gráfico de barras, cronograma comparativo, frentes de capital e fechamento cinematográfico. Os ícones são lineares, corporativos e usam um sprite SVG único; aparecem em kickers, módulos, métricas e etapas do funil, sem competir com o texto.

A abertura foi desdobrada em capa e uma visão da jornada comercial, com sete etapas, o núcleo de agentes de IA, multicanais e ecossistema integrado. O posicionamento de plataforma ficou nas notas do slide; os concorrentes diretos e indiretos foram unificados em um slide, e o mercado apresenta TAM, SAM e SOM diretos e indiretos, além do upsell do cliente do cliente. O SOM inicial foi alinhado ao cálculo de 0,5%–1% do SAM, resultando em 130–260 clientes. O detalhamento de módulos ficou nas notas do resumo. A concorrência entrou logo após a fragmentação, com diretos e indiretos no mesmo slide, e o mercado direto e o upsell indireto ficaram no slide seguinte. Entre a fragmentação e a concorrência entrou um slide sobre a falta de infraestrutura como serviço e a fragilidade dos fluxos de automação por nós. O slide de vendas reúne o resultado histórico de 2025, o ticket recorrente comparativo, o que já foi entregue e a virada de agência para plataforma. A rodada passou a enfatizar a oferta de 10% da empresa, com o valuation indicativo considerando o bootstrapping. O kit não contém manual, fontes ou versões vetoriais; as fontes vieram do PowerPoint e os acabamentos adicionais são parte da direção de arte deste projeto.
