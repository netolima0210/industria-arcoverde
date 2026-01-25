// Dados dos produtos da Linha Arcoverde
// Arquivo centralizado para facilitar manutenção

export interface ProdutoArcoVerde {
    id: number;
    slug: string;
    nome: string;
    categoria: string;
    slogan?: string;
    descricao: string;
    embalagem: string;
    codigo?: string;
    imagem: string;
}

export const produtosLinhaArcoVerde: ProdutoArcoVerde[] = [
    // === AMACIANTES (agrupados por fragrância: Floral 5L + 1.8L, Aconchego 5L + 1.8L) ===
    {
        id: 1,
        slug: "amaciante-floral-5l",
        nome: "Amaciante Floral 5L",
        categoria: "Amaciantes",
        slogan: "Maciez e perfume por mais tempo!",
        descricao: "O Amaciante Arcoverde Floral deixa suas roupas extremamente macias e perfumadas por muito mais tempo. Sua fórmula especial cuida das fibras dos tecidos, proporcionando conforto e frescor a cada uso.",
        embalagem: "5L",
        codigo: "AV-AM-001",
        imagem: "/produtos/linha-arcoverde/amaciante-floral-5l.png",
    },
    {
        id: 2,
        slug: "amaciante-floral-1-8l",
        nome: "Amaciante Floral 1,8L",
        categoria: "Amaciantes",
        slogan: "Maciez e perfume por mais tempo!",
        descricao: "O Amaciante Arcoverde Floral deixa suas roupas extremamente macias e perfumadas por muito mais tempo. Sua fórmula especial cuida das fibras dos tecidos, proporcionando conforto e frescor a cada uso.",
        embalagem: "1,8L",
        codigo: "AV-AM-002",
        imagem: "/produtos/linha-arcoverde/amaciante-floral-1-8l.png",
    },
    {
        id: 3,
        slug: "amaciante-aconchego-5l",
        nome: "Amaciante Aconchego 5L",
        categoria: "Amaciantes",
        slogan: "Maciez e perfume por mais tempo!",
        descricao: "O Amaciante Arcoverde Aconchego proporciona maciez incomparável e um aroma suave e acolhedor que permanece nas roupas por muito tempo. Perfeito para quem busca conforto e frescor.",
        embalagem: "5L",
        codigo: "AV-AM-003",
        imagem: "/produtos/linha-arcoverde/amaciante-aconchego-5l.png",
    },
    {
        id: 4,
        slug: "amaciante-aconchego-1-8l",
        nome: "Amaciante Aconchego 1,8L",
        categoria: "Amaciantes",
        slogan: "Maciez e perfume por mais tempo!",
        descricao: "O Amaciante Arcoverde Aconchego proporciona maciez incomparável e um aroma suave e acolhedor que permanece nas roupas por muito tempo. Perfeito para quem busca conforto e frescor.",
        embalagem: "1,8L",
        codigo: "AV-AM-004",
        imagem: "/produtos/linha-arcoverde/amaciante-aconchego-1-8l.png",
    },

    // === LAVA-ROUPAS (agrupados por fragrância: 5L + 1.8L) ===
    {
        id: 5,
        slug: "lava-roupas-floral-5l",
        nome: "Lava-Roupas Floral 5L",
        categoria: "Lava-Roupas",
        slogan: "Cores brilhantes, brancos impecáveis, protege os tecidos.",
        descricao: "O Lava-Roupas Arcoverde Floral oferece limpeza profunda e fragrância duradoura. Remove manchas difíceis enquanto cuida dos tecidos, deixando suas roupas com um perfume floral encantador.",
        embalagem: "5L",
        codigo: "AV-LR-001",
        imagem: "/produtos/linha-arcoverde/lava-roupas-floral-5l.png",
    },
    {
        id: 6,
        slug: "lava-roupas-floral-1-8l",
        nome: "Lava-Roupas Floral 1,8L",
        categoria: "Lava-Roupas",
        slogan: "Cores brilhantes, brancos impecáveis, protege os tecidos.",
        descricao: "O Lava-Roupas Arcoverde Floral oferece limpeza profunda e fragrância duradoura. Remove manchas difíceis enquanto cuida dos tecidos, deixando suas roupas com um perfume floral encantador.",
        embalagem: "1,8L",
        codigo: "AV-LR-002",
        imagem: "/produtos/linha-arcoverde/lava-roupas-floral-1-8l.png",
    },
    {
        id: 7,
        slug: "lava-roupas-aconchego-5l",
        nome: "Lava-Roupas Aconchego 5L",
        categoria: "Lava-Roupas",
        slogan: "Cores brilhantes, brancos impecáveis, protege os tecidos.",
        descricao: "O Lava-Roupas Arcoverde Aconchego proporciona limpeza eficiente com um aroma suave e acolhedor que permanece nas roupas por muito tempo.",
        embalagem: "5L",
        codigo: "AV-LR-003",
        imagem: "/produtos/linha-arcoverde/lava-roupas-aconchego-5l.png",
    },
    {
        id: 10,
        slug: "lava-roupas-aconchego-1-8l",
        nome: "Lava-Roupas Aconchego 1,8L",
        categoria: "Lava-Roupas",
        slogan: "Cores brilhantes, brancos impecáveis, protege os tecidos.",
        descricao: "O Lava-Roupas Arcoverde Aconchego proporciona limpeza eficiente com um aroma suave e acolhedor que permanece nas roupas por muito tempo.",
        embalagem: "1,8L",
        codigo: "AV-LR-006",
        imagem: "/produtos/linha-arcoverde/lava-roupas-aconchego-1-8l.png",
    },
    {
        id: 8,
        slug: "lava-roupas-coco-5l",
        nome: "Lava-Roupas Coco 5L",
        categoria: "Lava-Roupas",
        slogan: "Cores brilhantes, brancos impecáveis, protege os tecidos.",
        descricao: "O Lava-Roupas Arcoverde Coco combina o poder de limpeza com a fragrância tropical e refrescante do coco. Perfeito para roupas impecavelmente limpas.",
        embalagem: "5L",
        codigo: "AV-LR-004",
        imagem: "/produtos/linha-arcoverde/lava-roupas-coco-5l.png",
    },
    {
        id: 9,
        slug: "lava-roupas-coco-1-8l",
        nome: "Lava-Roupas Coco 1,8L",
        categoria: "Lava-Roupas",
        slogan: "Cores brilhantes, brancos impecáveis, protege os tecidos.",
        descricao: "O Lava-Roupas Arcoverde Coco combina o poder de limpeza com a fragrância tropical e refrescante do coco. Perfeito para roupas impecavelmente limpas.",
        embalagem: "1,8L",
        codigo: "AV-LR-005",
        imagem: "/produtos/linha-arcoverde/lava-roupas-coco-1-8l.png",
    },

    // === LIMPA ALUMÍNIO ===
    {
        id: 11,
        slug: "limpa-aluminio-500ml",
        nome: "Limpa Alumínio 500ml",
        categoria: "Limpa Alumínio",
        slogan: "Brilho intenso em suas panelas.",
        descricao: "O Limpa Alumínio Arcoverde devolve o brilho original das suas panelas e utensílios de alumínio, removendo manchas e escurecimento com facilidade.",
        embalagem: "500ml",
        codigo: "AV-LA-001",
        imagem: "/produtos/linha-arcoverde/limpa-aluminio-500ml.png",
    },

    // === LAVA-LOUÇAS (agrupados por fragrância: 5L + 1.8L) ===
    {
        id: 12,
        slug: "lava-loucas-limao-5l",
        nome: "Lava-Louças Limão 5L",
        categoria: "Lava-Louças",
        slogan: "Excelente na remoção de gorduras e sujeiras.",
        descricao: "O Lava-Louças Arcoverde Limão oferece alto poder de limpeza e desengordurante com aroma refrescante de limão. Remove com facilidade as sujeiras mais difíceis das suas louças.",
        embalagem: "5L",
        codigo: "AV-LL-001",
        imagem: "/produtos/linha-arcoverde/lava-loucas-limao-5l.png",
    },
    {
        id: 13,
        slug: "lava-loucas-limao-1-8l",
        nome: "Lava-Louças Limão 1,8L",
        categoria: "Lava-Louças",
        slogan: "Excelente na remoção de gorduras e sujeiras.",
        descricao: "O Lava-Louças Arcoverde Limão oferece alto poder de limpeza e desengordurante com aroma refrescante de limão. Remove com facilidade as sujeiras mais difíceis das suas louças.",
        embalagem: "1,8L",
        codigo: "AV-LL-002",
        imagem: "/produtos/linha-arcoverde/lava-loucas-limao-1-8l.png",
    },
    {
        id: 14,
        slug: "lava-loucas-maca-5l",
        nome: "Lava-Louças Maçã 5L",
        categoria: "Lava-Louças",
        slogan: "Excelente na remoção de gorduras e sujeiras.",
        descricao: "O Lava-Louças Arcoverde Maçã combina poder desengordurante com uma fragrância doce e agradável de maçã. Louças brilhantes e perfumadas.",
        embalagem: "5L",
        codigo: "AV-LL-003",
        imagem: "/produtos/linha-arcoverde/lava-loucas-maca-5l.png",
    },
    {
        id: 15,
        slug: "lava-loucas-maca-1-8l",
        nome: "Lava-Louças Maçã 1,8L",
        categoria: "Lava-Louças",
        slogan: "Excelente na remoção de gorduras e sujeiras.",
        descricao: "O Lava-Louças Arcoverde Maçã combina poder desengordurante com uma fragrância doce e agradável de maçã. Louças brilhantes e perfumadas.",
        embalagem: "1,8L",
        codigo: "AV-LL-004",
        imagem: "/produtos/linha-arcoverde/lava-loucas-maca-1-8l.png",
    },
    {
        id: 16,
        slug: "lava-loucas-neutro-5l",
        nome: "Lava-Louças Neutro 5L",
        categoria: "Lava-Louças",
        slogan: "Excelente na remoção de gorduras e sujeiras.",
        descricao: "O Lava-Louças Arcoverde Neutro oferece alto poder de limpeza sem fragrância adicionada. Ideal para quem prefere um produto sem perfume.",
        embalagem: "5L",
        codigo: "AV-LL-005",
        imagem: "/produtos/linha-arcoverde/lava-loucas-neutro-5l.png",
    },
    {
        id: 17,
        slug: "lava-loucas-neutro-1-8l",
        nome: "Lava-Louças Neutro 1,8L",
        categoria: "Lava-Louças",
        slogan: "Excelente na remoção de gorduras e sujeiras.",
        descricao: "O Lava-Louças Arcoverde Neutro oferece alto poder de limpeza sem fragrância adicionada. Ideal para quem prefere um produto sem perfume.",
        embalagem: "1,8L",
        codigo: "AV-LL-006",
        imagem: "/produtos/linha-arcoverde/lava-loucas-neutro-1-8l.png",
    },
    {
        id: 18,
        slug: "lava-loucas-melancia-500ml",
        nome: "Lava-Louças Melancia 500ml",
        categoria: "Lava-Louças",
        slogan: "Super rendimento.",
        descricao: "O Lava-Louças Arcoverde Melancia combina poder desengordurante com uma fragrância refrescante de melancia. Prático e econômico.",
        embalagem: "500ml",
        codigo: "AV-LL-007",
        imagem: "/produtos/linha-arcoverde/lava-loucas-melancia-500ml.png",
    },
    {
        id: 19,
        slug: "lava-loucas-uva-500ml",
        nome: "Lava-Louças Uva 500ml",
        categoria: "Lava-Louças",
        slogan: "Super rendimento.",
        descricao: "O Lava-Louças Arcoverde Uva oferece alto poder de limpeza com uma fragrância doce e marcante de uva. Prático e econômico.",
        embalagem: "500ml",
        codigo: "AV-LL-008",
        imagem: "/produtos/linha-arcoverde/lava-loucas-uva-500ml.png",
    },
    {
        id: 20,
        slug: "lava-loucas-maca-verde-500ml",
        nome: "Lava-Louças Maçã Verde 500ml",
        categoria: "Lava-Louças",
        slogan: "Super rendimento.",
        descricao: "O Lava-Louças Arcoverde Maçã Verde combina poder desengordurante com uma fragrância fresca e cítrica. Prático e econômico.",
        embalagem: "500ml",
        codigo: "AV-LL-009",
        imagem: "/produtos/linha-arcoverde/lava-loucas-maca-verde-500ml.png",
    },

    // === LIMPADOR PERFUMADO ===
    {
        id: 21,
        slug: "limpador-perfumado-lavanda-1-8l",
        nome: "Limpador Perfumado Lavanda 1,8L",
        categoria: "Limpador Perfumado",
        slogan: "Sua casa perfumada por mais tempo.",
        descricao: "O Limpador Perfumado Arcoverde Lavanda limpa e perfuma os ambientes, deixando sua casa com o aroma relaxante e duradouro de lavanda.",
        embalagem: "1,8L",
        codigo: "AV-LP-001",
        imagem: "/produtos/linha-arcoverde/limpador-perfumado-lavanda-1-8l.png",
    },
    {
        id: 22,
        slug: "limpador-perfumado-talco-1-8l",
        nome: "Limpador Perfumado Talco 1,8L",
        categoria: "Limpador Perfumado",
        slogan: "Sua casa perfumada por mais tempo.",
        descricao: "O Limpador Perfumado Arcoverde Talco limpa e perfuma os ambientes com uma fragrância suave e acolhedora de talco.",
        embalagem: "1,8L",
        codigo: "AV-LP-002",
        imagem: "/produtos/linha-arcoverde/limpador-perfumado-talco-1-8l.png",
    },
    {
        id: 23,
        slug: "limpador-perfumado-herbal-1-8l",
        nome: "Limpador Perfumado Herbal 1,8L",
        categoria: "Limpador Perfumado",
        slogan: "Sua casa perfumada por mais tempo.",
        descricao: "O Limpador Perfumado Arcoverde Herbal limpa e perfuma os ambientes com uma fragrância natural e refrescante de ervas.",
        embalagem: "1,8L",
        codigo: "AV-LP-003",
        imagem: "/produtos/linha-arcoverde/limpador-perfumado-herbal-1-8l.png",
    },
    {
        id: 24,
        slug: "limpador-perfumado-brisa-do-mar-1-8l",
        nome: "Limpador Perfumado Brisa do Mar 1,8L",
        categoria: "Limpador Perfumado",
        slogan: "Sua casa perfumada por mais tempo.",
        descricao: "O Limpador Perfumado Arcoverde Brisa do Mar limpa e perfuma os ambientes com uma fragrância fresca e refrescante do oceano.",
        embalagem: "1,8L",
        codigo: "AV-LP-004",
        imagem: "/produtos/linha-arcoverde/limpador-perfumado-brisa-do-mar-1-8l.png",
    },

    // === PASTILHA Arcoverde ===
    {
        id: 25,
        slug: "pastilha-floral",
        nome: "Pastilha Sanitária Floral",
        categoria: "Pastilha Arcoverde",
        slogan: "Seu banheiro sempre limpo e perfumado.",
        descricao: "A Pastilha Sanitária Arcoverde Floral mantém seu vaso sanitário limpo, higienizado e perfumado com uma deliciosa fragrância a cada descarga.",
        embalagem: "30g",
        codigo: "AV-PS-001",
        imagem: "/produtos/linha-arcoverde/pastilha-floral.png",
    },
    {
        id: 26,
        slug: "pastilha-lavanda",
        nome: "Pastilha Sanitária Lavanda",
        categoria: "Pastilha Arcoverde",
        slogan: "Seu banheiro sempre limpo e perfumado.",
        descricao: "A Pastilha Sanitária Arcoverde Lavanda mantém seu vaso sanitário limpo e higienizado, deixando um aroma relaxante de lavanda.",
        embalagem: "30g",
        codigo: "AV-PS-002",
        imagem: "/produtos/linha-arcoverde/pastilha-lavanda.png",
    },
    {
        id: 27,
        slug: "pastilha-eucalipto",
        nome: "Pastilha Sanitária Eucalipto",
        categoria: "Pastilha Arcoverde",
        slogan: "Seu banheiro sempre limpo e perfumado.",
        descricao: "A Pastilha Sanitária Arcoverde Eucalipto proporciona uma limpeza refrescante e um aroma revigorante a cada descarga.",
        embalagem: "30g",
        codigo: "AV-PS-003",
        imagem: "/produtos/linha-arcoverde/pastilha-eucalipto.png",
    },
    {
        id: 28,
        slug: "pastilha-brisa-do-mar",
        nome: "Pastilha Sanitária Brisa do Mar",
        categoria: "Pastilha Arcoverde",
        slogan: "Seu banheiro sempre limpo e perfumado.",
        descricao: "A Pastilha Sanitária Arcoverde Brisa do Mar mantém o vaso sanitário limpo com a refrescância marcante do oceano.",
        embalagem: "30g",
        codigo: "AV-PS-004",
        imagem: "/produtos/linha-arcoverde/pastilha-brisa-do-mar.png",
    },

    // === SABÃO Arcoverde MULTIUSO ===
    {
        id: 29,
        slug: "sabao-multiuso-classico",
        nome: "Sabão Arcoverde Multiuso Clássico",
        categoria: "Sabão Arcoverde Multiuso",
        slogan: "Todo o poder do Bicarbonato de Sódio!",
        descricao: "O Sabão Arcoverde Multiuso Clássico oferece todo o poder do Bicarbonato de Sódio para uma limpeza imbatível em manchas, louças, panelas e odores. Glicerinado e eficiente.",
        embalagem: "800g (5x160g)",
        codigo: "AV-SM-001",
        imagem: "/produtos/linha-arcoverde/sabao-multiuso-classico.png",
    },
    {
        id: 30,
        slug: "sabao-multiuso-floral",
        nome: "Sabão Arcoverde Multiuso Floral",
        categoria: "Sabão Arcoverde Multiuso",
        slogan: "Todo o poder do Bicarbonato de Sódio!",
        descricao: "O Sabão Arcoverde Multiuso Floral combina a eficiência do Bicarbonato de Sódio com uma suave fragrância floral. Perfeito para remover manchas e eliminar odores indesejados.",
        embalagem: "800g (5x160g)",
        codigo: "AV-SM-002",
        imagem: "/produtos/linha-arcoverde/sabao-multiuso-floral.png",
    },
    {
        id: 31,
        slug: "sabao-multiuso-limao",
        nome: "Sabão Arcoverde Multiuso Limão",
        categoria: "Sabão Arcoverde Multiuso",
        slogan: "Todo o poder do Bicarbonato de Sódio!",
        descricao: "O Sabão Arcoverde Multiuso Limão traz a refrescância do limão aliada ao poder de limpeza do Bicarbonato de Sódio. Imbatível na limpeza pesada de panelas e louças.",
        embalagem: "800g (5x160g)",
        codigo: "AV-SM-003",
        imagem: "/produtos/linha-arcoverde/sabao-multiuso-limao.png",
    },

    // === SABÃO Arcoverde ===
    {
        id: 32,
        slug: "sabao-extra-400g",
        nome: "Sabão Arcoverde Extra",
        categoria: "Sabão Arcoverde",
        slogan: "Glicerinado e potente.",
        descricao: "O Sabão Arcoverde Extra oferece uma limpeza profunda para diversos usos, garantindo eficiência e cuidado com as mãos.",
        embalagem: "400g",
        codigo: "AV-SA-001",
        imagem: "/produtos/linha-arcoverde/sabao-extra-400g.png",
    },
    {
        id: 33,
        slug: "sabao-plus-limao-400g",
        nome: "Sabão Arcoverde Plus Limão",
        categoria: "Sabão Arcoverde",
        slogan: "Glicerinado Plus Limão.",
        descricao: "O Sabão Arcoverde Plus Limão combina o poder de limpeza glicerinada com o frescor cítrico do limão.",
        embalagem: "400g",
        codigo: "AV-SA-002",
        imagem: "/produtos/linha-arcoverde/sabao-plus-limao-400g.png",
    },
    {
        id: 34,
        slug: "sabao-tradicional-400g",
        nome: "Sabão Arcoverde Tradicional",
        categoria: "Sabão Arcoverde",
        slogan: "Glicerinado e Tradicional.",
        descricao: "O Sabão Arcoverde Tradicional é o clássico indispensável para a limpeza de roupas e utensílios domésticos.",
        embalagem: "400g",
        codigo: "AV-SA-003",
        imagem: "/produtos/linha-arcoverde/sabao-tradicional-400g.png",
    },

    // === SABÃO FENEME ===
    {
        id: 35,
        slug: "sabao-feneme-tradicional-400g",
        nome: "Sabão Fenemê Tradicional",
        categoria: "Sabão Feneme",
        slogan: "A tradição do Sabão Glicerinado.",
        descricao: "O Sabão Fenemê Tradicional oferece a qualidade clássica do sabão glicerinado para uma limpeza eficiente e cuidado com suas roupas e louças.",
        embalagem: "400g",
        codigo: "AV-SF-001",
        imagem: "/produtos/linha-arcoverde/sabao-feneme-tradicional-400g.png",
    },
    {
        id: 36,
        slug: "sabao-feneme-plus-neutro-400g",
        nome: "Sabão Fenemê Plus Neutro",
        categoria: "Sabão Feneme",
        slogan: "Glicerinado Plus Neutro.",
        descricao: "O Sabão Fenemê Plus Neutro combina o poder de limpeza do sabão glicerinado com uma fórmula neutra para diversos usos domésticos.",
        embalagem: "400g",
        codigo: "AV-SF-002",
        imagem: "/produtos/linha-arcoverde/sabao-feneme-plus-neutro-400g.png",
    },

    // === NAFTALINA ===
    {
        id: 37,
        slug: "naftalina-30g",
        nome: "Naftalina Arcoverde",
        categoria: "Naftalina",
        slogan: "Proteção contra traças e insetos.",
        descricao: "A Naftalina Arcoverde protege suas roupas e armários contra traças, baratas e outros insetos indesejados. 100% Naftalina pura.",
        embalagem: "30g",
        codigo: "AV-NF-001",
        imagem: "/produtos/linha-arcoverde/naftalina-30g.png",
    },
];

// Função para buscar produto por slug
export function getProductBySlugArcoVerde(slug: string): ProdutoArcoVerde | undefined {
    return produtosLinhaArcoVerde.find((p) => p.slug === slug);
}

// Função para obter todos os slugs (útil para generateStaticParams)
export function getAllProductSlugsArcoVerde(): string[] {
    return produtosLinhaArcoVerde.map((p) => p.slug);
}

// Função para agrupar produtos por categoria
export function getProductsByCategoryArcoVerde(): Record<string, ProdutoArcoVerde[]> {
    return produtosLinhaArcoVerde.reduce((acc, produto) => {
        if (!acc[produto.categoria]) {
            acc[produto.categoria] = [];
        }
        acc[produto.categoria].push(produto);
        return acc;
    }, {} as Record<string, ProdutoArcoVerde[]>);
}
