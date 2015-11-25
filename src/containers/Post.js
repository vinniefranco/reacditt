import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

import { getPost } from '../actions/postDetailActions'

import Comment from '../components/Comment'

const Post = React.createClass({
  mixins: [PureRenderMixin],
  componentDidMount() {
    const { subreddit, post_id } = this.props.params

    this.props.getPost(subreddit, post_id)
  },
  componentDidUpdate(prevProps) {
    console.log(prevProps.params)
    console.log(this.props.params)
  },
  render() {
    const { post, comments , isLoading } = this.props

    const postDetail = post.data.children[0]
    const postComments = comments.data.children

    return (
      <div className="column">
        <div className="row">
          <div className="ui threaded comments">
            {postComments.length && postComments.map(child =>
              <Comment {...child} key={child.data.id} />
            )}
          </div>
          <div className={isLoading ? 'ui active dimmer' : 'ui dimmer'}>
            <div className="ui loader">Loading</div>
          </div>
        </div>
      </div>
    )
  }
})

export default connect(
  (state) => {
    return {
      post: state.post.get('post'),
      comments: state.post.get('comments')
    }
  },
  { getPost }
)(Post)
