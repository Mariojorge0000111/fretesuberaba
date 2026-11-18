// Páginas por bairro (/bairros/<slug>/). Cada uma com texto próprio, pensado para quem mora ali.
import type { Secao } from './servicos';

export interface Bairro {
  slug: string;
  nome: string;
  prep: string; // "no" / "na"
  titulo: string;
  descricao: string;
  h1: string;
  sobre: string;
  secoes: Secao[];
  faq: { p: string; r: string }[];
  proximos: string[];
  artigos: string[];
}

export const BAIRROS: Bairro[] = [
  {
    slug: 'centro',
    nome: 'Centro',
    prep: 'no',
    titulo: 'Frete e Mudança no Centro de Uberaba',
    descricao: 'Frete, carreto e mudança no Centro de Uberaba: prédios antigos, ruas movimentadas e lojas. Planejamento de horário e acesso. Orçamento pelo WhatsApp.',
    h1: 'Frete e mudança no Centro de Uberaba',
    sobre: 'Prédios antigos, lojas de rua e trânsito pesado durante o dia. No Centro, a mudança boa é a que começa cedo e já sabe onde o caminhão vai parar.',
    secoes: [
      {
        h2: 'Como é fazer mudança no Centro',
        paragrafos: [
          'O Centro de Uberaba concentra comércio, bancos, clínicas e serviços em volta de pontos como a Praça Rui Barbosa, onde fica a Catedral, e a Avenida Leopoldino de Oliveira, endereço do Mercado Municipal. Durante a semana, o movimento de carros e pedestres é grande, e isso pesa em qualquer frete.',
          'Muitos prédios residenciais da região são mais antigos. Alguns têm elevador pequeno, outros não têm elevador nenhum, e quase nenhum tem garagem que comporte caminhão. Por isso a pergunta mais importante no orçamento é: onde o veículo consegue parar, e a quantos metros da porta?',
        ],
      },
      {
        h2: 'O que ajuda numa mudança no Centro',
        lista: [
          'Prefira começar cedo, antes do pico do comércio, ou combinar sábado à tarde.',
          'Pergunte ao síndico o horário permitido para mudança e se é preciso reservar o elevador.',
          'Meça o elevador por dentro (altura, largura e profundidade) antes de prometer que o sofá cabe.',
          'Em prédio sem elevador, avise o andar. Isso muda o tamanho da equipe.',
          'Se o imóvel for comercial, combine a mudança fora do horário de atendimento da loja.',
        ],
      },
      {
        h2: 'Serviços mais pedidos no Centro',
        paragrafos: [
          'Moradores do Centro costumam pedir [pequenas mudanças e carretos](/servicos/pequenas-mudancas-e-carretos/) de apartamentos compactos e [frete de móveis](/servicos/frete-de-moveis-e-eletrodomesticos/) comprados nas lojas da região. Lojistas pedem [mudança comercial](/servicos/mudanca-comercial/) para trocar de ponto sem perder dias de venda.',
        ],
      },
    ],
    faq: [
      { p: 'Dá para fazer mudança no Centro em dia de semana?', r: 'Dá, mas o horário pesa. Começar cedo evita o trânsito do comércio e deixa a vaga na frente do prédio mais fácil de conseguir.' },
      { p: 'Meu prédio não tem elevador. Ainda assim é possível?', r: 'Sim. Informe o andar e o tipo de escada no orçamento. A equipe é dimensionada para isso, e móveis grandes podem ser desmontados.' },
      { p: 'Vocês fazem mudança de loja no Centro?', r: 'Sim. Lojas e escritórios do Centro podem mudar fora do horário de atendimento, inclusive no fim de semana.' },
    ],
    proximos: ['abadia', 'merces', 'sao-benedito', 'fabricio', 'boa-vista'],
    artigos: ['mudanca-de-apartamento-em-uberaba', 'mudanca-de-loja', 'frete-para-compras-olx-marketplace-uberaba'],
  },
  {
    slug: 'abadia',
    nome: 'Abadia',
    prep: 'na',
    titulo: 'Frete e Mudança na Abadia, Uberaba',
    descricao: 'Frete e mudança na Abadia, em Uberaba: prédios, repúblicas de estudantes da UFTM e casas. Pequenas mudanças e mudança completa. Orçamento no WhatsApp.',
    h1: 'Frete e mudança na Abadia',
    sobre: 'O bairro mais populoso de Uberaba, com estudantes, profissionais da saúde e famílias. Muita mudança de apartamento, de república e de kitnet.',
    secoes: [
      {
        h2: 'Um bairro que muda o tempo todo',
        paragrafos: [
          'A Abadia ocupa o antigo Alto da Misericórdia e é hoje o bairro mais populoso da cidade. É ali que ficam o campus da UFTM, o Hospital de Clínicas, a Santa Casa e a Basílica de Nossa Senhora da Abadia, além de colégios e comércio de bairro.',
          'A chegada da universidade mudou o perfil do bairro. Vieram mais prédios, mais kitnets e mais repúblicas. Na prática, isso quer dizer muita mudança pequena: estudante chegando no começo do semestre, residente indo para outro hospital, recém-formado trocando a república por um apartamento só dele.',
        ],
      },
      {
        h2: 'Mudança de estudante e de república',
        paragrafos: [
          'Uma mudança de quarto de república cabe num carreto: cama ou colchão, escrivaninha, cadeira, uma arara de roupas e caixas. Se a república inteira vai mudar, aí já é uma pequena mudança, com mais de um quarto e os itens da cozinha.',
          'Dica que poupa dinheiro: juntem a mudança de duas ou três pessoas que vão para o mesmo lado da cidade no mesmo dia. Um veículo maior, uma viagem só.',
        ],
        depois: ['Tem um guia completo em [mudança para estudantes da UFTM](/blog/mudanca-estudante-uftm/).'],
      },
      {
        h2: 'Prédios da Abadia: o que verificar',
        lista: [
          'Horário de mudança permitido pelo condomínio, que muitas vezes vai só até o fim da tarde.',
          'Tamanho do elevador e se existe elevador de serviço.',
          'Rua de mão única ou com movimento de ambulâncias perto dos hospitais. Isso define onde o veículo para.',
          'Garagem coberta com altura baixa, que não comporta caminhão.',
        ],
      },
    ],
    faq: [
      { p: 'Fazem carreto de república na Abadia?', r: 'Sim. Mudança de quarto e de república é um dos pedidos mais comuns no bairro. Mande a lista do que vai e o endereço de destino.' },
      { p: 'Moro perto dos hospitais. Isso atrapalha a mudança?', r: 'Pode exigir mais atenção ao lugar de parada do veículo. Informe o endereço exato e a gente avalia o melhor ponto e horário.' },
      { p: 'Vocês fazem mudança da Abadia para outra cidade?', r: 'Sim. Formandos e residentes que vão para Uberlândia, Belo Horizonte ou São Paulo podem pedir a [mudança para outras cidades](/servicos/mudanca-para-outras-cidades/).' },
    ],
    proximos: ['centro', 'lourdes', 'estados-unidos', 'merces'],
    artigos: ['mudanca-estudante-uftm', 'quanto-custa-carreto-em-uberaba', 'mudanca-de-apartamento-em-uberaba'],
  },
  {
    slug: 'fabricio',
    nome: 'Fabrício',
    prep: 'no',
    titulo: 'Frete e Mudança no Fabrício, Uberaba',
    descricao: 'Mudança e frete no bairro Fabrício, em Uberaba: casas, prédios residenciais e ruas tranquilas perto do Centro. Orçamento rápido pelo WhatsApp.',
    h1: 'Frete e mudança no Fabrício',
    sobre: 'Residencial, perto do Centro e do Boa Vista, com casas e prédios. Um bairro de famílias, onde as mudanças costumam ser completas.',
    secoes: [
      {
        h2: 'O bairro',
        paragrafos: [
          'O Fabrício é vizinho do Boa Vista, a ponto de já ter sido tratado como parte dele na formação da cidade. Hoje é um bairro residencial tranquilo, com prédios e casas, comércio local e boa ligação com vias amplas. O Hospital de Câncer do Triângulo é uma das referências da região.',
          'Por ser procurado por famílias, o pedido mais comum aqui é a [mudança residencial](/servicos/mudanca-residencial/) de casa ou apartamento inteiro, muitas vezes com montagem de móveis no destino.',
        ],
      },
      {
        h2: 'Casa com quintal, apartamento com elevador',
        paragrafos: [
          'Nas casas, o ponto de atenção é o portão: se o caminhão consegue encostar na garagem, o trabalho rende. Se não, a carga é feita da calçada, e a equipe precisa de mais tempo. Nos prédios, o de sempre: horário do condomínio, reserva do elevador e proteção das paredes.',
          'Casas mais antigas costumam ter armários embutidos que ficam e móveis antigos de madeira maciça, bem pesados. Vale citar esses itens na lista para o orçamento prever mais ajudantes.',
        ],
      },
      {
        h2: 'Checklist rápido para quem sai do Fabrício',
        lista: [
          'Lista dos móveis por cômodo, com fotos dos maiores.',
          'Medida do portão e da porta de entrada.',
          'Data com pelo menos uma semana de antecedência, se for mudança completa.',
          'Decisão sobre o que vai ser desmontado.',
        ],
        depois: ['O [checklist de mudança](/blog/checklist-de-mudanca/) completo ajuda a não esquecer nada.'],
      },
    ],
    faq: [
      { p: 'Vocês desmontam móveis antigos de madeira?', r: 'Sim, quando é possível desmontar sem danificar. Móveis maciços que não desmontam são levados inteiros, com mais gente na equipe.' },
      { p: 'Quanto tempo leva uma mudança de casa no Fabrício?', r: 'Depende do volume e do destino. Dentro de Uberaba, a maioria das mudanças de casa termina no mesmo dia.' },
    ],
    proximos: ['boa-vista', 'centro', 'merces', 'estados-unidos'],
    artigos: ['checklist-de-mudanca', 'quanto-custa-mudanca-em-uberaba', 'como-desmontar-guarda-roupa'],
  },
  {
    slug: 'sao-benedito',
    nome: 'São Benedito',
    prep: 'no',
    titulo: 'Frete e Mudança no São Benedito, Uberaba',
    descricao: 'Frete e mudança no São Benedito, em Uberaba, perto do Shopping Uberaba e do Parque Fernando Costa. Dicas para a época da Expozebu. Orçamento pelo WhatsApp.',
    h1: 'Frete e mudança no São Benedito',
    sobre: 'Antiga Colina da Matriz, ao lado do Shopping Uberaba e do Parque Fernando Costa. Bairro residencial consolidado, com casas e sobrados.',
    secoes: [
      {
        h2: 'O São Benedito e a Expozebu',
        paragrafos: [
          'O São Benedito é um bairro residencial consolidado, perto do Centro, com comércio e serviços por perto. Duas referências marcam a região: o Shopping Uberaba e o Parque de Exposições Fernando Costa, onde acontece a Expozebu.',
          'Durante a feira, o entorno do parque fica muito movimentado. Se a sua mudança cair nesse período, vale fugir dos horários de pico e confirmar se a rua do imóvel terá algum bloqueio. Fora da época da feira, o bairro é tranquilo para carga e descarga.',
        ],
      },
      {
        h2: 'Sobrados e escadas',
        paragrafos: [
          'Muitas casas do São Benedito são sobrados, com escadas internas nem sempre largas. Guarda-roupas grandes e camas de casal quase sempre precisam ser desmontados para descer. Informe isso no orçamento: a [montagem e desmontagem](/servicos/montagem-e-desmontagem/) entra no planejamento do dia.',
        ],
        lista: [
          'Meça a largura da escada e a altura do teto no patamar.',
          'Veja se o corrimão sai, caso precise de mais espaço.',
          'Deixe os móveis do andar de cima esvaziados na véspera.',
        ],
      },
      {
        h2: 'Para onde vão as mudanças do São Benedito',
        paragrafos: [
          'Por estar perto do [Parque das Américas](/bairros/parque-das-americas/) e da saída para a BR-050, o bairro é ponto de partida de muitas mudanças para Uberlândia e para o estado de São Paulo. Para esses casos, veja a [mudança para outras cidades](/servicos/mudanca-para-outras-cidades/).',
        ],
      },
    ],
    faq: [
      { p: 'Dá para fazer mudança durante a Expozebu?', r: 'Dá, com planejamento. O ideal é evitar os horários de maior movimento perto do Parque Fernando Costa e confirmar o acesso à rua no dia.' },
      { p: 'Meu sobrado tem escada estreita. Como fica?', r: 'Os móveis grandes são desmontados para descer. Se algum não passar mesmo desmontado, avaliamos o içamento pela janela ou sacada.' },
    ],
    proximos: ['parque-das-americas', 'centro', 'merces', 'santa-maria'],
    artigos: ['como-desmontar-guarda-roupa', 'melhor-epoca-para-mudanca-em-uberaba', 'mudanca-uberaba-sao-paulo'],
  },
  {
    slug: 'merces',
    nome: 'Mercês',
    prep: 'nas',
    titulo: 'Frete e Mudança nas Mercês, Uberaba',
    descricao: 'Mudança e frete nas Mercês, em Uberaba: prédios de alto padrão, casas amplas e regras de condomínio. Proteção de móveis e montagem. Orçamento no WhatsApp.',
    h1: 'Frete e mudança nas Mercês',
    sobre: 'Vizinho ao Centro, com casas amplas e prédios de alto padrão em ruas arborizadas. Mudanças com muito móvel delicado e regra de condomínio.',
    secoes: [
      {
        h2: 'O bairro',
        paragrafos: [
          'As Mercês, antigamente chamadas de Colina Cuiabá, são um dos bairros mais tradicionais de Uberaba. Ficam ao lado do Centro, têm vias arborizadas, a Igreja de Nossa Senhora das Mercês e um eixo comercial na Avenida Alexandre Barbosa, com restaurantes, farmácias e padarias.',
          'O bairro mistura casas grandes e prédios de alto padrão. Isso aparece direto na mudança: mais volume, mais peças delicadas e condomínios com regras bem definidas.',
        ],
      },
      {
        h2: 'Mudança em prédio de alto padrão',
        lista: [
          'Agende com a administração: muitos condomínios pedem aviso prévio e lista de quem vai entrar.',
          'Confirme se o elevador de serviço recebe proteção nas paredes e quem providencia.',
          'Pergunte se há limite de horário e de duração da mudança.',
          'Avise sobre peças de vidro, espelhos, lustres e obras de arte, que vão embaladas à parte.',
          'Se houver móvel grande que não cabe no elevador, combine antes a possibilidade de içamento.',
        ],
      },
      {
        h2: 'Embalagem faz diferença aqui',
        paragrafos: [
          'Com louças finas, cristais e eletrônicos de valor, a embalagem profissional costuma compensar. Ela é feita com papel, plástico-bolha e caixas do tamanho certo, e cada caixa sai identificada por cômodo. Veja quando vale contratar em [serviço de embalagem para mudança](/blog/servico-de-embalagem-para-mudanca/).',
        ],
      },
    ],
    faq: [
      { p: 'Vocês embalam lustres e espelhos?', r: 'Sim. Peças de vidro e espelhos vão embalados à parte e transportados em pé, presos no caminhão.' },
      { p: 'Meu condomínio exige seguro ou cadastro da equipe. Como fica?', r: 'Informe no orçamento o que o condomínio pede. Os dados da equipe para cadastro são passados antes do dia.' },
    ],
    proximos: ['centro', 'fabricio', 'sao-benedito', 'abadia'],
    artigos: ['servico-de-embalagem-para-mudanca', 'como-embalar-louca-para-mudanca', 'mudanca-de-apartamento-em-uberaba'],
  },
  {
    slug: 'boa-vista',
    nome: 'Boa Vista',
    prep: 'no',
    titulo: 'Frete e Mudança no Boa Vista, Uberaba',
    descricao: 'Frete, carreto e mudança no Boa Vista, em Uberaba: bairro de casas, perto da Praça da Mogiana. Mudança residencial e frete de móveis. Orçamento no WhatsApp.',
    h1: 'Frete e mudança no Boa Vista',
    sobre: 'Uma das colinas que deram origem à cidade. Bairro de casas, com a Praça da Mogiana e a Maria Fumaça como referência.',
    secoes: [
      {
        h2: 'O bairro',
        paragrafos: [
          'O Boa Vista ocupa uma das colinas do antigo estudo topográfico de Uberaba e ajuda a contar a história da cidade. A Praça Dr. José Pereira Rebouças, conhecida como Praça da Mogiana, guarda uma Maria Fumaça ligada à antiga Companhia Mogiana de Estradas de Ferro.',
          'O perfil é predominantemente residencial, com maioria de casas e comércio de dia a dia. Isso torna o bairro bom para carga e descarga: em geral há espaço para o veículo encostar perto do portão.',
        ],
      },
      {
        h2: 'O que mais se pede no Boa Vista',
        lista: [
          '[Mudança residencial](/servicos/mudanca-residencial/) de casa inteira, com quintal, área de serviço e às vezes edícula.',
          '[Frete de móveis e eletrodomésticos](/servicos/frete-de-moveis-e-eletrodomesticos/) para quem está reformando ou trocando a mobília.',
          'Mudança de pais idosos para perto dos filhos, com cuidado redobrado com móveis antigos.',
        ],
      },
      {
        h2: 'Mudança de casa com quintal',
        paragrafos: [
          'Casa com quintal costuma esconder volume: ferramentas, vasos, bicicletas, móveis de área externa, tanquinho, coisas guardadas na edícula. Antes de pedir o orçamento, dê uma volta pelo quintal e pela garagem e inclua tudo na lista. É o item que mais aparece "de surpresa" no dia.',
          'Vasos grandes com terra pesam bastante. Se puder, transplante plantas para vasos menores ou leve as mudas separadas.',
        ],
      },
    ],
    faq: [
      { p: 'Vocês levam vasos de planta?', r: 'Sim. Vasos vão presos no caminhão. Avise a quantidade e o tamanho dos maiores para o orçamento.' },
      { p: 'Dá para levar móveis antigos sem estragar?', r: 'Sim. Móveis antigos vão embrulhados em manta e presos com cinta. Se tiverem partes frágeis, avise para receberem proteção extra.' },
    ],
    proximos: ['fabricio', 'estados-unidos', 'centro', 'leblon'],
    artigos: ['checklist-de-mudanca', 'frete-ou-mudanca-completa', 'descarte-de-moveis-em-uberaba'],
  },
  {
    slug: 'estados-unidos',
    nome: 'Estados Unidos',
    prep: 'no',
    titulo: 'Frete e Mudança no Bairro Estados Unidos',
    descricao: 'Mudança e frete no bairro Estados Unidos, em Uberaba: ruas tranquilas de casas, perto do Parque das Acácias. Mudança residencial e carreto pelo WhatsApp.',
    h1: 'Frete e mudança no bairro Estados Unidos',
    sobre: 'Colina do núcleo histórico, residencial e de ruas tranquilas, perto da Praça Carlos Gomes e do Parque das Acácias.',
    secoes: [
      {
        h2: 'O bairro',
        paragrafos: [
          'O Estados Unidos fica numa das colinas do núcleo histórico de Uberaba, a cerca de 4 km do Centro. É residencial, com maioria de casas e ruas tranquilas. As referências são a Praça Carlos Gomes, o Parque das Acácias e o SESI Uberaba Clube.',
          'O comércio e os serviços ficam mais concentrados nos bairros vizinhos, e o acesso à Abadia e ao Parque São José é fácil. Para a mudança, isso significa ruas sem tanto movimento e facilidade para estacionar o veículo.',
        ],
      },
      {
        h2: 'Mudança sem pressa, sem trânsito',
        paragrafos: [
          'Ruas tranquilas permitem começar a mudança em qualquer horário do dia. Em geral dá para o veículo parar em frente ao imóvel, o que encurta o caminho dos carregadores e acelera o serviço.',
          'Por ser um bairro de casas, os pedidos mais comuns são de [mudança residencial](/servicos/mudanca-residencial/) e de [frete de móveis](/servicos/frete-de-moveis-e-eletrodomesticos/) avulsos.',
        ],
      },
      {
        h2: 'Antes de pedir o orçamento',
        lista: [
          'Separe o que não vai e veja se dá para doar ou vender antes.',
          'Conte as caixas que vai precisar. Uma casa de três quartos costuma pedir muitas mais do que se imagina.',
          'Combine quem fica no imóvel novo para receber a carga.',
        ],
        depois: ['Para saber quantas caixas comprar, veja [caixas para mudança em Uberaba](/blog/caixas-para-mudanca-em-uberaba/).'],
      },
    ],
    faq: [
      { p: 'Vocês atendem o bairro Estados Unidos em qualquer dia?', r: 'O atendimento é de segunda a sábado. A data e o horário são combinados no orçamento.' },
      { p: 'Fazem só o frete de um móvel?', r: 'Sim. Frete de um único item, como um sofá ou uma geladeira, é atendido normalmente.' },
    ],
    proximos: ['abadia', 'boa-vista', 'fabricio', 'lourdes'],
    artigos: ['caixas-para-mudanca-em-uberaba', 'frete-de-sofa-em-uberaba', 'como-organizar-uma-mudanca'],
  },
  {
    slug: 'olinda',
    nome: 'Olinda',
    prep: 'no',
    titulo: 'Frete e Mudança no Bairro Olinda, Uberaba',
    descricao: 'Frete, carreto e mudança no bairro Olinda, em Uberaba. Casas, ruas residenciais e boa ligação com o Centro. Peça seu orçamento pelo WhatsApp.',
    h1: 'Frete e mudança no bairro Olinda',
    sobre: 'Bairro residencial que une tranquilidade e proximidade com o Centro. Mudanças de casa e muitos fretes de móveis avulsos.',
    secoes: [
      {
        h2: 'O bairro',
        paragrafos: [
          'O Olinda é um bairro residencial de Uberaba, de ruas de casas, que combina tranquilidade com boa distância até o Centro. É o tipo de lugar onde a família mora há anos, e a mudança, quando acontece, costuma ser grande.',
          'Por isso, quem sai do Olinda normalmente precisa de [mudança residencial](/servicos/mudanca-residencial/) completa. Quem chega, muitas vezes vem de apartamento e precisa de [frete de móveis](/servicos/frete-de-moveis-e-eletrodomesticos/) para completar a casa nova.',
        ],
      },
      {
        h2: 'Muitos anos na mesma casa: por onde começar',
        paragrafos: [
          'Quem mora há muito tempo no mesmo endereço acumula. O primeiro passo da mudança é separar: o que vai, o que vai ser doado, o que vai ser vendido e o que vai para o descarte. Começar por cômodos pouco usados, como o quarto de despejo e a garagem, dá ritmo ao resto.',
          'Móveis que não vão para a casa nova podem ser doados a instituições ou levados para descarte correto. Veja as opções em [descarte de móveis em Uberaba](/blog/descarte-de-moveis-em-uberaba/).',
        ],
      },
      {
        h2: 'Cuidados no dia',
        lista: [
          'Deixe um caminho livre da porta até o portão.',
          'Prenda cachorros e gatos num cômodo fechado ou deixe-os com alguém.',
          'Separe uma caixa com o essencial da primeira noite: roupa de cama, toalha, remédio, carregador.',
          'Tire fotos dos medidores de luz e água na saída.',
        ],
      },
    ],
    faq: [
      { p: 'Vocês ajudam a levar móveis para doação?', r: 'Dá para incluir no frete uma parada extra para deixar móveis em outro endereço, como uma instituição. Combine no orçamento.' },
      { p: 'Atendem o Olinda no sábado?', r: 'Sim. O atendimento vai de segunda a sábado, com horário combinado antes.' },
    ],
    proximos: ['leblon', 'boa-vista', 'jardim-elza-amui', 'recreio-dos-bandeirantes'],
    artigos: ['descarte-de-moveis-em-uberaba', 'mudanca-com-pets', 'checklist-de-mudanca'],
  },
  {
    slug: 'leblon',
    nome: 'Leblon',
    prep: 'no',
    titulo: 'Frete e Mudança no Leblon, Uberaba',
    descricao: 'Frete e mudança no Leblon, em Uberaba: um dos bairros mais populosos da cidade, com casas e famílias. Mudança residencial e carreto. Orçamento no WhatsApp.',
    h1: 'Frete e mudança no Leblon',
    sobre: 'Uma das sete colinas de Uberaba e um dos bairros mais populosos. Muitas casas, muitas famílias e muita mudança de bairro para bairro.',
    secoes: [
      {
        h2: 'O bairro',
        paragrafos: [
          'O Leblon aparece na lista das colinas que deram a Uberaba o apelido de Cidade das Sete Colinas, ao lado de Boa Vista, Estados Unidos, Abadia, São Benedito, Mercês e Fabrício. É um bairro grande e populoso, de casas e famílias, com escolas e comércio de bairro.',
          'Bairro grande quer dizer muita mudança curta: gente que sai do aluguel para a casa própria do outro lado da cidade, filhos saindo de casa, família que precisa de mais um quarto.',
        ],
      },
      {
        h2: 'Mudança dentro de Uberaba: o que pesa no valor',
        paragrafos: [
          'Numa mudança de um bairro para outro, a distância pesa pouco. O que define o valor é o volume, o acesso nas duas pontas e o tempo da equipe. Uma casa no Leblon com portão largo e garagem para o caminhão sai mais rápido do que um apartamento no terceiro andar sem elevador, mesmo que o volume seja igual.',
        ],
        depois: ['Entenda cada fator em [quanto custa uma mudança em Uberaba](/blog/quanto-custa-mudanca-em-uberaba/).'],
      },
      {
        h2: 'Como economizar sem perder a segurança',
        lista: [
          'Embale você mesmo o que não é frágil: roupas, livros, roupa de cama.',
          'Desmonte as camas e os móveis simples na véspera, se souber.',
          'Escolha uma data no meio do mês e no meio da semana.',
          'Venda ou doe o que não vai usar antes de pedir o orçamento.',
        ],
        depois: ['Mais ideias em [mudança barata em Uberaba](/blog/mudanca-barata-em-uberaba/).'],
      },
    ],
    faq: [
      { p: 'Mudança do Leblon para outro bairro termina no mesmo dia?', r: 'Na maioria dos casos, sim. Volumes muito grandes ou acessos difíceis podem exigir mais tempo, e isso aparece no orçamento.' },
      { p: 'Posso embalar tudo sozinho e contratar só o transporte?', r: 'Pode. Muita gente faz assim para economizar. A equipe cuida da carga, do transporte e da descarga.' },
    ],
    proximos: ['olinda', 'boa-vista', 'santa-maria', 'lourdes'],
    artigos: ['mudanca-barata-em-uberaba', 'quanto-custa-mudanca-em-uberaba', 'fazer-mudanca-sozinho-ou-contratar'],
  },
  {
    slug: 'santa-maria',
    nome: 'Santa Maria',
    prep: 'no',
    titulo: 'Frete e Mudança no Santa Maria, Uberaba',
    descricao: 'Frete, carreto e mudança no bairro Santa Maria, em Uberaba, na região da Av. Nenê Sabino. Pequenas mudanças e mudança de casa. Orçamento pelo WhatsApp.',
    h1: 'Frete e mudança no Santa Maria',
    sobre: 'Bairro grande e populoso, das ruas com nome de estado, na região da Avenida Nenê Sabino. Casas, estudantes e muito carreto.',
    secoes: [
      {
        h2: 'O bairro',
        paragrafos: [
          'O Santa Maria é um dos bairros mais populosos de Uberaba. Fica na região da Avenida Nenê Sabino, e quem anda por lá reconhece fácil: muitas ruas levam nome de estados, como Rua Minas Gerais, Rio Grande do Sul, Amapá e Maranhão.',
          'A proximidade com a Avenida Nenê Sabino, caminho do campus da Uniube, atrai estudantes e quem trabalha na região. Por isso, além das mudanças de família, o bairro tem bastante carreto de quarto e kitnet.',
        ],
      },
      {
        h2: 'Pequenas mudanças no Santa Maria',
        paragrafos: [
          'Para quem vai levar poucas coisas, a [pequena mudança ou carreto](/servicos/pequenas-mudancas-e-carretos/) é o serviço certo. Veículo menor, equipe enxuta e agenda mais fácil de encaixar. É comum no início e no fim de semestre.',
        ],
        lista: [
          'Cama de solteiro ou colchão',
          'Escrivaninha e cadeira',
          'Geladeira pequena ou frigobar',
          'Arara ou guarda-roupa pequeno',
          'Caixas com livros, roupas e cozinha',
        ],
        depois: ['Estudante da Uniube? Veja o guia de [mudança para estudantes da Uniube](/blog/mudanca-estudante-uniube/).'],
      },
      {
        h2: 'Mudança de casa no bairro',
        paragrafos: [
          'Nas casas do Santa Maria, a carga costuma ser feita direto da garagem ou da calçada. Confirme se a rua comporta o veículo parado durante o carregamento e, se a casa for de esquina ou numa rua de muito movimento, combine um horário mais tranquilo.',
        ],
      },
    ],
    faq: [
      { p: 'Fazem carreto de kitnet no Santa Maria?', r: 'Sim. Mudança de kitnet e de quarto é um dos pedidos mais comuns no bairro.' },
      { p: 'Dá para juntar a mudança de dois amigos no mesmo carreto?', r: 'Dá, se os destinos forem próximos. Informe os dois endereços de origem e de destino no orçamento.' },
    ],
    proximos: ['leblon', 'sao-benedito', 'parque-das-americas', 'centro'],
    artigos: ['mudanca-estudante-uniube', 'quanto-custa-carreto-em-uberaba', 'frete-de-cama-box-e-colchao'],
  },
  {
    slug: 'parque-das-americas',
    nome: 'Parque das Américas',
    prep: 'no',
    titulo: 'Frete e Mudança no Parque das Américas',
    descricao: 'Mudança e frete no Parque das Américas, em Uberaba, perto da BR-050, do terminal e do aeroporto. Mudanças locais e para outras cidades. Orçamento no WhatsApp.',
    h1: 'Frete e mudança no Parque das Américas',
    sobre: 'Vizinho do São Benedito, perto da BR-050, do Terminal Intermunicipal e do aeroporto. Bom ponto de partida para mudanças para fora da cidade.',
    secoes: [
      {
        h2: 'O bairro',
        paragrafos: [
          'O Parque das Américas é residencial, com comércio e serviços essenciais de bairro, e fica ao lado do São Benedito. Entre as referências estão a Casa de Memórias e Lembranças Chico Xavier e a proximidade com a BR-050, com o Terminal Intermunicipal e com o Aeroporto de Uberaba.',
          'A localização perto da rodovia faz diferença: o caminhão sai do bairro e já pega a estrada. Por isso o Parque das Américas aparece bastante nos pedidos de mudança para Uberlândia, para o interior de São Paulo e para as cidades da região.',
        ],
      },
      {
        h2: 'Mudança do Parque das Américas para outras cidades',
        tabela: {
          cabecalho: ['Destino', 'Distância aproximada'],
          linhas: [
            ['[Delta](/cidades/delta/)', 'cerca de 30 km'],
            ['[Igarapava (SP)](/cidades/igarapava/)', 'cerca de 45 km'],
            ['[Uberlândia](/cidades/uberlandia/)', 'cerca de 110 km'],
            ['Ribeirão Preto (SP)', 'cerca de 180 km'],
          ],
        },
        depois: ['As distâncias são aproximadas e contadas a partir do centro de Uberaba. Veja como funciona a [mudança para outras cidades](/servicos/mudanca-para-outras-cidades/).'],
      },
      {
        h2: 'Mudança local no bairro',
        paragrafos: [
          'Para quem fica em Uberaba, o bairro é de fácil acesso para o veículo, e a maioria das casas permite parar perto do portão. Os pedidos mais comuns são de [mudança residencial](/servicos/mudanca-residencial/) e de frete de eletrodomésticos.',
        ],
      },
    ],
    faq: [
      { p: 'Vocês fazem mudança do Parque das Américas para Uberlândia?', r: 'Sim. É uma das rotas mais pedidas. O orçamento considera volume, acesso nas duas cidades e data.' },
      { p: 'Moro perto do aeroporto. Tem alguma restrição?', r: 'Não para mudança residencial comum. Basta informar o endereço exato para o planejamento do acesso.' },
    ],
    proximos: ['sao-benedito', 'santa-maria', 'recreio-dos-bandeirantes', 'centro'],
    artigos: ['mudanca-uberaba-ribeirao-preto', 'mudanca-uberaba-sao-paulo', 'qual-caminhao-para-mudanca'],
  },
  {
    slug: 'jardim-elza-amui',
    nome: 'Jardim Elza Amui',
    prep: 'no',
    titulo: 'Frete e Mudança no Jardim Elza Amui',
    descricao: 'Frete, carreto e mudança no Jardim Elza Amui (I, II, III e IV), em Uberaba. Casas, mudança para casa própria e frete de móveis. Orçamento pelo WhatsApp.',
    h1: 'Frete e mudança no Jardim Elza Amui',
    sobre: 'Dividido em Elza Amui I, II, III e IV, com casas e comércio de bairro na Avenida Nossa Senhora do Desterro. Muita família chegando na casa própria.',
    secoes: [
      {
        h2: 'O bairro',
        paragrafos: [
          'O Jardim Elza Amui se divide em quatro partes: Elza Amui I, II, III e IV. É uma região de casas, com comércio de bairro em vias como a Avenida Nossa Senhora do Desterro e a Avenida Guilherme Capucci, e fica na região próxima à BR-050.',
          'Muita gente chega ao Elza Amui pela casa própria. A mudança, nesses casos, tem cara de recomeço: sai do aluguel em outro bairro, às vezes com móveis novos chegando de loja na mesma semana.',
        ],
      },
      {
        h2: 'Mudança para a casa própria',
        lista: [
          'Confira se a casa nova já tem luz e água ligadas antes do dia.',
          'Se houver obra ou pintura, termine antes da mudança. Móvel em casa com obra suja e risca.',
          'Combine a entrega dos móveis novos da loja para depois da mudança, ou contrate o [frete de móveis](/servicos/frete-de-moveis-e-eletrodomesticos/) para buscar tudo de uma vez.',
          'Meça os cômodos e decida onde fica cada móvel. Isso acelera a descarga.',
        ],
      },
      {
        h2: 'Elza Amui I, II, III ou IV',
        paragrafos: [
          'Ao pedir o orçamento, informe qual parte do bairro e a rua. Isso ajuda a planejar o trajeto e evita que o motorista perca tempo procurando o endereço. Se a casa fica numa rua sem saída ou de terra, avise também.',
        ],
      },
    ],
    faq: [
      { p: 'Vocês buscam móveis em loja e levam para a casa nova?', r: 'Sim. Dá para combinar a retirada na loja e a entrega no Elza Amui, inclusive no mesmo dia da mudança.' },
      { p: 'Minha rua é estreita. Isso é problema?', r: 'Não necessariamente. Informe no orçamento, e o veículo é escolhido de acordo com o acesso.' },
    ],
    proximos: ['olinda', 'recreio-dos-bandeirantes', 'boa-vista', 'leblon'],
    artigos: ['frete-ou-mudanca-completa', 'mudanca-barata-em-uberaba', 'frete-para-compras-olx-marketplace-uberaba'],
  },
  {
    slug: 'recreio-dos-bandeirantes',
    nome: 'Recreio dos Bandeirantes',
    prep: 'no',
    titulo: 'Frete e Mudança no Recreio dos Bandeirantes',
    descricao: 'Mudança e frete no Recreio dos Bandeirantes, em Uberaba: casas e condomínios fechados perto da BR-050. Cadastro na portaria e montagem. Orçamento no WhatsApp.',
    h1: 'Frete e mudança no Recreio dos Bandeirantes',
    sobre: 'Bairro residencial fora do centro, com casas e condomínios fechados, perto da Avenida Filomena Cartafina e da BR-050.',
    secoes: [
      {
        h2: 'O bairro',
        paragrafos: [
          'O Recreio dos Bandeirantes é um bairro residencial afastado do centro, com ruas pavimentadas e boa circulação de veículos. A Rua Abílio Monteiro concentra parte do comércio e de escolas, e a Avenida Filomena Cartafina liga a região à BR-050.',
          'O bairro tem casas e também condomínios fechados. Nos condomínios, a mudança segue a regra da portaria: cadastro do veículo, horário permitido e, às vezes, limite de peso ou tamanho de caminhão.',
        ],
      },
      {
        h2: 'Mudança em condomínio fechado',
        lista: [
          'Avise a administração com antecedência e pergunte quais dados do veículo e da equipe são necessários.',
          'Confirme se caminhão baú grande pode entrar ou se a carga precisa ser feita na portaria.',
          'Verifique o horário permitido. Muitos condomínios não liberam mudança aos domingos.',
          'Se o condomínio tem regras de proteção para áreas comuns, combine quem providencia.',
        ],
      },
      {
        h2: 'Casas maiores, mais montagem',
        paragrafos: [
          'Casas com mais quartos costumam ter mais guarda-roupas, camas e móveis planejados. Isso faz da [montagem e desmontagem](/servicos/montagem-e-desmontagem/) parte importante da mudança. Liste os móveis que precisam ser desmontados e mande fotos dos planejados.',
        ],
      },
    ],
    faq: [
      { p: 'O caminhão entra no condomínio?', r: 'Depende da regra de cada condomínio. Confirme com a administração e informe no orçamento. Se não puder entrar, o veículo é escolhido para isso.' },
      { p: 'Vocês montam móvel planejado?', r: 'Desmontamos e montamos móveis da mudança. Para planejados, mande fotos de perto para avaliarmos o que dá para remontar.' },
    ],
    proximos: ['jardim-elza-amui', 'olinda', 'parque-das-americas'],
    artigos: ['como-desmontar-guarda-roupa', 'mudanca-de-apartamento-em-uberaba', 'quanto-custa-mudanca-em-uberaba'],
  },
  {
    slug: 'lourdes',
    nome: 'Lourdes',
    prep: 'no',
    titulo: 'Frete e Mudança no Bairro Lourdes, Uberaba',
    descricao: 'Frete e mudança no bairro Lourdes, em Uberaba, perto da Abadia e do Parque do Mirante, com acesso à BR-262. Mudança residencial e carreto pelo WhatsApp.',
    h1: 'Frete e mudança no bairro Lourdes',
    sobre: 'Residencial, perto da Abadia, do Parque do Mirante e do Costa Teles, com saída fácil para a BR-262, caminho de Araxá e de BH.',
    secoes: [
      {
        h2: 'O bairro',
        paragrafos: [
          'O bairro Lourdes fica perto da Abadia, do Parque do Mirante e do Costa Teles. É predominantemente residencial, com maioria de casas e ruas tranquilas, e tem comércio em vias como a Avenida Niza Marquez Guaritá. A Paróquia Nossa Senhora de Lourdes é a referência do bairro.',
          'Um detalhe útil para mudanças: o acesso à BR-262 é próximo. É a rodovia que leva a Araxá e, mais adiante, a Belo Horizonte.',
        ],
      },
      {
        h2: 'Saindo do Lourdes para Araxá ou BH',
        paragrafos: [
          'Quem vai para [Araxá](/cidades/araxa/), a cerca de 120 km, ou para Belo Horizonte, a cerca de 480 km, precisa de caminhão fechado e carga bem presa. Nesses casos, planeje a saída cedo para a descarga acontecer com luz do dia no destino.',
        ],
        depois: ['Veja o guia de [mudança de Uberaba para Belo Horizonte](/blog/mudanca-uberaba-belo-horizonte/).'],
      },
      {
        h2: 'Mudança dentro de Uberaba',
        lista: [
          'Para a Abadia e o Centro, o trajeto é curto, e o que pesa é o acesso no prédio de destino.',
          'Para bairros mais distantes, como o Recreio dos Bandeirantes, combine o horário para fugir do trânsito do fim de tarde.',
          'Em casas, informe se há portão de garagem e se o veículo pode encostar.',
        ],
      },
    ],
    faq: [
      { p: 'Fazem mudança do Lourdes para Araxá?', r: 'Sim. A rota pela BR-262 é planejada no orçamento, com data e horário de chegada combinados.' },
      { p: 'Moro perto do Parque do Mirante. Vocês atendem?', r: 'Sim. Atendemos o Lourdes, o Parque do Mirante, o Costa Teles e os bairros vizinhos.' },
    ],
    proximos: ['abadia', 'estados-unidos', 'leblon'],
    artigos: ['mudanca-uberaba-belo-horizonte', 'checklist-de-mudanca', 'como-transportar-geladeira'],
  },
];

export const bairro = (slug: string) => BAIRROS.find((b) => b.slug === slug);

// Bairros atendidos sem página própria (aparecem listados em /bairros/)
export const OUTROS_BAIRROS = [
  'Jockey Park', 'Parque do Mirante', 'Costa Teles', 'Manoel Mendes', 'Cássio Resende', 'Pacaembu', 'Vila Ceres',
  'Alfredo Freire', 'Jardim Induberaba', 'Gameleiras', 'Tutunas', 'Univerdecidade', 'Residencial Morumbi',
  'Conjunto Umuarama', 'Santa Marta', 'Pontal', 'Jardim Esplanada', 'Jardim Uberaba', 'Parque São Geraldo',
  'Vila São Cristóvão', 'Damha', 'Jardim América', 'Mangueiras', 'Parque São José',
];
