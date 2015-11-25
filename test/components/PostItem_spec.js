import React, { findDOMNode } from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils, {
  renderIntoDocument,
  findRenderedDOMComponentWithClass,
  findRenderedDOMComponentWithTag
} from 'react-addons-test-utils'
import { expect } from 'chai'

import PostItem from '../../src/components/PostItem'

describe('PostItem component', () => {
  it('contains a link with post.title as its content', () => {
    const post = { title: "Phoenix is not Rails" }
    const component = renderIntoDocument(<PostItem {...post} />)

    const link = findRenderedDOMComponentWithTag(component, 'a')

    expect(link.textContent).to.equal(post.title)
  })

  it('contains all meta attributes in a post', () => {
    const post = {
      author: "bcardarella",
      created_utc: 1447965399,
      id: "3tha4j",
      num_comments: 12,
      thumbnail: "default",
      title: "Phoenix is not Rails",
      ups: 38
    }
    const component = renderIntoDocument(<PostItem {...post} />)

    const meta = findRenderedDOMComponentWithClass(component, 'meta')

    expect(meta.textContent).to
      .equal(`${post.ups}${post.num_comments}${post.author}`)
  })

  it('parses created_utc epoch into human readable format', () => {
    const post = {
      author: "bcardarella",
      created_utc: 1447965399,
      id: "3tha4j",
      num_comments: 12,
      thumbnail: "default",
      title: "Phoenix is not Rails",
      ups: 38
    }
    let date = new Date(0)
    date.setUTCSeconds(post.created_utc)

    const expectedFormattedDate = date.toLocaleString()
    const component = renderIntoDocument(<PostItem {...post} />)

    const dateElm = findRenderedDOMComponentWithClass(component, 'date')

    expect(dateElm.textContent).to.equal(expectedFormattedDate)
  })
})

