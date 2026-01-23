"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getProductsByCategory, Produto } from "@/data/linha-riso";

// Ordem das categorias para exibição
const categoriasOrdem = [
    "Desinfetantes",
    "Lava-Louças",
    "Limpa Alumínio",
    "Sabão Riso Tradicional",
    "Sabão Riso Extra",
    "Pastilha Sanitária Riso",
    "Naftalina Riso",
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
    const produtosPorCategoria = getProductsByCategory();

    // Ordenar categorias conforme a ordem desejada
    const categoriasOrdenadas = categoriasOrdem
        .filter((cat) => produtosPorCategoria[cat])
        .map((cat) => ({
            nome: cat,
            produtos: produtosPorCategoria[cat],
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
                    <div className="lg:col-span-8 space-y-6">
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
                                    {categoria.produtos.map((produto: Produto, index: number) => (
                                        <motion.div
                                            key={produto.id}
                                            variants={itemVariants}
                                            className={cn(
                                                "flex flex-col items-center group",
                                                // Se a categoria tem 3 produtos e este é o último (índice 2),
                                                // fazemos ele ocupar 2 colunas para ficar centralizado embaixo.
                                                categoria.produtos.length === 3 && index === 2 && "col-span-2",
                                                // Se a categoria tem apenas 1 produto (Naftalina), centraliza ele.
                                                categoria.produtos.length === 1 && "col-span-2"
                                            )}
                                        >
                                            <Link
                                                href={`/produtos/linha-riso/${produto.slug}`}
                                                className="flex flex-col items-center w-full cursor-pointer"
                                            >
                                                {/* Product Image */}
                                                <div className="relative w-full h-64 flex items-center justify-center p-2 mb-2">
                                                    <Image
                                                        src={produto.imagem}
                                                        alt={produto.nome}
                                                        width={200}
                                                        height={280}
                                                        className="object-contain max-h-full group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                </div>

                                                {/* Product Name */}
                                                <h3 className="text-sm md:text-base font-semibold text-gray-800 text-center group-hover:text-blue-600 transition-colors">
                                                    {produto.nome}
                                                </h3>
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
