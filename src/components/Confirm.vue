<template>
  <!-- 共通ダイアログコンポーネント。ダイアログの外をクリックしても閉じない設定 -->
  <v-dialog
    :value.sync="dialog"
    :style="styles"
    :width="width"
    :max-width="maxWidth"
    persistent
    @input="$emit('update:dialog', false)"
  >
    <v-card>
      <!-- ダイアログタイトル -->
      <v-card-title v-if="title" class="pa-0">
        <v-toolbar dark :color="titleColor">
          <v-toolbar-title class="headline font-weight-bold align-baseline">
            <v-icon v-if="titleIcon">{{ titleIcon }}</v-icon>
            {{ title }}
          </v-toolbar-title>
          <v-spacer />
          <v-toolbar-items>
            <!-- propsのclosableがtrueの時に閉じるボタンを表示(描画)する。デフォルトは非表示 -->
            <v-btn v-if="closable" icon @click="$emit('update:dialog', false)">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </v-card-title>

      <!-- ダイアログ内で表示するメッセージ -->
      <v-card-text class="body-1 black--text" style="padding-top: 20px">{{
        message
      }}</v-card-text>

      <!-- 水平線 -->
      <v-divider />

      <!-- 各種ボタン類をここに配置する -->
      <v-card-actions>
        <v-spacer />
        <v-btn
          v-for="(button, index) in buttons"
          :key="index"
          :outlined="button.outlined"
          :color="button.color"
          @click="button.function"
          >{{ button.text }}</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "v-confirm",
  description: "Vue.js共通ダイアログ",
  props: {
    dialog: {
      type: Boolean,
      description: "ダイアログ表示フラグ",
      default: false,
    },
    title: {
      type: String,
      description: "ダイアログツールバーに表示するタイトルテキスト",
      default: null,
    },
    titleIcon: {
      type: String,
      description:
        "ダイアログタイトルの右に表示するアイコン。fontawesomeやmaterialdesigniconsを指定可能",
      default: null,
    },
    titleColor: {
      type: String,
      description: "ダイアログツールバーの色",
      default: null,
    },
    message: {
      type: String,
      description: "ダイアログ本体に表示するメッセージテキスト",
      default: null,
    },
    buttons: {
      type: Array,
      description: "ダイアログ下部に表示するボタン類",
      default: () => [],
    },
    closable: {
      type: Boolean,
      description:
        "ダイアログツールバーに閉じるボタンの表示フラグ。デフォルトはfalse",
      default: false,
    },
    width: {
      type: [String, Number],
      description: "ダイアログの幅",
      default: undefined,
    },
    maxWidth: {
      type: [String, Number],
      description: "ダイアログの最大幅",
      default: 500,
    },
  },

  // maxWidthを動的に変更させるため算術プロパティ内でCSS変数を列挙
  computed: {
    // バインドするスタイルを生成
    styles() {
      return {
        "--maxWidth": this.maxWidth,
      };
    },
  },
};
</script>

<style scoped>
/* Vuetifyで定義されているデバイスViewportを列挙 */
/* 親クラスである.v-dialog__contentにデータが割り振られていたので、ディープセレクタを使ってv-dialogに対してCSSを上書き */

/* 幅600px以下 */
@media screen and (min-width: 0px) and (max-width: 600px) {
  .v-dialog__content >>> .v-dialog {
    --maxWidth: calc(600px * 0.8);
    max-width: var(--maxWidth);
  }
}

/* 幅600px以上960px以下 */
@media screen and (min-width: 600px) and (max-width: 960px) {
  .v-dialog__content >>> .v-dialog {
    --maxWidth: calc(960px * 0.8);
    max-width: var(--maxWidth);
  }
}
</style>
