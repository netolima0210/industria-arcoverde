"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
    {
        title: "Missão",
        description: "Prover soluções industriais de excelência, garantindo qualidade e satisfação aos nossos clientes e parceiros, contribuindo para o desenvolvimento sustentável.",
        icon: Target,
        color: "bg-blue-100 text-blue-600",
    },
    {
        title: "Visão",
        description: "Ser referência nacional na indústria, reconhecida pela inovação, qualidade dos produtos e compromisso socioambiental até 2030.",
        icon: Eye,
        color: "bg-green-100 text-green-600",
    },
    {
        title: "Valores",
        description: "Ética, Transparência, Sustentabilidade, Inovação e Valorização Humana são os pilares que sustentam cada decisão e ação da Indústria Arcoverde.",
        icon: Heart,
        color: "bg-orange-100 text-orange-600",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
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
        <section id="estrutura" className="py-20 md:py-32 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">

                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
                        Nossa Estrutura
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Os pilares que fundamentam nosso trabalho e direcionam nosso crescimento.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
                                <CardHeader className="space-y-4 pb-4">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${feature.color} mb-2`}>
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
