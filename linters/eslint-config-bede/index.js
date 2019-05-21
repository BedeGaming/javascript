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
    'no-restricted-syntax': [0],
    'no-confusing-arrow': ['error', { allowParens: true }],
    'class-methods-use-this': 1,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 1,
    'import/prefer-default-export': 0,
    'no-mixed-operators': 1,
    'no-prototype-builtins': 0,
    'no-useless-escape': 1,
    'prefer-destructuring': 1,
    'prefer-promise-reject-errors': 0,
    'prefer-spread': 1
  },
  env: {
    'browser': true
  }
};
