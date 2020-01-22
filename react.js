const index = require('./index')

module.exports = {
  ...index,
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  env: {
    browser: true,
  },
}
