![npm](https://img.shields.io/npm/dt/@gn5r/vue-common-confirm)
[![npm version](https://badge.fury.io/js/%40gn5r%2Fvue-common-confirm.svg)](https://badge.fury.io/js/%40gn5r%2Fvue-common-confirm)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# vue-common-confirm

## デモページ

[vue-common-confirm Demo](https://gn5r.github.io/vue-common-confirm/){:target="_blank"}

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
    <confirm
      :dialog.sync="confirmObj.dialog"
      :title="confirmObj.title"
      :titleIcon="confirmObj.titleIcon"
      :titleColor="confirmObj.titleColor"
      :message="confirmObj.message"
      :buttons="confirmObj.buttons"
    />
  </div>
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

## Confirm component props

|    props    |                                          説明                                           |   型    | default |
| :---------: | :-------------------------------------------------------------------------------------: | :-----: | ------- |
|   dialog    | ダイアログ表示フラグ。sync 修飾子を付与することで呼び出し側でフラグを反転する必要がない | Boolean | false   |
|    title    |                 ダイアログツールバーに表示するタイトル。各関数にて設定                  | String  | ""      |
|  titleIcon  |    ダイアログツールバーの左に表示するアイコン。confirm、warning、error の 3 つで使用    | String  | ""      |
| titleColor  |                      ダイアログツールバーの背景色。各関数にて設定                       | String  | ""      |
|   message   |             ダイアログ内に表示するメッセージ。各関数に渡すことで表示される              | String  | ""      |
|   buttons   |                     ダイアログ内に表示するボタン類。各関数にて設定                      |  Array  | []      |
| enableClose |            ダイアログツールバーに閉じるボタンを表示する。デフォルトは非表示             | Boolean | false   |

## 関数一覧

- confirm(message, callback = null)

  ```
  標準的な確認用ダイアログ
  message:ダイアログ内に表示するメッセージ
  callback:ダイアログの"はい"を押下後に実行されるコールバック関数
  ```

- warning(message, callback = null)

  ```
  警告の意味を強めた確認用ダイアログ
  message:ダイアログ内に表示するメッセージ
  callback:ダイアログの"はい"を押下後に実行されるコールバック関数
  ```

- error(message)

  ```
  エラー発生時用ダイアログ
  message:ダイアログ内に表示するメッセージ
  ```

- complete(message)

  ```
  処理などが完了した時用ダイアログ
  message:ダイアログ内に表示するメッセージ
  ```

- modal(message)

  ```
  javascriptのalert関数のオリジナル版。ヘッダーも無いのでalertと似た感覚で使用できる筈
  message:ダイアログ内に表示するメッセージ
  ```
