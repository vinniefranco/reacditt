import { Set, Map, fromJS } from 'immutable'
import { expect } from 'chai'

import menuReducer from '../../src/reducers/menu'

describe('menuReducer', () => {
  it('handles SUBREDDIT_EXISTENCE_REQUEST', () => {
    const state = Map({
      isLoading: false,
      items: Set()
    })
    const action = { type: 'SUBREDDIT_EXISTENCE_REQUEST' }
    const nextState = menuReducer(state, action)

    expect(nextState).to.equal(Map({
      isLoading: true,
      items: Set()
    }))
  })

  it('handles SUBREDDIT_EXISTENCE_SUCCESS', () => {
    const state = Map({
      isLoading: true,
      items: Set()
    })
    const action = { type: 'SUBREDDIT_EXISTENCE_SUCCESS', subreddit: 'funny' }
    const nextState = menuReducer(state, action)

    expect(nextState).to.equal(Map({
      isLoading: false,
      items: Set.of('funny')
    }))
  })

  it('handles SUBREDDIT_EXISTENCE_SUCCESS as a Set', () => {
    const state = Map({
      isLoading: true,
      items: Set.of('funny')
    })
    const action = { type: 'SUBREDDIT_EXISTENCE_SUCCESS', subreddit: 'funny' }
    const nextState = menuReducer(state, action)

    expect(nextState).to.equal(Map({
      isLoading: false,
      items: Set.of('funny')
    }))
  })

  it('handles SUBREDDIT_EXISTENCE_FAILURE', () => {
    const state = Map({
      isLoading: true,
      items: Set.of('funny')
    })
    const action = { type: 'SUBREDDIT_EXISTENCE_FAILURE', subreddit: 'funny' }
    const nextState = menuReducer(state, action)

    expect(nextState).to.equal(Map({
      isLoading: false,
      items: Set.of('funny')
    }))
  })

  it('handles MENU_ITEMS_LOADED', () => {
    const state = Map({
      isLoading: false,
      items: Set()
    })
    const action = { type: 'MENU_ITEMS_LOADED', items: Set.of('funny', 'notfunny') }
    const nextState = menuReducer(state, action)

    expect(nextState).to.equal(Map({
      isLoading: false,
      items: Set.of('funny', 'notfunny')
    }))
  })
})
