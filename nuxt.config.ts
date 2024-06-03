export default defineNuxtConfig({
  srcDir: 'src',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/ui', '@nuxtjs/tailwindcss', '@nuxt/eslint'],
  fonts: {
    provider: 'google',
    families: [
      {
        name: 'Inter',
        weights: ['400..700'],
        preload: true,
      },
    ],
  },
})
