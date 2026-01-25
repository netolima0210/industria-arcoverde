import { getTips } from "../api/getTips";
import { TipsList } from "./TipsList";

export async function TipsSection() {
    const tips = await getTips();

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

                <TipsList tips={tips} />
            </div>
        </section>
    );
}
