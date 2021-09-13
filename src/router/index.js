/*
 * @author: Kate-sy
 * @create: 2021-07-06 16:54 PM
 * @license: MIT
 * @lastAuthor: CQBCode
 * @lastEditTime: 2021-07-15 14:23 PM
 * @desc:
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Goodsmanage from "../views/Goodsmanage.vue";
import Putgoods from "../views/Putgoods.vue";
import Downgoods from "../views/Downgoods.vue";
import Uselists from "../views/Uselists.vue";
import Bannerimg from "../views/Bannerimg.vue";
import Order from "../views/Order.vue";
import Goodscategory from "../views/Goodscategory.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

Vue.use(VueRouter);

const routes=[
  // {
  //   path: "/",
  //   redirect: "/login",
  //   hidden: true,
  // },
  {
    path: "/",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/Goodsmanage",
    name: "Goodsmanage",
    component: Goodsmanage,
  },
  {
    path: "/Putgoods",
    name: "Putgoods",
    component: Putgoods,
  },
  {
    path: "/Downgoods",
    name: "Downgoods",
    component: Downgoods,
  },
  {
    path: "/Uselists",
    name: "Uselists",
    component: Uselists,
  },
  {
    path: "/Bannerimg",
    name: "Bannerimg",
    component: Bannerimg,
  },
  {
    path: "/Goodscategory",
    name: "Goodscategory",
    component: Goodscategory,
  },
  {
    path: "/Order",
    name: "Order",
    component: Order,
  },
  {
    path: "/Home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
];

const router=new VueRouter({
  routes,
});

export default router;
