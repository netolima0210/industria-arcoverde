"use client";

import { ProductLineCard } from "./ProductLineCard";

export function ProductLinesShowcase() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6 space-y-24">

                {/* Linha Riso */}
                <ProductLineCard
                    title="LINHA RISO"
                    description="Eficiência e tradição para o cuidado da sua casa. Produtos desenvolvidos para garantir a melhor limpeza com o carinho que sua família merece."
                    colors={{
                        bg: "from-sky-50 to-blue-50",
                        text: "text-sky-600",
                        accent: "bg-sky-500 hover:bg-sky-600"
                    }}
                />

                {/* Linha Arcoverde */}
                <ProductLineCard
                    title="LINHA ARCOVERDE"
                    description="Soluções profissionais de alta performance. A força necessária para os desafios pesados do dia a dia industrial e comercial."
                    colors={{
                        bg: "from-emerald-50 to-teal-50",
                        text: "text-emerald-600",
                        accent: "bg-emerald-500 hover:bg-emerald-600"
                    }}
                    reverse
                />

                {/* Linha Revolus */}
                <ProductLineCard
                    title="LINHA REVOLUS"
                    description="Inovação e tecnologia em limpeza automotiva. O brilho e proteção que seu veículo precisa com fórmulas avançadas."
                    colors={{
                        bg: "from-orange-50 to-red-50",
                        text: "text-orange-600",
                        accent: "bg-orange-500 hover:bg-orange-600"
                    }}
                />
            </div>
        </section>
    );
}
