import _Vue from "vue";
import VConfirm from "./components/VConfirm";

function install(Vue: typeof _Vue): void {
  if ((install as any).installed) return;
  (install as any).installed = true;
  Vue.component("v-confirm", VConfirm);
}

(VConfirm as any).install = install;

export default VConfirm;
