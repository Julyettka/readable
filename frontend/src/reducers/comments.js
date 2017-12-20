import {GET_COMMENTS, UPVOTE_COMMENT, DOWNVOTE_COMMENT} from '../actions/types'

const comments = (state = {}, action) => {
  switch(action.type) {
    case GET_COMMENTS:
      return action.comments;
    case UPVOTE_COMMENT:
    	console.log(action.comment.voteScore);
    	return state;
    case DOWNVOTE_COMMENT:
    default:
      return state;
  }
}

export default comments