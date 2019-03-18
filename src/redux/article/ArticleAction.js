import {ARTICLE_APPEND_ITEM} from '../ReducerName'
export function doAction(name='',sex=''){
	return (dispatch)=>{
		let res = name
		dispatch(addItemToLocalList(res))
	}
}
export function addItemToLocalList(res){
	return {
		type:ARTICLE_APPEND_ITEM,
		item:res
	}
}
