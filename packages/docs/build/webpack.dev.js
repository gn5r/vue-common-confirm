const base = require("./webpack.config");
const { merge } = require("webpack-merge");
const path = require("path");

/**
 * @type {import("webpack").Configuration}
 */
module.exports = merge(base, {
  target: "web",
  devServer: {
    host: process.env.HOST || "localhost",
    port: process.env.PORT || 8080,
    open: process.env.BASE_URL || "/vue-common-confirm",
    hot: true,
    static: {
      directory: path.join(__dirname, "../src"),
      publicPath: process.env.BASE_URL || "/vue-common-confirm",
      watch: true,
    },
  },
});
