module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict'
  ],
  rules: {
    'max-len': [2, 120, 2, {
      ignoreUrls: true,
      ignoreComments: false
    }],
    'comma-dangle': [2, 'never'],
    'no-restricted-syntax': [0]
  }
};
