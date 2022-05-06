// This file is not copied into the image.
module.exports = {
  verbose: false,
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setupJest.ts"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
  // reporters: [["jest-reporter", {}]],
  globals: {
    "ts-jest": {
      packageJson: "<rootDir>/package.json",
      tsconfig: "<rootDir>/tsconfig.spec.json",
      stringifyContentPathRegex: "\\.html$",
      astTransformers: [
        "<rootDir>/node_modules/jest-preset-angular/build/InlineFilesTransformer",
        "<rootDir>/node_modules/jest-preset-angular/build/StripStylesTransformer",
      ],
    },
  },
};
