import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getPosts } from '../actions/postsActions'
import { getPost } from '../actions/postDetailActions'

import PostItem from '../components/PostItem'

export class Posts extends Component {
  componentDidMount () {
    this.fetchPosts()
  }

  componentDidUpdate (prevProps) {
    if (prevProps.params.subreddit !== this.props.params.subreddit) {
      this.fetchPosts()
    }
  }

  fetchPosts () {
    this.props.getPosts(this.props.params.subreddit)
  }

  render () {
    const { posts, getPost } = this.props

    return (
      <div className='column eight'>
        <div className='row'>
          <div className='ui feed'>
            {posts.map(item =>
              <PostItem {...item} getPost={getPost} />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      subreddit: state.router.params.subreddit,
      isLoading: state.posts.get('isLoading'),
      posts: state.posts.get('items')
    }
  },
  { getPosts, getPost }
)(Posts)

