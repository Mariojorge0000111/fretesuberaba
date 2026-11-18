# Busca fotos no Pexels (sem repetir as já usadas) e gera WebP 1600 e 800.
import json, os, sys, io, urllib.request, urllib.parse
from PIL import Image
KEY = os.environ['PK']
REPO = sys.argv[1]
lista = json.load(open(sys.argv[2]))  # [[nome, query], ...]
usados_p = f'{REPO}/src/data/pexels-usados.json'
usados = set(json.load(open(usados_p)))
tam_p = f'{REPO}/src/data/imagens.json'
tam = json.load(open(tam_p)) if os.path.exists(tam_p) else {}
creditos_p = f'{REPO}/scripts/imagens-origem.json'
cred = json.load(open(creditos_p)) if os.path.exists(creditos_p) else {}
def get(url):
    req = urllib.request.Request(url, headers={'Authorization': KEY, 'User-Agent': 'Mozilla/5.0'})
    return urllib.request.urlopen(req, timeout=60).read()
for nome, q in lista:
    if nome in tam: continue
    d = json.loads(get('https://api.pexels.com/v1/search?' + urllib.parse.urlencode({'query': q, 'per_page': 30, 'orientation': 'landscape'})))
    foto = next((p for p in d['photos'] if p['id'] not in usados and p['width'] >= 1600), None)
    if not foto:
        print('SEM FOTO', nome, q); continue
    raw = get(foto['src']['original'] + '?auto=compress&cs=tinysrgb&w=1600')
    im = Image.open(io.BytesIO(raw)).convert('RGB')
    if im.width > 1600: im = im.resize((1600, round(im.height * 1600 / im.width)), Image.LANCZOS)
    im.save(f'{REPO}/public/images/{nome}.webp', 'WEBP', quality=72, method=6)
    pequeno = im.resize((800, round(im.height * 800 / im.width)), Image.LANCZOS)
    pequeno.save(f'{REPO}/public/images/{nome}-800.webp', 'WEBP', quality=72, method=6)
    tam[nome] = [im.width, im.height]
    usados.add(foto['id'])
    cred[nome] = {'id': foto['id'], 'alt': foto['alt'], 'fotografo': foto['photographer']}
    print(nome, foto['id'], '|', foto['alt'][:90])
json.dump(sorted(usados), open(usados_p, 'w'), indent=0)
json.dump(tam, open(tam_p, 'w'), indent=0)
json.dump(cred, open(creditos_p, 'w'), indent=1, ensure_ascii=False)
