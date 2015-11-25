import React, { findDOMNode } from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils, {
  Simulate,
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  findRenderedDOMComponentWithClass
} from 'react-addons-test-utils'
import { expect } from 'chai'

import { Map } from 'immutable'

import { MenuComponent } from '../../src/containers/Menu'

describe('Menu Component', () => {
  it('has a loading class when this.props.isLoading', () => {
    const component = renderIntoDocument(
      <MenuComponent
        getMenu={() => {}}
        items={[]}
        isLoading={true}/>
    )

    const loadingElm = findRenderedDOMComponentWithClass(component, 'loading')

    expect(loadingElm).to.be.ok
  })

  it('calls this.props.addSubreddit on keyDown.ENTER', () => {
    let passedValue
    const handler = (val) => { passedValue = val }
    const items = []
    const component = renderIntoDocument(
      <MenuComponent
        getMenu={() => {}}
        addSubreddit={handler}
        items={items} />
    )
    const input = findDOMNode(component.refs.input)

    input.value = 'a'
    Simulate.keyDown(input, { keyCode: 13 })

    expect(passedValue).to.equal('a')
  })

  it('contains N rendered MenuItems when given N items', () => {
    const items = ['one', 'two', 'three']
    const component = renderIntoDocument(
      <MenuComponent getMenu={() => {}} items={items} />
    )

    const menuItems = scryRenderedDOMComponentsWithClass(component, 'item')

    expect(menuItems.length).to.equal(3)
  })
})
