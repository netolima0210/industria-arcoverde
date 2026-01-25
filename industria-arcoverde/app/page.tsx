import { HeroProducts } from "@/components/sections/HeroProducts";
import { Structure } from "@/components/sections/Structure";
import { TipsSection } from "@/features/tips";
import { ProductLinesShowcase } from "@/features/product-lines";

export default function Home() {
  return (
    <main className="flex flex-col gap-0 min-h-screen">
      <HeroProducts />
      <ProductLinesShowcase />
      <Structure />
      <TipsSection />
    </main>
  );
}
