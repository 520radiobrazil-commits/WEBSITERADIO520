import { Article } from './types';

// Helper para criar datas recentes dinamicamente
const generateRecentDate = (daysAgo: number, hour: number, minute: number): string => {
  const date = new Date('2025-11-15T12:00:00Z');
  date.setDate(date.getDate() - daysAgo);
  date.setHours(hour, minute, Math.floor(Math.random() * 60));
  return date.toISOString();
};

export const MOCK_ARTICLES: Article[] = [
    // --- ARTIGOS DE ESPORTE ---
    {
        category: 'PÓDIO 520',
        topic: 'sport',
        title: 'Lucas Pinheiro faz história e se torna o primeiro brasileiro campeão em etapa da Copa do Mundo de Esqui Alpino',
        slug: 'lucas-pinheiro-historia-esqui-alpino',
        summary: 'O esquiador Lucas Pinheiro fez história ao se tornar o primeiro brasileiro a vencer uma etapa da Copa do Mundo de Esqui Alpino, com uma performance dominante na Finlândia.',
        content: `O esporte brasileiro amanheceu com um feito simplesmente gigante neste domingo. O esquiador Lucas Pinheiro escreveu seu nome na história ao conquistar uma vitória inédita para o país: ele se tornou o primeiro brasileiro campeão de uma etapa da Copa do Mundo de Esqui Alpino... (conteúdo completo do artigo aqui)`,
        imageUrl: 'https://lncimg.lance.com.br/cdn-cgi/image/width=950,quality=75,fit=pad,format=webp/uploads/2025/11/AFP__20251116__847D6AF__v1__HighRes__SkiAlpineWorldFinMenSlalom-scaled.jpg',
        author: 'Equipe RADIO520',
        publishedAt: generateRecentDate(0, 8, 30),
        likes: 1650,
        hashtags: ['#EsquiAlpino', '#LucasPinheiro', '#TimeBrasil'],
        isFeatured: true, // Artigo em destaque na seção de esportes
    },
    {
        category: 'FUTEBOL SHOW 520',
        topic: 'sport',
        title: 'Brasil vence Senegal em Londres com boa atuação coletiva e brilho da nova geração',
        slug: 'brasil-vence-senegal-em-londres-com-boa-atuacao-coletiva',
        summary: 'A Seleção Brasileira venceu Senegal por 2 a 0 em amistoso em Londres, com gols de Estêvão e Casemiro, consolidando a preparação para os próximos compromissos.',
        content: `A Seleção Brasileira fez bem o dever de casa no amistoso desta tarde em Londres e levou a melhor sobre Senegal por 2 a 0, num jogo em que a molecada mostrou personalidade e os veteranos deram a firmeza necessária pra controlar o ritmo... (conteúdo completo do artigo aqui)`,
        imageUrl: 'https://p2.trrsf.com/image/fget/cf/500/0/images.terra.com/2025/11/13/brasil-(8)-1hvb39hddlmih.jpg',
        videoUrl: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4',
        author: 'Equipe RADIO520',
        publishedAt: generateRecentDate(2, 15, 0),
        likes: 1100,
        hashtags: ['#SeleçãoBrasileira', '#Futebol', '#Amistoso'],
    },
     {
        category: 'VOLTA RÁPIDA',
        topic: 'sport',
        title: 'Brasil no topo: Diogo Moreira comemora título mundial ao som de “Charlie Brown”, clássico de Benito de Paula',
        slug: 'diogo-moreira-comemora-titulo-mundial-charlie-brown',
        summary: 'O motociclismo brasileiro vive um momento histórico com a conquista do primeiro título mundial de Diogo Moreira na Moto2.',
        content: `O motociclismo brasileiro vive um momento que muda a história do esporte no país. <strong>Diogo Moreira</strong> conquistou o primeiro título mundial do Brasil, encerrando sua temporada da Moto2 com uma performance sólida em Valência — e uma comemoração absolutamente brasileira dentro do paddock... (conteúdo completo do artigo aqui)`,
        imageUrl: 'https://pbs.twimg.com/media/G539Wp0WUAASsDL?format=jpg&name=large',
        author: 'Equipe RADIO520',
        publishedAt: generateRecentDate(1, 14, 0),
        likes: 1250,
        hashtags: ['#DiogoMoreira', '#Moto2', '#CampeãoMundial'],
    },
    {
        category: 'ACE 520',
        topic: 'sport',
        title: 'Sinner conquista segundo ATP Finals seguido e consolida domínio na nova geração',
        slug: 'sinner-conquista-segundo-atp-finals-seguido-e-consolida-dominio-na-nova-geracao',
        summary: 'Jannik Sinner vence Carlos Alcaraz, conquista o bicampeonato do ATP Finals em Turim e consolida seu domínio na nova geração do tênis masculino.',
        content: `Jannik Sinner confirmou, neste domingo, a fase dominante que vive no circuito ao conquistar seu segundo título consecutivo do Nitto ATP Finals, derrotando Carlos Alcaraz por 7-6 e 7-5, em Turim... (conteúdo completo do artigo aqui)`,
        imageUrl: 'https://www.atptour.com/-/media/images/news/2025/11/16/21/34/sinner-nitto-atp-finals-2025-title-reaction-image.jpg',
        author: 'Análise 520',
        publishedAt: generateRecentDate(0, 7, 0),
        likes: 1400,
        hashtags: ['#ATPFinals', '#Tênis', '#Sinner', '#Alcaraz'],
    },

    // --- ARTIGOS ESPECIAIS ---
    {
        category: 'ESPECIAIS',
        topic: 'special',
        title: 'Billie Eilish surpreende com o lançamento do álbum “HIT ME HARD AND SOFT” e redefine sua sonoridade',
        slug: 'billie-eilish-hit-me-hard-and-soft',
        summary: 'A cantora Billie Eilish lança seu aguardado terceiro álbum de estúdio, "HIT ME HARD AND SOFT", uma obra coesa e sem singles que mergulha em novas profundezas líricas e sonoras.',
        content: `Billie Eilish está de volta e, mais uma vez, provou que não joga para cumprir expectativas. A artista lançou seu terceiro álbum de estúdio, <strong>“HIT ME HARD AND SOFT”</strong>, e a primeira coisa que você precisa saber é: não houve singles. A decisão, ousada para os padrões da indústria, foi proposital para que a obra fosse consumida como uma experiência completa, do início ao fim.<br><br>Co-escrito e produzido por seu irmão, Finneas, o álbum é uma jornada sônica que passeia por diferentes texturas e emoções. Desde a vulnerabilidade de faixas como “SKINNY” até a energia pulsante de “LUNCH”, Eilish explora temas como sexualidade, corpo e fama com uma maturidade lírica ainda mais afiada. A produção é minimalista quando precisa ser, mas explode em arranjos cinematográficos que mostram a evolução da dupla. É um álbum para ser ouvido com fones de ouvido, prestando atenção em cada camada.`,
        imageUrl: 'https://s2-g1.glbimg.com/00P-T5tL0g8O4Y_H-M6c9QZ_oBk=/0x0:1024x1024/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/5/q/S5g0uRQaGz8xH4s3bJtQ/billie-eilish-hit-me-hard-and-soft-capa.jpg',
        author: 'Análise 520',
        publishedAt: generateRecentDate(0, 10, 0),
        likes: 2100,
        hashtags: ['#BillieEilish', '#Lançamento', '#Música'],
        isFeatured: true, 
    },
     {
        category: 'ESPECIAIS',
        topic: 'special',
        title: 'Podcast 520: Analisando as batidas que vão dominar o verão',
        slug: 'podcast-520-batidas-verao',
        summary: 'No novo episódio do Podcast 520, nossos especialistas dissecam as tendências sonoras para o verão, do funk ao afrobeat. Dê o play e prepare sua playlist.',
        content: `O verão está chegando e com ele uma nova trilha sonora. No episódio desta semana do Podcast 520, reunimos nossos especialistas para uma análise profunda do que vai bombar nas pistas e nos fones de ouvido. Discutimos a ascensão do afrobeat no Brasil, a evolução do funk e as colaborações internacionais que prometem agitar a estação. Também montamos uma playlist exclusiva com nossas apostas. Este é o guia definitivo para você não ficar de fora das batidas que vão definir a temporada.`,
        imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        audioUrl: 'https://open.spotify.com/episode/3q8B9gA4sX5bY5Z0w8jX9a',
        author: 'Equipe RADIO520',
        publishedAt: generateRecentDate(1, 18, 0),
        likes: 850,
        hashtags: ['#Podcast', '#Música', '#Verão2025', '#Playlist'],
    },
    {
        category: 'ESPECIAIS',
        topic: 'special',
        title: 'Taylor Swift anuncia nova turnê mundial com foco em estádios na América Latina',
        slug: 'taylor-swift-turne-america-latina',
        summary: 'Após o sucesso avassalador da "The Eras Tour", Taylor Swift confirma novas datas para 2026, incluindo múltiplos shows em estádios no Brasil, Argentina e México.',
        content: `A espera acabou para os Swifties latino-americanos. Taylor Swift anunciou oficialmente a continuação de sua aclamada "The Eras Tour" com uma nova perna dedicada à América Latina em 2026. A megaestrela confirmou shows em São Paulo, Rio de Janeiro, Buenos Aires e Cidade do México, prometendo uma produção ainda maior e setlists com surpresas. A pré-venda de ingressos já tem data para começar e a expectativa é de que os ingressos se esgotem em minutos.`,
        imageUrl: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%33D%3D',
        author: 'Redação 520',
        publishedAt: generateRecentDate(3, 9, 0),
        likes: 3200,
        hashtags: ['#TaylorSwift', '#TheErasTour', '#Showbiz', '#MúsicaAoVivo'],
    },
     {
        category: 'ESPECIAIS',
        topic: 'special',
        title: 'A ascensão do K-Pop no Brasil: como o gênero conquistou uma legião de fãs',
        slug: 'k-pop-no-brasil',
        summary: 'De nicho a fenômeno cultural, o K-Pop se consolidou no Brasil. Entenda as chaves para esse sucesso, dos fandoms organizados ao impacto na moda e comportamento.',
        content: `O K-Pop deixou de ser um nicho para se tornar uma força cultural no Brasil. Grupos como BTS e BLACKPINK não apenas lotam estádios, mas também influenciam a moda, a dança e o comportamento de milhões de jovens. Analisamos como a combinação de produções musicais de alta qualidade, coreografias complexas e uma forte interação com os fãs através das redes sociais criou uma base de seguidores leal e engajada. O fenômeno vai além da música, representando um intercâmbio cultural que veio para ficar.`,
        imageUrl: 'https://images.unsplash.com/photo-1622619339912-7873a6282855?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%33D%3D',
        author: 'Análise 520',
        publishedAt: generateRecentDate(5, 11, 45),
        likes: 1500,
        hashtags: ['#KPop', '#CulturaPop', '#BTS', '#BLACKPINK'],
    },
];