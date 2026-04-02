"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dica } from "../types";
import { X } from "lucide-react";

interface TipsListProps {
    tips: Dica[];
}

export function TipsList({ tips }: TipsListProps) {
    const [imagemAberta, setImagemAberta] = useState<string | null>(null);

    if (tips.length === 0) {
        return (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="text-xl font-medium text-gray-500">Novidades em breve!</h3>
                <p className="text-gray-400 mt-2">Estamos preparando conteúdos especiais para você.</p>
            </div>
        );
    }

    return (
        <>
            <div className="flex flex-wrap justify-center gap-8">
                {tips.map((dica, index) => {
                    const temImagem = Boolean(dica.imagem_url);
                    return (
                        <motion.div
                            key={dica.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col gap-3 w-full max-w-md"
                        >
                            {temImagem ? (
                                <div
                                    className="cursor-pointer group/img relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                                    onClick={() => setImagemAberta(dica.imagem_url!)}
                                >
                                    <img
                                        src={dica.imagem_url!}
                                        alt={dica.titulo}
                                        className="w-full h-auto object-contain transition-transform duration-300 group-hover/img:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors duration-300" />
                                </div>
                            ) : (
                                <h3 className="text-xl font-bold text-gray-900">{dica.titulo}</h3>
                            )}
                        </motion.div>
                    );
                })}
            </div>

            <AnimatePresence>
                {imagemAberta && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
                        onClick={() => setImagemAberta(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25 }}
                            className="relative max-w-2xl max-h-[85vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setImagemAberta(null)}
                                className="absolute -top-3 -right-3 z-10 bg-white rounded-full p-1.5 shadow-lg hover:bg-gray-100 transition-colors"
                            >
                                <X className="h-5 w-5 text-gray-700" />
                            </button>
                            <img
                                src={imagemAberta}
                                alt="Dica ampliada"
                                className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
