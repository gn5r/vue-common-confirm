import VConfirm from "./components/Confirm.vue";
import mixin from "../lib/mixin.js";

const confirm = {
  // Vue.use時に実行される
  install: (Vue) => {
    Vue.component("confirm", VConfirm);
    Vue.mixin(mixin);
  },
};

export default confirm;