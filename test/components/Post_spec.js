import React, { findDOMNode } from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils, {
  renderIntoDocument,
  findRenderedDOMComponentWithClass,
  findRenderedDOMComponentWithTag
} from 'react-addons-test-utils'
import { expect } from 'chai'

import { Post } from '../../src/containers/Post'

describe('Post container', () => {
  it('calls this.props.getPost with {subreddit, post_id} on mount', () => {
    const data = { data: { children: [] } }
    const params = { subreddit: 'test', post_id: 'test_id' }

    let expectedValue
    const handler = (subreddit, post_id) => {
      expectedValue = {subreddit, post_id}
    }

    const component = renderIntoDocument(
      <Post params={params} post={data} comments={data} getPost={handler} />
    )

    expect(expectedValue).to.deep
      .equal({ subreddit: 'test', post_id: 'test_id' })
  })

  it('contains a comment thread when given comment data', () => {
    const post = { data: { children: [] } }
    const comments = {
      data: {
        children: [
          { data: { id: 1 } },
          { data: { id: 2 } }
        ]
      }
    }
    const params = { subreddit: 'test', post_id: 'test_id' }

    const component = renderIntoDocument(
      <Post
        params={params}
        post={post}
        comments={comments}
        getPost={() => {}} />
    )

    const thread = findRenderedDOMComponentWithClass(component, 'threaded')

    expect(thread).to.be.ok
  })

  it('contains a empty notification when given no comment data', () => {
    const post = { data: { children: [] } }
    const comments = {
      data: {
        children: []
      }
    }
    const params = { subreddit: 'test', post_id: 'test_id' }

    const component = renderIntoDocument(
      <Post
        params={params}
        post={post}
        comments={comments}
        getPost={() => {}} />
    )

    const empty = findRenderedDOMComponentWithClass(component, 'empty')

    expect(empty).to.be.ok
  })
})
