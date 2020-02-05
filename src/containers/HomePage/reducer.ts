import ActionTypes from './constants'
import { ContainerState, ContainerActions } from './types'

export const initialState: ContainerState = {
  awesome: false
}

function homeReducer(
  state: ContainerState = initialState,
  action: ContainerActions
): ContainerState {
  switch (action.type) {
    case ActionTypes.CHANGE_AWESOME:
      return {
        awesome: action.payload
      }
    default:
      return state
  }
}

export default homeReducer
