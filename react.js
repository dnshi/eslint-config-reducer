const base = require('./index.js')

module.exports = {
  ...base,
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  env: {
    browser: true,
  },
}
