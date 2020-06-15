import Confirm from "./components/Confirm.vue";
import mixin from "../lib/mixin.js";

// Vue.use時に実行される関数を定義
function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("confirm", Confirm);
  Vue.mixin(mixin);
}

const plugin = {
  install,
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default Confirm;
