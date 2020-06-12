import Confirm from "@/components/Confirm";

export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("Confirm", Confirm);
}

export default Confirm;
