module.exports = {
  extends: [
    '@bedegaming/eslint-config-bede'
  ],
  rules: {
    'no-underscore-dangle': [0],
    'no-new': [0],
    'no-param-reassign': ['error', {
      props: false
    }]
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [
          './src/scripts',
          './node_modules/@bedegaming/casinotoolkit/src/scripts',
          './node_modules'
        ]
      }
    }
  }
};
