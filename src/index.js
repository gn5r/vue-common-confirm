import Confirm from "./components/Confirm.vue";
import mixin from "../lib/mixin.js";

// Vue.use時に実行される
export default {
  install: (Vue) => {
    Vue.component("confirm", Confirm);
    Vue.mixin(mixin);
  },
};
