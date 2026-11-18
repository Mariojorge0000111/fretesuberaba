# fretesuberaba · Fretes e Mudanças em Uberaba (fretesuberaba.com.br)

Site de aluguel (rank and rent) do Mário Jorge. Ranqueia no Google para fretes e mudanças em Uberaba (MG). Os leads vão para o WhatsApp dele (5555991438702) e ele mesmo os repassa. Marca genérica "Fretes Uberaba": quando o site for alugado, troca-se só o `src/config.ts`.

## Stack e publicação
- Astro + @astrojs/sitemap, Node 22 (`.node-version`). `trailingSlash: 'always'`.
- Cloudflare Pages: cada push na `main` publica sozinho (build `npm run build`, saída `dist`).
- Domínio: https://fretesuberaba.com.br · Sitemap: `/sitemap-index.xml`.
- Commits: autor Mário Jorge, mensagem em português.

## Artigos agendados
- Artigos ficam em `src/content/blog/*.md`. Frontmatter: `titulo`, `descricao`, `data`, `imagem` (nome do arquivo em /public/images, sem extensão), `imagemAlt`, `palavraChave`, `servico`, `bairro`/`cidade` (opcionais), `faq`.
- Só são publicados os artigos com `data` menor ou igual a hoje (fuso de São Paulo). Links para artigos ainda não publicados viram texto simples até a data chegar.
- `.github/workflows/publicar-agendados.yml` roda todo dia às 06:07 e, se houver artigo com a data do dia, anota em `src/data/publicacoes.txt` e faz um commit; o push dispara o build da Cloudflare.
- `[[CTA]]` sozinho numa linha do artigo vira o botão de WhatsApp no meio do texto.

## Onde fica cada coisa
- `src/config.ts`: nome, WhatsApp, horário.
- `src/data/servicos.ts`: 6 serviços (`/servicos/<slug>/`).
- `src/data/bairros.ts`: 14 bairros com texto único (`/bairros/<slug>/`) e lista de outros bairros.
- `src/data/cidades.ts`: 7 cidades da região (`/cidades/<slug>/`).
- `src/pages/perguntas-frequentes.astro`, `orcamento.astro` (formulário que abre o WhatsApp), `como-funciona.astro`.
- `src/data/pexels-usados.json`: IDs de fotos do Pexels já usadas nos sites de aluguel. Nunca repetir uma foto.
- `scripts/imagens.py`: baixa fotos do Pexels e gera WebP 1600 e 800 (a chave do Pexels fica só com o Mário, nunca no repositório).
- Design: off-white, grafite e terracota (#c4512a), fonte Manrope.

## Regras de conteúdo
- Título até 60 caracteres, palavra-chave no início. Descrição entre 130 e 160 caracteres.
- Cada artigo mira uma palavra-chave diferente; não criar artigo que dispute busca com página de serviço, bairro ou cidade.
- O site fala com quem quer CONTRATAR frete/mudança, nunca com caminhoneiro procurando carga.
- Honestidade: não inventar endereço, CNPJ, anos de experiência, frota, clientes, avaliações, depoimentos nem preços.
- Sem clichês de IA. Frases curtas e diretas. Texto diferente dos sites de Curitiba (site1) e Passo Fundo (site2).

## Combinados com o Mário
- Quando precisar de uma confirmação dele, mandar notificação no celular.
- Responder em português.
