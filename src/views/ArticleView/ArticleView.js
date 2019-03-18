import React from 'react'
import { connect } from 'react-redux'
import styles from './ArticleView.css'
import { doAction } from '../../redux/article/ArticleAction'

class ArticleView extends React.Component {
	constructor(props){
		super()
	}
	requestData = ()=>{
		this.props.doAction('oushochin','women')
	}
	changeInput = (e)=>{
		this.props.doAction(e.target.value,'women')
	}
	render(){
		return (
			<div>
				<div>我是article</div>
				<div>
					<button onClick={this.requestData}>请求</button>
					<div>
						<input onKeyUp={this.changeInput} />
					</div>
					<div>我是store里的name：{this.props.name}</div>
				</div>
			</div>
		)
	}
}
const mapStateToProps = (state)=>{
	return {
		name:state.article.name
	}
}
const mapDispathToProps = (dispatch, ownProps) => {
	return {
    doAction: (...args) => dispatch(doAction(...args))
  }
}
export default connect(mapStateToProps,mapDispathToProps)(ArticleView)
