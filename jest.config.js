const esmodules = [
  'd3-.*',
  'lodash-es',
  'chartjs-plugin-colorschemes',
].join('|');

module.exports = {
  roots: [
    '<rootDir>/src',
  ],
  testEnvironment: 'jsdom',
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transformIgnorePatterns: [
    `node_modules/(?!(${esmodules})/)`,
  ],
  setupFilesAfterEnv: ['jest-extended/all', 'expect-playwright'],
  transform: {
    '.+\\.(t|j)sx?$': [
      '@swc/jest', {
        sourceMaps: true,
        module: {
          type: 'commonjs',
        },
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
        },
      },
    ],
  },
};
