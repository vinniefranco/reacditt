import { Map, Set } from 'immutable'
import {
  SUBREDDIT_EXISTENCE_FAILURE,
  SUBREDDIT_EXISTENCE_REQUEST,
  SUBREDDIT_EXISTENCE_SUCCESS,
  MENU_ITEMS_LOADED
} from '../constants'

const initialState = Map({
  isLoading: false,
  items: Set()
})

function addSubreddit (state, subreddit) {
  const currentItems = state.get('items')
  const newMenu = Map({
    isLoading: false,
    items: currentItems.add(subreddit)
  })

  return state.merge(newMenu)
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SUBREDDIT_EXISTENCE_REQUEST:
      return state.set('isLoading', true)
    case SUBREDDIT_EXISTENCE_SUCCESS:
      return addSubreddit(state, action.subreddit)
    case SUBREDDIT_EXISTENCE_FAILURE:
      return state.set('isLoading', false)
    case MENU_ITEMS_LOADED:
      return state.set('items', action.items)
    default:
      return state
  }
}
