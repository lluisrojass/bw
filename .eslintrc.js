module.exports = {
  root: true,
  extends: [
    '@nuxtjs'
  ],
  rules: {
    'space-before-function-paren': ['error', 'never']
  },
  overrides: [
    {
      files: ['scripts/**/*.js'],
      rules: {
        'no-console': 'off'
      }
    }
  ]
}
