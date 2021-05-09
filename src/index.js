import Confirm from "@/components/Confirm";
import mixin from "../lib/mixin-promise.js";
import locale from "../locale/locale";

// Vue.use時に実行される
Confirm.install = function(Vue, options = null) {
  if (Confirm.install.installed) return;
  Confirm.install.installed = true;

  Vue.component(Confirm.name, Confirm);
  Vue.mixin({
    ...mixin,
    beforeCreate() {
      let prototype = { locale: locale.en, current: "en" };

      if (options !== null) {
        const lang = options.lang;
        if (typeof lang === "string" && (lang === "en" || lang === "ja")) {
          prototype.locale = locale[lang];
          prototype.current = lang;
        } else if (typeof lang === "object" && lang !== null && lang !== {}) {
          prototype.locale = lang;
        }
      }
      this.$confirm = prototype;
    },
  });
};

export default Confirm;
