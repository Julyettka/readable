import * as API from '../utils/API'
import {GET_POSTS} from './types'

const receivePosts = posts => ({
	type: GET_POSTS,
	posts
});

export const getPosts = () => dispatch => (
	API.fetchPosts()
	.then(posts => dispatch(receivePosts(posts)))
	)