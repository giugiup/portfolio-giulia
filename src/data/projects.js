// Fonte única dos projetos, na ordem da Home e dos relacionados.

export const projectHref = (slug) => `/projetos/${slug}/`;

// Cruzeiro: fulls adicionais usam provisoriamente 1280 × 847.
export const projects = [
  {
    title: 'Taiff',
    description: 'Criação e desenvolvimento de campanhas sazonais para o e-commerce da Taiff, uma marca que carrega mais de 30 anos de sucesso consolidado pelo pioneirismo no ramo de cabelos e autoestima.',
    tags: [
      'TAG1',
      'TAG2',
      'TAG3'
    ],
    id: 'slot-01',
    homeOrder: 4,
    figmaNode: '336:1837',
    height: 600,
    column: 1,
    offset: 0,
    slug: 'taiff',
    mobileTitle: 'Taiff | E-commerce',
    type: [
      'Web Design',
      'B2B',
      'Design Gráfico'
    ],
    client: 'Taiff',
    year: '2024',
    image: {
      src: '/images/projects/taiff/taiff-desktop.png',
      alt: 'Projeto Taiff',
      width: 800,
      height: 650,
      mobile: {
        src: '/images/projects/taiff/taiff-mobile.png',
        width: 342,
        height: 380
      }
    },
    coverVariant: 1,
    page: {
      developedAt: 'Social Digital E-commerce',
      projectType: 'Banners & Campanha digital',
      introduction: [
        'A Taiff é uma marca com uma linha completa de produtos para todos os tipos de cabelos, gostos e necessidades e carrega mais de 30 anos de um sucesso consolidado pelo pioneirismo e pela produção de tecnologia.',
        'Para desenvolver campanhas marcantes e eficientes, foi necessário entender que a Taiff é responsável por contribuir para a autoestima das pessoas do mundo todo, realçando sua beleza com inovação e respeito.',
      ],
      gallery: [
        {
          layout: 'full',
          media: {
            src: '/images/projects/taiff/taiff-01.png',
            alt: 'Campanha Taiff Desacelera e Brilha com produtos para cabelo e modelo.',
            width: 1280, height: 1511, figmaExport: true,
          },
        },
        {
          layout: 'full',
          gapBefore: 0,
          media: {
            src: '/images/projects/taiff/taiff-02.png',
            alt: 'Peças da campanha Taiff Week com produtos e ferramentas para cabelo.',
            width: 1280, height: 1593, figmaExport: true,
          },
        },
        {
          layout: 'full',
          gapBefore: 0,
          media: {
            src: '/images/projects/taiff/taiff-03.png',
            alt: 'Campanha de Natal Taiff com peças digitais e produtos para cabelo.',
            width: 1156, height: 4096, figmaExport: true,
          },
        },
      ],
    },
  },
  {
    title: 'Energia Auren',
    description: 'Um encontro que reune clientes corporativos e especialistas do setor elétrico para debater a transição energética no Brasil.',
    tags: [
      'TAG1',
      'TAG2',
      'TAG3'
    ],
    id: 'slot-02',
    homeOrder: 3,
    figmaNode: '336:1871',
    height: 501,
    column: 2,
    offset: 62,
    slug: 'auren',
    mobileTitle: 'Auren | UX/UI',
    type: [
      'UX/UI',
      'Landing Page',
      'Web Design'
    ],
    client: 'Auren Energia',
    year: '2025',
    image: {
      src: '/images/projects/auren/energia-auren-desktop.png',
      alt: 'Projeto Auren',
      width: 800,
      height: 650,
      mobile: {
        src: '/images/projects/auren/energia-auren-mobile.png',
        width: 342,
        height: 380
      }
    },
    coverVariant: 2,
    page: {
      projectUrl: 'https://cloud.marketing.aurenenergia.com.br/energia-auren',
      developedAt: 'PiU Comunica!',
      projectType: 'Landing Page & E-mail Marketing',
      introduction: [
        'Um encontro realizado pela Auren Energia que acontece anualmente em diversos estados do país. O evento reune clientes corporativos e especialistas do setor elétrico para debater a transição energética do Brasil',
        'Nessa edição, houveram palestras de nomes como Luiz Barroso e Paulo Pedrosa, e o lançamento de uma nova plataforma para autoprodutores chamada Portal AMP.',
      ],
      gallery: [
        {
          layout: 'full',
          // Exportação isolada do node 484:794, preservando o recorte autoral do Figma.
          media: {
            src: '/images/projects/auren/auren-01.png',
            alt: 'Identidade Energia Auren e notebook exibindo a landing page do encontro de 2025, com layout em rosa e fotografia de uma floresta.',
            width: 1280, height: 720,
          },
        },
        {
          layout: 'video',
          // O hash SHA-1 do arquivo local coincide com o fill VIDEO do nó 545:815 no Figma.
          media: {
            src: '/videos/projects/auren/auren-01.mp4',
            width: 1280, height: 720,
            autoplay: true, loop: true, muted: true, playsInline: true,
          },
        },
        {
          layout: 'text',
          content: 'Como estratégia de pós-evento, desenvolvemos uma campanha de e-mail marketing compilando os principais dados e insights do encontro. O material foi enriquecido com citações, registros fotográficos e gráficos, servindo tanto como um recap para engajar os participantes quanto como conteúdo informativo para aqueles que não puderam comparecer.',
        },
        {
          layout: 'full',
          // Imagem original do fill do node 545:803, na proporção 16:9.
          media: {
            src: '/images/projects/auren/auren-03.png',
            alt: 'Notebook exibindo o e-mail de resumo do Energia Auren 2025, com mapa do Brasil e indicadores de consumo de energia e compensação de emissões.',
            width: 1920, height: 1080,
          },
        },
        {
          layout: 'two-columns',
          // Originais dos nodes 494:3880 e 545:854: 628 × 1395, preservados sem crop.
          items: [
            {
              src: '/images/projects/auren/auren-04.png',
              alt: 'Peça de e-mail marketing com fotografia da plateia, retratos e citações de participantes e apresentação do Portal AMP para autoprodutores.',
              width: 628, height: 1395,
            },
            {
              src: '/images/projects/auren/auren-05.png',
              alt: 'Peça de resumo do Energia Auren 2025 com indicadores, gráfico dos temas do setor elétrico, fotografia do encontro e citações de Fábio Zanfelice e Luiz Barroso.',
              width: 628, height: 1395,
            },
          ],
        },
      ],
    },
  },
  {
    id: 'cruzeiro',
    homeOrder: 6,
    title: 'Cruzeiro Esporte Clube',
    homeTitle: 'Cruzeiro',
    slug: 'cruzeiro',
    mobileTitle: 'Cruzeiro | Social Media',
    image: {
      src: '/images/projects/cruzeiro/cruzeiro-desktop.png',
      alt: 'Composição azul do Cruzeiro com jogadores e jogadoras do clube, o escudo e uma bandeira.',
      width: 800,
      height: 650,
      mobile: {
        src: '/images/projects/cruzeiro/cruzeiro-desktop-1.png',
        width: 342,
        height: 380,
      },
    },
    description: 'Criação de uma nova identidade visual para campanhas nas redes sociais do e-commerce do Cruzeiro Esporte Clube, unindo a personalidade do clube a peças orientadas à conversão.',
    type: [
      'Social Media',
      'Campanha Digital',
      'Design Gráfico'
    ],
    client: 'Cruzeiro Esporte Clube',
    year: '2024',
    coverVariant: 1,
    page: {
      developedAt: 'Social Digital E-commerce',
      projectType: 'Social Media & Campanha Digital',
      introduction: [
        'Tive o prazer de criar uma série de peças para uma nova campanha nas redes sociais do e-commerce do Cruzeiro Esporte Clube.',
        'O projeto incluiu criar uma nova identidade para as redes sociais do time, mantendo a força e a personalidade que o clube já havia consolidado. O desafio foi criar algo atrativo para os torcedores e fazer com que essas peças convertessem em vendas reais na loja.',
      ],
      gallery: [
        {
          layout: 'full',
          media: {
            src: '/images/projects/cruzeiro/cruzeiro-01.png',
            alt: 'Peça principal da campanha do Cruzeiro com jogadores e jogadoras do clube.',
            width: 1280, height: 720, figmaExport: true,
          },
        },
        {
          layout: 'full',
          gapBefore: 24,
          media: {
            src: '/images/projects/cruzeiro/cruzeiro-02.png',
            alt: 'Composição de peças digitais e produtos da campanha do Cruzeiro.',
            width: 1280, height: 853, figmaExport: true,
          },
        },
        {
          layout: 'full',
          media: {
            src: '/images/projects/cruzeiro/cruzeiro-03.png',
            alt: 'Campanha azul do Cruzeiro com chamada sobre os jogadores do time.',
            width: 1280, height: 847, figmaExport: true,
          },
        },
        {
          layout: 'text',
          gapBefore: 0,
          paddingTop: 128,
          paddingBottom: 128,
          content: '“Nova identidade, mesma paixão”, foi uma das frases que criamos para essa campanha levando em consideração nosso objetivo de criar algo novo, mas mantendo a tradicionalidade e a postura do time com seus seguidores.',
        },
        {
          layout: 'full',
          gapBefore: 0,
          media: {
            src: '/images/projects/cruzeiro/cruzeiro-04.png',
            alt: 'Peça digital da campanha do Cruzeiro.',
            width: 1280, height: 847, figmaExport: true,
          },
        },
        {
          layout: 'two-columns',
          gapBefore: 16,
          items: [
            {
              src: '/images/projects/cruzeiro/cruzeiro-05.png',
              alt: 'Peça de campanha do Cruzeiro exibida em composição digital.',
              width: 628, height: 1110, figmaExport: true,
            },
            {
              src: '/images/projects/cruzeiro/cruzeiro-06.png',
              alt: 'Peça de campanha do Cruzeiro em formato vertical.',
              width: 628, height: 1110, figmaExport: true,
            },
          ],
        },
        {
          layout: 'full',
          gapBefore: 16,
          media: {
            src: '/images/projects/cruzeiro/cruzeiro-07.png',
            alt: 'Peça digital da campanha do Cruzeiro.',
            width: 1280, height: 847, figmaExport: true,
          },
        },
        {
          layout: 'three-columns',
          gapBefore: 16,
          items: [
            {
              src: '/images/projects/cruzeiro/cruzeiro-08.png',
              alt: 'Peça social da campanha do Cruzeiro.',
              width: 411, height: 514, figmaExport: true,
            },
            {
              src: '/images/projects/cruzeiro/cruzeiro-09.png',
              alt: 'Peça social da campanha do Cruzeiro.',
              width: 411, height: 514, figmaExport: true,
            },
            {
              src: '/images/projects/cruzeiro/cruzeiro-10.png',
              alt: 'Peça social da campanha do Cruzeiro.',
              width: 411, height: 514, figmaExport: true,
            },
          ],
        },
        {
          layout: 'three-columns',
          gapBefore: 0,
          items: [
            {
              src: '/images/projects/cruzeiro/cruzeiro-11.png',
              alt: 'Peça social adicional da campanha do Cruzeiro.',
              width: 411, height: 514, figmaExport: true,
            },
            {
              src: '/images/projects/cruzeiro/cruzeiro-12.png',
              alt: 'Peça social adicional da campanha do Cruzeiro.',
              width: 411, height: 514, figmaExport: true,
            },
            {
              src: '/images/projects/cruzeiro/cruzeiro-13.png',
              alt: 'Peça social adicional da campanha do Cruzeiro.',
              width: 411, height: 514, figmaExport: true,
            },
          ],
        },
      ],
    },
  },
  {
    title: 'Yanno',
    homeTitle: 'Yanno Pet',
    description: 'Criação de posts, banners, vídeos e conteúdos diversos para as redes sociais e o site de uma marca de suplementos pet.',
    tags: [
      'TAG1',
      'TAG2',
      'TAG3'
    ],
    id: 'slot-03',
    homeOrder: 5,
    figmaNode: '336:1905',
    height: 465,
    column: 3,
    offset: 12,
    slug: 'yanno',
    mobileTitle: 'Yanno Pet | Social Media',
    type: [
      'Social Media',
      'Web Design',
      'Design Gráfico'
    ],
    client: 'Yanno Pet',
    year: '2024',
    image: {
      src: '/images/projects/yanno/yanno-desktop.png',
      alt: 'Projeto Yanno Pet',
      width: 800,
      height: 650,
      mobile: {
        src: '/images/projects/yanno/yanno-desktop-1.png',
        width: 342,
        height: 380
      }
    },
    coverVariant: 3,
    page: {
      developedAt: 'Social Digital E-commerce',
      projectType: 'Social Media & Campanha Digital',
      introduction: [
        'A Yanno Pet é uma marca brasileira de suplementos nutricionais e vitamínicos para cães e gatos. Na Yanno, você não está apenas comprando um produto; você está investindo em uma visão. Uma visão onde cada pet é mais saudável, mais feliz e mais vibrante porque pertence a uma família que o ama.',
        'O projeto incluiu criação de posts, banners e peças digitais para as redes sociais e a loja online da marca mantendo uma estética descontraída. Campanhas com objetivo de direcionar o público-alvo para o e-commerce e converter esses acessos em vendas reais.',
      ],
      gallery: [
        {
          layout: 'full',
          media: {
            src: '/images/projects/yanno/yanno-01.png',
            alt: 'Peça de campanha Yanno Pet com identidade laranja e ilustração de pets.',
            width: 1280, height: 720, figmaExport: true,
          },
        },
        {
          layout: 'full',
          gapBefore: 24,
          media: {
            src: '/images/projects/yanno/yanno-02.png',
            alt: 'Peças para redes sociais Yanno Pet com produtos e animais.',
            width: 1280, height: 853, figmaExport: true,
          },
        },
        {
          layout: 'full',
          media: {
            src: '/images/projects/yanno/yanno-03.png',
            alt: 'Apresentação de suplementos Yanno Pet em dispositivos móveis ao lado de um cão.',
            width: 1280, height: 847, figmaExport: true,
          },
        },
        {
          layout: 'full',
          media: {
            src: '/images/projects/yanno/yanno-04.png',
            alt: 'Composição de campanhas digitais Yanno Pet com produtos, pets e famílias.',
            width: 1280, height: 847, figmaExport: true,
          },
        },
        {
          layout: 'full',
          media: {
            src: '/images/projects/yanno/yanno-05.png',
            alt: 'Grade de peças digitais Yanno Pet com cães, gatos e suplementos.',
            width: 1280, height: 847, figmaExport: true,
          },
        },
        {
          layout: 'full',
          media: {
            src: '/images/projects/yanno/yanno-06.png',
            alt: 'Campanha Yanno Pet com retratos de animais e peças para redes sociais.',
            width: 1280, height: 847, figmaExport: true,
          },
        },
      ],
    },
  },
  {
    title: 'One Page PiU',
    description: 'A Agência PiU Comunica! passou por um processo de rebranding e precisava expor essas mudanças de uma maneira interessante para seus funcionários e clientes.',
    tags: [
      'UI/UX Design',
      'Rebranding',
      'Web Design'
    ],
    id: 'slot-04',
    homeOrder: 2,
    figmaNode: '565:1509',
    height: 600,
    column: 1,
    offset: 0,
    slug: 'piu',
    mobileTitle: 'PiU | One Page',
    type: [
      'UI/UX Design'
    ],
    client: 'Agência PiU Comunica!',
    year: '2026',
    image: {
      src: '/images/projects/piu/piu-desktop.png',
      alt: 'Notebook exibindo a one page da nova identidade visual da Agência PiU Comunica!, com cores magenta, amarelo e azul.',
      width: 800,
      height: 650,
      mobile: {
        src: '/images/projects/piu/piu-mobile.png',
        width: 342,
        height: 380
      }
    },
    coverVariant: 3,
    page: {
      developedAt: 'Agência PiU Comunica!',
      projectType: 'UI/UX Design',
      introduction: [
        'A Agência PiU Comunica! passou por um processo de rebranding e precisava expor essas mudanças de uma maneira interessante para seus funcionários e clientes.',
        'A solução foi criar uma one page que mostrasse todo o processo de criação e o resultado da nova cara da marca. Nela, centralizamos novo logo, paleta de cores, símbolos e aplicações.',
      ],
      gallery: [
        {
          layout: 'video',
          media: {
            src: '/videos/projects/piu/piu-01.mp4',
            width: 2040,
            height: 1014,
            frameWidth: 1280,
            frameHeight: 636,
            cropLeft: 0.2,
            autoplay: true,
            loop: true,
            muted: true,
            playsInline: true,
          },
        },
        {
          layout: 'full',
          gapBefore: 24,
          media: {
            src: '/images/projects/piu/piu-02.png',
            alt: 'Apresentação vertical da identidade visual PiU: conceito, logotipo, paleta de cores, posicionamento, elementos gráficos e aplicações em canecas, bolsa e cadernos.',
            width: 1280,
            height: 736,
            figmaExport: true,
          },
        },
        {
          layout: 'full',
          gapBefore: 0,
          media: {
            src: '/images/projects/piu/piu-03.png',
            alt: 'Página da identidade PiU com aplicações da marca em itens de papelaria e embalagens.',
            width: 1280,
            height: 801,
            figmaExport: true,
          },
        },
        {
          layout: 'text',
          content: [
            'O desafio consistiu em criar uma página com personalidade para transmitir a nova essência da marca sem complicar a jornada do usuário, deixando tudo fluido e atrativo.',
            'Buscamos trazer as cores vivas e predominantes na identidade visual para a página se adequar às especificações do cliente.',
          ],
        },
        {
          layout: 'full',
          media: {
            src: '/images/projects/piu/piu-04.png',
            alt: 'Apresentação da campanha PiU com fundo magenta, grafismos e elementos da identidade visual.',
            width: 1280,
            height: 935,
            figmaExport: true,
          },
        },
        {
          layout: 'full',
          gapBefore: 0,
          media: {
            src: '/images/projects/piu/piu-05.png',
            alt: 'Composição de produtos promocionais PiU, incluindo canecas, bolsa e cadernos com a identidade visual da marca.',
            width: 1280,
            height: 1664,
            figmaExport: true,
          },
        },
      ],
    },
  },
  {
    title: 'Cartão de crédito Neon',
    homeTitle: 'Neon',
    description: 'Cartão de crédito Neon',
    tags: [],
    id: 'project-neon',
    homeOrder: 1,
    slug: 'neon',
    mobileTitle: 'Neon | Cartão de Crédito',
    type: ['UI Design & Front-end'],
    client: 'Neon',
    year: '2026',
    showOnHome: true,
    image: {
      src: '/images/projects/neon/neon-desktop.png',
      alt: 'Notebook com a landing page do cartão Neon ao lado de um celular com os benefícios do cartão.',
      width: 800,
      height: 650,
      mobile: {
        src: '/images/projects/neon/neon-mobile.png',
        width: 342,
        height: 380,
      },
    },
    page: {
      projectUrl: 'https://giugiup.github.io/neon-card-case/',
      developedAt: 'Case de estudo',
      projectType: 'UI Design & Front-end',
      introduction: [
        'Partindo de uma bench research de experiências digitais do setor, buscamos compreender como diferentes marcas apresentam seus benefícios, explicam condições de crédito e conduzem as pessoas ao longo de uma jornada de contratação.',
        'A análise orientou três desafios centrais para o redesign da landing page do cartão Neon: organizar informações que competem pela atenção, facilitar a compreensão dos benefícios e tornar mais claro o caminho até a solicitação. O objetivo era criar uma experiência mais intuitiva, sem abrir mão da transparência necessária à comunicação de um produto financeiro.',
        'O projeto foi desenvolvido por meio de um processo que integrou design e inteligência artificial, desde a construção dos wireframes até a prototipação de alta fidelidade. Para transformar a proposta em uma experiência funcional, utilizei Astro, VS Code, Codex e GitHub Copilot, com versionamento pelo GitHub.',
      ],
      gallery: [
        {
          layout: 'full',
          media: {
            src: '/images/projects/neon/neon-01.png',
            alt: 'Landing page Neon com benefícios do cartão, Viracrédito, etapas de solicitação e perguntas frequentes.',
            width: 1280,
            height: 712,
            figmaExport: true,
          },
        },
        {
          layout: 'full',
          gapBefore: 0,
          media: {
            src: '/images/projects/neon/neon-02.png',
            alt: 'Dois cartões digitais Neon inclinados sobre fundo em degradê azul e ciano.',
            width: 1280,
            height: 501,
            figmaExport: true,
          },
        },
        {
          layout: 'full',
          gapBefore: 0,
          media: {
            src: '/images/projects/neon/neon-03.png',
            alt: 'Seção da landing page Neon com informações sobre o Viracrédito e recursos do cartão.',
            width: 1280,
            height: 568,
            figmaExport: true,
          },
        },
        {
          layout: 'text',
          content: [
            'A solução foi reorganizar a página em uma narrativa progressiva, começando pelos principais benefícios do cartão e avançando para funcionalidades que exigem mais explicação, como o Viracrédito. Utilizamos uma hierarquia visual mais clara, textos objetivos, ilustrações explicativas e um passo a passo acompanhado de perguntas frequentes para ajudar a esclarecer dúvidas durante a navegação.',
            'Também trabalhamos a identidade visual da Neon para construir uma interface mais leve, acolhedora e consistente. O projeto combina fotografias, elementos tridimensionais, uma paleta vibrante e componentes organizados em grids responsivos, com atenção especial à legibilidade, ao contraste e à experiência mobile.',
          ],
        },
        {
          layout: 'full',
          media: {
            src: '/images/projects/neon/neon-04.png',
            alt: 'Dois cartões digitais Neon inclinados sobre fundo em degradê azul e ciano.',
            width: 1280,
            height: 720,
            figmaExport: true,
          },
        },
        {
          layout: 'three-columns',
          gapBefore: 48,
          items: [
            {
              src: '/images/projects/neon/neon-05.png',
              alt: 'Seção de cartão Neon com benefícios, fotografia de cliente e recurso Fatura Protegida.',
              width: 411,
              height: 798,
              figmaExport: true,
            },
            {
              src: '/images/projects/neon/neon-06.png',
              alt: 'Seção de benefícios do cartão Neon com opções sem anuidade, controle pelo app e cartão virtual.',
              width: 411,
              height: 798,
              figmaExport: true,
            },
            {
              src: '/images/projects/neon/neon-07.png',
              alt: 'Chamada para solicitar o cartão Neon com uma mão segurando o cartão em fundo azul e ciano.',
              width: 411,
              height: 798,
              figmaExport: true,
            },
          ],
        },
        {
          layout: 'text',
          content: 'Mais do que uma atualização estética, este estudo propõe uma maneira mais clara e acessível de apresentar um produto financeiro. Cada escolha, da organização do conteúdo às interações, foi pensada para aproximar informação e experiência, mostrando como o design pode transformar uma jornada potencialmente complexa em algo mais simples, transparente e convidativo.',
        },
      ],
    },
  },
].sort((a, b) => a.homeOrder - b.homeOrder);

export const projectPages = projects.filter(project => project.slug && project.page);
export const publishedProjects = projectPages.filter(project => project.showOnHome !== false);
