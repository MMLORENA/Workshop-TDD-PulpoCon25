/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "node",
    coverage: {
      include: ["src/katas/**/*.ts", "src/greet.ts"],
      reporter: ["text", "json", "html"],
      enabled: true,
    },
  },
});
