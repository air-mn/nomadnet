import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ command }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Add base configuration for production
  base: "/",
  // Configure the build to handle client-side routing
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
}));