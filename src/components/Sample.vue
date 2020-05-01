<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-card width="800">
        <v-card-text>
          <v-container fluid>
            <v-row justify="space-around" align="center">
              <v-col cols="8">
                <v-text-field v-model="message" label="ダイアログメッセージ" />
              </v-col>
              <v-col cols="2">
                <v-switch v-model="enableClose" label="enableClose" />
              </v-col>

              <v-col cols="3">
                <v-btn color="info" @click="confirm(message,callback)">confirm</v-btn>
              </v-col>
              <v-col cols="3">
                <v-btn color="warning" @click="warning(message,callback)">warning</v-btn>
              </v-col>
              <v-col cols="3">
                <v-btn color="error" @click="error(message)">error</v-btn>
              </v-col>
              <v-col cols="3">
                <v-btn color="success" @click="complete(message)">complete</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>

      <confirm
        :dialog.sync="confirmObj.dialog"
        :title="confirmObj.title"
        :titleIcon="confirmObj.titleIcon"
        :titleColor="confirmObj.titleColor"
        :message="confirmObj.message"
        :buttons="confirmObj.buttons"
        :enableClose="enableClose"
      />
    </v-row>
  </v-container>
</template>

<script>
import Confirm from "@/components/Confirm";
import mixin from "../../lib/mixin";

export default {
  name: "Sample",
  mixins: [mixin],
  data: () => ({
    enableClose: false,
    message: ""
  }),
  methods: {
    // デモコールバック関数
    callback() {
      // 1秒後にモーダル表示
      setTimeout(() => {
        this.modal("コールバックテスト");
      }, 1000);
    }
  },
  components: {
    Confirm
  }
};
</script>

<style>
</style>