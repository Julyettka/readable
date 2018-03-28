import {GET_COMMENTS, UPVOTE_COMMENT, DOWNVOTE_COMMENT, ADD_COMMENT,
  EDIT_COMMENT, DELETE_COMMENT} from '../actions/types'

const comments = (state = {}, action) => {
  switch(action.type) {
    case GET_COMMENTS:
      return action.comments;
    case DOWNVOTE_COMMENT:
    case UPVOTE_COMMENT:
      return state.map(comment =>
        (comment.id === action.comment.id) ? comment = action.comment : comment);
    case ADD_COMMENT:
      let newComment = Object.assign({}, state);
      state.concat(newComment);
    case EDIT_COMMENT:
      let comToEdit = action.id;
     state =state.filter(comment => comment.id !== comToEdit);
     state.push(action.comment);
     return state;
    case DELETE_COMMENT:
        let comToDel = action.comment.id;
        return state.filter(comment => comment.id !== comToDel);
    default:
      return state;
  }
}

export default comments