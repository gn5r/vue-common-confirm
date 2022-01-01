import base from "./webpack.config";
import { merge } from "webpack-merge";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import TerserPlugin from "terser-webpack-plugin";

export default merge(base, {
  target: ["web", "es5"],
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
  plugins: [new MiniCssExtractPlugin({ filename: "main.css" })],
});
