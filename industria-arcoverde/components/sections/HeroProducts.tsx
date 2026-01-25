"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const banners = [
    {
        src: "/hero-riso-banner.png",
        alt: "Linha Riso - Garantia de Eficácia - Satisfação 100% comprovada",
        fit: "cover"
    },
    {
        src: "/hero-products-v2.png",
        alt: "Produtos Indústria Arcoverde - Qualidade para toda a casa",
        fit: "contain"
    }
];

export function HeroProducts() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % banners.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="w-full pt-28">
            <div className="relative w-full h-[400px] md:h-auto md:aspect-[3/1] bg-gray-50 overflow-hidden group">
                <AnimatePresence>
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 w-full h-full flex items-center justify-center p-0"
                    >
                        <img
                            src={banners[index].src}
                            alt={banners[index].alt}
                            className={`w-full h-full transition-transform duration-700 ${banners[index].fit === 'contain' ? 'object-contain' : 'object-cover'}`}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                    {banners.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 shadow-sm ${i === index ? "bg-primary w-6" : "bg-white/50 hover:bg-white"
                                }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
