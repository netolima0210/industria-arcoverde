"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-white -z-10" />

            <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full flex justify-center"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="relative w-[80%] mt-[35vh]"
                    >
                        <img
                            src="/hero-products.jpg"
                            alt="Linha de Produtos Indústria Arcoverde"
                            className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
