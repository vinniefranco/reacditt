import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils, {
  Simulate,
  renderIntoDocument,
  findRenderedDOMComponentWithClass
} from 'react-addons-test-utils'
import { expect } from 'chai'

import { Map } from 'immutable'

import Menu from '../../src/containers/Menu'

describe('Menu Container', () => {
  it('calls this.props.addSubreddit on ENTER within input', () => {
    let isHandled = false
    const handler = () => { isHandled = true }
    const data = Map({ isLoading: false, items: [], activeSubreddit: null })

    const mockStore = {
      dispatch: () => {},
      subscribe: () => {},
      getState() { 
        return {
          menu: data, router: { params: { subreddit: 'foo' } }
        }
      }
    }

    renderIntoDocument(
      <Menu {...data} getMenu={() => {}} addSubreddit={handler} store={mockStore} />
    )
  })
})
