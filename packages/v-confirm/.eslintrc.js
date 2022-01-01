/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  plugins: ["@typescript-eslint"],
  extends: ["plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/no-empty-interface":
      process.env.NODE_ENV === "production" ? "error" : "warn",
  },
};
