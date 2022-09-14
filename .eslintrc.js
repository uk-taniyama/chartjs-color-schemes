module.exports = {
  ignorePatterns: [
    'modules/**',
    'dist/**',
    'coverage/**',
    '**/out/**',
    '**/*.d.ts',
    'example/vite.config.js',
  ],
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
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: true,
      },
    ],
    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-expect-error': { descriptionFormat: '^: TS\\d+' } }],
  },
};
