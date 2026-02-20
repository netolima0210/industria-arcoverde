import { HeroProducts } from "@/components/sections/HeroProducts";
import { About } from "@/components/sections/About";
import { Structure } from "@/components/sections/Structure";
import { Sustainability } from "@/components/sections/Sustainability";
import { TipsSection } from "@/features/tips";
import { ProductLinesShowcase } from "@/features/product-lines";

export default function Home() {
  return (
    <main className="flex flex-col gap-0 min-h-screen">
      <HeroProducts />
      <ProductLinesShowcase />
      <About />
      <Structure />
      <Sustainability />
      <TipsSection />
    </main>
  );
}
