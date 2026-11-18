import { semLinksFuturos } from './posts';

// Converte texto simples com links Markdown [texto](/caminho/) e **negrito** em HTML seguro.
export function md(texto: string): string {
  const esc = texto.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return semLinksFuturos(
    esc
      .replace(/\[([^\]]+)\]\((\/[^)\s]*)\)/g, '<a href="$2">$1</a>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>'),
  );
}

// Texto puro (sem marcações) para schema e meta
export function puro(texto: string): string {
  return texto.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1');
}
