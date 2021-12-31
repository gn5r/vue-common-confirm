/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/recommended"
  ],
  rules: {
    "@typescript-eslint/no-empty-interface":
      process.env.NODE_ENV === "production" ? "error" : "warn",
  }
}