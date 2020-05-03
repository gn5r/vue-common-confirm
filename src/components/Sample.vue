<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-card>
        <v-card-text>
          <v-container fluid>
            <v-row justify="start" align="center" no-gutters>
              <v-col cols="12" sm="12" lg="4">
                <v-switch v-model="closable" label="closable" />
              </v-col>
              <v-col cols="12" sm="12" lg="8">
                <v-text-field v-model="message" label="ダイアログメッセージ" />
              </v-col>
            </v-row>

            <v-row justify="center" align="center" class="text-sm-left text-lg-center">
              <v-col cols="6" sm="6" lg="3">
                <v-btn color="info" @click="confirm(message,callback)">confirm</v-btn>
              </v-col>
              <v-col cols="6" sm="6" lg="3">
                <v-btn color="warning" @click="warning(message,callback)">warning</v-btn>
              </v-col>
              <v-col cols="6" sm="6" lg="3">
                <v-btn color="error" @click="error(message)">error</v-btn>
              </v-col>
              <v-col cols="6" sm="6" lg="3">
                <v-btn color="success" @click="complete(message)">complete</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>

      <!-- Confirm -->
      <confirm
        :dialog.sync="confirmObj.dialog"
        :title="confirmObj.title"
        :titleIcon="confirmObj.titleIcon"
        :titleColor="confirmObj.titleColor"
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
    loading: false
  }),
  methods: {
    // デモコールバック関数
    callback() {
      // asyncデモとしてローディングを表示
      this.loading = true;

      // 2秒後にモーダル表示
      setTimeout(() => {
        this.loading = false;
        this.modal("コールバックテスト");
      }, 2000);
    }
  },
  components: {
    Confirm,
    Loading
  }
};
</script>

<style>
</style>