import * as API from '../utils/API'
import { GET_COMMENTS, UPVOTE_COMMENT, DOWNVOTE_COMMENT,
    ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT } from './types'

export const getComments = (id) => dispatch => (
	API.fetchComments(id)
	.then(comments => dispatch({
		type: GET_COMMENTS,
		comments
	}))
);

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

export const addComment = (comment) => dispatch => (
    API.addComment(comment)
    .then(comment => dispatch({
        type: ADD_COMMENT,
        comment
    }))
    );


export const editComment = (id, edited) => dispatch => (
    API.editComment(id, edited)
    .then(comment => dispatch({
        type: EDIT_COMMENT,
        id,
        comment: edited
    }))
    );


export const deleteComment = (id) => dispatch => (
    API.deleteComment(id)
    .then((comment) => {
        dispatch({
        type: DELETE_COMMENT,
        comment
    })
    })
)