// eslint-disable-next-line import/no-extraneous-dependencies
const yargs = require('yargs');

const args = yargs(process.argv).parse();

const coverage = args.coverage === true;
const reporters = ['default'];
if (coverage) {
  reporters.push(['jest-html-reporters', {
    publicPath: './test-result/html.e2e',
    filename: 'report.html',
    openReport: true,
  }]);
}

const base = require('./jest.config');

module.exports = {
  ...base,
  preset: 'jest-playwright-preset',
  testMatch: [
    '**/*.e2e.ts',
  ],
  coverageDirectory: './test-result/coverage.e2e/',
  reporters,
};
