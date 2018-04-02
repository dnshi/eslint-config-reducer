module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    semi: 0,
    'prettier/prettier': [
      'error',
      { singleQuote: true, semi: false, trailingComma: 'es5' },
    ],
  },
}
