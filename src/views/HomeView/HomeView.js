import React from 'react'
import styles from './HomeView.css'
import styled from 'styled-components'

const Title = styled.h1`
	font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`
class HomeView extends React.Component {
	constructor(props){
		super()
	}
	requestData = ()=>{

	}
	render(){
		let {children} = this.props
		return (
			<div>
				<div className={styles.nav}>我是home</div>
				<Title>我是标题</Title>
				<div>
					<div>
						{children}
					</div>
				</div>
			</div>
		)
	}
}
export default HomeView
