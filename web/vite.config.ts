import { fileURLToPath, URL } from "node:url";
import { dirname, resolve } from "node:path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

const root = new URL("./src", import.meta.url);
const isProduction = process.env.NODE_ENV === "production";

export const apiUrl = process.env.API_URL ?? "http://localhost:15000";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5173,
    strictPort: true,
  },
  plugins: [
    vue(),
    vueJsx(),
    VueI18nPlugin({
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        "./src/i18n/**"
      ),
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(root),
    },
  },
});
