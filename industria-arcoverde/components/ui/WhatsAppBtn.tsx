"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppBtn() {
    return (
        <a
            href="https://wa.me/5500000000000" // Replace with actual number
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center animate-in fade-in zoom-in"
            aria-label="Fale conosco no WhatsApp"
        >
            <MessageCircle className="w-8 h-8" />
        </a>
    );
}
