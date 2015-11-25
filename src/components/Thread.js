import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Comment from './comment'

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    const { comments } = this.props

    return (
      <div className="comments">
        {comments.map(comment =>
          <Comment {...comment} key={comment.data.id} />
        )}
      </div>
    )
  }
})
