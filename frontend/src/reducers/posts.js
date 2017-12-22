import {GET_POSTS, GET_POST_CATEGORY, GET_ONE_POST,
	UPVOTE_POST, DOWNVOTE_POST} from '../actions/types'

const posts = (state = [], action) => {
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
		case DOWNVOTE_POST:
		case UPVOTE_POST:
			return state.map(post=>
				(post.id === action.post.id) ? post = action.post : post);
		default:
			return state;
	}
}

export default posts;
