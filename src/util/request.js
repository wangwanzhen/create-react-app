import axios from 'axios'
import {isApiSuccess,getUserToken} from './util'
import {APIFIX} from '../service/ApiConfig'
require('es6-promise').polyfill()

axios.defaults.baseURL = 'APIFIX'
axios.defaults.timeout = 50000

axios.interceptors.request.use(config=>{
	config.headers.token = getUserToken()
	return config
},rea=>{
	return Promise.reject(rea)
})
axios.interceptors.response.use(res=>{
	if(isApiSuccess(res.data.code)){
		return Promise.resolve(res.data)
	}else{
		let data = res&&res.data|| {message:''}
		return Promise.reject(data)
	}
},rea=>{
	console.log(rea)
  if (rea.code === 'ECONNABORTED') return Promise.reject('请求超时')
  let {status,data={}} = rea.response
	if(status>=500){
		return Promise.reject('服务器出错了！')
	}
	return Promise.reject(data)
})

export function axiosPost(url,data){
	return axios.post(url,data).then(res=>{
    return Promise.resolve(res)
	},rea=>{
    return Promise.reject(rea)
	})
}

export function axiosGet(url,data){
	return axios.get(url,{params:data}).then(res=>{
    return Promise.resolve(res)
	},rea=>{
    return Promise.reject(rea)
	})
}
