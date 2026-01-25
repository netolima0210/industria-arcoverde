
export interface ProdutoRevolus {
    id: number;
    slug: string;
    nome: string;
    categoria: string;
    slogan?: string;
    descricao: string;
    embalagem: string;
    codigo: string;
    imagem: string;
}

export const produtosLinhaRevolus: ProdutoRevolus[] = [
    // === DETERGENTE CONCENTRADO ===
    {
        id: 1,
        slug: "detergente-clorado-20l",
        nome: "Detergente Concentrado Alcalino Clorado 20L",
        categoria: "Detergente Concentrado",
        slogan: "+Economia +Rendimento",
        descricao: "O Detergente Concentrado Alcalino Clorado Revolus oferece alto rendimento e alta performance para higienização em indústrias no geral, incluindo laticínios e setor alimentício. Bactericida potente.",
        embalagem: "20L",
        codigo: "RV-DC-001",
        imagem: "/produtos/linha-revolus/detergente-clorado-20l.png",
    },
    {
        id: 6,
        slug: "clorado-5l",
        nome: "Detergente Concentrado Alcalino Clorado 5L",
        categoria: "Detergente Concentrado",
        slogan: "+Economia +Rendimento",
        descricao: "O Detergente Concentrado Alcalino Clorado Revolus em versão 5L oferece praticidade e alta performance para higienização em indústrias, laticínios e setor alimentício. Bactericida potente.",
        embalagem: "5L",
        codigo: "RV-DC-006",
        imagem: "/produtos/linha-revolus/clorado-5l.png",
    },
    {
        id: 2,
        slug: "desengordurante-20l",
        nome: "Desengordurante Revolus 20L",
        categoria: "Desengordurante",
        slogan: "+Economia +Rendimento",
        descricao: "O Desengordurante Revolus é um detergente concentrado de alto rendimento, ideal para remoção de gorduras difíceis em cozinhas industriais e superfícies laváveis.",
        embalagem: "20L",
        codigo: "RV-DC-002",
        imagem: "/produtos/linha-revolus/desengordurante-20l.png",
    },
    {
        id: 3,
        slug: "desengordurante-5l",
        nome: "Desengordurante Revolus 5L",
        categoria: "Desengordurante",
        slogan: "+Economia +Rendimento",
        descricao: "O Desengordurante Revolus em versão 5L oferece praticidade e eficiência para limpezas pesadas, removendo gordura com facilidade e economia.",
        embalagem: "5L",
        codigo: "RV-DC-003",
        imagem: "/produtos/linha-revolus/desengordurante-5l.png",
    },
    {
        id: 5,
        slug: "neutro-20l",
        nome: "Detergente Neutro Concentrado 20L",
        categoria: "Detergente Concentrado",
        slogan: "+Economia +Rendimento",
        descricao: "O Detergente Neutro Concentrado Revolus em versão 20L oferece alto rendimento e alta performance para higienização em larga escala de utensílios e superfícies laváveis.",
        embalagem: "20L",
        codigo: "RV-DC-005",
        imagem: "/produtos/linha-revolus/neutro-20l.png",
    },
    {
        id: 4,
        slug: "neutro-5l",
        nome: "Detergente Neutro Concentrado 5L",
        categoria: "Detergente Concentrado",
        slogan: "+Economia +Rendimento",
        descricao: "O Detergente Neutro Concentrado Revolus é ideal para limpeza de utensílios, superfícies laváveis e cozinhas em geral. Indicado para remoção de gorduras e sujeiras diversas.",
        embalagem: "5L",
        codigo: "RV-DC-004",
        imagem: "/produtos/linha-revolus/neutro-5l.png",
    },
];

// Função para buscar produto por slug
export function getProductBySlugRevolus(slug: string): ProdutoRevolus | undefined {
    return produtosLinhaRevolus.find((p) => p.slug === slug);
}

// Função para obter todos os slugs (útil para generateStaticParams)
export function getAllProductSlugsRevolus(): string[] {
    return produtosLinhaRevolus.map((p) => p.slug);
}

// Função para agrupar produtos por categoria
export function getProductsByCategoryRevolus(): Record<string, ProdutoRevolus[]> {
    return produtosLinhaRevolus.reduce((acc, produto) => {
        if (!acc[produto.categoria]) {
            acc[produto.categoria] = [];
        }
        acc[produto.categoria].push(produto);
        return acc;
    }, {} as Record<string, ProdutoRevolus[]>);
}
