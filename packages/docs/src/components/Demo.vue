<template>
  <v-container class="fill-height" fluid>
    <v-row justify="center" align="center" style="height: 100%">
      <v-col cols="8" style="height: 50%">
        <v-card height="100%" width="100%" />
      </v-col>
      <v-col cols="8" style="height: 50%">
        <v-card height="100%" width="100%">
          <v-card-text class="pa-0">
            <v-container fluid>
              <v-row justify="start" align="center">
                <v-col cols="1">
                  <v-btn color="info" @click="dialog = true">dialog</v-btn>
                </v-col>
                <v-col cols="1">
                  <v-btn color="success" @click="active = true">v-dialog</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-confirm v-model="dialog" :btns="btns" closeable />
    <v-dialog v-model="active" persistent width="800">
      <v-card>
        <v-card-title class="pa-0">
          <v-toolbar dark dense color="info">
            <v-spacer />
            <v-toolbar-items>
              <v-icon dark @click="active = false">mdi-close</v-icon>
            </v-toolbar-items>
          </v-toolbar>
        </v-card-title>
        <v-divider />
        <v-card-actions class="justify-end">
          <v-btn color="info" outlined @click="active = false">close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { VConfirmBtn } from "@gn5r/vue-common-confirm";

type DataType = {
  dialog: boolean;
  active: boolean;
  btns: VConfirmBtn[];
};

export default Vue.extend({
  name: "Demo",
  model: {},
  mixins: [],
  props: {},
  data: (): DataType => ({
    dialog: false,
    active: false,
    btns: [],
  }),
  methods: {},
  created() {
    //
    this.btns = [
      {
        text: "ok",
        outlined: true,
        color: "info",
        function: () => {
          console.debug("ok");
          this.dialog = false;
        },
      },
    ];
  },
  computed: {},
  watch: {},
  components: {},
});
</script>

<style scoped></style>
