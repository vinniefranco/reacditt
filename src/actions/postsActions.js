import { fetch } from '../api'

import {
  GET_POSTS_FAILURE,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS
} from '../constants'

function getPostsRequest (subreddit) {
  return { type: GET_POSTS_REQUEST, subreddit }
}

function getPostsSuccess (submissions) {
  return { type: GET_POSTS_SUCCESS, submissions }
}

function getPostsFailure (subreddit) {
  return { type: GET_POSTS_FAILURE, subreddit }
}

export function getPosts (subreddit) {
  return dispatch => {
    dispatch(getPostsRequest(subreddit))

    fetch.get(subreddit).then(
      (res) => {
        const posts = res.data.children.map(post => {
          const { id, title, ups, num_comments, author, created_utc, subreddit } = post.data
          return { key: id, id, ups, title, num_comments, author, created_utc, subreddit }
        })

        dispatch(getPostsSuccess(posts))
      },
      () => {
        dispatch(getPostsFailure(subreddit))
      }
    )
  }
}
