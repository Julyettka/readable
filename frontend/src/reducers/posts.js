import {GET_POSTS, GET_POST_CATEGORY, GET_ONE_POST} from '../actions/types'

const posts = (state = {}, action) => {
	switch(action.type){
		case GET_POSTS:
			return action.posts;
		case GET_POST_CATEGORY:
      		return {
        	...state,
        	posts: action.posts
      	}
		case GET_ONE_POST:
			return state;
		default:
			return state;
	}
}

export default posts;
