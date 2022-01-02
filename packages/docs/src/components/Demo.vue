<template>
  <v-container class="fill-height" fluid>
    <v-row justify="center" align="center" style="height: 100%">
      <v-col cols="12" sm="12" lg="10" style="height: 50%">
        <v-card height="100%" width="100%">
          <v-card-text class="pa-0">
            <v-container fluid>
              <v-row justify="start" align="center">
                <v-col cols="2"> </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" lg="10" style="height: 50%">
        <v-card height="100%" width="100%">
          <v-card-text class="pa-0">
            <v-container fluid>
              <v-row justify="start" align="center">
                <v-col cols="4" sm="4" xl="1">
                  <v-btn color="info" @click="dialog = true">dialog</v-btn>
                </v-col>
                <v-col cols="4" sm="4" xl="1">
                  <v-btn color="success" @click="active = true">v-dialog</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-confirm v-model="dialog" :btns="btns" closeable />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { VConfirmBtn } from "@gn5r/vue-common-confirm";

type DataType = {
  dialog: boolean;
  btns: VConfirmBtn[];
};

export default Vue.extend({
  name: "Demo",
  model: {},
  mixins: [],
  props: {},
  data: (): DataType => ({
    dialog: false,
    btns: [],
  }),
  methods: {},
  created() {
    //
  },
  computed: {},
  watch: {},
  components: {},
});
</script>

<style scoped></style>
