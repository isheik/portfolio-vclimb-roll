module.exports = {
  modules: [
    "@nuxtjs/vuetify",
    "@nuxtjs/axios",
    "@nuxtjs/dotenv",
    "@nuxtjs/robots",
    "@nuxtjs/gtm"
  ],
  /*
   ** Headers of the page
   */
  head: {
    title: "KEI's Portfolio",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  css: ["~/assets/css/default.css"],
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#53a0e7" },
  // plugins: ['~/plugins/vue-fullpage'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    vendor: ["vue-fullpage.js"]
    // extend(config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: "pre",
    //       test: /\.(js|vue)$/,
    //       loader: "eslint-loader",
    //       exclude: /(node_modules)/
    //     });
    //   }
    // }
  },
  router: {
    base: "/"
  },
  plugins: [
    { src: "~/plugins/vue-fullpage.js", ssr: false },
    { src: "~/plugins/vue-parallax-js", ssr: false },
    { src: "~/plugins/vue-thin-modal", ssr: true },
    { src: "~/plugins/mixin.js", ssr: true },
    { src: "~/plugins/vue-particles", ssr: false },
    { src: "~/plugins/vue-gtag.js" }
    // { src: "~/plugins/vue-spinner", ssr: false },
  ],
  axios: {
    baseURL:
      process.env.NODE_DEV === "production"
        ? process.env.DEV_API_URL
        : process.env.PROD_API_URL
  },
  robots: {
    UserAgent: "*",
    Disallow: ""
  },
  gtm: {
    id: "GTM-K4D6W82"
  },
  publicRuntimeConfig: {
    gtm: {
      id: process.env.GOOGLE_TAG_MANAGER_ID
    }
  }
};
