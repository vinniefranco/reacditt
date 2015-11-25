import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getPost } from '../actions/postDetailActions'

import Thread from '../components/Thread'

export class Post extends Component {
  componentDidMount () {
    const { subreddit, post_id } = this.props.params

    this.props.getPost(subreddit, post_id)
  }

  render () {
    const { post, comments, isLoading } = this.props

    const postDetail = post.data.children[0]
    const postComments = comments.data.children

    let thread
    if (postComments.length) {
      thread = <Thread comments={postComments} key={'main-ui-thread'} />
    } else {
      thread = <div className='empty'>Dawww... sorry no conversations, yet.</div>
    }

    return (
      <div className='column'>
        <div className='row'>
          {thread}
          <div className={isLoading ? 'ui active dimmer' : 'ui dimmer'}>
            <div className='ui loader'>Loading</div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      post: state.post.get('post'),
      comments: state.post.get('comments')
    }
  },
  { getPost }
)(Post)
