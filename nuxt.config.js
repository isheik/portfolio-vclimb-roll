module.exports = {
  modules: ["@nuxtjs/vuetify"],
  /*
   ** Headers of the page
   */
  head: {
    title: "portfolio-vclimb-roll",
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
  loading: { color: "#3B8070" },
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
    { src: "~/plugins/vue-particles", ssr: false }
    // { src: "~/plugins/vue-parallaxy", ssr: false }
  ]
}
