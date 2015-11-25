import { Set } from 'immutable'

import { fetch } from '../api'

function getPostRequest(post_id) {
  return { type: 'GET_POST_REQUEST', post_id }
}

function getPostSuccess(data) {
  return { type: 'GET_POST_SUCCESS', data }
}

function getPostFailure(post_id) {
  return { type: 'GET_POST_FAILURE', post_id }
}

export function getPost(subreddit, post_id) {
  return dispatch => {
    dispatch(getPostRequest(post_id))

    fetch(`${subreddit}/comments/${post_id}`).get().then(
      (data) => {
        const [ post, comments ] = data

        dispatch(getPostSuccess({post, comments}))
      },
      (data) => {
        ispatch(getPostFailure(subreddit))
      }
    )
  }
}

