import Confirm from "@/components/Confirm";
import mixin from "../lib/mixin.js";

// Vue.use時に実行される
Confirm.install = (Vue) => {
  Vue.component(Confirm.name, Confirm);
  Vue.mixin(mixin);
};

export default Confirm;
