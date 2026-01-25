"use client";

import { motion } from "framer-motion";

export function HeroProducts() {
    return (
        <section className="w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full"
            >
                <img
                    src="/hero-riso-banner.png"
                    alt="Linha Riso - Garantia de Eficácia - Satisfação 100% comprovada"
                    className="w-full h-auto object-cover"
                />
            </motion.div>
        </section>
    );
}
