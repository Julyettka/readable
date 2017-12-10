import {GET_POSTS, GET_ONE_POST} from '../actions/types'

const posts = (state = [], action) => {
	switch(action.type){
		case GET_POSTS:
			return action.posts;
		case GET_ONE_POST:
			return action.post;
		default:
			return state;
	}
}

export default posts;
