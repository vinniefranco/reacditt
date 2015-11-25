import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Thread from './Thread'

export default React.createClass({
  mixins: [PureRenderMixin],
  hasReplies() {
    const { replies } = this.props.data

    return (typeof replies === 'object' && replies.data.children.length)
  },
  render() {
    const { data } = this.props
    let commentThread

    if (this.hasReplies()) {
      const comments = this.props.data.replies.data.children
      commentThread = <Thread comments={comments} key={`${this.props.data.id}-comments`} />
    } else {
      commentThread = <div></div>
    }

    return (
      <div className="comment">
        <div className="content">
          <div className="author">
            {data.author}
          </div>
          <div className="metadata">
            {data.ups} {data.downs}
          </div>
          <div className="text">
            {data.body}
          </div>
        </div>
        {commentThread}
      </div>
    )
  }
})
