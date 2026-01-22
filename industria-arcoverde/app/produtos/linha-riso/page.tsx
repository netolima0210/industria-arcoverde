"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const categorias = [
    {
        nome: "Desinfetantes",
        produtos: [
            {
                id: 1,
                nome: "Desinfetante Brisa do Mar 1,8L",
                imagem: "/produtos/linha-riso/desinfetante-1-8l.png",
            },
            {
                id: 2,
                nome: "Desinfetante Brisa do Mar 5L",
                imagem: "/produtos/linha-riso/desinfetante-5l.png",
            },
            {
                id: 3,
                nome: "Desinfetante Lavanda 5L",
                imagem: "/produtos/linha-riso/desinfetante-lavanda-5l.png",
            },
            {
                id: 4,
                nome: "Desinfetante Talco 5L",
                imagem: "/produtos/linha-riso/desinfetante-talco-5l.png",
            },
        ],
    },
    {
        nome: "Lava-Louças",
        produtos: [
            {
                id: 5,
                nome: "Lava-Louças Limão 500ml",
                imagem: "/produtos/linha-riso/lava-loucas-limao-500ml.png",
            },
            {
                id: 6,
                nome: "Lava-Louças Maçã 500ml",
                imagem: "/produtos/linha-riso/lava-loucas-maca-500ml.png",
            },
        ],
    },
    {
        nome: "Limpa Alumínio",
        produtos: [
            {
                id: 7,
                nome: "Limpa Alumínio Rosa 500ml",
                imagem: "/produtos/linha-riso/limpa-aluminio-rosa-500ml.png",
            },
            {
                id: 8,
                nome: "Limpa Alumínio Uva 500ml",
                imagem: "/produtos/linha-riso/limpa-aluminio-uva-500ml.png",
            },
            {
                id: 9,
                nome: "Limpa Alumínio Tradicional 500ml",
                imagem: "/produtos/linha-riso/limpa-aluminio-tradicional-500ml.png",
            },
        ],
    },
    {
        nome: "Sabão Riso Tradicional",
        produtos: [
            {
                id: 10,
                nome: "Sabão Tradicional Amarelo 800g",
                imagem: "/produtos/linha-riso/sabao-tradicional-amarelo-800g.png",
            },
            {
                id: 11,
                nome: "Sabão Tradicional Verde 800g",
                imagem: "/produtos/linha-riso/sabao-tradicional-verde-800g.png",
            },
        ],
    },
    {
        nome: "Sabão Riso Extra",
        produtos: [
            {
                id: 12,
                nome: "Sabão Extra Amarelo 800g",
                imagem: "/produtos/linha-riso/sabao-extra-amarelo-800g.png",
            },
            {
                id: 13,
                nome: "Sabão Extra Azul 800g",
                imagem: "/produtos/linha-riso/sabao-extra-azul-800g.png",
            },
            {
                id: 14,
                nome: "Sabão Extra Verde 800g",
                imagem: "/produtos/linha-riso/sabao-extra-verde-800g.png",
            },
        ],
    },
    {
        nome: "Pastilha Sanitária Riso",
        produtos: [],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const },
    },
};

export default function LinhaRisoPage() {
    return (
        <main className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4 md:px-6">
                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left Column - Title & Description */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-4 lg:sticky lg:top-32"
                    >
                        {/* Decorative Line */}
                        <div className="w-16 h-1 bg-blue-600 mb-6"></div>

                        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 leading-tight mb-6">
                            Linha Riso
                        </h1>

                        <p className="text-gray-600 text-base leading-relaxed">
                            Os produtos da Linha Riso possuem fórmulas desenvolvidas para facilitar
                            a remoção da sujeira, auxiliando na limpeza do seu lar e proporcionando
                            menos esforço para quem limpa.
                        </p>
                    </motion.div>

                    {/* Right Column - Products by Category */}
                    <div className="lg:col-span-8 space-y-12">
                        {categorias.map((categoria, catIndex) => (
                            <motion.div
                                key={categoria.nome}
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                {/* Category Title */}
                                <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-center mb-8">
                                    {categoria.nome}
                                </h2>

                                {/* Products Grid */}
                                <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
                                    {categoria.produtos.map((produto) => (
                                        <motion.div
                                            key={produto.id}
                                            variants={itemVariants}
                                            className="flex flex-col items-center group"
                                        >
                                            {/* Product Image */}
                                            <div className="relative w-full aspect-square flex items-center justify-center p-4 mb-4">
                                                <Image
                                                    src={produto.imagem}
                                                    alt={produto.nome}
                                                    width={200}
                                                    height={280}
                                                    className="object-contain max-h-64 group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>

                                            {/* Product Name */}
                                            <h3 className="text-sm md:text-base font-semibold text-gray-800 text-center">
                                                {produto.nome}
                                            </h3>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </main>
    );
}
