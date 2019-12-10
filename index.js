module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  env: {
    node: true,
  },
  rules: {
    semi: 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-use-before-define': ['error', 'nofunc'],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'all',
        arrowParens: 'always',
      },
    ],
  },
}
