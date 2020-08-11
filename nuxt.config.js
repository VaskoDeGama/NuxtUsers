module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Bgs-group test task'},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
    ],
  },
  css: [
    '@/node_modules/vuetify/dist/vuetify.min.css'
  ],
  plugins: [
    '~/plugins/validate',
  ],
  components: true,
  vuetify: {
    customVariables: ['~/assets/variables.scss'],

  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#000'},
  /*
  ** Build configuration
  */
  mode: 'universal',
  target: 'server',
  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt',

  ],
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  axios: {
    baseURL: 'http://localhost:3000/',
    //proxy: true,
  },
  proxy: {
    //'/api/': 'http://localhost:3000/',
  },
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}

