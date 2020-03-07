import {
  ContainerStateAuthentication,
  ContainerAuthenticationActions
} from './types'
import ActionTypes from './constants'

export const initialStateAuthentication: ContainerStateAuthentication = {
  error: false,
  loggedIn: false,
  loading: true,
  currentUser: ''
}

function authenticationReducer(
  state: ContainerStateAuthentication = initialStateAuthentication,
  action: ContainerAuthenticationActions
): ContainerStateAuthentication {
  switch (action.type) {
    case ActionTypes.LOGOUT:
    case ActionTypes.LOGIN:
      return {
        ...state
      }
    case ActionTypes.LOGIN_SUCCESS:
      return {
        error: false,
        loggedIn: true,
        loading: false,
        currentUser: action.payload
      }
    case ActionTypes.LOGOUT_ERROR:
    case ActionTypes.LOGIN_ERROR:
      return {
        error: action.payload,
        loggedIn: false,
        loading: false,
        currentUser: ''
      }
    case ActionTypes.LOGOUT_SUCCESS:
      return {
        error: false,
        loggedIn: false,
        loading: false,
        currentUser: ''
      }
    default:
      return state
  }
}

export default authenticationReducer
