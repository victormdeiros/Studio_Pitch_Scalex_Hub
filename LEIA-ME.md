# ScaleX Pitch Studio

Apresentação em código, com 11 slides, identidade ScaleX Hub, editor visual e exportação independente.

## Abrir agora

Extraia o ZIP e abra **index.html** no Chrome, Edge, Firefox ou Safari. A apresentação está pronta, com imagens e fontes incorporadas. Funciona sem internet, sem instalação e sem servidor.

Use as setas para navegar, **F** para tela cheia e **E** para editar. No celular, deslize entre slides ou abra **Leitura**. O índice **Slides** permite saltar para qualquer página. A ajuda **?** explica todos os controles.

## Editar visualmente

Clique em **Editar**, selecione um elemento e altere suas propriedades. Dê dois cliques no texto para escrever. As alças permitem mover e redimensionar. Você pode adicionar texto, imagem ou forma, duplicar, mudar a sobreposição, excluir e desfazer alterações.

Selecione o gráfico no slide 7 para editar os valores completos e os rótulos. As notas do apresentador ficam em **Leitura → Notas do apresentador**, com edição pelo painel lateral.

**Salvar HTML** baixa uma cópia independente com suas alterações. A cópia também continua editável. As alterações visuais não reescrevem os módulos do projeto: para manter o código-fonte como sua versão principal, faça as mudanças nos arquivos de `src/`.

## Editar o projeto como código

A base é **JavaScript modular + CSS**, com HTML/SVG nos elementos visuais. Não há framework obrigatório, dependências de npm ou serviços externos. Isso permite acrescentar animações, cenas, vídeos, componentes próprios e demonstrações interativas.

Com Node.js 18 ou superior instalado, execute na pasta extraída:

```sh
npm run build
```

Isso gera novamente **index.html**, com todos os recursos locais incorporados. Não é necessário executar `npm install`.

Para apresentar por um servidor local:

```sh
npm run dev
```

Abra **http://localhost:4173**. Depois de alterar o código, execute `npm run build` e atualize a página. O comando de desenvolvimento não inclui atualização automática.

## Onde mexer

| Arquivo | O que controla |
| --- | --- |
| `src/slides/01-abertura.mjs` até `11-fechamento.mjs` | Conteúdo, elementos e notas de cada slide |
| `src/design.mjs` | Direção de arte, paleta, temas e ajustes de posição/tamanho |
| `src/styles/theme.css` | Acabamentos, cores de apresentação, transições e estilos por cena |
| `src/styles/base.css` | Palco, editor, leitura, responsividade e impressão |
| `src/components.mjs` | Funções para criar textos, imagens e elementos HTML/SVG livres |
| `src/deck.mjs` | Sequência dos slides e dados do gráfico |
| `src/editor.js` | Navegação, edição, exportação e interação |
| `src/shell.html` | Estrutura da interface |
| `assets/brand/` | Os quatro arquivos originais do kit de identidade visual |
| `assets/fonts/` | Manrope regular e negrito extraídas da apresentação original |
| `original-reference.json` | Conteúdo original para conferência, incluindo todas as notas |

Cada elemento tem `id`, `type`, `frame`, `style`, `classes` e `content`. O campo `frame` usa pixels em uma tela de **1280 × 720**. `content` aceita HTML e SVG editáveis. `style` contém propriedades de aparência. Você pode organizar novos elementos com os componentes auxiliares ou escrever seu próprio HTML.

Exemplo de um elemento novo em um módulo de slide:

```js
import { text } from '../components.mjs';

// Acrescente ao array elements do slide:
text({
  id: 'meu-novo-elemento',
  text: 'Seu novo conteúdo',
  x: 64, y: 540, w: 740, h: 80,
  size: 32, color: '#d9b8f4', bold: true
})
```

Se o módulo já usa `export default { ... }`, o componente pode ser chamado diretamente dentro do array `elements`. Para vídeos ou outros componentes, use `custom()` e arquivos locais em `assets/`. O gerador incorpora PNG, JPEG, WebP, SVG, TTF, WOFF2 e MP4. Recursos remotos dependem de internet.

Os dados do gráfico ficam em `chart`, em `src/deck.mjs`: `categories`, `values`, `labels` e `colors`. Os valores estão em **R$ mil**. Alterar esse objeto atualiza o gráfico ao gerar a apresentação. Algumas cores de barras também recebem tratamento visual em `theme.css`.

Para mudar totalmente a composição, ajuste ou remova as regras em `artDirect()` de `design.mjs`. Elas rodam sobre os módulos de conteúdo antes de gerar os slides. Para adicionar slides, crie um módulo e inclua no array de `deck.mjs`; atualize os textos fixos da ajuda/índice em `shell.html` que mencionam 11 slides.

## Apresentação e impressão

O palco mantém a proporção 16:9 e se ajusta à tela. **Leitura** mostra os mesmos textos em tamanho confortável. Em tela cheia, a navegação reaparece ao passar o mouse na parte inferior. A impressão gera um slide por página. Ative os gráficos de fundo nas opções do navegador, se necessário.

Os 11 slides, textos, números, relações dos diagramas, valores completos do gráfico e notas originais foram preservados. A direção visual foi refinada usando os arquivos do kit, sem redesenhar a marca. Os conteúdos e as projeções não foram recalculados ou revisados. O kit não contém manual, fontes ou versões vetoriais; as fontes vieram do PowerPoint e os acabamentos adicionais são parte da direção de arte deste projeto.
