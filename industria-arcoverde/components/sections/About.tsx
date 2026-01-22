"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export function About() {
    return (
        <section id="quem-somos" className="py-20 md:py-32 bg-transparent overflow-hidden">
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
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
                            Tradição e Modernidade Caminhando Juntas
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            A Indústria Arcoverde nasceu de um sonho de trazer produtos de alta qualidade para o mercado nacional. Com uma história de tradição e compromisso com o futuro, investimos constantemente em tecnologia e sustentabilidade.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Nossa missão vai além de fabricar produtos; buscamos construir relacionamentos duradouros com nossos clientes e parceiros, sempre pautados na transparência e na excelência de nossos processos.
                        </p>
                    </motion.div>

                    {/* Visual Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        className="relative h-[400px] md:h-[500px] bg-slate-100 rounded-2xl flex items-center justify-center border border-slate-200 shadow-xl overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200" />
                        <div className="relative z-10 flex flex-col items-center gap-4 text-slate-400 group-hover:scale-105 transition-transform duration-500">
                            <Building2 size={64} strokeWidth={1} />
                            <span className="text-sm font-medium uppercase tracking-widest">Imagem Institucional</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
