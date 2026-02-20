"use client";

import { motion } from "framer-motion";

export function Sustainability() {
    return (
        <section
            id="sustentabilidade"
            className="w-full bg-gradient-to-r from-green-700 via-green-600 to-green-700 overflow-hidden"
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 py-10 md:py-0 md:h-[400px]">

                    {/* Mascote Papa Óleo - Esquerda */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex-shrink-0"
                    >
                        <img
                            src="/papa-oleo-mascote.jpg"
                            alt="Mascote Papa Óleo - Projeto de Sustentabilidade Arcoverde"
                            className="w-52 h-52 md:w-72 md:h-72 object-contain drop-shadow-2xl rounded-2xl"
                        />
                    </motion.div>

                    {/* Texto Central */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        className="flex-1 text-center px-4 md:px-8"
                    >
                        <h3 className="text-white font-bold text-xl md:text-3xl leading-snug mb-3 drop-shadow-sm">
                            🌱 Projeto Papa Óleo
                        </h3>
                        <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                            Há mais de <strong className="text-yellow-300">5 anos</strong>, a Indústria Arcoverde coleta mais de{" "}
                            <strong className="text-yellow-300">5.000 litros de óleo</strong> usado por mês, retirando das ruas e
                            impedindo que vá para a natureza. Compromisso real com o meio ambiente!
                        </p>
                    </motion.div>

                    {/* Selo Papa Óleo - Direita */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="flex-shrink-0"
                    >
                        <img
                            src="/papa-oleo-selo.jpg"
                            alt="Selo Projeto Papa Óleo - 5.000L de Óleo Recuperado por Mês"
                            className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl rounded-full"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
