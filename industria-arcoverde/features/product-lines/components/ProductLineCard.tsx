"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface ProductLineCardProps {
    title: string;
    description: string;
    colors: {
        bg: string;
        text: string;
        accent: string;
    };
    imageSrc?: string; // Optional real image
    reverse?: boolean; // Text on right, image on left vs opposite
    href: string; // URL to redirect
}

export function ProductLineCard({ title, description, colors, imageSrc, reverse = false, href }: ProductLineCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={cn(
                "group relative overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-xl border border-white/20",
                "bg-gradient-to-br",
                colors.bg
            )}
        >
            <div className={cn(
                "flex flex-col md:items-center gap-8 p-8 md:p-12",
                reverse ? "md:flex-row-reverse" : "md:flex-row"
            )}>

                {/* Text Content */}
                <div className="flex-1 space-y-6 z-10">
                    <h3 className={cn("text-3xl md:text-5xl font-black tracking-tight", colors.text)}>
                        {title}
                    </h3>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg">
                        {description}
                    </p>
                    <Link
                        href={href}
                        className={cn(
                            "inline-block px-8 py-3 rounded-full font-bold text-white shadow-lg transform transition-transform hover:scale-105 active:scale-95 cursor-pointer",
                            colors.accent
                        )}
                    >
                        Conhecer Produtos
                    </Link>
                </div>

                {/* Image / Placeholder Slot */}
                <div className="flex-1 w-full flex items-center justify-center relative min-h-[300px] md:min-h-[400px]">
                    <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-2xl md:translate-x-4 md:translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />

                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                        {imageSrc ? (
                            <div className="relative w-full h-[300px] md:h-[400px]">
                                <Image
                                    src={imageSrc}
                                    alt={title}
                                    fill
                                    className="object-contain drop-shadow-2xl transform transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                        ) : (
                            <div className="w-full h-[300px] md:h-[400px] border-4 border-dashed border-gray-300/50 rounded-2xl flex flex-col items-center justify-center text-center p-6 bg-white/50">
                                <span className="text-4xl mb-4">🖼️</span>
                                <p className="text-gray-500 font-medium">Espaço para Imagem PNG</p>
                                <p className="text-sm text-gray-400 mt-2">Recomendado: 800x800px (Fundo Transparente)</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none" />
        </motion.div>
    );
}
