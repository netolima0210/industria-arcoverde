// Dados dos produtos da Linha Riso
// Arquivo centralizado para facilitar manutenção

export interface Produto {
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

export const produtosLinhaRiso: Produto[] = [
    // === LAVA-LOUÇAS ===
    {
        id: 1,
        slug: "lava-loucas-neutro-500ml",
        nome: "Lava-Louças Neutro 500ml",
        categoria: "Lava-Louças",
        descricao: "O Lava-Louças Riso oferece alto poder de limpeza e desengordurante, removendo com facilidade as sujeiras mais difíceis das suas louças. Sua fórmula suave cuida das suas mãos enquanto proporciona um brilho impecável em pratos, copos e talheres. Disponível nas fragrâncias Neutro, Limão e Maçã, deixa sua cozinha perfumada e suas louças impecavelmente limpas.",
        embalagem: "500ml",
        codigo: "102177",
        imagem: "/produtos/linha-riso/lava-loucas-neutro-500ml.png",
    },
    {
        id: 2,
        slug: "lava-loucas-limao-500ml",
        nome: "Lava-Louças Limão 500ml",
        categoria: "Lava-Louças",
        descricao: "O Lava-Louças Riso oferece alto poder de limpeza e desengordurante, removendo com facilidade as sujeiras mais difíceis das suas louças. Sua fórmula suave cuida das suas mãos enquanto proporciona um brilho impecável em pratos, copos e talheres. Disponível nas fragrâncias Neutro, Limão e Maçã, deixa sua cozinha perfumada e suas louças impecavelmente limpas.",
        embalagem: "500ml",
        codigo: "102188",
        imagem: "/produtos/linha-riso/lava-loucas-limao-500ml.png",
    },
    {
        id: 3,
        slug: "lava-loucas-maca-500ml",
        nome: "Lava-Louças Maçã 500ml",
        categoria: "Lava-Louças",
        descricao: "O Lava-Louças Riso oferece alto poder de limpeza e desengordurante, removendo com facilidade as sujeiras mais difíceis das suas louças. Sua fórmula suave cuida das suas mãos enquanto proporciona um brilho impecável em pratos, copos e talheres. Disponível nas fragrâncias Neutro, Limão e Maçã, deixa sua cozinha perfumada e suas louças impecavelmente limpas.",
        embalagem: "500ml",
        codigo: "102199",
        imagem: "/produtos/linha-riso/lava-loucas-maca-500ml.png",
    },

    // === PASTILHA SANITÁRIA ===
    {
        id: 4,
        slug: "pastilha-sanitaria-brisa-do-mar",
        nome: "Pastilha Sanitária Brisa do Mar 30g",
        categoria: "Pastilha Sanitária Riso",
        slogan: "Seu banheiro livre de odores.",
        descricao: "A Pastilha Sanitária Riso mantém seu vaso sanitário limpo, higienizado e perfumado a cada descarga, eliminando odores desagradáveis. Sua fórmula de longa duração garante frescor contínuo e praticidade no dia a dia, sem esforço. Disponível em quatro fragrâncias refrescantes: Brisa do Mar, Floral, Lavanda e Eucalipto.",
        embalagem: "30g",
        codigo: "10088",
        imagem: "/produtos/linha-riso/pastilha-sanitaria-brisa-do-mar.png",
    },
    {
        id: 5,
        slug: "pastilha-sanitaria-floral",
        nome: "Pastilha Sanitária Floral 30g",
        categoria: "Pastilha Sanitária Riso",
        slogan: "Seu banheiro livre de odores.",
        descricao: "A Pastilha Sanitária Riso mantém seu vaso sanitário limpo, higienizado e perfumado a cada descarga, eliminando odores desagradáveis. Sua fórmula de longa duração garante frescor contínuo e praticidade no dia a dia, sem esforço. Disponível em quatro fragrâncias refrescantes: Brisa do Mar, Floral, Lavanda e Eucalipto.",
        embalagem: "30g",
        codigo: "10066",
        imagem: "/produtos/linha-riso/pastilha-sanitaria-floral.png",
    },
    {
        id: 6,
        slug: "pastilha-sanitaria-lavanda",
        nome: "Pastilha Sanitária Lavanda 30g",
        categoria: "Pastilha Sanitária Riso",
        slogan: "Seu banheiro livre de odores.",
        descricao: "A Pastilha Sanitária Riso mantém seu vaso sanitário limpo, higienizado e perfumado a cada descarga, eliminando odores desagradáveis. Sua fórmula de longa duração garante frescor contínuo e praticidade no dia a dia, sem esforço. Disponível em quatro fragrâncias refrescantes: Brisa do Mar, Floral, Lavanda e Eucalipto.",
        embalagem: "30g",
        codigo: "10055",
        imagem: "/produtos/linha-riso/pastilha-sanitaria-lavanda.png",
    },
    {
        id: 7,
        slug: "pastilha-sanitaria-eucalipto",
        nome: "Pastilha Sanitária Eucalipto 30g",
        categoria: "Pastilha Sanitária Riso",
        slogan: "Seu banheiro livre de odores.",
        descricao: "A Pastilha Sanitária Riso mantém seu vaso sanitário limpo, higienizado e perfumado a cada descarga, eliminando odores desagradáveis. Sua fórmula de longa duração garante frescor contínuo e praticidade no dia a dia, sem esforço. Disponível em quatro fragrâncias refrescantes: Brisa do Mar, Floral, Lavanda e Eucalipto.",
        embalagem: "30g",
        codigo: "10077",
        imagem: "/produtos/linha-riso/pastilha-sanitaria-eucalipto.png",
    },

    // === NAFTALINA ===
    {
        id: 8,
        slug: "naftalina-riso-30g",
        nome: "Naftalina Riso 30g",
        categoria: "Naftalina Riso",
        slogan: "Protege contra traças e baratas.",
        descricao: "A Naftalina Riso é a solução eficaz para proteger suas roupas, armários e ambientes contra traças, baratas e outros insetos indesejados. Sua ação prolongada garante proteção duradoura, mantendo seus pertences livres de danos causados por pragas. Ideal para guarda-roupas, cômodas, malas e depósitos.",
        embalagem: "30g",
        codigo: "100444",
        imagem: "/produtos/linha-riso/naftalina-riso-30g.png",
    },

    // === DESINFETANTES ===
    {
        id: 9,
        slug: "desinfetante-lavanda-5l",
        nome: "Desinfetante Lavanda 5L",
        categoria: "Desinfetantes",
        slogan: "Desinfeta e perfuma o seu lar.",
        descricao: "O Desinfetante Riso elimina 99,9% dos germes e bactérias, garantindo um ambiente limpo, higienizado e seguro para toda a família. Sua fragrância marcante e duradoura perfuma os ambientes por muito mais tempo, trazendo sensação de frescor e bem-estar. Disponível em quatro aromas irresistíveis: Lavanda, Talco, Brisa do Mar e Herbal.",
        embalagem: "5L",
        codigo: "1026",
        imagem: "/produtos/linha-riso/desinfetante-lavanda-5l.png",
    },
    {
        id: 10,
        slug: "desinfetante-lavanda-1-8l",
        nome: "Desinfetante Lavanda 1,8L",
        categoria: "Desinfetantes",
        slogan: "Desinfeta e perfuma o seu lar.",
        descricao: "O Desinfetante Riso elimina 99,9% dos germes e bactérias, garantindo um ambiente limpo, higienizado e seguro para toda a família. Sua fragrância marcante e duradoura perfuma os ambientes por muito mais tempo, trazendo sensação de frescor e bem-estar. Disponível em quatro aromas irresistíveis: Lavanda, Talco, Brisa do Mar e Herbal.",
        embalagem: "1,8L",
        codigo: "1012",
        imagem: "/produtos/linha-riso/desinfetante-lavanda-1-8l.png",
    },
    {
        id: 11,
        slug: "desinfetante-talco-5l",
        nome: "Desinfetante Talco 5L",
        categoria: "Desinfetantes",
        slogan: "Desinfeta e perfuma o seu lar.",
        descricao: "O Desinfetante Riso elimina 99,9% dos germes e bactérias, garantindo um ambiente limpo, higienizado e seguro para toda a família. Sua fragrância marcante e duradoura perfuma os ambientes por muito mais tempo, trazendo sensação de frescor e bem-estar. Disponível em quatro aromas irresistíveis: Lavanda, Talco, Brisa do Mar e Herbal.",
        embalagem: "5L",
        codigo: "1028",
        imagem: "/produtos/linha-riso/desinfetante-talco-5l.png",
    },
    {
        id: 12,
        slug: "desinfetante-talco-1-8l",
        nome: "Desinfetante Talco 1,8L",
        categoria: "Desinfetantes",
        slogan: "Desinfeta e perfuma o seu lar.",
        descricao: "O Desinfetante Riso elimina 99,9% dos germes e bactérias, garantindo um ambiente limpo, higienizado e seguro para toda a família. Sua fragrância marcante e duradoura perfuma os ambientes por muito mais tempo, trazendo sensação de frescor e bem-estar. Disponível em quatro aromas irresistíveis: Lavanda, Talco, Brisa do Mar e Herbal.",
        embalagem: "1,8L",
        codigo: "1013",
        imagem: "/produtos/linha-riso/desinfetante-talco-1-8l.png",
    },
    {
        id: 13,
        slug: "desinfetante-brisa-do-mar-5l",
        nome: "Desinfetante Brisa do Mar 5L",
        categoria: "Desinfetantes",
        slogan: "Desinfeta e perfuma o seu lar.",
        descricao: "O Desinfetante Riso elimina 99,9% dos germes e bactérias, garantindo um ambiente limpo, higienizado e seguro para toda a família. Sua fragrância marcante e duradoura perfuma os ambientes por muito mais tempo, trazendo sensação de frescor e bem-estar. Disponível em quatro aromas irresistíveis: Lavanda, Talco, Brisa do Mar e Herbal.",
        embalagem: "5L",
        codigo: "1031",
        imagem: "/produtos/linha-riso/desinfetante-5l.png",
    },
    {
        id: 14,
        slug: "desinfetante-brisa-do-mar-1-8l",
        nome: "Desinfetante Brisa do Mar 1,8L",
        categoria: "Desinfetantes",
        slogan: "Desinfeta e perfuma o seu lar.",
        descricao: "O Desinfetante Riso elimina 99,9% dos germes e bactérias, garantindo um ambiente limpo, higienizado e seguro para toda a família. Sua fragrância marcante e duradoura perfuma os ambientes por muito mais tempo, trazendo sensação de frescor e bem-estar. Disponível em quatro aromas irresistíveis: Lavanda, Talco, Brisa do Mar e Herbal.",
        embalagem: "1,8L",
        codigo: "1015",
        imagem: "/produtos/linha-riso/desinfetante-1-8l.png",
    },
    {
        id: 15,
        slug: "desinfetante-herbal-5l",
        nome: "Desinfetante Herbal 5L",
        categoria: "Desinfetantes",
        slogan: "Desinfeta e perfuma o seu lar.",
        descricao: "O Desinfetante Riso elimina 99,9% dos germes e bactérias, garantindo um ambiente limpo, higienizado e seguro para toda a família. Sua fragrância marcante e duradoura perfuma os ambientes por muito mais tempo, trazendo sensação de frescor e bem-estar. Disponível em quatro aromas irresistíveis: Lavanda, Talco, Brisa do Mar e Herbal.",
        embalagem: "5L",
        codigo: "1027",
        imagem: "/produtos/linha-riso/desinfetante-herbal-5l.png",
    },
    {
        id: 16,
        slug: "desinfetante-herbal-1-8l",
        nome: "Desinfetante Herbal 1,8L",
        categoria: "Desinfetantes",
        slogan: "Desinfeta e perfuma o seu lar.",
        descricao: "O Desinfetante Riso elimina 99,9% dos germes e bactérias, garantindo um ambiente limpo, higienizado e seguro para toda a família. Sua fragrância marcante e duradoura perfuma os ambientes por muito mais tempo, trazendo sensação de frescor e bem-estar. Disponível em quatro aromas irresistíveis: Lavanda, Talco, Brisa do Mar e Herbal.",
        embalagem: "1,8L",
        codigo: "1014",
        imagem: "/produtos/linha-riso/desinfetante-herbal-1-8l.png",
    },

    // === SABÃO TRADICIONAL ===
    {
        id: 17,
        slug: "sabao-tradicional-amarelo-800g",
        nome: "Sabão Tradicional Amarelo 800g",
        categoria: "Sabão Riso Tradicional",
        slogan: "Remove toda a sujeira!",
        descricao: "O Sabão Riso Tradicional possui fórmula potente que remove até as manchas mais difíceis, deixando suas roupas impecavelmente limpas e cheirosas. Ideal para lavagem à mão ou na máquina, oferece excelente custo-benefício e rendimento superior. Tradição e qualidade que cuidam das suas roupas e do seu bolso.",
        embalagem: "800g",
        codigo: "103030",
        imagem: "/produtos/linha-riso/sabao-tradicional-amarelo-800g.png",
    },
    {
        id: 18,
        slug: "sabao-tradicional-verde-800g",
        nome: "Sabão Tradicional Verde 800g",
        categoria: "Sabão Riso Tradicional",
        slogan: "Remove toda a sujeira!",
        descricao: "O Sabão Riso Tradicional possui fórmula potente que remove até as manchas mais difíceis, deixando suas roupas impecavelmente limpas e cheirosas. Ideal para lavagem à mão ou na máquina, oferece excelente custo-benefício e rendimento superior. Tradição e qualidade que cuidam das suas roupas e do seu bolso.",
        embalagem: "800g",
        codigo: "103029",
        imagem: "/produtos/linha-riso/sabao-tradicional-verde-800g.png",
    },

    // === SABÃO EXTRA ===
    {
        id: 19,
        slug: "sabao-extra-amarelo-800g",
        nome: "Sabão Extra Amarelo 800g",
        categoria: "Sabão Riso Extra",
        slogan: "Remove toda a sujeira!",
        descricao: "O Sabão Riso Extra oferece poder de limpeza reforçado para enfrentar as manchas mais resistentes do dia a dia com facilidade. Sua fórmula concentrada proporciona maior rendimento e eficiência, garantindo roupas limpas e macias a cada lavagem. Disponível em três versões: Amarelo, Verde e Azul, para atender todas as suas necessidades.",
        embalagem: "800g",
        codigo: "103027",
        imagem: "/produtos/linha-riso/sabao-extra-amarelo-800g.png",
    },
    {
        id: 20,
        slug: "sabao-extra-verde-800g",
        nome: "Sabão Extra Verde 800g",
        categoria: "Sabão Riso Extra",
        slogan: "Remove toda a sujeira!",
        descricao: "O Sabão Riso Extra oferece poder de limpeza reforçado para enfrentar as manchas mais resistentes do dia a dia com facilidade. Sua fórmula concentrada proporciona maior rendimento e eficiência, garantindo roupas limpas e macias a cada lavagem. Disponível em três versões: Amarelo, Verde e Azul, para atender todas as suas necessidades.",
        embalagem: "800g",
        codigo: "103028",
        imagem: "/produtos/linha-riso/sabao-extra-verde-800g.png",
    },
    {
        id: 21,
        slug: "sabao-extra-azul-800g",
        nome: "Sabão Extra Azul 800g",
        categoria: "Sabão Riso Extra",
        slogan: "Remove toda a sujeira!",
        descricao: "O Sabão Riso Extra oferece poder de limpeza reforçado para enfrentar as manchas mais resistentes do dia a dia com facilidade. Sua fórmula concentrada proporciona maior rendimento e eficiência, garantindo roupas limpas e macias a cada lavagem. Disponível em três versões: Amarelo, Verde e Azul, para atender todas as suas necessidades.",
        embalagem: "800g",
        codigo: "103026",
        imagem: "/produtos/linha-riso/sabao-extra-azul-800g.png",
    },

    // === LIMPA ALUMÍNIO ===
    {
        id: 22,
        slug: "limpa-aluminio-tradicional-500ml",
        nome: "Limpa Alumínio Tradicional 500ml",
        categoria: "Limpa Alumínio",
        slogan: "Remove manchas e dá brilho às suas panelas de alumínio.",
        descricao: "O Limpa Alumínio Riso devolve o brilho original das suas panelas, formas e utensílios de alumínio, removendo manchas e escurecimento com facilidade. Sua fórmula especial limpa profundamente sem arranhar, deixando suas peças com aspecto de novas. Disponível nas versões Prata, Rosa e Violeta para uma limpeza eficiente e perfumada.",
        embalagem: "500ml",
        codigo: "102155",
        imagem: "/produtos/linha-riso/limpa-aluminio-tradicional-500ml.png",
    },
    {
        id: 23,
        slug: "limpa-aluminio-rosa-500ml",
        nome: "Limpa Alumínio Rosa 500ml",
        categoria: "Limpa Alumínio",
        slogan: "Remove manchas e dá brilho às suas panelas de alumínio.",
        descricao: "O Limpa Alumínio Riso devolve o brilho original das suas panelas, formas e utensílios de alumínio, removendo manchas e escurecimento com facilidade. Sua fórmula especial limpa profundamente sem arranhar, deixando suas peças com aspecto de novas. Disponível nas versões Prata, Rosa e Violeta para uma limpeza eficiente e perfumada.",
        embalagem: "500ml",
        codigo: "104011",
        imagem: "/produtos/linha-riso/limpa-aluminio-rosa-500ml.png",
    },
    {
        id: 24,
        slug: "limpa-aluminio-uva-500ml",
        nome: "Limpa Alumínio Uva 500ml",
        categoria: "Limpa Alumínio",
        slogan: "Remove manchas e dá brilho às suas panelas de alumínio.",
        descricao: "O Limpa Alumínio Riso devolve o brilho original das suas panelas, formas e utensílios de alumínio, removendo manchas e escurecimento com facilidade. Sua fórmula especial limpa profundamente sem arranhar, deixando suas peças com aspecto de novas. Disponível nas versões Prata, Rosa e Violeta para uma limpeza eficiente e perfumada.",
        embalagem: "500ml",
        codigo: "102166",
        imagem: "/produtos/linha-riso/limpa-aluminio-uva-500ml.png",
    },
];

// Função para buscar produto por slug
export function getProductBySlug(slug: string): Produto | undefined {
    return produtosLinhaRiso.find((p) => p.slug === slug);
}

// Função para obter todos os slugs (útil para generateStaticParams)
export function getAllProductSlugs(): string[] {
    return produtosLinhaRiso.map((p) => p.slug);
}

// Função para agrupar produtos por categoria
export function getProductsByCategory(): Record<string, Produto[]> {
    return produtosLinhaRiso.reduce((acc, produto) => {
        if (!acc[produto.categoria]) {
            acc[produto.categoria] = [];
        }
        acc[produto.categoria].push(produto);
        return acc;
    }, {} as Record<string, Produto[]>);
}
