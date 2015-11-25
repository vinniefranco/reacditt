import React, { findDOMNode } from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils, {
  renderIntoDocument,
  findRenderedDOMComponentWithClass
} from 'react-addons-test-utils'
import { expect } from 'chai'

import MenuItem from '../../src/components/MenuItem'

describe('MenuItem', () => {
  it('has active class when props isActive', () => {
    const name = 'Foo'
    const isActive = true
    const component = renderIntoDocument(
      <MenuItem name={name} isActive={isActive} />
    )
    const link = findRenderedDOMComponentWithClass(component, 'active')

    expect(findDOMNode(link).textContent).to.equal('Foo')
  })
})
