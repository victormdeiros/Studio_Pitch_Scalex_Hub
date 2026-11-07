import {slides as detalhado} from './deck.mjs';
import resumoCapa from './slides-resumo/01-capa.mjs';
import resumoProjecao from './slides-resumo/13-projecao.mjs';
import resumoRodada from './slides-resumo/14-rodada.mjs';

const byId=new Map(detalhado.map(slide=>[slide.id,slide]));
const pick=ids=>ids.map(id=>{
  const slide=byId.get(id);
  if(!slide)throw new Error('Slide não encontrado: '+id);
  return slide;
});

/* Pitch de 7 minutos: 15 slides, na ordem do PPTX de referência.
   Reaproveita o desenho da apresentação completa e usa variantes próprias
   para projeção e rodada, com os números atualizados do PPTX. */
const resumo=[
  resumoCapa,
  ...pick([
    'slide-3',             // a dor e a origem
    'slide-4',             // 10 ferramentas / custo escondido
    'slide-infra',         // dispersão e workflows complexos
    'slide-publico',       // o parceiro vende, a ScaleX sustenta
    'slide-2',             // jornada comercial
    'slide-6',             // mercado direto
    'slide-mercado-indireto', // mercado de clientes finais
    'slide-concorrencia',  // concorrência
    'slide-diferenciais',  // como entramos
    'slide-7'              // tração
  ]),
  resumoProjecao,
  resumoRodada,
  ...pick([
    'slide-11',            // o papel do investidor / antecipação
    'slide-12'             // fechamento
  ])
];

export const decks=[
  {
    id:'detalhado',
    slug:'',
    label:'Apresentação para investidores',
    switchLabel:'Resumo · 7 min',
    switchHref:'resumo/index.html',
    title:'ScaleX Hub — Apresentação para investidores',
    description:'Apresentação completa para investidores da ScaleX Hub, 2026. 17 slides com design dinâmico.',
    slides:detalhado,
    editable:true,
    contentPath:'content.json',
    applyOrder:true
  },
  {
    id:'resumo',
    slug:'resumo',
    label:'Pitch resumido · 7 min',
    switchLabel:'Completa',
    switchHref:'../index.html',
    title:'ScaleX Hub — Pitch resumido',
    description:'Pitch resumido de 7 minutos para investidores da ScaleX Hub, 2026. 15 slides com design dinâmico.',
    slides:resumo,
    editable:false,
    contentPath:'../content.json',
    applyOrder:false
  }
];

export const deckBySlug=slug=>decks.find(deck=>deck.slug===String(slug||'').replace(/^\/+|\/+$/g,''));
