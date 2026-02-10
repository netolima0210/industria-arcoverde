import { Facebook, Instagram, Youtube, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Logo Column (Optional/Placeholder based on existing style) */}
                    <div className="space-y-4">
                        <div className="relative w-96 h-40">
                            {/* Assuming logo exists, using text if not, or just keeping it empty/minimal as requested structure primarily focused on Contato */}
                            <Image
                                src="/logo-arcoverde-v2.png"
                                alt="Indústria Arcoverde"
                                width={384}
                                height={160}
                                className="w-auto h-40 object-contain"
                            />
                        </div>
                        <p className="text-gray-500 text-sm">
                            Qualidade e eficiência para sua casa e empresa.
                        </p>
                    </div>

                    {/* Contato Column (Requested) */}
                    <div className="md:col-start-4">
                        <h3 className="text-xl font-bold text-[#0ea5e9] mb-6">Contato</h3>

                        <ul className="space-y-3 mb-8">
                            <li>
                                <Link href="/fale-conosco" className="flex items-center text-gray-500 hover:text-[#0ea5e9] transition-colors group">
                                    <ChevronRight className="h-4 w-4 mr-2 text-[#eab308]" />
                                    Fale Conosco
                                </Link>
                            </li>
                            <li>
                                <a href="https://wa.me/558738210455" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-500 hover:text-[#0ea5e9] transition-colors group">
                                    <ChevronRight className="h-4 w-4 mr-2 text-[#eab308]" />
                                    Onde Comprar
                                </a>
                            </li>
                        </ul>

                        <div className="flex items-center gap-4 mb-4">
                            <a href="https://wa.me/558738210455" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#25D366] transition-colors">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/industriaarcoverde" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1877F2] transition-colors">
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a href="https://www.instagram.com/industriaarcoverde/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E4405F] transition-colors">
                                <Instagram className="w-6 h-6" />
                            </a>
                        </div>

                        <div className="flex items-center text-gray-500 font-medium">
                            <span className="mr-2">☎️</span>
                            87 3821.0455
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 pb-16 md:pb-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} Indústria Arcoverde. Todos os direitos reservados.</p>
                    <p className="mt-2 md:mt-0 mr-16 md:mr-20">
                        Desenvolvido por <span className="font-semibold text-gray-600">N7tech</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
