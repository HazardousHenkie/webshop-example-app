import { ContainerState, ContainerActions } from './types'
import ActionTypes from './constants'

export const initialState: ContainerState = {
  error: false,
  loading: false
}

function appReducer(
  state: ContainerState = initialState,
  action: ContainerActions
): ContainerState {
  switch (action.type) {
    case ActionTypes.LOAD_ERROR:
      return {
        error: action.payload
      }
    case ActionTypes.SET_LOADING:
      return {
        loading: action.payload
      }
    default:
      return state
  }
}

export default appReducer
