// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/fonts", "@nuxt/eslint", "@nuxtjs/seo"],
  site: {
    url: "https://elizer-dolorosa.vercel.app/",
    name: "Elizer's Portfolio",
    description: "A site showcasing my work and skills ✨",
    defaultLocale: "en", // Single language
  },
  sitemap: {
    enabled: true,
  },
  ogImage: {
    enabled: true,
  },
  linkChecker: {
    enabled: true,
  },
  typescript: {
    typeCheck: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
