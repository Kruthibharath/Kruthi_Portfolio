import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Kruthi_Portfolio/",
  plugins: [react()],
  build: {
    outDir: "dist", // Change 'dist' to your desired output directory
  },
});
