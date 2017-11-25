import * as API from '../utils/API'
import {GET_CATEGORIES} from 'constants'

export const getCategories = () => {
  return (dispatch) => {
    API.getCategories().then(res => {
      dispatch({ type: GET_CATEGORIES, res })
    })
  }
}

