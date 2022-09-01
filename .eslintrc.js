module.exports = {
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/type-annotation-spacing': 'error',
  },
};
