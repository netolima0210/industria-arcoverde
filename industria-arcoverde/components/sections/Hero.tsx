"use client";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Container da imagem com fundo que combina */}
            <div className="w-full h-full min-h-[90vh] bg-white flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full h-full flex items-center justify-center"
                >
                    <img
                        src="/hero-products.jpg"
                        alt="Linha de Produtos Indústria Arcoverde"
                        className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                    />
                </motion.div>
            </div>
        </section>
    );
}
