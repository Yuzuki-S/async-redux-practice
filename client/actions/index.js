import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const REQUEST_IMAGE = 'REQUEST_IMAGE'
export const RECEIVE_IMAGE = 'RECEIVE_IMAGE'

export const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  }
}

export const requestImage = () => {
  return {
    type: REQUEST_IMAGE
  }
}

export const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts: posts.map(post => post.data)
  }
}

export const receiveImage = (arr) => {
  return {
    type: RECEIVE_IMAGE,
    image: arr[0]
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function fetchPosts (subreddit) {
  return (dispatch) => {
    dispatch(requestPosts())
    return request
      .get(`/api/v1/reddit/subreddit/${subreddit}`)
      .then(res => {
        dispatch(receivePosts(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}


export function getImage () {
  return (dispatch) => {
    dispatch(requestImage())
    return request
    .get(`http://shibe.online/api/shibes?count=[1-100]`)
    .then(ApiRes => { 
      
      console.log(ApiRes.body);
      dispatch(receiveImage(ApiRes.body))
       
      console.log("Hi");
    })
    .catch(err => {
      dispatch(err.message)
    })
  }
}