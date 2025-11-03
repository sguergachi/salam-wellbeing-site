import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), mdx()],
  site: "https://sguergachi.github.io",
  base: process.env.NODE_ENV === "production" ? "/salam-wellbeing-site" : "/",
  server: {
    port: 4321,
    host: true,
  },
  vite: {
    logLevel: "error",
  },
});
