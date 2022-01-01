import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import { ja } from "vuetify/lib/locale";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { ja },
    current: "ja",
  },
  icons: { iconfont: "mdi" },
});
