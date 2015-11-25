import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    const { name, isActive } = this.props

    return (
      <div className={isActive ? 'item active' : 'item'}>
        <Link to={`/r/${name}`}>{name}</Link>
      </div>
    )
  }
})
