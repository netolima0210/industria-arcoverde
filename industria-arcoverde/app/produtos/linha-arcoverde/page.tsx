"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getProductsByCategoryArcoVerde, ProdutoArcoVerde } from "@/data/linha-arcoverde";

// Ordem das categorias para exibição
const categoriasOrdem = [
    "Amaciantes",
    "Lava-Roupas",
    "Limpa Alumínio",
    "Lava-Louças",
    "Limpador Perfumado",
    "Pastilha Arcoverde",
    "Sabão Arcoverde Multiuso",
    "Sabão Arcoverde",
    "Sabão Feneme",
    "Naftalina",
];

// Categorias que já têm imagens reais
const categoriasComImagem = ["Amaciantes", "Lava-Roupas", "Limpa Alumínio", "Lava-Louças", "Limpador Perfumado", "Pastilha Arcoverde", "Sabão Arcoverde Multiuso", "Sabão Arcoverde", "Sabão Feneme", "Naftalina"];

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

export default function LinhaArcoVerdePage() {
    const produtosPorCategoria = getProductsByCategoryArcoVerde();

    // Ordenar categorias conforme a ordem desejada
    const categoriasOrdenadas = categoriasOrdem
        .filter((cat) => produtosPorCategoria[cat])
        .map((cat) => ({
            nome: cat,
            produtos: produtosPorCategoria[cat],
            temImagem: categoriasComImagem.includes(cat),
        }));

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
                        <div className="w-16 h-1 bg-emerald-600 mb-6"></div>

                        <h1 className="text-4xl md:text-5xl font-bold text-emerald-600 leading-tight mb-6">
                            Linha Arcoverde
                        </h1>

                        <p className="text-gray-600 text-base leading-relaxed">
                            A Linha Arcoverde oferece produtos de alta qualidade para o cuidado
                            das suas roupas e da sua casa. Fórmulas modernas que unem eficiência
                            de limpeza com fragrâncias marcantes e duradouras, proporcionando
                            uma experiência premium em cada uso.
                        </p>
                    </motion.div>

                    {/* Right Column - Products by Category */}
                    <div className="lg:col-span-8 space-y-12">
                        {categoriasOrdenadas.map((categoria) => (
                            <motion.div
                                key={categoria.nome}
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                {/* Category Title */}
                                <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-center mb-6">
                                    {categoria.nome}
                                </h2>

                                {/* Products Grid */}
                                <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
                                    {categoria.produtos.map((produto: ProdutoArcoVerde, index: number) => (
                                        <motion.div
                                            key={produto.id}
                                            variants={itemVariants}
                                            className={cn(
                                                "flex flex-col items-center group",
                                                // Centraliza o último item se a quantidade for ímpar
                                                categoria.produtos.length % 2 === 1 && index === categoria.produtos.length - 1 && "col-span-2"
                                            )}
                                        >
                                            <Link
                                                href={`/produtos/linha-arcoverde/${produto.slug}`}
                                                className="flex flex-col items-center w-full cursor-pointer"
                                            >
                                                {/* Renderiza imagem se a categoria tem imagens */}
                                                {categoria.temImagem ? (
                                                    <>
                                                        <div className={cn(
                                                            "relative w-full flex items-end justify-center p-2 mb-2",
                                                            // Ajuste de altura condicional para evitar espaços vazios excessivos
                                                            ["Sabão Arco Verde Multiuso", "Sabão Arco Verde", "Sabão Feneme", "Pastilha Arco Verde", "Naftalina"].includes(categoria.nome)
                                                                ? "h-40"
                                                                : "h-64"
                                                        )}>
                                                            <Image
                                                                src={produto.imagem}
                                                                alt={produto.nome}
                                                                width={200}
                                                                height={280}
                                                                className="object-contain max-h-full group-hover:scale-105 transition-transform duration-300"
                                                            />
                                                        </div>
                                                        <h3 className="text-sm md:text-base font-semibold text-gray-800 text-center group-hover:text-emerald-600 transition-colors">
                                                            {produto.nome}
                                                        </h3>
                                                    </>
                                                ) : (
                                                    <div className="flex flex-col items-center justify-center w-full p-6 bg-gray-50 hover:bg-emerald-50 rounded-xl border border-gray-200 hover:border-emerald-300 transition-all duration-300 min-h-[120px]">
                                                        <h3 className="text-sm md:text-base font-semibold text-gray-800 text-center group-hover:text-emerald-600 transition-colors">
                                                            {produto.nome}
                                                        </h3>
                                                        <span className="text-xs text-gray-500 mt-2">{produto.embalagem}</span>
                                                    </div>
                                                )}
                                            </Link>
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
