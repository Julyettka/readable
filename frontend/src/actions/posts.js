import * as API from '../utils/API'
import {GET_POSTS, GET_POST_CATEGORY, GET_ONE_POST,
	UPVOTE_POST, DOWNVOTE_POST, ADD_POST, EDIT_POST, DELETE_POST, CHANGE_SORT} from './types'

const receivePosts = posts => ({
	type: GET_POSTS,
	posts
});

export const getPostsbyCategory = (category) => dispatch => (
  API.fetchPostsbyCategory(category)
    .then((posts) => {
      dispatch({
        type: GET_POST_CATEGORY,
        posts
      })
    })
)

const receiveOnePost = post => ({
	type: GET_ONE_POST,
	post
})

export const getPosts = () => dispatch => (
	API.fetchPosts()
	.then(posts => dispatch(receivePosts(posts)))
	)

export const getOnePost = (id) => dispatch => (
	API.fetchOnePost(id)
	.then(post => dispatch(receiveOnePost(post)))
	)

export const upVotePost = (id) => dispatch => (
	API.votePost(id, "upVote")
	.then(post => dispatch({
		type: UPVOTE_POST,
		post
	}))
	)

export const downVotePost = (id) => dispatch => (
	API.votePost(id, "downVote")
	.then(post => dispatch({
		type: DOWNVOTE_POST,
		post
	}))
	)

export const addPost = (post) => dispatch => (
	API.addPost(post)
	.then(post => dispatch({
		type: ADD_POST,
		post
	}))
	)

export const editPost = (id, post) => dispatch => (
	API.editPost(id, post)
	.then((post) => {
		dispatch({
			type: EDIT_POST,
			id,
			post
		})
	})
	)

export const deletePost = (id) => dispatch => (
    API.deletePost(id)
        .then(() => dispatch({
            type: DELETE_POST,
            id
        }))
	);

export const changeSort = (value) => {
  return {
    type: CHANGE_SORT,
    value: value
  }
}
