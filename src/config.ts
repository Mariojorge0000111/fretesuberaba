// =====================================================================
// CONFIGURAÇÃO DO SITE: tudo que muda quando o site for alugado fica aqui
// =====================================================================

export const SITE = {
  nome: 'Fretes Uberaba',
  slogan: 'Fretes, carretos e mudanças em Uberaba e no Triângulo Mineiro',
  cidade: 'Uberaba',
  estado: 'MG',

  // WhatsApp com DDI + DDD + número, só números
  whatsapp: '5555991438702',
  // Telefone exibido no site (deixe vazio para não exibir)
  telefone: '',
  mensagemWhatsapp: 'Olá! Vim pelo site Fretes Uberaba e quero um orçamento de frete/mudança.',

  horario: 'Segunda a sábado, das 7h às 19h',
};

export function linkWhatsapp(mensagem = SITE.mensagemWhatsapp): string {
  if (!SITE.whatsapp) return '/orcamento/';
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

// Mensagem padrão citando a página de onde o visitante veio
export function msgPagina(assunto: string): string {
  return `Olá! Vim pelo site Fretes Uberaba (${assunto}) e quero um orçamento.`;
}

// Data de hoje no fuso de Uberaba (AAAA-MM-DD), usada para publicar os artigos agendados
export function hojeISO(): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Sao_Paulo', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
}
