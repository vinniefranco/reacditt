import React, { Component } from 'react'
import Menu from '../containers/Menu'

export default class App extends Component {
  render () {
    return (
      <div className='ui two column stackable grid'>
        <Menu />
        {this.props.children}
      </div>
    )
  }
}
