
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#39b982' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/firebase.js'],
  /*
  ** Rutas del Login
  */
  router: ['~/middleware/router-auth.js'],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  icon: {
    iconSrc: './static/icon-app.png'
  },
  manifest: {
    short_name: 'SO',
    name: 'School Online',
    start_url: '/',
    theme_color: '#202225'
  },
  pwa: {
    workbox: {
      autoRegister:'./static/firebase-messaging-sw.js'
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    extractCSS: true,
    optimization :{
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        name: 'test',
        maxSize : 256000
      }
    }
    */
    extend (config, ctx) {
    }
  }
}
