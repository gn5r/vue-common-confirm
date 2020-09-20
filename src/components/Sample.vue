<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-card>
        <v-card-text>
          <v-container fluid>
            <v-row justify="start" align="center">
              <v-col cols="6" sm="6" lg="3">
                <v-switch v-model="closable" label="closable" />
              </v-col>
              <v-col cols="6" sm="6" lg="3">
                <v-switch v-model="callbackable" label="callbackable" />
              </v-col>
              <v-col cols="6" sm="4" lg="3">
                <v-checkbox
                  v-model="callback.yes"
                  label="Yes CallBack Func"
                  :disabled="!callbackable"
                />
              </v-col>
              <v-col cols="6" sm="4" lg="3">
                <v-checkbox
                  v-model="callback.no"
                  label="No CallBack Func"
                  :disabled="!callbackable"
                />
              </v-col>
            </v-row>

            <v-row justify="start" align="center" no-gutters>
              <v-col cols="12" sm="6" lg="6">
                <v-text-field
                  v-model="message"
                  label="ダイアログ内メッセージ"
                  outlined
                />
              </v-col>
            </v-row>

            <v-row
              justify="start"
              align="center"
              class="text-sm-left text-lg-center"
            >
              <v-col cols="6" sm="6" lg="4">
                <v-btn color="info" @click="demo('verify')">confirm</v-btn>
              </v-col>
              <v-col cols="6" sm="6" lg="4">
                <v-btn color="warning" @click="demo('warning')">warning</v-btn>
              </v-col>
              <v-col cols="6" sm="6" lg="4">
                <v-btn color="error" @click="demo('err')">error</v-btn>
              </v-col>
              <v-col cols="6" sm="6" lg="4">
                <v-btn color="success" @click="demo('comp')"
                  >complete</v-btn
                >
              </v-col>
              <v-col cols="6" sm="6" lg="4">
                <v-btn @click="demo('modal')">modal</v-btn>
              </v-col>
              <v-col cols="6" sm="6" lg="4">
                <v-btn color="warning" @click="demo('warn')">warn</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>

      <!-- Confirm -->
      <confirm
        :dialog.sync="confirmObj.dialog"
        :title="confirmObj.title"
        :title-icon="confirmObj.titleIcon"
        :title-color="confirmObj.titleColor"
        :message="confirmObj.message"
        :buttons="confirmObj.buttons"
        :closable="closable"
        max-width="600"
      />

      <!-- vue-overlay-loading -->
      <loading :active.sync="loading" is-full-page />
    </v-row>
  </v-container>
</template>

<script>
import Confirm from "@/components/Confirm";
import mixin from "../../lib/mixin";
import Loading from "vue-loading-overlay";

export default {
  name: "Sample",
  mixins: [mixin],
  data: () => ({
    closable: false,
    message: "",
    loading: false,
    callbackable: false,
    callback: {
      yes: false,
      no: false,
    },
  }),
  methods: {
    // ダイアログ呼び出し
    demo(func) {
      if (this.callbackable) {
        if (this.required) {
          this.err("コールバック関数のどちらかのチェックをONにしてください");
          return;
        } else {
          if (func === "cmnConfirm" || func === "warning") {
            this[func](this.message, this.callbackFunc, () => {
              console.log("いいえが押されました");
            });
          } else {
            this[func](this.message, this.callbackFunc);
          }
        }
      } else {
        this[func](this.message);
      }
    },
    // デモコールバック関数
    callbackFunc() {
      // asyncデモとしてローディングを表示
      this.loading = true;

      // 2秒後にモーダル表示
      setTimeout(() => {
        this.loading = false;
        this.modal("コールバックテスト");
      }, 2000);
    },
  },

  computed: {
    required() {
      if (this.callbackable) {
        return this.callback.yes || this.callback.no ? false : true;
      } else {
        return false;
      }
    },
  },

  watch: {
    callbackable(v) {
      if (!v) {
        this.callback.yes = false;
        this.callback.no = false;
      }
    },
  },

  components: {
    Confirm,
    Loading,
  },
};
</script>

<style></style>
