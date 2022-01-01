/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "@vue/typescript/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "@typescript-eslint/no-empty-interface":
      process.env.NODE_ENV === "production" ? "error" : "warn",
    "vue/multi-word-component-names": "warn",
  },
};
