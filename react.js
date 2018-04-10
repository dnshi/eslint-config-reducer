const base = require('./index.js')

module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  rules: Object.assign({}, base.rules, {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  }),
}
