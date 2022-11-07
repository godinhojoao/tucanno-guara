export default {
  bail: 0,
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: [
    "src/**",
    "!src/interfaces/**",
    "!src/assets/**",
    "!src/styles/**",
    "!src/routes.tsx",
    "!src/App.tsx",
    "!src/main.tsx"
  ],
  coverageDirectory: "coverage",
  preset: "ts-jest",
  testMatch: ["**/__tests__/**/*.test.ts?(x)"]
};
