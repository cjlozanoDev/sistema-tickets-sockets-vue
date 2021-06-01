import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueSocketIO from "vue-socket.io";
import "normalize.css";
import "./resources/css/main.css";
import "material-design-icons/iconfont/material-icons.css";

Vue.config.productionTip = false;

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: "http://192.168.1.50:3000/",
  })
);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
