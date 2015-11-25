import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

import { getPosts } from '../actions/postsActions'
import { getPost } from '../actions/postDetailActions'

import PostItem from '../components/PostItem'

const Posts = React.createClass({
  mixins: [PureRenderMixin],
  componentDidMount() {
    const { subreddit } = this.props.params

    this.props.getPosts(subreddit)
  },
  componentDidUpdate(prevProps) {
    if (prevProps.params.subreddit !== this.props.params.subreddit) {
      this.props.getPosts(this.props.params.subreddit)
    }
  },
  render() {
    const { posts, getPost } = this.props

    return (
      <div className="column eight">
        <div className="row">
          <div className="ui feed">
            {posts.map(item =>
              <PostItem {...item} getPost={getPost} />
            )}
          </div>
        </div>
      </div>
    )
  }
})

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

