import { GET_ONE_POST, UPVOTE_POST, DOWNVOTE_POST,
	ADD_POST} from '../actions/types'

const post = (state = {}, action) => {
	switch (action.type){
		case GET_ONE_POST:
			return {
        ...state,
        post: action.post
      }
		case DOWNVOTE_POST:
		case UPVOTE_POST:
		return state.map(post=>
				(post.id === action.post.id) ? post = action.post : post);
		case ADD_POST:
		default:
			return state;
	}
}

export default post;