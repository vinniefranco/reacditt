import React, { Component } from 'react'
import { Link } from 'react-router'

export default class MenuItem extends Component {
  render () {
    const { name, isActive } = this.props

    return (
      <div className={isActive ? 'item active' : 'item'}>
        <Link to={`/r/${name}`}>{name}</Link>
      </div>
    )
  }
}
