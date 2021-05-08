module.exports = {
  transpileDependencies: ["vuetify"],
  //開発中時の設定
  devServer: {
    //ポートを80で起動
    port: 80,
  },
  // 出力ディレクトリ名
  outputDir: process.env.VUE_APP_OUTPUT_DIR,

  // 本webアプリのurl的なやつ
  publicPath: "/vue-common-confirm",

  // 画像ファイルなどにハッシュ値を付与しない
  filenameHashing: false,
};
