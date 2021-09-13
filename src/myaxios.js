/*
 * @author: Kate-sy
 * @create: 2021-07-07 10:25 AM
 * @license: MIT
 * @lastAuthor: CQBCode
 * @lastEditTime: 2021-07-08 14:52 PM
 * @desc:请求拦截器封装+页面使用方法
 */
import axios from "axios";
const myaxios = new axios.create({});
//!请求拦截器
myaxios.interceptors.request.use(
  (config) => {
    let url = "http://api_devs.wanxikeji.cn/";
    config.url = url + config.url;
    console.log("请求拦截器" + config.url);
    return config;
  },
  (error) => {
    console.log(error);
    return "代码错误";
  }
);

//!响应拦截器
myaxios.interceptors.response.use((response) => {
  console.log(response);
  return response;
});
export default myaxios;

//页面使用方法
/**
 * this.myaxios({
 * url: "api/goodList",
 * 带参数(用post传的话，下面必须用data;用get传的话用params)
 *  method: "post",
 *    data: {
 *    page: 2,
 *   },
 * }).then((res)=>{
 *  console.log(res);
 * })
 */
