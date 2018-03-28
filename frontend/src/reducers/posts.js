import {GET_POSTS, GET_POST_CATEGORY, DOWNVOTE_POST, UPVOTE_POST,
	ADD_POST, DELETE_POST} from '../actions/types'

const posts = (state = [], action) => {
	switch(action.type){
		case GET_POSTS:
			return action.posts;
		case GET_POST_CATEGORY:
      		return {
        	...state,
        	posts: action.posts
      	}
		case DOWNVOTE_POST:
		case UPVOTE_POST:
			return state.map(post=>
				(post.id === action.post.id) ? post = action.post : post);
		case ADD_POST:
			return state;
		case DELETE_POST:
			return state.filter(post => post.id !== action.id);
		default:
			return state;
	}
}

export default posts;
