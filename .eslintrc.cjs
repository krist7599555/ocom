// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:svelte/recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
    'xo/browser',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort', 'json-format'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    extraFileExtensions: ['.svelte'],
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
  rules: {
    // 'import/resolver': {
    //   'eslint-import-resolver-custom-alias': {
    //     alias: {
    //       $docs: './src/docs.ts',
    //       $lib: './src/lib',
    //     },
    //     extensions: ['.ts', '.svelte'],
    //   },
    // },
    'svelte/no-at-html-tags': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000'],
          ['^svelte', '^\\.\\/\\$types', '^$app', '^@sveltejs'],
          ['^[a-z@]'],
          ['^\\$'],
          ['^\\.'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'no-multi-spaces': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-newline': ['error', { consistent: true }],
    'arrow-body-style': ['error', 'as-needed'],
    curly: 'warn',
    // Eqeqeq: 'error',
    'arrow-spacing': 'error',
    'block-spacing': 'error',
    'computed-property-spacing': ['error', 'never'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    indent: ['error', 2],
    'key-spacing': ['error', { mode: 'strict' }],
    'object-curly-spacing': ['error', 'always'],
    'no-multiple-empty-lines': 'error',
    'operator-linebreak': ['error', 'before'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'rest-spread-spacing': ['error', 'never'],
    'semi-spacing': ['error', { before: false, after: true }],
    'semi-style': ['error', 'last'],
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      { anonymous: 'never', named: 'never', asyncArrow: 'always' },
    ],
    'space-infix-ops': 'error',
    'template-curly-spacing': 'error',
    'wrap-iife': ['error', 'outside'],
    'yield-star-spacing': ['error', 'after'],
    camelcase: ['off'],
  },
  settings: {},
});
