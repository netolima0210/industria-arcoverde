"use client";

import { motion } from "framer-motion";
import { Dica } from "../types";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import Image from "next/image";

interface TipsListProps {
    tips: Dica[];
}

export function TipsList({ tips }: TipsListProps) {
    if (tips.length === 0) {
        return (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="text-xl font-medium text-gray-500">Novidades em breve!</h3>
                <p className="text-gray-400 mt-2">Estamos preparando conteúdos especiais para você.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tips.map((dica, index) => (
                <motion.div
                    key={dica.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full"
                >
                    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="h-48 bg-slate-100 w-full relative">
                            {dica.imagem_url ? (
                                <Image
                                    src={dica.imagem_url}
                                    alt={dica.titulo}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400">
                                    <span className="text-sm font-medium">Sem Imagem</span>
                                </div>
                            )}
                        </div>
                        <CardHeader>
                            <CardTitle className="line-clamp-2 text-xl">{dica.titulo}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <p className="text-gray-600 line-clamp-3">
                                {dica.conteudo}
                            </p>
                        </CardContent>
                        <CardFooter className="pt-4 border-t border-gray-100 mt-auto">
                            <div className="flex items-center text-sm text-gray-400">
                                <Calendar className="mr-2 h-4 w-4" />
                                {new Date(dica.created_at).toLocaleDateString('pt-BR')}
                            </div>
                        </CardFooter>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
}
