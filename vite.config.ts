import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  //botei isso aqui embaixo
  publicDir: "../images", // Magic happens here 🪄
  server: {
    fs: {
      allow: [".."], // Permite acessar pastas acima do src
    },
  },
});
