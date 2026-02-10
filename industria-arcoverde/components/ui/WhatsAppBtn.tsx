"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppBtn() {
    return (
        <a
            href="https://wa.me/558738210455"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 p-3 md:p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center animate-in fade-in zoom-in"
            aria-label="Fale conosco no WhatsApp"
        >
            <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
        </a>
    );
}
