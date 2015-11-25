import React from 'react'
import ReactDOM from 'react-dom'
import Router, { Route } from 'react-router'

import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router'
import { createHistory } from 'history'
import thunk from 'redux-thunk'

import menu from './reducers/menu'
import posts from './reducers/posts'
import post from './reducers/post'

import App from './components/App'
import FourOhFour from './containers/FourOhFour'
import Posts from './containers/Posts'
import PostDetail from './containers/Post'

const routeReducer = combineReducers({
  router: routerStateReducer, menu, posts, post
})

const store = compose(
  applyMiddleware(thunk),
  reduxReactRouter({ createHistory })
)(createStore)(routeReducer)

ReactDOM.render(
  <Provider store={store}>
    <ReduxRouter>
      <Router>
        <Route path='/' component={App}>
          <Route path='/r/:subreddit/:post_id' component={PostDetail} />
          <Route path='/r/:subreddit' component={Posts} />
        </Route>
        <Route path='*' component={FourOhFour} />
      </Router>
    </ReduxRouter>
  </Provider>,
  document.getElementById('app')
)
