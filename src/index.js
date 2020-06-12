import Confirm from "@/components/Confirm";
import mixin from "../lib/mixin";

export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("confirm", Confirm);
  Vue.mixin(mixin);
}

export default Confirm;
