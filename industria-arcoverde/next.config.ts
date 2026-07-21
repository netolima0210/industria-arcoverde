import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Os 2 Sabões Fenemê migraram da Linha Arcoverde para a Linha Fenemê.
  // Redirecionamos as URLs antigas (permanente) para não quebrar links/SEO.
  async redirects() {
    return [
      {
        source: "/produtos/linha-arcoverde/sabao-feneme-tradicional-400g",
        destination: "/produtos/linha-feneme/sabao-feneme-tradicional-400g",
        permanent: true,
      },
      {
        source: "/produtos/linha-arcoverde/sabao-feneme-plus-neutro-400g",
        destination: "/produtos/linha-feneme/sabao-feneme-plus-neutro-400g",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
