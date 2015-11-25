import { fetch } from '../api'

import {
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE
} from '../constants'

function getPostRequest (post_id) {
  return { type: GET_POST_REQUEST, post_id }
}

function getPostSuccess (data) {
  return { type: GET_POST_SUCCESS, data }
}

function getPostFailure (post_id) {
  return { type: GET_POST_FAILURE, post_id }
}

export function getPost (subreddit, post_id) {
  return dispatch => {
    dispatch(getPostRequest(post_id))

    fetch.get(`${subreddit}/comments/${post_id}`).then(
      (data) => {
        const [ post, comments ] = data

        dispatch(getPostSuccess({post, comments}))
      },
      (data) => {
        dispatch(getPostFailure(subreddit))
      }
    )
  }
}

