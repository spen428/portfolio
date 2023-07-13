import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

const root = new URL("./src", import.meta.url);
const isProduction = process.env.NODE_ENV === "production";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@/services/DataService": isProduction
        ? fileURLToPath(root + "/services/DataService")
        : fileURLToPath(root + "/services/DataService.dummy"),
      "@": fileURLToPath(root),
    },
  },
});
