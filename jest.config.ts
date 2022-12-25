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
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest",
  },
  transform: {
    "^.+\\.(svg|png)$": "<rootDir>/svgTransform.cjs",
  },
  setupFilesAfterEnv: [
    "<rootDir>/src/__tests__/setup.ts"
  ],
  coverageDirectory: "coverage",
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*.test.ts?(x)"]
};
