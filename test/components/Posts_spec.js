import React from "react"
import ReactTestUtils, {
  scryRenderedDOMComponentsWithClass,
  renderIntoDocument } from "react-addons-test-utils"
import { expect } from "chai"

import { List, Map } from "immutable"
import { Posts } from "../../src/containers/Posts"

describe('Posts', () => {

  it('calls getPosts with this.props.params.subreddit on mount', () => {
    let givenValue
    const handler = (val) => { givenValue = val }
    const params = { subreddit: 'test' }
    const posts = []
    const component = renderIntoDocument(
      <Posts getPosts={handler} params={params} posts={posts} />
    )

    expect(givenValue).to.equal(params.subreddit)
  })

  it('contains N PostItems when given N posts', () => {
    const handler = () => {}
    const params = { subreddit: 'test' }
    let posts = [
      {"ups":20,"thumbnail":"self","title":"r/elixir's Q4 2015 Hiring Thread","id":"3ndjkl","author":"gmcabrita","created_utc":1443901483,"num_comments":0},
      {"ups":38,"thumbnail":"default","title":"Phoenix is not Rails","id":"3tha4j","author":"bcardarella","created_utc":1447965399,"num_comments":12},
      {"ups":7,"thumbnail":"http://b.thumbs.redditmedia.com/sA7fjZy5DhWc-__gR6IdXJMEux3aPhAlK87dDayldPY.jpg","title":"Ex Manga Downloader, an exercise with Elixir","id":"3thoti","author":"luizvarela","created_utc":1447971284,"num_comments":0}
    ]

    const component = renderIntoDocument(
      <Posts getPosts={handler} params={params} posts={posts} />
    )

    const renderedPosts = scryRenderedDOMComponentsWithClass(component, 'event')

    expect(renderedPosts.length).to.equal(3)
  })
})
