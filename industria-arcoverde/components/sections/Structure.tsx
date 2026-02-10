"use client";

import { motion } from "framer-motion";
import {
    Target,
    Eye,
    Award,
    Heart,
    Video,
    Image as ImageIcon,
    Lightbulb
} from "lucide-react";

// Dividindo a lista em duas partes
const valoresParte1 = [
    { title: "Respeito pelo próximo", text: "Confiar nas pessoas como indivíduos e estimular seus pensamentos e ideias, valorizando a capacidade e a contribuição de cada um." },
    { title: "Transparência e integridade", text: "Conduzir os negócios de maneira honrada e transparente, reconhecendo que não há forma correta de se fazer algo errado." },
    { title: "Ética Empresarial", text: "Primar pela ética em todos os relacionamentos com clientes, parceiros e concorrentes." },
    { title: "Valorização da iniciativa", text: "Estimular iniciativas para melhorar e expandir as habilidades, e acompanhar o crescimento e as demandas da empresa." }
];

const valoresParte2 = [
    { title: "Paixão pelo consumidor", text: "Desenvolver paixão e entusiasmo para criar valor aos consumidores e atender às suas expectativas, através da geração de soluções e benefícios que atendam com exclusividade às suas necessidades." },
    { title: "Cuidado com o meio ambiente", text: "A intenção da empresa é conduzir seus negócios de forma que seus produtos e serviços tenham o menor impacto possível no meio ambiente." },
    { title: "Compromisso com a qualidade", text: "Projetar, produzir, comercializar e garantir produtos que satisfaçam, ou mesmo superem, a expectativa de clientes e consumidores." },
    { title: "Espírito de equipe e de vitória", text: "Trabalhar pelo bem da equipe e do grupo, não somente pelo papel individual e contribuir com o melhor desempenho, tendo orgulho e satisfação do sucesso individual da equipe e da empresa." }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const },
    },
};

export function Structure() {
    return (
        <section id="estrutura" className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 space-y-32">

                {/* 1. NOSSA MISSÃO (Texto Esq / Img Dir) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                <Target className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-bold text-blue-600 tracking-wider uppercase">Propósito</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 border-l-4 border-blue-600 pl-6">
                            Nossa Missão
                        </h2>
                        <div className="pl-6">
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Desenvolver e comercializar produtos de alta performance superando a expectativa de nossos clientes e consumidores contribuindo para o desenvolvimento sustentável da nossa Região.
                            </p>
                        </div>
                    </motion.div>

                    {/* Vídeo Institucional */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                        className="relative w-full aspect-[9/16] max-h-[500px] rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center group"
                    >
                        <video
                            className="w-full h-full object-contain"
                            autoPlay
                            muted
                            loop
                            playsInline
                            controls
                            preload="auto"
                        >
                            <source src="/assets/missao-video.mp4" type="video/mp4" />
                            Seu navegador não suporta a exibição de vídeos.
                        </video>

                        {/* Overlay Gradiente suave para dar profundidade */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </motion.div>
                </div>

                {/* 2. NOSSA VISÃO (Img Esq / Texto Dir) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Placeholder Vídeo (Esquerda no Desktop) */}
                    {/* Imagem Estrutura (Esquerda no Desktop) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                        className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-xl bg-gray-900 border-4 border-white flex items-center justify-center order-2 lg:order-1 group"
                    >
                        <img
                            src="/estrutura-arcoverde.jpg"
                            alt="Estrutura de Armazenamento Indústria Arcoverde"
                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Overlay Gradiente */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </motion.div>

                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}
                        className="space-y-6 order-1 lg:order-2"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-green-100 rounded-lg text-green-600">
                                <Eye className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-bold text-green-600 tracking-wider uppercase">Futuro</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 border-l-4 border-green-600 pl-6">
                            Nossa Visão
                        </h2>
                        <div className="pl-6">
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Ser indústria reconhecida como sinônimo de qualidade na região Nordeste.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* 3. NOSSOS VALORES (Texto Esq / Img Dir) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}
                        className="space-y-8"
                    >
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                                    <Heart className="w-6 h-6" />
                                </div>
                                <span className="text-sm font-bold text-orange-600 tracking-wider uppercase">Cultura</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 border-l-4 border-orange-600 pl-6">
                                Nossos Valores
                            </h2>
                        </div>

                        <div className="pl-6 space-y-6">
                            {valoresParte1.map((val, idx) => (
                                <motion.div key={idx} variants={itemVariants} className="space-y-1">
                                    <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-orange-500 block"></span>
                                        {val.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed pl-4">
                                        {val.text}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                        className="relative lg:sticky lg:top-32 w-full min-h-[400px] rounded-3xl overflow-hidden shadow-xl bg-gray-200 border-4 border-white flex items-center justify-center group"
                    >
                        <img
                            src="/valores-arcoverde.jpg"
                            alt="Equipe representando os valores da Indústria Arcoverde"
                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </motion.div>
                </div>

                {/* 4. NOSSOS PRINCÍPIOS (Img Esq / Texto Dir) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                        className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-gray-900 border-4 border-white flex items-center justify-center order-2 lg:order-1 group"
                    >
                        <img
                            src="/principios-arcoverde.jpg"
                            alt="Direção da Indústria Arcoverde reafirmando princípios"
                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </motion.div>

                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}
                        className="space-y-8 order-1 lg:order-2"
                    >
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-yellow-100 rounded-lg text-yellow-600">
                                    <Lightbulb className="w-6 h-6" />
                                </div>
                                <span className="text-sm font-bold text-yellow-600 tracking-wider uppercase">Diretrizes</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 border-l-4 border-yellow-600 pl-6">
                                Nossos Princípios
                            </h2>
                        </div>

                        <div className="pl-6 space-y-6">
                            {valoresParte2.map((val, idx) => (
                                <motion.div key={idx} variants={itemVariants} className="space-y-1">
                                    <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-yellow-500 block"></span>
                                        {val.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed pl-4">
                                        {val.text}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* 5. POLÍTICA DE QUALIDADE (Texto Esq / Img Dir) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                                <Award className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-bold text-purple-600 tracking-wider uppercase">Excelência</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 border-l-4 border-purple-600 pl-6">
                            Política de Qualidade
                        </h2>
                        <div className="pl-6">
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Desenvolver e lançar no mercado, produtos de boa qualidade na área de lavagem de roupas, limpeza e desinfecção doméstica, visando a maior satisfação dos consumidores, atendendo os requisitos legais e melhorando continuamente os processos e produtos.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                        className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-gray-200 border-4 border-white flex items-center justify-center group"
                    >
                        <img
                            src="/qualidade-arcoverde.jpg"
                            alt="Controle de qualidade laboratorial da Indústria Arcoverde"
                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
