import {axiosGet,axiosPost} from '../util/request'
import {API} from './ApiConfig'

export function userLogin(login,passward){
	return axiosPost(`${API.userLogin}?login=${login}&passward=${passward}`)
}
