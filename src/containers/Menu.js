import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

import { getMenu, addSubreddit, addedChar } from '../actions/menuActions'

import MenuItem from '../components/MenuItem'

const Menu = React.createClass({
  mixins: [PureRenderMixin],
  handleKeypress(e) {
    if (e.keyCode == 13) {
      const { value } = this.refs.input

      this.props.addSubreddit(value.trim())

      this.refs.input.value = ""
    }
  },
  componentDidMount() {
    this.props.getMenu()
  },
  render() {
    const { isLoading, items, activeSubreddit } = this.props

    return (
      <div className="ui vertical menu one column">
        <h1 className="ui header">
          <i className="icon newspaper"></i>
          Reacditt
        </h1>
        <div className={isLoading ? 'ui icon input loading' : 'ui icon input'}>
          <input
            type="text"
            ref="input"
            onKeyDown={(e) => this.handleKeypress(e)}
            placeholder="Add a subreddit" />
          <i className="keyboard icon"></i>
        </div>
        {items.map(item =>
          <MenuItem
            name={item}
            key={item}
            isActive={item == activeSubreddit} />
        )}
      </div>
    )
  }
})

export default connect(
  state => {
    return {
      activeSubreddit: state.router.params.subreddit,
      isLoading: state.menu.get('isLoading'),
      items: state.menu.get('items')
    }
  },
  { getMenu, addSubreddit }
)(Menu)
