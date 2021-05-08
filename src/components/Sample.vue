<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-card min-width="500">
        <v-card-text>
          <v-container fluid>
            <v-row justify="start" align="center">
              <v-col cols="6" sm="6" lg="3">
                <v-switch v-model="closable" label="closable" />
              </v-col>
            </v-row>

            <v-row justify="start" align="center" no-gutters>
              <v-col cols="12" sm="12" lg="12">
                <v-textarea
                  class="sample_textarea"
                  v-model="message"
                  label="ダイアログ内メッセージ"
                  rows="3"
                  row-height="10"
                  solo
                />
              </v-col>
            </v-row>

            <v-row
              justify="start"
              align="center"
              class="text-sm-left text-lg-center"
            >
              <v-col cols="6" sm="6" lg="4">
                <v-btn color="info" @click="demo('confirm')">confirm</v-btn>
              </v-col>
              <v-col cols="6" sm="6" lg="4">
                <v-btn color="warning" @click="demo('warning')">warning</v-btn>
              </v-col>
              <v-col cols="6" sm="6" lg="4">
                <v-btn color="error" @click="demo('err')">error</v-btn>
              </v-col>
              <v-col cols="6" sm="6" lg="4">
                <v-btn color="success" @click="demo('complete')"
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
// import mixin from "../../lib/mixin";
import mixin from "../../lib/mixin-promise";
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
    async demo(func) {
      const res = await this[func](this.message);
      console.debug("result:", res);
    },
  },

  computed: {},

  watch: {},

  components: {
    Confirm,
    Loading,
  },
};
</script>

<style scoped>
.sample_textarea >>> textarea{
  margin-top: 0 !important;
}
</style>
