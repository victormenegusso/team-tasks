// parser: 'babel-eslint',
module.exports = {
  env: { es6: true, node: true },
  extends: 'airbnb-base',
  parserOptions: { sourceType: 'module', ecmaVersion: 2017 },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'never'],
    'no-console': 0,
    'no-useless-escape': 0,
    'linebreak-style': 0,
    'class-methods-use-this': 'off',
    'max-len': ['error', { code: 150, ignoreStrings: true }],
    'object-curly-newline': 'off',
    'prefer-destructuring': ['error', { object: true, array: false }],
  }
}