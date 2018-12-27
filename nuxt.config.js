const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: '松松的博客',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: '松松的博客，关注最新前端技术' },
      { name: 'keywords', content: '未松松，松松博客，前端，html,css,js,thinkphp,linux,前端技术' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ebe2c5' },

  /*
  ** Global CSS
  */
  css: [
    '~assets/css/reset.css',
    '~assets/css/animate.css',
    '~assets/libs/font-awesome/css/font-awesome.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-lazyload.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    prefix: '/api/', proxy: true // Can be also an object with default options 
  },
  proxy: { '/api': { target: 'https://songsongwei.top', pathRewrite: { '^/api': '' }, changeOrigin: true } },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios','~/plugins/vue-lazyload.js'],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
