module.exports = {
  extends: 'eslint-config-airbnb-base',
  rules: {
    'no-console': 1,
  },

  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },

  env: {
    browser: true,
  },
};
