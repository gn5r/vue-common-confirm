const base = require("../../jest.config");

/**
 * @type {import("@jest/types").Config.InitialOptions}
 */
module.exports = {
  ...base,
  name: "vue-common-confirm",
  displayName: "vue-common-confirm",
  setupFiles: ["<rootDir>/tests/setup.ts"]
};
