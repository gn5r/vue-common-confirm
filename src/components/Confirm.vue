<template>
  <!-- 共通ダイアログコンポーネント。幅は500、高さ上限なし。ダイアログの外をクリックしても閉じない設定 -->
  <v-dialog v-model="dialog" persistent width="500">
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
            <!-- propsのenableCloseがtrueの時に閉じるボタンを表示(描画)する。デフォルトは非表示 -->
            <v-btn v-if="enableClose" icon @click="$emit('update:dialog', false)">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </v-card-title>

      <!-- ダイアログ内で表示するメッセージ -->
      <v-card-text class="body-1 black--text" style="padding-top:20px">
        {{
        message
        }}
      </v-card-text>

      <!-- 水平線 -->
      <v-divider />

      <!-- 各種ボタン類をここに配置する -->
      <v-card-actions>
        <v-spacer />
        <v-btn
          v-for="(button, index) in buttons"
          :key="index"
          :color="button.color"
          @click="button.function"
        >{{ button.text }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Confirm",
  props: {
    dialog: Boolean,
    title: String,
    titleIcon: String,
    titleColor: String,
    message: String,
    buttons: Array,
    enableClose: Boolean
  }
};
</script>

<style scoped></style>
