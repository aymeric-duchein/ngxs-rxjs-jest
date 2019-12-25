module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
      astTransformers: [
        'jest-preset-angular/build/InlineFilesTransformer',
        'jest-preset-angular/build/StripStylesTransformer'
      ],
    },
  },
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/*.ts",
    "!src/**/*.module.ts",
    "!src/environments/**/*.ts",
  ],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1',
    '^@mocks/(.*)$': '<rootDir>/test/$1'
  },
  snapshotSerializers: [
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
  setupFilesAfterEnv: ["<rootDir>/src/setupJest.ts"],
  setupFiles: ["jest-date-mock"],
  restoreMocks: true,
  clearMocks: true
};
