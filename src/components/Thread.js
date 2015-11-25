import React, { Component } from 'react'

import Comment from './comment'

export default class Thread extends Component {
  render () {
    const { comments } = this.props

    return (
      <div className='ui threaded comments'>
        {comments.map(comment =>
          <Comment {...comment} key={comment.data.id} />
        )}
      </div>
    )
  }
}
