module.exports = {
  root: true,
  extends: [
    '@nuxtjs'
  ],
  rules: {
    'space-before-function-paren': ['error', 'never'],
    'vue/multiline-html-element-content-newline': ['error', {
      ignoreWhenEmpty: true,
      ignores: ['pre', 'textarea', 'Link'],
      allowEmptyLines: false
    }],
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
