[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# vue-common-confirm

## インストール

- インストールコマンド

  `npm i @gn5r/vue-common-confirm @fortawesome/fontawesome-free`  
   `vue add vuetify`  
   本コンポーネントは`Vuetify`および`fontawesome-free`を使用しているので併せてインストールしてください

- 依存関係(公開時バージョン)

  - vue:^2.6.11
  - vuetify:^2.2.11
  - @fortawesome/fontawesome-free:^5.13.0

## 使い方

```vue
<template>
  <div>
    <button @click="addData">追加</button>
  </div>
  <confirm
    :dialog.sync="confirmObj.dialog"
    :title="confirmObj.title"
    :titleIcon="confirmObj.titleIcon"
    :titleColor="confirmObj.titleColor"
    :message="confirmObj.message"
    :buttons="confirmObj.buttons"
  />
</template>

<script>
import Confirm from "@gn5r/vue-common-confirm";
import mixin from "@gn5r/vue-common-confirm/lib/mixin";

export default {
  name: "sample",
  mixins: [mixin],
  data: () => ({}),
  methods: {
    addData() {
      // なんか処理
      this.confirm("データを追加しますか?", () => {
        // ダイアログで"はい"を押した後にコールバック関数が実行されるので
        // コールバック関数を記述する。または引数で関数を渡しておく
      });
    },
  },
  components: {
    Confirm,
  },
};
</script>
```

## 関数一覧

- ### confirm(message, callback = null)

  ```
  標準的な確認用ダイアログ
  message:ダイアログ内に表示するメッセージ
  callback:ダイアログの"はい"を押下後に実行されるコールバック関数
  ```

- ### warning(message, callback = null)

  ```
  警告の意味を強めた確認用ダイアログ
  message:ダイアログ内に表示するメッセージ
  callback:ダイアログの"はい"を押下後に実行されるコールバック関数
  ```

- ### error(message)

  ```
  エラー発生時用ダイアログ
  message:ダイアログ内に表示するメッセージ
  ```

- ### complete(message)

  ```
  処理などが完了した時用ダイアログ
  message:ダイアログ内に表示するメッセージ
  ```

- ### modal(message)

  ```
  javascriptのalert関数のオリジナル版。ヘッダーも無いのでalertと似た感覚で使用できる筈
  message:ダイアログ内に表示するメッセージ
  ```
