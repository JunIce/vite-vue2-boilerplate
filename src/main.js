import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router/index.js";
import ElementUi from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUi);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
