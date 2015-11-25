import React from "react"
import ReactTestUtils, {
  scryRenderedDOMComponentsWithClass,
  renderIntoDocument } from "react-addons-test-utils"
import { expect } from "chai"

import Thread from "../../src/components/Thread"

describe('Thread component', () => {
  it('renders N Comments when given N comments', () => {
    const comments = [
      { data: { id: 1 } },
      { data: { id: 2 } },
      { data: { id: 3 } }
    ]
    const component = renderIntoDocument(
      <Thread comments={comments} />
    )

    const renderedComments = scryRenderedDOMComponentsWithClass(component, 'comment')

    expect(renderedComments.length).to.equal(3)
  })
})

