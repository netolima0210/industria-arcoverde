"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
    {
        src: "/produtos/bunners/WhatsApp Image 2026-02-23 at 16.20.52.jpeg",
        alt: "Linha Riso - Qualidade e Tradição",
    },
    {
        src: "/produtos/bunners/WhatsApp Image 2026-02-23 at 16.20.54.jpeg",
        alt: "Linha Arco Verde - Performance e Limpeza",
    },
    {
        src: "/produtos/bunners/WhatsApp Image 2026-02-23 at 16.23.52.jpeg",
        alt: "Linha Revolus - Tecnologia Industrial",
    }
];

export function HeroProducts() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    // Drag state
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftState, setScrollLeftState] = useState(0);

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
            setScrollProgress(progress);

            // Update active index for auto-scroll logic
            const index = Math.round(scrollLeft / clientWidth);
            setActiveIndex(index);
        }
    };

    // Auto-scroll logic (pauses when dragging)
    useEffect(() => {
        if (isDragging) return;

        const timer = setInterval(() => {
            if (scrollRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                const nextIndex = (activeIndex + 1) % banners.length;

                scrollRef.current.scrollTo({
                    left: nextIndex * clientWidth,
                    behavior: "smooth"
                });
            }
        }, 5000);

        return () => clearInterval(timer);
    }, [activeIndex, isDragging]);

    useEffect(() => {
        const scrollElement = scrollRef.current;
        if (scrollElement) {
            scrollElement.addEventListener("scroll", handleScroll);
            return () => scrollElement.removeEventListener("scroll", handleScroll);
        }
    }, []);

    // Mouse Drag Handlers
    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeftState(scrollRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fast multiplier
        scrollRef.current.scrollLeft = scrollLeftState - walk;
    };

    // Arrow Navigation Handlers
    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { clientWidth, scrollLeft } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;

            scrollRef.current.scrollTo({
                left: scrollTo,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="w-full pt-28 px-4 md:px-8 lg:px-12">
            <div className="relative w-full overflow-hidden bg-white group rounded-[2rem] md:rounded-[3rem] shadow-lg">
                {/* Scrollable Container */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        WebkitOverflowScrolling: 'touch',
                        scrollBehavior: isDragging ? 'auto' : 'smooth'
                    }}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    {banners.map((banner, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-full aspect-[16/9] md:aspect-[3/1] snap-center flex items-center justify-center"
                        >
                            <img
                                src={banner.src}
                                alt={banner.alt}
                                className="w-full h-full object-cover select-none"
                                draggable={false}
                                loading="eager"
                            />
                        </div>
                    ))}
                </div>

                {/* Desktop Arrows (Hidden on Mobile) */}
                <button
                    onClick={() => scroll('left')}
                    className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-8 h-8" />
                </button>

                {/* Mobile Scrollbar (Hidden on Desktop) */}
                <div className="w-full h-8 flex items-center justify-center bg-white mt-4 md:hidden">
                    <div className="relative w-24 h-1 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-300 ease-out"
                            style={{
                                width: `${100 / banners.length}%`,
                                left: `${scrollProgress * (banners.length - 1) / banners.length}%`
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
