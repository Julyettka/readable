import { GET_ONE_POST, UPVOTE_POST, DOWNVOTE_POST, ADD_COMMENT} from '../actions/types'

const post = (state = {}, action) => {
	switch (action.type){
		case GET_ONE_POST:
			return {
        ...state,
        post: action.post
      }
		case DOWNVOTE_POST:
		case UPVOTE_POST:
		return {
			...state,
                post: action.post
            };
        case ADD_COMMENT:
        console.log(action.comment)
      // return {
      //   ...state,
      //   post: {
      //     ...state.post,
      //     comments: [...state.post.comments, action.comment]
      //   }
      // }
		default:
			return state;
	}
}

export default post;