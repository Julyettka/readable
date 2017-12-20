import * as API from '../utils/API'
import { GET_COMMENTS, UPVOTE_COMMENT, DOWNVOTE_COMMENT } from './types'

export const getComments = (id) => dispatch => (
	API.fetchComments(id)
	.then(comments => dispatch({
		type: GET_COMMENTS,
		comments
	}))
)

export const upVoteComment = (id) => dispatch => (
    API.voteComment(id, "upVote")
        .then(comment => dispatch({
            type: UPVOTE_COMMENT,
            comment
        }))
);
export const downVoteComment = (id) => dispatch => (
    API.voteComment(id, "downVote")
        .then(comment => dispatch({
            type: DOWNVOTE_COMMENT,
            comment
        }))
);