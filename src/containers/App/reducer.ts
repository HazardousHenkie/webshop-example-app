import {
  ContainerStateLoader,
  ContainerStateAuthentication,
  ContainerLoaderActions,
  ContainerAuthenticationActions
} from './types'
import ActionTypes from './constants'

export const initialStateAuthentication: ContainerStateAuthentication = {
  error: false,
  // check this one
  loggedIn: false,
  currentUser: ''
}

export const initialStateLoader: ContainerStateLoader = {
  loading: false
}

export function loaderReducer(
  state: ContainerStateLoader = initialStateLoader,
  action: ContainerLoaderActions
): ContainerStateLoader {
  switch (action.type) {
    case ActionTypes.LOADER_START:
      return {
        loading: true
      }
    case ActionTypes.LOADER_END:
      return {
        loading: false
      }
    default:
      return state
  }
}

function authenticationReducer(
  state: ContainerStateAuthentication = initialStateAuthentication,
  action: ContainerAuthenticationActions
): ContainerStateAuthentication {
  switch (action.type) {
    // and this one
    // case ActionTypes.LOGIN:
    //   return {
    //     error: state.error,
    //     loggedIn: true,
    //     currentUser: state.currentUser
    //   }
    case ActionTypes.LOGIN_SUCCESS:
      return {
        error: state.error,
        loggedIn: true,
        currentUser: action.payload
      }
    case ActionTypes.LOGOUT_ERROR:
    case ActionTypes.LOGIN_ERROR:
      const { ...rest } = state
      return {
        error: action.payload,
        loggedIn: false,
        ...rest
      }
    case ActionTypes.LOGOUT_SUCCESS:
      return {
        error: state.error,
        loggedIn: false,
        currentUser: state.currentUser
      }
    default:
      return state
  }
}

export default authenticationReducer
