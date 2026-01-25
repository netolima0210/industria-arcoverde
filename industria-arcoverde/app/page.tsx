import { HeroProducts } from "@/components/sections/HeroProducts";
import { Structure } from "@/components/sections/Structure";
import { Tips } from "@/components/sections/Tips";

export default function Home() {
  return (
    <main className="flex flex-col gap-0 min-h-screen">
      <HeroProducts />
      <Structure />
      <Tips />
    </main>
  );
}
