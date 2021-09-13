/*
 * @author: CQBCode
 * @create: 2021-07-06 17:11 PM
 * @license: MIT
 * @lastAuthor: Kate-sy
 * @lastEditTime: 2021-07-19 15:55 PM
 * @desc:
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
//import service from '@/utils/request'
Vue.use(ElementUI);

Vue.config.productionTip = false;
//Vue.prototype.service=service
import myaxios from "./myaxios";
Vue.prototype.myaxios = myaxios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

Vue.prototype.$get = (params) => {
  let ele = document.querySelectorAll(params);
  if (ele.length <= 1) {
    ele = ele[0];
  }
  return ele;
};
