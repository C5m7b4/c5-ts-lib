module.exports = {
  clearMocks: true,
  coverageDirectory: './coverage',
  collectCoverage: true,
  // coverageReporters: ['text', 'cobertura'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
