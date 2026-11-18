// Páginas de cidades da região (/cidades/<slug>/): mudança e frete entre Uberaba e a cidade, nos dois sentidos.
import type { Secao } from './servicos';

export interface Cidade {
  slug: string;
  nome: string;
  uf: string;
  titulo: string;
  descricao: string;
  h1: string;
  sobre: string;
  distancia: string;
  tempo: string;
  caminho: string;
  secoes: Secao[];
  faq: { p: string; r: string }[];
  artigos: string[];
}

export const CIDADES: Cidade[] = [
  {
    slug: 'uberlandia',
    nome: 'Uberlândia',
    uf: 'MG',
    titulo: 'Mudança de Uberaba para Uberlândia e Frete',
    descricao: 'Mudança e frete entre Uberaba e Uberlândia, nos dois sentidos, pela BR-050. Caminhão fechado, carga protegida e data combinada. Orçamento pelo WhatsApp.',
    h1: 'Mudança de Uberaba para Uberlândia',
    sobre: 'A rota mais pedida do Triângulo Mineiro. São cerca de 110 km pela BR-050 entre as duas maiores cidades da região, nos dois sentidos.',
    distancia: 'cerca de 110 km',
    tempo: 'perto de 1h30 de estrada',
    caminho: 'BR-050',
    secoes: [
      {
        h2: 'Por que tanta gente muda entre Uberaba e Uberlândia',
        paragrafos: [
          'Uberaba e Uberlândia são as duas maiores cidades do Triângulo Mineiro e estão ligadas pela BR-050. A troca entre elas é constante: gente que passou num concurso, que foi transferida no trabalho, que vai estudar ou que decidiu voltar para perto da família.',
          'Como a distância é curta, a mudança costuma sair e chegar no mesmo dia. O caminhão carrega pela manhã em Uberaba, segue pela rodovia e descarrega à tarde em Uberlândia, ou o contrário.',
        ],
      },
      {
        h2: 'Como funciona a mudança entre as duas cidades',
        lista: [
          '**Orçamento:** lista dos itens, fotos dos maiores e os dois endereços, com bairro e tipo de imóvel.',
          '**Planejamento:** horário de carga em uma cidade e de descarga na outra, respeitando as regras dos dois condomínios.',
          '**Carga:** móveis protegidos com manta, eletrodomésticos presos, caixas identificadas por cômodo.',
          '**Estrada:** caminhão baú fechado, para a carga não pegar sol nem chuva.',
          '**Descarga e montagem:** cada móvel no cômodo certo e montado, se contratado.',
        ],
      },
      {
        h2: 'Frete pequeno entre Uberaba e Uberlândia',
        paragrafos: [
          'Nem sempre é mudança. Às vezes é só um sofá comprado em Uberlândia, uma geladeira que vai para a casa de um parente ou os móveis de um estudante. Para isso existe o [frete de móveis e eletrodomésticos](/servicos/frete-de-moveis-e-eletrodomesticos/), com veículo menor e valor proporcional.',
          'Se a data for flexível, avise no orçamento. Encaixar o frete num dia em que já há viagem programada para a mesma rota pode facilitar a agenda.',
        ],
      },
    ],
    faq: [
      { p: 'A mudança de Uberaba para Uberlândia é feita no mesmo dia?', r: 'Na maioria dos casos, sim. A carga e a descarga acontecem no mesmo dia, dependendo do volume e dos horários permitidos nos dois imóveis.' },
      { p: 'Vocês também fazem mudança de Uberlândia para Uberaba?', r: 'Sim. O serviço funciona nos dois sentidos.' },
      { p: 'Preciso de algum documento para levar meus móveis?', r: 'Entre cidades do mesmo estado, para bens de uso pessoal, o comum é ter uma lista ou declaração dos itens. Não é preciso nota fiscal de móveis usados.' },
    ],
    artigos: ['qual-caminhao-para-mudanca', 'checklist-de-mudanca', 'quanto-custa-mudanca-em-uberaba'],
  },
  {
    slug: 'sacramento',
    nome: 'Sacramento',
    uf: 'MG',
    titulo: 'Mudança e Frete entre Uberaba e Sacramento',
    descricao: 'Mudança e frete entre Uberaba e Sacramento (MG), cidade vizinha a cerca de 80 km. Residencial, móveis e eletrodomésticos. Orçamento pelo WhatsApp.',
    h1: 'Mudança e frete entre Uberaba e Sacramento',
    sobre: 'Sacramento faz divisa com Uberaba, a leste, e fica a cerca de 80 km de estrada. Mudanças curtas, que cabem num dia de trabalho.',
    distancia: 'cerca de 80 km',
    tempo: 'perto de 1h10 de estrada',
    caminho: 'rota definida no orçamento',
    secoes: [
      {
        h2: 'Uma vizinha com laços fortes',
        paragrafos: [
          'Sacramento é um dos municípios que fazem divisa com Uberaba. A proximidade cria um movimento constante: moradores de Sacramento que vêm para Uberaba estudar, trabalhar ou tratar da saúde, e uberabenses que escolhem a vida de cidade menor.',
          'Muitas dessas mudanças envolvem imóveis rurais ou casas com quintal grande. Se for o caso, avise no orçamento se a estrada até a casa é de terra e se o caminhão consegue chegar perto da porta.',
        ],
      },
      {
        h2: 'Mudança de Sacramento para Uberaba',
        paragrafos: [
          'Quem vem de Sacramento para Uberaba muitas vezes troca uma casa por um apartamento. É aí que aparece o problema clássico: o móvel que cabia na casa não passa pelo elevador do prédio. Meça os móveis maiores e o elevador do destino antes do dia.',
        ],
        lista: [
          'Sofás grandes e estantes inteiriças são os itens que mais travam em elevador.',
          'Guarda-roupas de casa costumam ser maiores do que o quarto do apartamento comporta.',
          'Pergunte ao condomínio de Uberaba o horário de mudança permitido.',
        ],
      },
      {
        h2: 'Serviços para a rota',
        paragrafos: [
          'Para casa ou apartamento inteiro, a [mudança residencial](/servicos/mudanca-residencial/). Para poucos itens, o [frete de móveis e eletrodomésticos](/servicos/frete-de-moveis-e-eletrodomesticos/). Em ambos, a carga vai protegida e presa, porque mesmo uma viagem curta de estrada balança mais do que um trajeto na cidade.',
        ],
      },
    ],
    faq: [
      { p: 'Vocês atendem a zona rural de Sacramento?', r: 'Informe o endereço e as condições da estrada no orçamento. O veículo é escolhido conforme o acesso.' },
      { p: 'Dá para fazer a mudança em um dia?', r: 'Na maioria dos casos, sim. A distância é curta, e o tempo depende mais do volume e do acesso nos dois imóveis.' },
    ],
    artigos: ['mudanca-de-apartamento-em-uberaba', 'frete-de-sofa-em-uberaba', 'como-organizar-uma-mudanca'],
  },
  {
    slug: 'conceicao-das-alagoas',
    nome: 'Conceição das Alagoas',
    uf: 'MG',
    titulo: 'Mudança e Frete Uberaba e Conceição das Alagoas',
    descricao: 'Mudança e frete entre Uberaba e Conceição das Alagoas (MG), a cerca de 70 km. Casas, sítios e móveis avulsos. Peça seu orçamento pelo WhatsApp.',
    h1: 'Mudança e frete entre Uberaba e Conceição das Alagoas',
    sobre: 'Município vizinho, a oeste de Uberaba, com forte ligação com o agronegócio. São cerca de 70 km de estrada entre as duas cidades.',
    distancia: 'cerca de 70 km',
    tempo: 'perto de 1h de estrada',
    caminho: 'rota definida no orçamento',
    secoes: [
      {
        h2: 'Quem faz essa rota',
        paragrafos: [
          'Conceição das Alagoas faz divisa com Uberaba, do lado oeste. Muita gente da cidade trabalha no campo e na agroindústria da região, e a mudança para Uberaba costuma acontecer por estudo dos filhos, por emprego ou por aposentadoria.',
          'O caminho inverso também é comum: famílias de Uberaba que vão trabalhar em fazendas e usinas da região levam a mudança para Conceição das Alagoas ou para propriedades rurais do município.',
        ],
      },
      {
        h2: 'Mudança para sítio ou fazenda',
        lista: [
          'Informe se o trecho final é de terra e como fica em dia de chuva.',
          'Diga se há porteira, ponte ou trecho estreito no caminho.',
          'Avise se a casa fica longe do ponto onde o caminhão consegue parar.',
          'Entre outubro e março, quando chove mais no Triângulo, deixe uma data alternativa combinada.',
        ],
        depois: ['O período de chuvas pesa no planejamento. Veja a [melhor época para mudança em Uberaba](/blog/melhor-epoca-para-mudanca-em-uberaba/).'],
      },
      {
        h2: 'Frete de móveis e eletrodomésticos',
        paragrafos: [
          'Comprou geladeira, fogão ou sofá em Uberaba e a loja não entrega em Conceição das Alagoas? O [frete de móveis e eletrodomésticos](/servicos/frete-de-moveis-e-eletrodomesticos/) busca na loja com a nota fiscal e leva até a sua casa.',
        ],
      },
    ],
    faq: [
      { p: 'Vocês entregam em fazendas da região?', r: 'Sim, quando o acesso permite. Informe a localização e as condições da estrada no orçamento.' },
      { p: 'Podem buscar uma compra em loja de Uberaba e levar para Conceição das Alagoas?', r: 'Sim. É só ter a nota fiscal ou a autorização de retirada.' },
    ],
    artigos: ['melhor-epoca-para-mudanca-em-uberaba', 'como-transportar-geladeira', 'preco-de-frete-em-uberaba'],
  },
  {
    slug: 'delta',
    nome: 'Delta',
    uf: 'MG',
    titulo: 'Mudança e Frete entre Uberaba e Delta (MG)',
    descricao: 'Mudança, carreto e frete entre Uberaba e Delta (MG), cidade vizinha a cerca de 30 km pela BR-050. Rápido e com preço combinado antes. Orçamento no WhatsApp.',
    h1: 'Mudança e frete entre Uberaba e Delta',
    sobre: 'A vizinha mais próxima, ao sul, a cerca de 30 km pela BR-050, perto da divisa com São Paulo. Muita gente mora em Delta e trabalha em Uberaba.',
    distancia: 'cerca de 30 km',
    tempo: 'perto de 30 min de estrada',
    caminho: 'BR-050',
    secoes: [
      {
        h2: 'Quase uma extensão da cidade',
        paragrafos: [
          'Delta faz divisa com Uberaba e fica no caminho da BR-050 em direção ao estado de São Paulo. Com a distância curta, a relação entre as duas cidades é de todo dia: gente que mora em Delta e trabalha em Uberaba, e famílias que trocam uma cidade pela outra por causa de aluguel, emprego ou escola.',
          'Para o frete, isso quer dizer uma rota rápida. Uma mudança entre as duas cidades costuma caber numa manhã ou numa tarde, dependendo do volume.',
        ],
      },
      {
        h2: 'Carreto e pequena mudança',
        paragrafos: [
          'Pela distância, o carreto entre Uberaba e Delta é muito pedido: levar a cama, o guarda-roupa e a geladeira de quem vai morar sozinho, ou buscar um móvel comprado do outro lado. Para isso, a [pequena mudança ou carreto](/servicos/pequenas-mudancas-e-carretos/) resolve com veículo menor.',
        ],
      },
      {
        h2: 'Dicas para a rota',
        lista: [
          'Mesmo em viagem curta, prenda tudo: a rodovia tem trechos de velocidade maior do que a cidade.',
          'Combine a mudança para um horário com luz do dia nas duas pontas.',
          'Se for mudança completa, avise o condomínio ou o vizinho para liberar a vaga na frente do imóvel.',
        ],
      },
    ],
    faq: [
      { p: 'Fazem carreto de um item só entre Uberaba e Delta?', r: 'Sim. Frete de um único móvel ou eletrodoméstico é atendido normalmente.' },
      { p: 'A mudança para Delta dura quanto tempo?', r: 'Depende do volume e do acesso, mas a viagem em si é curta. Muitas mudanças cabem em meio período.' },
    ],
    artigos: ['quanto-custa-carreto-em-uberaba', 'frete-urgente-em-uberaba', 'fazer-mudanca-sozinho-ou-contratar'],
  },
  {
    slug: 'araxa',
    nome: 'Araxá',
    uf: 'MG',
    titulo: 'Mudança de Uberaba para Araxá e Frete',
    descricao: 'Mudança e frete entre Uberaba e Araxá (MG), cerca de 120 km pela BR-262. Caminhão fechado, móveis protegidos e montagem no destino. Orçamento pelo WhatsApp.',
    h1: 'Mudança de Uberaba para Araxá',
    sobre: 'Cerca de 120 km pela BR-262. Uma rota de trabalho, com muita mudança ligada à mineração, à indústria e ao turismo de Araxá.',
    distancia: 'cerca de 120 km',
    tempo: 'perto de 1h30 de estrada',
    caminho: 'BR-262',
    secoes: [
      {
        h2: 'A rota pela BR-262',
        paragrafos: [
          'Araxá fica a leste de Uberaba, pela BR-262, a mesma rodovia que segue até Belo Horizonte. A cidade é conhecida pelo Barreiro e pelas águas termais, e tem uma economia forte em mineração e indústria. Isso gera um fluxo constante de profissionais que se mudam entre as duas cidades.',
          'Muitas dessas mudanças são por transferência de trabalho, com data marcada para começar no novo emprego. Por isso o planejamento começa pela data: quando a família precisa estar instalada, e a partir daí se define o dia da carga.',
        ],
      },
      {
        h2: 'Como planejar a mudança',
        lista: [
          'Peça o orçamento assim que souber a data de início no trabalho novo.',
          'Confirme se o imóvel em Araxá já está liberado, com chaves, luz e água.',
          'Pergunte se a empresa paga a mudança e que documentos ela pede, como orçamento por escrito ou recibo.',
          'Leve no carro documentos, remédios e o essencial dos primeiros dias.',
        ],
      },
      {
        h2: 'Serviços mais pedidos na rota',
        paragrafos: [
          '[Mudança residencial](/servicos/mudanca-residencial/) completa, com [montagem e desmontagem](/servicos/montagem-e-desmontagem/) para a família já dormir na casa nova no dia da chegada. Para empresas que abrem ou transferem unidades, a [mudança comercial](/servicos/mudanca-comercial/).',
        ],
      },
    ],
    faq: [
      { p: 'A mudança para Araxá chega no mesmo dia?', r: 'Na maioria dos casos, sim, saindo cedo de Uberaba. O horário de chegada é combinado no orçamento.' },
      { p: 'Vocês emitem recibo para a empresa reembolsar?', r: 'Combine no orçamento o tipo de documento de que você precisa para o reembolso.' },
    ],
    artigos: ['mudanca-uberaba-belo-horizonte', 'como-pedir-orcamento-de-mudanca', 'mudanca-de-escritorio-em-uberaba'],
  },
  {
    slug: 'frutal',
    nome: 'Frutal',
    uf: 'MG',
    titulo: 'Mudança e Frete entre Uberaba e Frutal (MG)',
    descricao: 'Mudança e frete entre Uberaba e Frutal (MG), cerca de 130 km pelo oeste do Triângulo. Residencial, estudantes e móveis avulsos. Orçamento pelo WhatsApp.',
    h1: 'Mudança e frete entre Uberaba e Frutal',
    sobre: 'Polo do Pontal do Triângulo Mineiro, a cerca de 130 km de Uberaba, passando por Campo Florido.',
    distancia: 'cerca de 130 km',
    tempo: 'perto de 1h50 de estrada',
    caminho: 'via Campo Florido',
    secoes: [
      {
        h2: 'Uberaba e Frutal',
        paragrafos: [
          'Frutal é a principal cidade do Pontal do Triângulo Mineiro e fica a cerca de 130 km de Uberaba, num trajeto que passa por Campo Florido. A ligação entre as duas cidades vem do comércio, do agronegócio e da busca por serviços de saúde e ensino em Uberaba.',
          'É uma distância que ainda permite fazer a mudança num só dia, desde que a saída seja cedo. Para volumes grandes, vale combinar a carga na tarde anterior e a descarga na manhã seguinte.',
        ],
      },
      {
        h2: 'Estudantes e famílias',
        paragrafos: [
          'Muitos jovens de Frutal vêm para Uberaba estudar na UFTM, na Uniube e em outras instituições. A mudança de estudante cabe num carreto: cama, colchão, escrivaninha e caixas. Já as famílias que mudam por trabalho precisam da [mudança residencial](/servicos/mudanca-residencial/) completa.',
        ],
        depois: ['Indo estudar? Veja o guia de [mudança para estudantes da UFTM](/blog/mudanca-estudante-uftm/).'],
      },
      {
        h2: 'Cuidados na estrada',
        lista: [
          'Caminhão fechado, para a carga não pegar poeira nem chuva.',
          'Eletrodomésticos presos em pé e protegidos.',
          'Caixas pesadas embaixo, frágeis por cima e bem calçadas.',
          'Uma lista dos itens para conferir na chegada.',
        ],
      },
    ],
    faq: [
      { p: 'Dá para fazer a mudança de Frutal para Uberaba em um dia?', r: 'Sim, na maioria dos casos, saindo cedo. Para volumes grandes, pode ser melhor dividir a carga e a descarga em dois dias.' },
      { p: 'Vocês fazem só o frete de um móvel até Frutal?', r: 'Sim. O orçamento considera o item, a distância e a data.' },
    ],
    artigos: ['mudanca-estudante-uftm', 'caminhao-bau-ou-carroceria-aberta', 'preco-de-frete-em-uberaba'],
  },
  {
    slug: 'igarapava',
    nome: 'Igarapava',
    uf: 'SP',
    titulo: 'Mudança e Frete entre Uberaba e Igarapava (SP)',
    descricao: 'Mudança e frete entre Uberaba e Igarapava (SP), a cerca de 45 km pela BR-050. Rota curta, mas entre estados: veja os documentos. Orçamento no WhatsApp.',
    h1: 'Mudança e frete entre Uberaba e Igarapava',
    sobre: 'A cerca de 45 km pela BR-050, do outro lado do Rio Grande. É perto, mas é outro estado, e isso muda a papelada.',
    distancia: 'cerca de 45 km',
    tempo: 'perto de 40 min de estrada',
    caminho: 'BR-050',
    secoes: [
      {
        h2: 'Perto, mas entre estados',
        paragrafos: [
          'Igarapava fica no estado de São Paulo, logo depois do Rio Grande, e faz divisa com Uberaba. Pela BR-050, que do lado paulista vira a Rodovia Anhanguera, são cerca de 45 km. A distância é de mudança local, mas, no papel, é uma mudança interestadual.',
          'Para bens de uso pessoal, o documento mais usado é a declaração de conteúdo, uma lista dos itens assinada por você. Ela acompanha a carga e ajuda em caso de fiscalização.',
        ],
        depois: ['Explicamos o que levar em [mudança interestadual: documentos e cuidados](/blog/mudanca-interestadual-documentos/).'],
      },
      {
        h2: 'Quem faz essa rota',
        paragrafos: [
          'A proximidade faz de Igarapava e Uberaba cidades muito ligadas. Há quem more em Igarapava e trabalhe em Uberaba, e quem venha para Uberaba em busca de faculdade e de serviços de saúde. As mudanças, em geral, são curtas e cabem em meio dia.',
        ],
      },
      {
        h2: 'Serviços para a rota',
        lista: [
          '[Mudança residencial](/servicos/mudanca-residencial/) completa, com declaração de conteúdo.',
          '[Pequenas mudanças e carretos](/servicos/pequenas-mudancas-e-carretos/) para quarto, kitnet e poucos móveis.',
          '[Frete de móveis e eletrodomésticos](/servicos/frete-de-moveis-e-eletrodomesticos/) comprados de um lado e levados para o outro.',
        ],
      },
    ],
    faq: [
      { p: 'Preciso de documento para mudar de Uberaba para Igarapava?', r: 'Como são estados diferentes, o recomendado é levar a declaração de conteúdo dos bens, assinada por você. Para mercadoria de venda, a regra é outra e exige nota fiscal.' },
      { p: 'A mudança para Igarapava é rápida?', r: 'A viagem é curta, perto de 40 minutos. O tempo total depende do volume e do acesso nos dois imóveis.' },
    ],
    artigos: ['mudanca-interestadual-documentos', 'mudanca-uberaba-ribeirao-preto', 'mudanca-uberaba-franca'],
  },
];

export const cidade = (slug: string) => CIDADES.find((c) => c.slug === slug);
