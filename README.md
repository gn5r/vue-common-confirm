![npm](https://img.shields.io/npm/dt/@gn5r/vue-common-confirm)
[![npm version](https://badge.fury.io/js/%40gn5r%2Fvue-common-confirm.svg)](https://badge.fury.io/js/%40gn5r%2Fvue-common-confirm)
![npm (tag)](https://img.shields.io/npm/v/@gn5r/vue-common-confirm/beta?color=green)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# vue-common-confirm

## デモページ

[vue-common-confirm Demo](https://gn5r.github.io/vue-common-confirm/)

## インストール

- インストールコマンド

  `npm i @gn5r/vue-common-confirm @fortawesome/fontawesome-free`  
   `vue add vuetify`  
   本コンポーネントは`Vuetify`および`fontawesome-free`を使用しているので併せてインストールしてください

- 依存関係(公開時バージョン)

  - vue:^2.6.12
  - vuetify:^2.3.21
  - @fortawesome/fontawesome-free:^5.15.1

## 使い方

```vue
<template>
  <div>
    <button @click="addData">追加</button>
    <confirm
      :dialog.sync="confirmObj.dialog"
      :title="confirmObj.title"
      :title-icon="confirmObj.titleIcon"
      :title-color="confirmObj.titleColor"
      :message="confirmObj.message"
      :buttons="confirmObj.buttons"
    />
  </div>
</template>

<script>
import Confirm from "@gn5r/vue-common-confirm";
import mixin from "@gn5r/vue-common-confirm/lib/mixin-promise";

export default {
  name: "sample",
  mixins: [mixin],
  data: () => ({}),
  methods: {
    async addData() {
      // なんか処理(Promiseを返却する様になったので、ボタンが押されるまで処理が中断される)
      const res = await this.confirm("データを追加しますか?");
      if(res) {
        // 「はい」が押された場合の処理を記述する
      } else {
        // 「いいえ」が押された場合の処理を記述する
      }
    },
  },
  components: {
    Confirm,
  },
};
</script>
```

## Confirm component props

|    props    |                                          説明                                           |        型        | default   |
| :---------: | :-------------------------------------------------------------------------------------: | :--------------: | --------- |
|   dialog    | ダイアログ表示フラグ。sync 修飾子を付与することで呼び出し側でフラグを反転する必要がない |     Boolean      | false     |
|    title    |                 ダイアログツールバーに表示するタイトル。各関数にて設定                  |      String      | ""        |
| title-icon  |    ダイアログツールバーの左に表示するアイコン。confirm、warning、error の 3 つで使用    |      String      | ""        |
| title-color |                      ダイアログツールバーの背景色。各関数にて設定                       |      String      | ""        |
|   message   |             ダイアログ内に表示するメッセージ。各関数に渡すことで表示される              |      String      | ""        |
|   buttons   |                     ダイアログ内に表示するボタン類。各関数にて設定                      |      Array       | []        |
|  closable   |            ダイアログツールバーに閉じるボタンを表示する。デフォルトは非表示             |     Boolean      | false     |
|    width    |                                     ダイアログの幅                                      | Number or String | undefined |
|  max-width  |          ダイアログの最大幅。スマホサイズでは自動的に 80%になるようにしている           | Number or String | 500       |

## 関数一覧

- confirm(message)

  ```
  標準的な確認用ダイアログ
  message:ダイアログ内に表示するメッセージ
  「はい」を押すとtrueを、「いいえ」を押すとfalseが返却される
  ```

- warning(message)

  ```
  警告の意味を強めた確認用ダイアログ
  message:ダイアログ内に表示するメッセージ
  「はい」を押すとtrueを、「いいえ」を押すとfalseが返却される
  ```

- err(message)

  ```
  エラー発生時用ダイアログ
  message:ダイアログ内に表示するメッセージ
  「はい」を押すとtrueが返却される
  ```

- complete(message)

  ```
  処理などが完了した時用ダイアログ
  message:ダイアログ内に表示するメッセージ
  「はい」を押すとtrueが返却される
  ```

- modal(message)

  ```
  JavaScript標準のオリジナル版alert関数。ヘッダーも無いのでalertと似た感覚で使用できる筈
  message:ダイアログ内に表示するメッセージ
  「はい」を押すとtrueが返却される
  ```
- warn(message)

  ```
  警告アラートダイアログ
  message:ダイアログ内に表示するメッセージ
  「はい」を押すとtrueが返却される
  ```