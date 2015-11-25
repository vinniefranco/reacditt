import { get, set } from '../lib/SetStorage'

import {
  SUBREDDIT_EXISTENCE_FAILURE,
  SUBREDDIT_EXISTENCE_REQUEST,
  SUBREDDIT_EXISTENCE_SUCCESS,
  MENU_ITEMS_LOADED
} from '../constants'

import { fetch } from '../api'

function subredditExistenceRequest(subreddit) {
  return { type: SUBREDDIT_EXISTENCE_REQUEST, subreddit }
}

function subredditExistenceSuccess(subreddit) {
  return { type: SUBREDDIT_EXISTENCE_SUCCESS, subreddit }
}

function subredditExistenceFailure(subreddit) {
  return { type: SUBREDDIT_EXISTENCE_FAILURE, subreddit }
}

export function addSubreddit(subreddit) {
  return dispatch => {
    dispatch(subredditExistenceRequest(subreddit))

    fetch(subreddit).head().then(
      (data) => {
        const newMenuItems = get('reacditt_menu').add(subreddit)
        set('reacditt_menu', newMenuItems)

        dispatch(subredditExistenceSuccess(subreddit))
      },
      (data) => {
        dispatch(subredditExistenceFailure(subreddit))
      }
    )
  }
}

export function loadMenuItems(items) {
  return { type: MENU_ITEMS_LOADED, items}
}

export function getMenu(localStore = localStorage) {
  const menuItems = get('reacditt_menu')

  return dispatch => dispatch(loadMenuItems(menuItems))
}
