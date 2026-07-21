// Dados dos produtos da Linha Fenemê
// Arquivo centralizado para facilitar manutenção

export interface ProdutoFeneme {
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

export const produtosLinhaFeneme: ProdutoFeneme[] = [
    // === SABÃO FENEMÊ ===
    {
        id: 1,
        slug: "sabao-feneme-tradicional-400g",
        nome: "Sabão Fenemê Tradicional",
        categoria: "Sabão Fenemê",
        slogan: "A tradição do Sabão Glicerinado.",
        descricao: "O Sabão Fenemê Tradicional oferece a qualidade clássica do sabão glicerinado para uma limpeza eficiente e cuidado com suas roupas e louças.",
        embalagem: "400g",
        codigo: "AV-SF-001",
        imagem: "/produtos/linha-feneme/sabao-feneme-tradicional-400g.png",
    },
    {
        id: 2,
        slug: "sabao-feneme-plus-neutro-400g",
        nome: "Sabão Fenemê Plus Neutro",
        categoria: "Sabão Fenemê",
        slogan: "Glicerinado Plus Neutro.",
        descricao: "O Sabão Fenemê Plus Neutro combina o poder de limpeza do sabão glicerinado com uma fórmula neutra para diversos usos domésticos.",
        embalagem: "400g",
        codigo: "AV-SF-002",
        imagem: "/produtos/linha-feneme/sabao-feneme-plus-neutro-400g.png",
    },
];

// Função para buscar produto por slug
export function getProductBySlugFeneme(slug: string): ProdutoFeneme | undefined {
    return produtosLinhaFeneme.find((p) => p.slug === slug);
}

// Função para obter todos os slugs (útil para generateStaticParams)
export function getAllProductSlugsFeneme(): string[] {
    return produtosLinhaFeneme.map((p) => p.slug);
}

// Função para agrupar produtos por categoria
export function getProductsByCategoryFeneme(): Record<string, ProdutoFeneme[]> {
    return produtosLinhaFeneme.reduce((acc, produto) => {
        if (!acc[produto.categoria]) {
            acc[produto.categoria] = [];
        }
        acc[produto.categoria].push(produto);
        return acc;
    }, {} as Record<string, ProdutoFeneme[]>);
}
