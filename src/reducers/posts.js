import { List, Map } from 'immutable'

import {
  GET_POSTS_FAILURE,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS
} from '../constants'

const initialState = Map({
  isLoading: false,
  items: List()
})

function addPosts(state, posts) {
  return state.merge(Map({
    isLoading: false,
    items: List(posts)
  }))
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return state.set('isLoading', true)
    case GET_POSTS_SUCCESS:
      return addPosts(state, action.submissions)
    case GET_POSTS_FAILURE:
      return state.set('isLoading', false)
    default:
      return state
  }
}
