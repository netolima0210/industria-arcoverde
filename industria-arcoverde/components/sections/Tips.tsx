"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { Dica } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export function Tips() {
    const [dicas, setDicas] = useState<Dica[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

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
        <section id="dicas" className="py-20 md:py-32 bg-white">
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {dicas.map((dica, index) => (
                            <motion.div
                                key={dica.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="h-full"
                            >
                                <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                    {/* Placeholder for now if imagem_url exists we would use Next/Image */}
                                    <div className="h-48 bg-slate-100 w-full relative">
                                        {dica.imagem_url ? (
                                            <img
                                                src={dica.imagem_url}
                                                alt={dica.titulo}
                                                className="w-full h-full object-cover"
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
                )}
            </div>
        </section>
    );
}
