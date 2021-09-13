/*
 * @author: CQBCode
 * @create: 2021-07-07 09:09 AM
 * @license: MIT
 * @lastAuthor: CQBCode
 * @lastEditTime: 2021-07-07 11:23 AM
 * @desc: 封装Axios
 */
import axios from 'axios';

//import router from '@/router/index'

let baseURL='http://api_devs.wanxikeji.cn'

const service=axios.create({
	baseURL,
	//withCredentials: true,
	timeout: 15000,
})

//请求拦截

service.interceptors.request.use(function (config) {
	return config;
});
//响应拦截器
service.interceptors.response.use((response) => {

	return response;
},function (error) {
	return Promise.reject(error);
});
export default service;