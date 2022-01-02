const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const resolve = (dir = "") => path.resolve(__dirname, dir);

/**
 * @type {import("webpack").Configuration}
 */
module.exports = {
  context: __dirname,
  target: ["web", "es5"],
  entry: {
    "v-confirm": "./src/index.ts",
    "v-confirm.min": "./src/index.ts",
  },
  output: {
    clean: true,
    path: resolve("dist"),
    filename: "[name].js",
    library: "VConfirm",
    libraryTarget: "umd",
    globalObject: "this",
    umdNamedDefine: true,
  },
  externals: {
    vue: {
      commonjs: "vue",
      commonjs2: "vue",
      amd: "vue",
      root: "Vue",
    },
  },
  resolve: {
    modules: [resolve("../../node_modules")],
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
    extensions: ["*", ".js", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.ts$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: false,
            },
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sassOptions: {
                indentedSyntax: true,
              },
              sourceMap: false,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    usedExports: false,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
        extractComments: "all",
        terserOptions: { compress: { drop_console: true } },
      }),
    ],
  },
  plugins: [new MiniCssExtractPlugin({ filename: "[name].css" })],
};
