"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
    return (
        <section id="quem-somos" className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="space-y-6"
                    >
                        <div className="inline-block rounded-lg bg-blue-50 px-3 py-1 text-sm font-medium text-primary">
                            Quem Somos
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                            Compromisso com a Excelência e o Cuidado
                        </h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                            <p>
                                Somos uma empresa comprometida com a excelência e com o cuidado em cada detalhe. Trabalhamos diariamente para oferecer produtos de alta qualidade, desenvolvidos com rigorosos controles de qualidade, garantindo segurança, eficiência e confiança para nossos clientes.
                            </p>
                            <p>
                                Nosso maior propósito é cuidar dos lares e do bem-estar das famílias, especialmente da dona de casa, que busca praticidade, economia e tranquilidade no dia a dia. Por isso, cada produto é pensado para facilitar a rotina, preservar a saúde e contribuir para um ambiente mais limpo, seguro e agradável.
                            </p>
                            <p>
                                Atuamos com profissionalismo, ética e responsabilidade, cumprindo todas as normas exigidas e mantendo nossas operações devidamente regularizadas junto aos órgãos regulatórios competentes. Investimos constantemente em melhoria de processos, capacitação da equipe e inovação, assegurando padrões elevados de qualidade em tudo o que fazemos.
                            </p>
                            <p>
                                Mais do que fabricar produtos, construímos confiança, respeito e parceria com nossos clientes, colaboradores e a sociedade, reafirmando nosso compromisso com o cuidado, a qualidade e o bem-estar dos lares brasileiros.
                            </p>
                        </div>
                    </motion.div>

                    {/* Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl group"
                    >
                        <Image
                            src="/equipe-arcoverde.jpg"
                            alt="Equipe Indústria Arcoverde em operação"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
