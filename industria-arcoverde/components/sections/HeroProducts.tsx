"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const banners = [
    {
        src: "/hero-arco-verde.jpg",
        alt: "Linha Arco Verde - Qualidade para toda a casa",
        fit: "cover"
    },
    {
        src: "/hero-riso.jpg",
        alt: "Linha Riso - Garantia de Eficácia",
        fit: "cover"
    },
    {
        src: "/hero-revolus.jpg",
        alt: "Linha Revolus - Tecnologia em Limpeza",
        fit: "cover"
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
            <div className="relative w-full h-[400px] md:h-auto md:aspect-[3/1] bg-white overflow-hidden group">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
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
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
                    {banners.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 shadow-md ${i === index ? "bg-primary w-8" : "bg-white/40 hover:bg-white/70"
                                }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}


