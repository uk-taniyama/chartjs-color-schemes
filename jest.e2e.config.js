const base = require('./jest.config');

module.exports = {
  ...base,
  preset: 'jest-playwright-preset',
  testMatch: [
    '**/*.e2e.ts',
  ],
};
