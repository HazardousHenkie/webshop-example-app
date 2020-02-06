import ActionTypes from './constants'
import { ContainerState, ContainerActions } from './types'

export const initialState: ContainerState = {
  error: false,
  loginData: {
    loggedIn: false,
    username: ''
  }
}

function loginReducer(
  state: ContainerState = initialState,
  action: ContainerActions
): ContainerState {
  switch (action.type) {
    case ActionTypes.CHANGE_LOGIN_DATA:
      return {
        error: false,
        loginData: action.payload
      }
    default:
      return state
  }
}

export default loginReducer
