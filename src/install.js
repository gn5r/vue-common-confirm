import VConfirm from "./components/Confirm.vue";
import mixin from "../lib/mixin.js";

const confirm = {
  install: (Vue) => {
    Vue.component("confirm", VConfirm);
    Vue.mixin(mixin);
  },
};

export default confirm;
