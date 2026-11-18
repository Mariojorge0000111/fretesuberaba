import type { APIRoute } from 'astro';
import { SITE } from '../config';
import { SERVICOS } from '../data/servicos';
import { BAIRROS, OUTROS_BAIRROS } from '../data/bairros';
import { CIDADES } from '../data/cidades';
import { POSTS } from '../lib/posts';

export const GET: APIRoute = ({ site }) => {
  const u = (p: string) => new URL(p, site).href;
  const txt = `# ${SITE.nome}

> Fretes, carretos e mudanças em Uberaba (MG) e no Triângulo Mineiro, para quem precisa contratar. Mudança residencial e comercial, pequenas mudanças, frete de móveis e eletrodomésticos, montagem de móveis e mudança para outras cidades. Orçamento pelo WhatsApp, com valor combinado antes. ${SITE.horario}.

## Serviços
${SERVICOS.map((s) => `- [${s.h1}](${u(`/servicos/${s.slug}/`)}): ${s.resumo}`).join('\n')}

## Bairros de Uberaba
${BAIRROS.map((b) => `- [${b.h1}](${u(`/bairros/${b.slug}/`)})`).join('\n')}

Também atende: ${OUTROS_BAIRROS.join(', ')}.

## Cidades da região
${CIDADES.map((c) => `- [${c.h1}](${u(`/cidades/${c.slug}/`)}): ${c.distancia}`).join('\n')}

## Guias
${POSTS.map((p) => `- [${p.titulo}](${u(`/blog/${p.slug}/`)}): ${p.descricao}`).join('\n')}

## Outras páginas
- [Perguntas frequentes](${u('/perguntas-frequentes/')})
- [Como funciona](${u('/como-funciona/')})
- [Orçamento](${u('/orcamento/')})
`;
  return new Response(txt, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
