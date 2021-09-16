export default {
  target: 'static',
  srcDir: './src',
  router: {
    base: '/bw/'
  },
  head: {
    title: 'b&w',
    meta: [
      { 
        charset: 'utf-8' 
      },
      { 
        name: 'viewport', 
        content: 'width=device-width, initial-scale=1' 
      },
      { 
        id: 'description', 
        name: 'description', 
        content: 'black and white squares from my iPhone' 
      }
    ]
  },
  css: [
    '~/assets/css/fonts.css',
    '~/assets/css/reset.scss',
  ],
  plugins: [],
  components: false,
  buildDir: 'build',
  buildModules: ["@nuxtjs/svg"],
  build: {
    styleResources: {
      scss: './src/assets/css/env.scss'
    }
  }
}