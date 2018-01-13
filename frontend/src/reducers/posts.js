import {GET_POSTS, GET_POST_CATEGORY, DOWNVOTE_POST, UPVOTE_POST,
	ADD_POST} from '../actions/types'

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
		// it adds without reducer here
		default:
			return state;
	}
}

export default posts;
