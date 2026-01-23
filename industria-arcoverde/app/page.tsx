import { Hero } from "@/components/sections/Hero";
import { Structure } from "@/components/sections/Structure";
import { Tips } from "@/components/sections/Tips";

export default function Home() {
  return (
    <main className="flex flex-col gap-0 min-h-screen">
      <Hero />
      <Structure />
      <Tips />
    </main>
  );
}
