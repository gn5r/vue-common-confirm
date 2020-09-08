import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import '@fortawesome/fontawesome-free/css/all.css'
import "vue-loading-overlay/dist/vue-loading.css";

Vue.config.productionTip = false

// import Confirm from "./index"
// Vue.use(Confirm)

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')
