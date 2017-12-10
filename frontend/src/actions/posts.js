import * as API from '../utils/API'
import {GET_POSTS, GET_ONE_POST} from './types'

const receivePosts = posts => ({
	type: GET_POSTS,
	posts
});

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

