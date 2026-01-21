"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

            <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary">
                        Inovação e Qualidade na Indústria Arcoverde
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Soluções sustentáveis para o seu dia a dia. Conheça nossa linha completa de produtos e descubra como transformamos qualidade em compromisso.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
                    >
                        <Button size="lg" className="h-12 px-8 text-base bg-primary hover:bg-primary/90 text-white rounded-full transition-all hover:scale-105 shadow-lg shadow-primary/25">
                            Ver Produtos
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>

                        <Button size="lg" variant="outline" className="h-12 px-8 text-base border-primary/20 hover:bg-blue-50 text-gray-700 rounded-full transition-all">
                            Fale Conosco
                            <MessageCircle className="ml-2 h-4 w-4" />
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
