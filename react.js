const base = require('./index.js')

module.exports = Object.assign({}, base, {
  extends: ['airbnb', 'prettier', 'prettier/react'],
})
