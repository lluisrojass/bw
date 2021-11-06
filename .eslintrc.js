module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    extraFileExtensions: ['.vue']
  },
  extends: [
    '@nuxtjs',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
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
    },
    {
      files: ['src/services/*'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    }
  ]
};
