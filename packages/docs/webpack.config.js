const path = require("path");
import TerserPlugin from "terser-webpack-plugin";
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
import MiniCssExtractPlugin from "mini-css-extract-plugin";
const { VuetifyLoaderPlugin } = require("vuetify-loader");

const resolve = (dir = "") => path.resolve(__dirname, dir);

const isProcudtion = process.env.NODE_ENV === "production";

/**
 * @type {import("webpack").Configuration}
 */
module.exports = {
  mode: isProcudtion ? "production" : "development",
  devtool: isProcudtion ? false : "inline-source-map",
  target: ["web", "es5"],
  entry: "./src/main.ts",
  output: {
    clean: true,
    path: resolve("docs"),
    filename: "js/[name].[chunkhash].js",
    publicPath: "",
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": resolve("../src"),
    },
    extensions: ["*", ".js", ".ts", "vue"],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "vue-style-loader", "css-loader"],
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sassOptions: {
                indentedSyntax: true, // optional
              },
            },
          },
        ],
      },
    ],
  },
  optimization: {
    usedExports: false,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
        extractComments: "all",
        terserOptions: { compress: { drop_console: true } },
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      hash: false,
      template: "./src/index.html",
      minify: {
        removeComments: isProcudtion,
        collapseWhitespace: isProcudtion,
        removeAttributeQuotes: isProcudtion,
        minifyJS: isProcudtion,
        minifyCSS: isProcudtion,
        minifyURLs: isProcudtion,
      },
    }),
    new VueLoaderPlugin(),
    new VuetifyLoaderPlugin(),
  ],
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
};

if (isProcudtion) {
  module.exports.plugins.push(
    new MiniCssExtractPlugin({ filename: "css/demo-[chunkhash].css" })
  );
}
