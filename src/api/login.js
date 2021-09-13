/*
 * @author: CQBCode
 * @create: 2021-07-07 09:42 AM
 * @license: MIT
 * @lastAuthor: CQBCode
 * @lastEditTime: 2021-07-07 11:29 AM
 * @desc:
 */
/**
 * 登录
 */
import request from '../utils/request.js'

export async function login(params) {
	return await request({
		url: '/api/admin/login',
		method: "post",
		params,
		// jsonp: 'handleCallback'
	});
}