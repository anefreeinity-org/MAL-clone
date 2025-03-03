import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    global: "globalThis",
    process: { env: {} },
  },
  resolve: {
    alias: {
      process: "process/browser",
    },
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
});
