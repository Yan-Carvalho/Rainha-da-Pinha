// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // 1. Define a URL oficial (sem www e sem barra, como conversamos)
  site: "https://rainhadapinha.com.br",

  // 2. Força o Astro a NÃO colocar a barra no final das URLs (opcional, mas limpo)
  trailingSlash: "never",

  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
