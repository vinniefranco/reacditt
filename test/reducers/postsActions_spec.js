import { List, Map, fromJS } from 'immutable'
import { expect } from 'chai'

import postsReducer from '../../src/reducers/posts'

describe('postsReducer', () => {
  it('handles GET_POSTS_REQUEST', () => {
    const state = Map({
      isLoading: false,
      items: List()
    })
    const action = { type: 'GET_POSTS_REQUEST' }
    const nextState = postsReducer(state, action)

    expect(nextState).to.equal(Map({
      isLoading: true,
      items: List()
    }))
  })

  it('handles GET_POSTS_SUCCESS', () => {
    const state = Map({
      isLoading: true,
      items: List()
    })
    const action = {
      type: 'GET_POSTS_SUCCESS',
      submissions: [
        { id: 1},
        { id: 2}
      ]
    }
    const nextState = postsReducer(state, action)

    const isLoading = nextState.get('isLoading')
    const itemIds = nextState.get('items').map(item => item.id)

    expect(isLoading).to.equal(false)
    expect(itemIds).to.equal(List.of(1, 2))
  })

  it('handles GET_POSTS_FAILURE', () => {
    const state = Map({
      isLoading: true,
      items: List()
    })
    const action = { type: 'GET_POSTS_FAILURE' }
    const nextState = postsReducer(state, action)

    expect(nextState).to.equal(Map({
      isLoading: false,
      items: List()
    }))
  })
})
