import { Map } from 'immutable'

import {
  GET_POST_FAILURE,
  GET_POST_REQUEST,
  GET_POST_SUCCESS
} from '../constants'

const initialState = Map({
  isLoading: false,
  post: {
    data: {
      children: []
    }
  },
  comments: {
    data: {
      children: []
    }
  }
})

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POST_REQUEST:
      return state.set('isLoading', true)
    case GET_POST_SUCCESS:
      return state.merge(Map({
        isLoading: false,
        post: action.data.post,
        comments: action.data.comments
      }))
    case GET_POST_FAILURE:
      return state.set('isLoading', false)
    default:
      return state
  }
}
