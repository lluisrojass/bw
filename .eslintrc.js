module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/recommended'
  ],
  rules: {
    'space-before-function-paren': ['error', 'never'],
    curly: ['off'],
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
