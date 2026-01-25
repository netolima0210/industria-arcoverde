"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Package, Tag } from "lucide-react";
import { getProductBySlugArcoVerde } from "@/data/linha-arcoverde";
import { notFound } from "next/navigation";

export default function ProductDetailPage() {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug as string;
    const produto = getProductBySlugArcoVerde(slug);

    if (!produto) {
        notFound();
    }

    return (
        <main className="min-h-screen pt-28 pb-16 bg-gradient-to-br from-gray-50 to-emerald-50/30">
            <div className="container mx-auto px-4 md:px-6">
                {/* Botão Voltar */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-8"
                >
                    <button
                        onClick={() => router.back()}
                        className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-medium transition-colors group"
                    >
                        <ArrowLeft
                            size={20}
                            className="group-hover:-translate-x-1 transition-transform"
                        />
                        Voltar para Linha Arcoverde
                    </button>
                </motion.div>

                {/* Conteúdo Principal */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Coluna Esquerda - Imagem */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative flex items-center justify-center"
                    >
                        {/* Blob Decorativo */}
                        <div className="absolute -z-10 w-[120%] h-[120%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <svg
                                viewBox="0 0 200 200"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-full h-full"
                            >
                                <path
                                    fill="#10B981"
                                    fillOpacity="0.15"
                                    d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.2,-19.2,95.8,-4.9C93.4,9.4,81.8,23.1,70.8,35.2C59.8,47.3,49.4,57.8,37.3,65.3C25.2,72.8,11.4,77.3,-1.8,80.4C-15,83.5,-28.9,85.2,-41.2,79.5C-53.5,73.8,-64.2,60.7,-72.1,46.5C-80,32.3,-85.1,17,-83.4,2.5C-81.7,-12,-73.2,-25.7,-63.3,-37.2C-53.4,-48.7,-42.1,-58,-30.1,-66.4C-18.1,-74.8,-5.4,-82.3,4.9,-90.8L15.2,-99.3L44.7,-76.4Z"
                                    transform="translate(100 100)"
                                />
                            </svg>
                        </div>

                        {/* Imagem do Produto */}
                        <div className="relative w-full max-w-md aspect-square flex items-center justify-center p-8">
                            <Image
                                src={produto.imagem}
                                alt={produto.nome}
                                width={400}
                                height={500}
                                className="object-contain max-h-[450px] drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Coluna Direita - Informações */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        {/* Categoria */}
                        <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                            {produto.categoria}
                        </span>

                        {/* Nome do Produto */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            {produto.nome}
                        </h1>

                        {/* Slogan */}
                        {produto.slogan && (
                            <p className="text-xl md:text-2xl font-semibold text-emerald-600 leading-relaxed">
                                {produto.slogan}
                            </p>
                        )}

                        {/* Descrição */}
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                {produto.descricao}
                            </p>
                        </div>

                        {/* Informações Adicionais */}
                        <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200">
                            {/* Embalagem */}
                            <div className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 shadow-sm border border-gray-100">
                                <Package className="text-emerald-600" size={24} />
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                                        Embalagem
                                    </p>
                                    <p className="text-lg font-bold text-gray-900">
                                        {produto.embalagem}
                                    </p>
                                </div>
                            </div>

                            {/* Código */}
                            {produto.codigo && (
                                <div className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 shadow-sm border border-gray-100">
                                    <Tag className="text-emerald-600" size={24} />
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                                            Código
                                        </p>
                                        <p className="text-lg font-bold text-gray-900">
                                            {produto.codigo}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* CTA - Contato */}
                        <div className="pt-6">
                            <a
                                href="https://wa.me/5500000000000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-green-600/30"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Solicitar Orçamento
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
