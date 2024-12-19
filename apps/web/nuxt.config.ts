// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/sanity'],
  sanity: {
    projectId: 'v39h2x7o',
    dataset: 'production',
    apiVersion: '2021-03-25', // required
    visualEditing: {
      token: process.env.NUXT_SANITY_VISUAL_EDITING_TOKEN,
      studioUrl: 'http://localhost:3333',
    },
  },
});
