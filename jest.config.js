// eslint-disable-next-line import/no-extraneous-dependencies
const yargs = require('yargs');

const args = yargs(process.argv).parse();

const coverage = args.coverage === true;
const reporters = ['default'];
if (coverage) {
  reporters.push(['jest-html-reporters', {
    publicPath: './test-result/html',
    filename: 'report.html',
    openReport: true,
  }]);
}

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
  coverageDirectory: './test-result/coverage/',
  reporters,
  setupFilesAfterEnv: ['jest-extended/all', 'expect-playwright'],
  transform: {
    '.+\\.(t|j)sx?$': [
      'esbuild-jest', {
        sourcemap: true,
        loaders: {
          '.spec.ts': 'tsx',
        },
      },
    ],
  },
};
