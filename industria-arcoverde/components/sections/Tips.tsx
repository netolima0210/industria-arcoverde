"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { Dica } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Calendar, X } from "lucide-react";

export function Tips() {
    const [dicas, setDicas] = useState<Dica[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [imagemAberta, setImagemAberta] = useState<string | null>(null);

    useEffect(() => {
        async function fetchDicas() {
            try {
                const { data, error } = await supabase
                    .from("dicas_destaques")
                    .select("*")
                    .eq("ativo", true)
                    .order("created_at", { ascending: false });

                if (error) throw error;
                setDicas(data || []);
            } catch (err) {
                console.error("Error fetching dicas:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchDicas();
    }, []);

    return (
        <section id="dicas" className="py-20 md:py-32 bg-transparent">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
                        Dicas & Destaques
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Fique por dentro das novidades e conteúdos exclusivos da Indústria Arcoverde.
                    </p>
                </div>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex flex-col space-y-3">
                                <Skeleton className="h-[200px] w-full rounded-xl" />
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-3/4" />
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-1/2" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : error || dicas.length === 0 ? (
                    <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-100">
                        <h3 className="text-xl font-medium text-gray-500">Novidades em breve!</h3>
                        <p className="text-gray-400 mt-2">Estamos preparando conteúdos especiais para você.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        {dicas.map((dica, index) => (
                            <motion.div
                                key={dica.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="h-full"
                            >
                                {dica.imagem_url ? (
                                    <div
                                        className="cursor-pointer group/img relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                                        onClick={() => setImagemAberta(dica.imagem_url)}
                                    >
                                        <img
                                            src={dica.imagem_url}
                                            alt={dica.titulo}
                                            className="w-full h-auto object-contain transition-transform duration-300 group-hover/img:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                                            <span className="text-white text-sm font-medium opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-black/50 px-3 py-1 rounded-full">
                                                Clique para ampliar
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                        <div className="h-48 bg-slate-100 w-full relative">
                                            <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400">
                                                <span className="text-sm font-medium">Sem Imagem</span>
                                            </div>
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
                                )}
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

            {/* Modal de imagem ampliada */}
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
        </section>
    );
}
