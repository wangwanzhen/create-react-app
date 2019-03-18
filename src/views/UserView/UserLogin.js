import React from 'react'
import styles from './UserView.css'
import styled from 'styled-components'
import {userLogin} from '../../service/UserService'
import {
	Input,
	Button,
	message,
	Popconfirm,
} from 'antd';
class UserLogin extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			login:'',
			password:''
		}
	}
	submitLogin = ()=>{
		this.loginText.focus()
		this.passwordText.focus()
		this.setState({
			login:this.loginText.value,
			password:this.passwordText.value
		})
		userLogin(this.loginText.value,this.passwordText.value).then(res=>{
			message.success(res)
		},rea=>{
			message.error(rea)
		})
	}
	render(){
		let {children} = this.props
		return (
			<div>
				<input name='login' placeholder='请输入账号' type='text' ref={input=>this.loginText=input} />
				<input name='password' placeholder='请输入账号密码' type='password' ref={input=>this.passwordText=input} />
				<button onClick={this.submitLogin}>登录</button>
				<Button type="primary" size='large'>Button</Button>
			</div>
		)
	}
}
export default UserLogin

