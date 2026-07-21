"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getProductsByCategoryFeneme, ProdutoFeneme } from "@/data/linha-feneme";

// Ordem das categorias para exibição
const categoriasOrdem = [
    "Sabão Fenemê",
];

// Categorias que já têm imagens reais
const categoriasComImagem = ["Sabão Fenemê"];

export default function LinhaFenemePage() {
    const produtosPorCategoria = getProductsByCategoryFeneme();

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
                    <div
                        className="lg:col-span-4 lg:sticky lg:top-32"
                    >
                        {/* Decorative Line */}
                        <div className="w-16 h-1 bg-blue-600 mb-6"></div>

                        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 leading-tight mb-6">
                            Linha Fenemê
                        </h1>

                        <p className="text-gray-600 text-base leading-relaxed">
                            A Linha Fenemê traz a tradição do sabão glicerinado em barra,
                            unindo poder de limpeza e cuidado com suas roupas e louças.
                            Qualidade clássica e confiável para o dia a dia da sua casa.
                        </p>
                    </div>

                    {/* Right Column - Products by Category */}
                    <div className="lg:col-span-8 space-y-12">
                        {categoriasOrdenadas.map((categoria) => (
                            <div
                                key={categoria.nome}
                            >
                                {/* Category Title */}
                                <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-center mb-6">
                                    {categoria.nome}
                                </h2>

                                {/* Products Grid */}
                                <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
                                    {categoria.produtos.map((produto: ProdutoFeneme, index: number) => (
                                        <div
                                            key={produto.id}
                                            className={cn(
                                                "flex flex-col items-center group",
                                                // Centraliza o último item se a quantidade for ímpar
                                                categoria.produtos.length % 2 === 1 && index === categoria.produtos.length - 1 && "col-span-2"
                                            )}
                                        >
                                            <Link
                                                href={`/produtos/linha-feneme/${produto.slug}`}
                                                className="flex flex-col items-center w-full cursor-pointer"
                                            >
                                                {/* Renderiza imagem se a categoria tem imagens */}
                                                {categoria.temImagem ? (
                                                    <>
                                                        <div className="relative w-full flex items-end justify-center p-2 mb-2 h-40">
                                                            <Image
                                                                src={produto.imagem}
                                                                alt={produto.nome}
                                                                width={200}
                                                                height={280}
                                                                className="object-contain max-h-full group-hover:scale-105 transition-transform duration-300"
                                                            />
                                                        </div>
                                                        <h3 className="text-sm md:text-base font-semibold text-gray-800 text-center group-hover:text-blue-600 transition-colors">
                                                            {produto.nome}
                                                        </h3>
                                                    </>
                                                ) : (
                                                    <div className="flex flex-col items-center justify-center w-full p-6 bg-gray-50 hover:bg-blue-50 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 min-h-[120px]">
                                                        <h3 className="text-sm md:text-base font-semibold text-gray-800 text-center group-hover:text-blue-600 transition-colors">
                                                            {produto.nome}
                                                        </h3>
                                                        <span className="text-xs text-gray-500 mt-2">{produto.embalagem}</span>
                                                    </div>
                                                )}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </main>
    );
}
