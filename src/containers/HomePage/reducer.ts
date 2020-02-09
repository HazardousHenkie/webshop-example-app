import ActionTypes from './constants'
import { ContainerHomeState, ContainerHomeActions } from './types'

export const initialState: ContainerHomeState = {
  awesome: false
}

function homeReducer(
  state: ContainerHomeState = initialState,
  action: ContainerHomeActions
): ContainerHomeState {
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
