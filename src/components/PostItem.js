import React, { Component } from 'react'

import { Link } from 'react-router'

export default class PostItem extends Component {
  render () {
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

    const posted = new Date(0)
    posted.setUTCSeconds(created_utc)

    return (
      <div className='event'>
        <div className='content'>
          <div className='summary'>
            <Link to={`/r/${subreddit}/${id}`}>{title}</Link>
            <div className='date'>
              {posted.toLocaleString()}
            </div>
          </div>
          <div className='meta'>
            <i className='like icon'></i>{ups}
            <i className='comment icon'></i>{num_comments}
            <i className='user icon'></i>{author}
          </div>
        </div>
      </div>
    )
  }
}
