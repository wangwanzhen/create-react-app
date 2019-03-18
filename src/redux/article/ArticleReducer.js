import {ARTICLE_APPEND_ITEM} from '../ReducerName'

const initialState = {
	name:'tony'
}
export default function ArticleReducer(state=initialState,action){
	let newState = {}
	switch (action.type){
		case ARTICLE_APPEND_ITEM:
			newState = {...state}
			newState.name = action.item
			return newState
		default:
			return state
	}
}
