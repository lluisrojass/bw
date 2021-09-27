module.exports = {
  root: true,
  extends: [
    '@nuxtjs'
  ],
  rules: {
    'space-before-function-paren': ['error', 'never'],
    semi: ['error', 'always']
  },
  overrides: [
    {
      files: ['scripts/**/*.js'],
      rules: {
        'no-console': 'off'
      }
    },
    {
      files: ['src/**/Link.vue'],
      rules: {
        'vue/attribute-hyphenation': 'off'
      }
    }
  ]
};
