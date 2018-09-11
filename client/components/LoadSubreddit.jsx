import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'



const LoadSubreddit = ({dispatch}) => (
  <div>
      <form onSubmit={ e => {
    e.preventDefault()
    dispatch(fetchPosts(document.getElementById('new').value))
  }}>
    <input id="new" placeholder ="enter a new subreddit"></input>
  </form>
  <button>
    Fetch Posts
  </button>
  </div>
)

export default connect()(LoadSubreddit)
