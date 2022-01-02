<template>
  <v-app>
    <v-app-bar app fixed dense dark color="primary">
      <v-app-bar-title>vue-common-confirm</v-app-bar-title>
      <v-spacer />
      <v-toolbar-items class="align-center">
        <v-tooltip bottom>
          <template #activator="{ on }">
            <a
              href="https://gtihub.com/gn5r/vue-commn-confirm"
              target="_blank"
              v-on="on"
            >
              <v-icon dark large>mdi-github</v-icon>
            </a>
          </template>
          <span>GitHub</span>
        </v-tooltip>
      </v-toolbar-items>
    </v-app-bar>
    <v-main class="grey lighten-3">
      <demo />
    </v-main>
    <v-footer app fixed color="transparent">
      <v-row justify="end" align="center">
        <v-col class="text-right" cols="12" sm="12" md="4" xl="3">
          development by &copy;
          <a href="https://github.com/gn5r" target="_blank"
            >shangyuan.tuolang</a
          >
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Demo from "@/components/Demo.vue";

export default Vue.extend({
  name: "App",
  model: {},
  mixins: [],
  props: {},
  data: () => ({}),
  methods: {},
  created() {
    //
  },
  computed: {},
  watch: {},
  components: {
    Demo,
  },
});
</script>

<style scoped></style>
