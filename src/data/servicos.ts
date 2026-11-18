// Páginas de serviço (/servicos/<slug>/). Texto único por serviço.
// Regra da casa: nada de preço exato, anos de mercado, frota, CNPJ ou depoimento inventado.

export interface Secao { h2: string; paragrafos?: string[]; lista?: string[]; tabela?: { cabecalho: string[]; linhas: string[][] }; depois?: string[] }
export interface Servico {
  slug: string;
  nome: string;
  h1: string;
  title: string;
  descricao: string;
  resumo: string;
  palavraChave: string;
  imagem: string;
  imagemAlt: string;
  intro: string[];
  inclui: string[];
  secoes: Secao[];
  faq: { p: string; r: string }[];
  artigos: string[]; // slugs de artigos relacionados (só aparecem depois de publicados)
}

export const SERVICOS: Servico[] = [
  {
    slug: 'mudanca-residencial',
    nome: 'Mudança residencial',
    h1: 'Mudança residencial em Uberaba',
    title: 'Mudança Residencial em Uberaba: casa e apartamento',
    descricao: 'Mudança residencial em Uberaba para casa e apartamento, com carga, transporte, descarga, montagem de móveis e embalagem opcional. Orçamento pelo WhatsApp.',
    resumo: 'Casa ou apartamento inteiro, do primeiro móvel à última caixa.',
    palavraChave: 'mudança residencial uberaba',
    imagem: 'servico-mudanca-residencial',
    imagemAlt: 'Criança espiando de dentro de uma caixa de papelão no dia da mudança da família',
    intro: [
      'A mudança residencial é o serviço para levar uma casa ou um apartamento inteiro de um endereço a outro. Entra tudo: móveis, eletrodomésticos, caixas, colchões, plantas e aquilo que sempre aparece na última hora no fundo do armário.',
      'Em Uberaba, boa parte das mudanças acontece dentro da própria cidade. Gente saindo do aluguel no Centro para a casa própria no Elza Amui, família trocando o apartamento da Abadia por uma casa no Parque das Américas, casal indo para um condomínio na saída para a BR-050. Cada uma dessas mudanças tem um detalhe diferente, e é ele que define o caminhão, a equipe e o tempo de serviço.',
    ],
    inclui: [
      'Caminhão baú do tamanho do volume, para a carga não viajar exposta ao sol ou à chuva',
      'Equipe para carregar e descarregar, com carrinho de carga para os itens pesados',
      'Mantas, cintas e plástico para proteger móveis e eletrodomésticos',
      'Desmontagem e montagem de camas, guarda-roupas, racks e mesas, quando contratadas',
      'Embalagem completa de louças, roupas e objetos, como serviço opcional',
      'Data e horário combinados antes, com tudo alinhado com o condomínio',
    ],
    secoes: [
      {
        h2: 'Como a mudança é planejada',
        paragrafos: [
          'Tudo começa pela lista do que vai ser levado. Com ela, mais as informações dos dois endereços, dá para saber o volume aproximado em metros cúbicos, o tamanho do caminhão e quantas pessoas são necessárias para terminar no mesmo dia.',
          'Mandar fotos dos cômodos pelo WhatsApp ajuda muito. Uma foto da sala mostra se o sofá passa pela porta, se o rack é inteiriço ou se a estante precisa ser desmontada. Isso evita surpresa no dia e deixa o orçamento mais justo.',
        ],
        lista: [
          '**Volume:** quantidade de móveis, eletrodomésticos e caixas.',
          '**Acesso:** escada, elevador, rua estreita, portão pequeno, distância entre o caminhão e a porta.',
          '**Serviços extras:** montagem, embalagem, içamento de móvel pela janela.',
          '**Data:** fim e começo de mês costumam ter mais procura; dias de semana dão mais opção de horário.',
        ],
      },
      {
        h2: 'Casa ou apartamento: o que muda',
        paragrafos: [
          'Em casa térrea, o trabalho costuma render mais, porque o caminhão encosta perto da porta. Já em sobrado com escada estreita, comum em bairros mais antigos como o São Benedito e o Boa Vista, alguns móveis precisam ser desmontados até para descer.',
          'Em prédio, o que manda é o regulamento do condomínio. Muitos edifícios da Abadia, do Centro e das Mercês só liberam mudança em horário comercial, pedem agendamento do elevador de serviço e exigem proteção nas paredes. Quem avisa o síndico com antecedência ganha tempo no dia.',
        ],
        tabela: {
          cabecalho: ['Situação', 'O que levar em conta'],
          linhas: [
            ['Casa térrea', 'Espaço para o caminhão estacionar e portão da garagem.'],
            ['Sobrado', 'Largura da escada e móveis que precisam ser desmontados.'],
            ['Prédio com elevador', 'Agendamento, horário permitido e tamanho do elevador.'],
            ['Prédio sem elevador', 'Andar, número de lances de escada e equipe maior.'],
            ['Condomínio fechado', 'Cadastro na portaria e regras de circulação de caminhão.'],
          ],
        },
      },
      {
        h2: 'O que você pode fazer para a mudança render',
        lista: [
          'Separe o que não vai junto e doe, venda ou descarte antes. Cada item a menos é espaço a menos no caminhão.',
          'Feche e identifique as caixas por cômodo. Escreva "frágil" onde for preciso.',
          'Esvazie gavetas e guarda-roupas. Móvel cheio pesa mais e pode quebrar.',
          'Descongele a geladeira na véspera e deixe a máquina de lavar sem água.',
          'Deixe documentos, remédios, carregadores e chaves numa mochila que vai com você.',
          'Combine com o condomínio dos dois endereços e reserve a vaga na frente do imóvel, se possível.',
        ],
        depois: ['Para um passo a passo completo, use o [checklist de mudança](/blog/checklist-de-mudanca/).'],
      },
      {
        h2: 'Quanto custa uma mudança residencial em Uberaba',
        paragrafos: [
          'Não existe preço de tabela, porque duas mudanças de "apartamento de dois quartos" podem ter volumes muito diferentes. O valor depende do volume, da distância entre os endereços, do acesso, do número de pessoas na equipe e dos serviços extras.',
          'O caminho mais rápido é mandar a lista e as fotos pelo WhatsApp. O orçamento sai fechado antes, e você decide com calma. Entenda cada item que pesa no preço no guia [quanto custa uma mudança em Uberaba](/blog/quanto-custa-mudanca-em-uberaba/).',
        ],
      },
    ],
    faq: [
      { p: 'Com quanta antecedência devo agendar a mudança?', r: 'O ideal é de uma a duas semanas antes. Para o fim e o começo do mês, quando muita gente troca de aluguel, vale reservar ainda mais cedo.' },
      { p: 'A mudança termina no mesmo dia?', r: 'Dentro de Uberaba, a maioria das mudanças de casa e apartamento é feita no mesmo dia. Volumes grandes ou acesso difícil podem pedir mais tempo, e isso é avisado no orçamento.' },
      { p: 'Vocês embalam as coisas?', r: 'Sim, como serviço opcional. Você pode embalar tudo sozinho, pedir só a embalagem dos itens frágeis ou contratar a embalagem completa.' },
      { p: 'Preciso estar presente na mudança?', r: 'É recomendado que alguém responsável esteja nos dois endereços para indicar onde cada móvel fica e conferir a entrega.' },
      { p: 'Vocês levam plantas e objetos de decoração?', r: 'Sim. Vasos grandes vão presos no caminhão; objetos de decoração vão em caixa, embalados. Vale avisar na lista quantos vasos são.' },
    ],
    artigos: ['checklist-de-mudanca', 'quanto-custa-mudanca-em-uberaba', 'como-organizar-uma-mudanca', 'mudanca-de-apartamento-em-uberaba', 'frete-ou-mudanca-completa'],
  },
  {
    slug: 'mudanca-comercial',
    nome: 'Mudança comercial',
    h1: 'Mudança comercial e de escritório em Uberaba',
    title: 'Mudança Comercial em Uberaba: escritórios e lojas',
    descricao: 'Mudança comercial em Uberaba para escritório, loja, consultório e depósito, com planejamento para não parar o atendimento. Peça orçamento pelo WhatsApp.',
    resumo: 'Escritório, loja ou consultório, com planejamento para parar o mínimo.',
    palavraChave: 'mudança comercial uberaba',
    imagem: 'servico-mudanca-comercial',
    imagemAlt: 'Profissional organizando pastas e documentos sobre a mesa do escritório antes da mudança',
    intro: [
      'Mudar uma empresa é diferente de mudar uma casa. O que pesa não é só o caminhão: é quanto tempo o negócio fica sem atender. Por isso a mudança comercial começa com um plano de horário, e não com o carregamento.',
      'Uberaba tem um comércio forte no Centro, ao longo da Avenida Leopoldino de Oliveira, e uma boa quantidade de clínicas e consultórios perto do eixo da saúde na Abadia, além de empresas ligadas ao agronegócio e ao Distrito Industrial. Cada tipo de negócio tem uma prioridade, e o planejamento parte dela.',
    ],
    inclui: [
      'Visita ou chamada de vídeo para medir o volume e ver os acessos',
      'Plano de horário: fim de tarde, noite, sábado ou feriado, conforme a sua operação',
      'Desmontagem e montagem de mesas, estações de trabalho, estantes e arquivos',
      'Proteção de computadores, monitores, impressoras e equipamentos sensíveis',
      'Identificação de caixas por setor e por mesa, para a reabertura ser rápida',
      'Transporte de estoque, vitrines, expositores e mobiliário de loja',
    ],
    secoes: [
      {
        h2: 'Tipos de mudança comercial',
        tabela: {
          cabecalho: ['Negócio', 'Cuidado principal'],
          linhas: [
            ['Escritório', 'Computadores, cabos e arquivos em ordem para voltar a trabalhar no dia seguinte.'],
            ['Loja', 'Estoque contado e embalado, vitrines e expositores desmontados com cuidado.'],
            ['Consultório e clínica', 'Equipamentos delicados, prontuários e mobiliário de recepção.'],
            ['Depósito e estoque', 'Volume grande, paletes e organização por lote.'],
            ['Salão e estúdio', 'Cadeiras, espelhos, lavatórios e produtos.'],
          ],
        },
      },
      {
        h2: 'Como evitar que a empresa pare',
        paragrafos: [
          'O segredo é dividir a mudança em etapas. Primeiro vai o que não é usado no dia a dia: arquivo morto, estoque reserva, móveis de sala de reunião. Depois, numa janela curta, vai o que a equipe usa todo dia.',
          'Em muitos casos a melhor janela é a sexta à tarde ou o sábado. A empresa fecha no fim do expediente e reabre na segunda já no endereço novo. Para lojas de rua no Centro, onde o trânsito pesa durante o dia, trabalhar cedo ou depois do horário comercial costuma render mais.',
        ],
        lista: [
          'Faça um inventário simples: o que vai, o que fica, o que vai para o descarte.',
          'Peça para cada pessoa da equipe esvaziar e identificar a própria mesa.',
          'Fotografe a ligação dos cabos antes de desligar os computadores.',
          'Avise clientes e fornecedores sobre o novo endereço com antecedência.',
          'Confirme internet, energia e chaves no imóvel novo antes do dia da mudança.',
        ],
      },
      {
        h2: 'Documentos e regras do imóvel',
        paragrafos: [
          'Prédios comerciais e centros empresariais costumam ter regras próprias para entrada de caminhão, uso de elevador de carga e horário de mudança. Confira isso com a administração dos dois endereços antes de fechar a data.',
          'Para transporte de mercadoria de estoque, converse com seu contador sobre a documentação fiscal necessária. Móveis e equipamentos de uso da própria empresa seguem regras diferentes de mercadoria para venda.',
        ],
      },
    ],
    faq: [
      { p: 'Vocês fazem mudança comercial à noite ou no fim de semana?', r: 'Dá para combinar horários fora do expediente, inclusive sábado. Isso é definido no orçamento, conforme a operação da empresa e as regras dos prédios.' },
      { p: 'Os computadores vão protegidos?', r: 'Sim. Monitores e CPUs vão embalados e presos. O ideal é que alguém da sua equipe desconecte e identifique os cabos antes.' },
      { p: 'Dá para levar só parte do escritório?', r: 'Sim. Muitas empresas fazem a mudança em duas etapas: primeiro arquivo e estoque, depois as estações de trabalho.' },
      { p: 'Atendem empresas de outras cidades da região?', r: 'Sim. Mudança comercial entre Uberaba e cidades como Uberlândia, Araxá ou Sacramento é combinada no orçamento.' },
    ],
    artigos: ['mudanca-de-escritorio-em-uberaba', 'mudanca-de-loja', 'mudanca-de-consultorio', 'servico-de-embalagem-para-mudanca'],
  },
  {
    slug: 'pequenas-mudancas-e-carretos',
    nome: 'Pequenas mudanças e carretos',
    h1: 'Pequenas mudanças e carretos em Uberaba',
    title: 'Pequenas Mudanças e Carretos em Uberaba',
    descricao: 'Carreto e pequenas mudanças em Uberaba: quarto, kitnet, poucos móveis e compras grandes, com veículo do tamanho certo. Orçamento rápido no WhatsApp.',
    resumo: 'Quarto, kitnet ou poucos móveis, com veículo menor e agenda mais rápida.',
    palavraChave: 'carreto uberaba',
    imagem: 'servico-pequenas-mudancas-e-carretos',
    imagemAlt: 'Homem colocando caixas de papelão dentro de uma van de carga',
    intro: [
      'Nem toda mudança precisa de caminhão grande. Quem mora em kitnet, divide república ou só vai levar o quarto para outro endereço resolve com uma pequena mudança ou um carreto. Sai mais em conta e costuma encaixar mais rápido na agenda.',
      'Em Uberaba, esse é o serviço mais pedido por estudantes da UFTM e da Uniube no começo e no fim do semestre, por quem está saindo da casa dos pais e por quem comprou um móvel usado e precisa buscar do outro lado da cidade.',
    ],
    inclui: [
      'Utilitário, caminhonete ou caminhão pequeno, conforme o volume',
      'Motorista e ajudante para carregar e descarregar',
      'Mantas e cintas para os itens não se mexerem no caminho',
      'Desmontagem simples de cama e mesa, quando combinada',
      'Busca de móveis comprados em loja, OLX ou Marketplace',
    ],
    secoes: [
      {
        h2: 'Carreto, pequena mudança ou frete: qual é o seu caso',
        tabela: {
          cabecalho: ['Você precisa levar', 'Serviço indicado'],
          linhas: [
            ['Um a três itens (geladeira, sofá, máquina)', 'Carreto'],
            ['Quarto ou kitnet mobiliada', 'Pequena mudança'],
            ['Móveis avulsos e eletrodomésticos', '[Frete de móveis](/servicos/frete-de-moveis-e-eletrodomesticos/)'],
            ['Casa ou apartamento completo', '[Mudança residencial](/servicos/mudanca-residencial/)'],
          ],
        },
        depois: ['Ainda em dúvida? O artigo [frete ou mudança completa](/blog/frete-ou-mudanca-completa/) mostra exemplos práticos.'],
      },
      {
        h2: 'Situações comuns em Uberaba',
        lista: [
          '**Estudantes:** saída de república na Abadia ou perto do campus da Uniube, com cama, colchão, escrivaninha e caixas.',
          '**Compra usada:** sofá, guarda-roupa ou geladeira comprados em anúncio e que precisam ser buscados.',
          '**Recém-casados:** primeiros móveis indo da casa dos pais para o apartamento novo.',
          '**Loja:** eletrodoméstico comprado sem entrega ou com entrega demorada.',
          '**Depósito:** levar ou trazer itens de um guarda-móveis.',
        ],
      },
      {
        h2: 'Como pedir um carreto do jeito certo',
        paragrafos: [
          'Quanto mais claro o pedido, mais rápido sai o orçamento. Mande pelo WhatsApp a lista dos itens, os bairros de origem e destino, se tem escada e a data. Uma foto de cada item grande resolve quase todas as dúvidas.',
          'Se for buscar algo comprado de outra pessoa, combine com o vendedor quem ajuda a descer o móvel e confira se ele passa pela porta e pelo elevador antes de fechar o negócio.',
        ],
        depois: ['Veja os fatores que mudam o valor em [quanto custa um carreto em Uberaba](/blog/quanto-custa-carreto-em-uberaba/).'],
      },
    ],
    faq: [
      { p: 'Carreto em Uberaba sai no mesmo dia?', r: 'Depende da agenda do dia. Pedidos pequenos feitos cedo têm mais chance de encaixe. Quanto antes você mandar, melhor.' },
      { p: 'O ajudante está incluso?', r: 'Você escolhe no orçamento. Dá para contratar só o transporte, se você tem quem carregue, ou motorista com ajudante.' },
      { p: 'Posso ir junto no veículo?', r: 'Isso depende do veículo e do número de lugares. Pergunte no orçamento.' },
      { p: 'Vocês levam itens de uma loja direto para minha casa?', r: 'Sim. É só ter a nota ou a autorização de retirada em mãos e combinar o horário com a loja.' },
    ],
    artigos: ['quanto-custa-carreto-em-uberaba', 'frete-para-compras-olx-marketplace-uberaba', 'mudanca-estudante-uftm', 'mudanca-estudante-uniube', 'frete-urgente-em-uberaba'],
  },
  {
    slug: 'frete-de-moveis-e-eletrodomesticos',
    nome: 'Frete de móveis e eletrodomésticos',
    h1: 'Frete de móveis e eletrodomésticos em Uberaba',
    title: 'Frete de Móveis e Eletrodomésticos em Uberaba',
    descricao: 'Frete de móveis e eletrodomésticos em Uberaba: sofá, geladeira, guarda-roupa, cama, máquina de lavar. Transporte protegido e preço combinado antes.',
    resumo: 'Sofá, geladeira, guarda-roupa ou máquina, levados presos e protegidos.',
    palavraChave: 'frete de móveis uberaba',
    imagem: 'servico-frete-de-moveis-e-eletrodomesticos',
    imagemAlt: 'Homem carregando uma mesa de madeira dentro de um apartamento',
    intro: [
      'O frete de móveis é para quem precisa levar itens grandes sem fazer uma mudança inteira. Um sofá novo, a geladeira que vai para a casa da mãe, o guarda-roupa que foi vendido, a máquina de lavar que mudou de endereço.',
      'O cuidado aqui é com o item em si. Geladeira não pode viajar deitada de qualquer jeito, sofá precisa de manta para não rasgar no batente, guarda-roupa grande quase sempre precisa ser desmontado. Por isso o pedido começa pela foto e pelas medidas.',
    ],
    inclui: [
      'Veículo fechado ou aberto, conforme o item e a previsão do tempo',
      'Mantas, plástico-filme e cintas para cada peça',
      'Carrinho de carga para geladeira, freezer e máquina',
      'Desmontagem e montagem de guarda-roupa, cama e rack, se combinado',
      'Ajudantes para escada e para itens muito pesados',
    ],
    secoes: [
      {
        h2: 'Itens que mais pedimos para levar',
        tabela: {
          cabecalho: ['Item', 'Cuidado no transporte'],
          linhas: [
            ['Geladeira e freezer', 'Viajar em pé, presa, e descansar antes de ligar. Veja [como transportar geladeira](/blog/como-transportar-geladeira/).'],
            ['Sofá', 'Manta e plástico; medir porta e elevador antes. Veja [frete de sofá em Uberaba](/blog/frete-de-sofa-em-uberaba/).'],
            ['Guarda-roupa', 'Esvaziar e, quase sempre, desmontar.'],
            ['Máquina de lavar', 'Travar o cesto e tirar toda a água da mangueira.'],
            ['Cama box e colchão', 'Colchão embalado e em pé, sem dobrar.'],
            ['Fogão', 'Gás desligado, mangueira retirada, grades embaladas à parte.'],
          ],
        },
      },
      {
        h2: 'Antes de pedir o frete, meça',
        paragrafos: [
          'O erro mais comum é descobrir no dia que o móvel não passa. Meça altura, largura e profundidade do item e compare com a porta de entrada, o corredor, a escada e o elevador do destino. Em prédios mais antigos do Centro e das Mercês, elevadores pequenos são comuns.',
          'Se não passar, há saídas: desmontar, tirar a porta da dobradiça ou, em último caso, içar pela janela ou sacada com corda. Tudo isso precisa ser combinado antes.',
        ],
      },
      {
        h2: 'Compras em loja e anúncios',
        paragrafos: [
          'Comprou numa loja que não entrega ou que demora demais para entregar? Dá para retirar com a nota fiscal e levar direto para casa. Comprou de outra pessoa pela internet? Confirme o endereço exato, quem ajuda a descer e se o item está desmontado.',
        ],
        depois: ['Tem dicas específicas em [frete para compras da OLX e do Marketplace](/blog/frete-para-compras-olx-marketplace-uberaba/).'],
      },
    ],
    faq: [
      { p: 'Vocês levam só uma geladeira?', r: 'Sim. Frete de um único item é comum. O orçamento considera o item, os endereços e se há escada.' },
      { p: 'A geladeira pode ir deitada?', r: 'O recomendado é transportar em pé. Se for inevitável inclinar, siga o manual do fabricante e espere o tempo indicado antes de ligar.' },
      { p: 'Vocês desmontam o guarda-roupa?', r: 'Sim, quando combinado. Guarda-roupas grandes quase sempre precisam ser desmontados para sair do quarto com segurança.' },
      { p: 'E se o sofá não passar pela porta?', r: 'Avaliamos antes pelas medidas e fotos. Se não passar, as opções são desmontar pés e braços, tirar a porta ou içar pela janela, conforme o caso.' },
    ],
    artigos: ['como-transportar-geladeira', 'frete-de-sofa-em-uberaba', 'como-transportar-maquina-de-lavar', 'frete-de-cama-box-e-colchao', 'preco-de-frete-em-uberaba'],
  },
  {
    slug: 'montagem-e-desmontagem',
    nome: 'Montagem e desmontagem de móveis',
    h1: 'Montagem e desmontagem de móveis na mudança',
    title: 'Montagem e Desmontagem de Móveis em Uberaba',
    descricao: 'Desmontagem e montagem de móveis na mudança em Uberaba: guarda-roupa, cama, rack, painel e mesa. Peças identificadas e montadas no endereço novo.',
    resumo: 'Guarda-roupa, cama, rack e painel desmontados e montados no endereço novo.',
    palavraChave: 'montagem e desmontagem de móveis uberaba',
    imagem: 'servico-montagem-e-desmontagem',
    imagemAlt: 'Mulher montando uma mesa com chave de fenda dentro de casa',
    intro: [
      'Móvel planejado, guarda-roupa de seis portas, cama box com cabeceira, painel de TV fixado na parede: quase tudo isso precisa ser desmontado para sair inteiro de um imóvel e entrar no outro. Feito com pressa, vira parafuso perdido e porta desalinhada.',
      'Esse serviço pode ser contratado junto com a mudança residencial ou comercial, ou separado, para quem vai levar os móveis por conta própria.',
    ],
    inclui: [
      'Desmontagem de guarda-roupas, camas, berços, racks, estantes e mesas',
      'Parafusos e ferragens separados em saquinhos identificados por móvel',
      'Peças numeradas para a montagem sair igual',
      'Montagem e nivelamento no endereço novo',
      'Retirada e recolocação de painéis e prateleiras fixados na parede, quando combinado',
    ],
    secoes: [
      {
        h2: 'O que costuma precisar ser desmontado',
        lista: [
          'Guarda-roupas com mais de duas portas e roupeiros de canto',
          'Camas de casal, beliches, berços e camas com baú',
          'Racks e painéis de TV',
          'Mesas grandes de jantar e de escritório',
          'Estantes altas e nichos fixados na parede',
          'Estações de trabalho e mesas em L de escritório',
        ],
      },
      {
        h2: 'Móveis planejados',
        paragrafos: [
          'Móvel planejado é feito sob medida para um ambiente. Nem sempre ele cabe no imóvel novo do mesmo jeito. Antes da mudança, vale medir as paredes do destino e decidir o que será remontado, adaptado ou deixado.',
          'Peças coladas, com trilhos embutidos ou fixadas com cantoneiras ocultas exigem mais tempo. Mande fotos de perto para o orçamento considerar isso.',
        ],
      },
      {
        h2: 'Como ajudar na montagem',
        lista: [
          'Esvazie o móvel por completo antes do dia.',
          'Guarde manuais, se ainda tiver.',
          'Defina com antecedência onde cada móvel fica no imóvel novo.',
          'Se for pendurar painel ou prateleira, saiba onde passam canos e fios na parede.',
        ],
        depois: ['Se for desmontar sozinho, siga o passo a passo de [como desmontar guarda-roupa](/blog/como-desmontar-guarda-roupa/).'],
      },
    ],
    faq: [
      { p: 'Posso contratar só a montagem, sem a mudança?', r: 'Sim, quando o serviço é feito junto com algum transporte ou na mesma região. Combine no orçamento.' },
      { p: 'Vocês montam móvel novo de loja?', r: 'O foco é a montagem de móveis da mudança. Para móvel novo na caixa, pergunte no orçamento.' },
      { p: 'E se faltar parafuso?', r: 'As ferragens vão em saquinhos identificados para não se perderem. Se uma peça estiver gasta ou quebrada, avisamos antes de montar.' },
    ],
    artigos: ['como-desmontar-guarda-roupa', 'como-embalar-tv-para-mudanca', 'servico-de-embalagem-para-mudanca'],
  },
  {
    slug: 'mudanca-para-outras-cidades',
    nome: 'Mudança para outras cidades',
    h1: 'Mudança de Uberaba para outras cidades',
    title: 'Mudança de Uberaba para Outras Cidades e Estados',
    descricao: 'Mudança de Uberaba para Uberlândia, BH, São Paulo, Ribeirão Preto e outras cidades. Planejamento de rota, prazo e proteção da carga. Orçamento pelo WhatsApp.',
    resumo: 'Uberlândia, BH, São Paulo, Ribeirão Preto e cidades da região.',
    palavraChave: 'mudança uberaba para outras cidades',
    imagem: 'servico-mudanca-para-outras-cidades',
    imagemAlt: 'Caminhão vermelho transportando carga por uma estrada cercada de árvores',
    intro: [
      'Uberaba fica num ponto bom do mapa. Pela BR-050 chega-se a Uberlândia ao norte e, ao sul, cruza-se o Rio Grande para o estado de São Paulo. Pela BR-262, o caminho é Araxá e, depois, Belo Horizonte. Isso faz da cidade origem e destino de muitas mudanças.',
      'Numa mudança para fora da cidade, o planejamento conta mais do que em qualquer outra. A carga passa horas na estrada, o caminhão precisa estar fechado e tudo tem que ir bem preso. Também é preciso combinar quem recebe a mudança no destino.',
    ],
    inclui: [
      'Caminhão baú fechado para proteger a carga na estrada',
      'Carregamento planejado, com o que é pesado embaixo e o frágil protegido',
      'Mantas, cintas e plástico em todos os móveis',
      'Desmontagem na origem e montagem no destino, quando contratadas',
      'Prazo de entrega combinado antes',
    ],
    secoes: [
      {
        h2: 'Distâncias aproximadas a partir de Uberaba',
        paragrafos: ['As distâncias abaixo são aproximadas, pela estrada, e servem só para ter noção do trajeto. O roteiro exato é definido no orçamento.'],
        tabela: {
          cabecalho: ['Destino', 'Distância aproximada'],
          linhas: [
            ['[Delta](/cidades/delta/)', 'cerca de 30 km'],
            ['[Igarapava (SP)](/cidades/igarapava/)', 'cerca de 45 km'],
            ['[Conceição das Alagoas](/cidades/conceicao-das-alagoas/)', 'cerca de 70 km'],
            ['[Sacramento](/cidades/sacramento/)', 'cerca de 80 km'],
            ['[Uberlândia](/cidades/uberlandia/)', 'cerca de 110 km'],
            ['[Araxá](/cidades/araxa/)', 'cerca de 120 km'],
            ['[Frutal](/cidades/frutal/)', 'cerca de 130 km'],
            ['Belo Horizonte', 'cerca de 480 km'],
            ['São Paulo', 'cerca de 490 km'],
          ],
        },
      },
      {
        h2: 'Mudança dedicada ou compartilhada',
        paragrafos: [
          'Na mudança dedicada, o caminhão leva só as suas coisas e vai direto ao destino. É mais rápida e mais previsível. Na compartilhada, a carga divide espaço com outras mudanças que vão na mesma direção. Pode sair mais em conta, mas o prazo é maior e menos exato.',
          'Para distâncias curtas, como Uberlândia ou Araxá, a dedicada costuma ser o padrão. Para capitais, as duas opções podem ser avaliadas no orçamento.',
        ],
      },
      {
        h2: 'Cuidados em mudança de longa distância',
        lista: [
          'Faça uma lista dos itens e confira na chegada.',
          'Leve com você documentos, joias, dinheiro, remédios e eletrônicos pequenos.',
          'Pergunte sobre seguro da carga e o que ele cobre antes de fechar.',
          'Confirme as regras de mudança do prédio no destino, porque o caminhão pode chegar no dia seguinte.',
          'Para mudança entre estados, tenha em mãos a declaração de conteúdo dos bens.',
        ],
        depois: ['Os documentos estão explicados em [mudança interestadual: documentos e cuidados](/blog/mudanca-interestadual-documentos/).'],
      },
    ],
    faq: [
      { p: 'Vocês fazem mudança de Uberaba para outros estados?', r: 'Sim. Mudanças para São Paulo, Goiás e outros estados são planejadas no orçamento, com rota e prazo combinados.' },
      { p: 'Qual o prazo de uma mudança para Belo Horizonte ou São Paulo?', r: 'Na mudança dedicada, a entrega costuma acontecer no mesmo dia ou no seguinte, dependendo do horário de saída e do volume. O prazo exato é informado no orçamento.' },
      { p: 'Preciso de nota fiscal para levar meus móveis?', r: 'Para bens de uso pessoal, o comum é a declaração de conteúdo assinada por você. Nota fiscal é exigida para mercadoria de venda.' },
      { p: 'Vocês também trazem mudanças para Uberaba?', r: 'Sim. O serviço funciona nos dois sentidos: de Uberaba para fora e de outras cidades para Uberaba.' },
    ],
    artigos: ['mudanca-uberaba-belo-horizonte', 'mudanca-uberaba-sao-paulo', 'mudanca-uberaba-ribeirao-preto', 'mudanca-uberaba-goiania', 'mudanca-uberaba-franca', 'mudanca-interestadual-documentos'],
  },
];

export const servico = (slug: string) => SERVICOS.find((s) => s.slug === slug);
