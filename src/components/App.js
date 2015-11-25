import React from "react"
import Menu from '../containers/Menu'

export default React.createClass({
  render() {
    return (
      <div className="ui two column stackable grid">
        <Menu />
        {this.props.children}
      </div>
    )
  }
})
