import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VConfirm from "@gn5r/vue-common-confirm";
// import "@gn5r/vue-common-confirm/dist/v-confirm.min.css";

Vue.use(VConfirm);

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
