module.exports = {
  extends: ['./index', 'airbnb', 'airbnb/hooks', 'prettier/react'].map(
    require.resolve,
  ),
  env: {
    browser: true,
  },
}
