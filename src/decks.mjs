import {slides as detalhado} from './deck.mjs';
import {slides as resumo} from './slides-resumo.mjs';

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
    description:'Pitch resumido de 7 minutos para investidores da ScaleX Hub, 2026. 15 slides do PPTX de referência.',
    slides:resumo,
    editable:false,
    contentPath:'../content.json',
    applyOrder:false
  }
];

export const deckBySlug=slug=>decks.find(deck=>deck.slug===String(slug||'').replace(/^\/+|\/+$/g,''));
