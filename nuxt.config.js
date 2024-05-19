import AppRoutes from './src/routes/AppRoutes';
import imageIds from './scripts/get-image-ids';

export default {
  target: 'static',
  srcDir: './src',
  router: {
    base: '/photos/'
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
    ],
    link: [
      {
        rel: 'shortcut icon',
        type: 'image/x-icon',
        href: 'favicon.ico'
      }
    ]
  },
  generate: {
    dir: 'build',
    fallback: '404.html',
    routes: imageIds.map(id => AppRoutes.createInternalImagePath(id))
  },
  css: [
    '~/assets/css/fonts.css',
    '~/assets/css/reset.scss',
    '~/assets/css/styleguide.scss'
  ],
  pageTransition: 'fade',
  components: false,
  buildDir: 'build',
  build: {
    extractCSS: true,
    styleResources: {
      scss: './src/assets/css/env.scss'
    }
  }
};
