/**
 * @type {import("@jest/types").Config.InitialOptions}
 */
module.exports = {
  verbose: false,
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  moduleFileExtensions: ["js", "ts"],
  moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|scss|sass)$": "<rootDir>/../../node_modules/jest-css-modules"
  },
  testMatch: ["**/__tests__/**/*.spec.js", "**/__tests__/**/*.spec.ts"],
  transform: {
    ".*\\.(vue)$": "vue-jest",
    ".*\\.(j|t)s$": "babel-jest"
  },
  transformIgnorePatterns: ["node_modules/(?!vuetify)"],
  snapshotSerializers: ["jest-serializer-vue"],
  testURL: "http://localhost"
};
