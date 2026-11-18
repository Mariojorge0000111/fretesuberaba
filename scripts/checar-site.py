# Verifica o site gerado em dist/: links internos, H1 único, title/description únicos, imagens com alt.
import os, re, sys, collections
raiz = 'dist'; paginas = {}; erros = []
for d, _, fs in os.walk(raiz):
    for f in fs:
        if f.endswith('.html'):
            p = os.path.join(d, f); url = '/' + os.path.relpath(p, raiz).replace('index.html', '').replace('\\', '/')
            paginas[url] = open(p, encoding='utf-8').read()
existentes = set(paginas) | {'/' + os.path.relpath(os.path.join(d, f), raiz) for d, _, fs in os.walk(raiz) for f in fs}
titulos = collections.Counter(); descs = collections.Counter()
for url, h in paginas.items():
    if url == '/404.html': continue
    h1 = len(re.findall(r'<h1[\s>]', h))
    if h1 != 1: erros.append(f'{url}: {h1} H1')
    t = re.search(r'<title>(.*?)</title>', h).group(1); titulos[t] += 1
    m = re.search(r'<meta name="description" content="(.*?)"', h); descs[m.group(1) if m else ''] += 1
    for img in re.findall(r'<img [^>]*>', h):
        if 'alt=""' in img or ' alt=' not in img: erros.append(f'{url}: imagem sem alt')
    for href in re.findall(r'href="(/[^"#?]*)', h):
        if href.startswith('//'): continue
        if href not in existentes and href.rstrip('/') + '/index.html' not in existentes and href not in ('/sitemap-index.xml',):
            erros.append(f'{url}: link quebrado {href}')
for t, n in titulos.items():
    if n > 1: erros.append(f'title repetido ({n}x): {t}')
for t, n in descs.items():
    if n > 1: erros.append(f'description repetida ({n}x): {t[:60]}')
print(len(paginas), 'páginas'); print('\n'.join(sorted(set(erros))) or 'Sem erros')
