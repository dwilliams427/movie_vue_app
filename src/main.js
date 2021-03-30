import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

Vue.config.productionTip = false;

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://127.0.0.1:3000" : "/";

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
