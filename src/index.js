import Confirm from "@/components/Confirm";
import mixin from "../lib/mixin";

// Vue.use時に実行される関数を定義
Confirm.install = function(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("confirm", Confirm);
  Vue.mixin(mixin);
};

export default Confirm;
