import {GET_COMMENTS, UPVOTE_COMMENT, DOWNVOTE_COMMENT} from '../actions/types'

const comments = (state = {}, action) => {
  switch(action.type) {
    case GET_COMMENTS:
      return action.comments;
    case DOWNVOTE_COMMENT:
    case UPVOTE_COMMENT:
    	return state.map(comment =>
    		(comment.id === action.comment.id) ? comment = action.comment : comment);
    default:
      return state;
  }
}

export default comments