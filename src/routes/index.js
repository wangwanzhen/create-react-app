import React from 'react'
import {
  Route,
  IndexRedirect,
  Switch,
  Redirect
} from 'react-router'
import UserLogin from '../views/UserView/UserLogin'
import HomeView from '../views/HomeView/HomeView'
import ArticleView from '../views/ArticleView/ArticleView'

export default (store)=>{
	return (
		<Switch>
			<Route path='/' exact component={UserLogin}></Route>
			<Route path='/login' exact component={UserLogin}></Route>
			<HomeView>
				<Route exact path='/article' component={ArticleView} />
			</HomeView>
		</Switch>
	)
}

