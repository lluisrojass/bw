export default {
  target: 'static',
  srcDir: './src',
  router: {
    base: '/bw/'
  },
  head: {
    title: 'Moments In Black & White',
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
        content: 'Black and white iPhone pictures.'
      }
    ]
  },
  generate: {
    dir: 'bw'
  },
  css: [
    '~/assets/css/fonts.css',
    '~/assets/css/reset.scss',
    '~/assets/css/styleguide.scss'
  ],
  pageTransition: 'my-page',
  components: false,
  buildDir: 'build',
  build: {
    styleResources: {
      scss: './src/assets/css/env.scss'
    }
  }
};
