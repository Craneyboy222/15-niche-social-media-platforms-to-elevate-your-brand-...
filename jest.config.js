module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/__tests__'],
  setupFilesAfterEnv: ['<rootDir>/test-utils/setup.ts'],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverage: true,
  coverageReporters: ['lcov', 'text-summary'],
};