import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // Use a relative base so the app works on GitHub Pages project URLs (/<repo>/)
  // and other subpath deployments.
  base: "./",
  server: {
    port: 8080,
  },
  plugins: [react(), mode === "development" && false].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
