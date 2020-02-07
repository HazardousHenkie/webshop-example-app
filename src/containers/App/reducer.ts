import {
  ContainerStateAuthentication,
  ContainerAuthenticationActions
} from './types'
import ActionTypes from './constants'

export const initialStateAuthentication: ContainerStateAuthentication = {
  error: false,
  loading: true,
  loggedIn: false,
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
        error: false,
        loading: true,
        loggedIn: state.loggedIn,
        currentUser: state.currentUser
      }
    case ActionTypes.LOGIN_SUCCESS:
      return {
        error: state.error,
        loading: false,
        loggedIn: true,
        currentUser: action.payload
      }
    case ActionTypes.LOGOUT_ERROR:
    case ActionTypes.LOGIN_ERROR:
      const { error, loading, ...rest } = state
      return {
        error: action.payload,
        loading: false,
        loggedIn: false,
        ...rest
      }
    case ActionTypes.LOGOUT_SUCCESS:
      return {
        error: state.error,
        loading: false,
        loggedIn: false,
        currentUser: ''
      }
    default:
      return state
  }
}

export default authenticationReducer
