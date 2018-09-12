import {RECEIVE_IMAGE} from '../actions'

function apiimage (state = "", action) {
  switch (action.type) {
    case RECEIVE_IMAGE:
      return action.image

    default:
      return state
  }
}

export default apiimage
