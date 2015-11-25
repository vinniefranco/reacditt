
import { List, Map, fromJS } from 'immutable'
import { expect, getPathValue } from 'chai'

import postReducer from '../../src/reducers/post'

describe('postReducer', () => {
  it('handles GET_POST_REQUEST', () => {
    const state = Map({
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
    const action = { type: 'GET_POST_REQUEST' }
    const nextState = postReducer(state, action)

    expect(nextState.get('isLoading')).to.equal(true)
  })

  it('handles GET_POST_SUCCESS', () => {
    const state = Map({
      isLoading: true,
      items: List()
    })
    const action = {
      type: 'GET_POST_SUCCESS',
      data: {
        post: 'Post',
        comments: 'Comments'
      }
    }
    const nextState = postReducer(state, action)

    expect(nextState.get('isLoading')).to.equal(false)
    expect(nextState.get('post')).to.equal('Post')
    expect(nextState.get('comments')).to.equal('Comments')
  })

  it('handles GET_POST_FAILURE', () => {
    const state = Map({
      isLoading: true,
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
    const action = { type: 'GET_POST_FAILURE' }
    const nextState = postReducer(state, action)

    expect(nextState.get('isLoading')).to.equal(false)
  })
})
