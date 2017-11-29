import * as API from '../utils/API'
import { GET_CATEGORIES } from './types'

const receiveCategories = categories => ({
  type: GET_CATEGORIES,
  categories
});

export const getCategories = () => dispatch => (
	API.fetchCategories()
	.then(categories => dispatch(receiveCategories(categories)))
	);
