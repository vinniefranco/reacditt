import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { Link } from 'react-router'

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    const {
      author,
      created_utc,
      id,
      key,
      num_comments,
      subreddit,
      title,
      ups
    } = this.props

    return (
      <div className="event">
        <div className="content">
          <div className="summary">
            <Link to={`/r/${subreddit}/${id}`}>{title}</Link>
            <div className="date">
              {created_utc}
            </div>
          </div>
          <div className="meta">
            <i className="like icon"></i>{ups}
            <i className="comment icon"></i>{num_comments}
            <i className="user icon"></i>{author}
          </div>
        </div>
      </div>
    )
  }
})
