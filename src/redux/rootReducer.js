import {
	combineReducers
} from 'redux'
import {
	routerReducer as router
} from 'react-router-redux'
import articleReducer from './article/ArticleReducer'

export default combineReducers({
	article: articleReducer,
	router: router
})
