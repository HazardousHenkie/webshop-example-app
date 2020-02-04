import ActionTypes from './constants'
import { ContainerState, ContainerActions } from './types'

export const initialState: ContainerState = {
  myBoolean: false
}

function languageProviderReducer(
  state: ContainerState = initialState,
  action: ContainerActions
): ContainerState {
  switch (action.type) {
    case ActionTypes.CHANGE_BOOLEAN:
      return {
        myBoolean: action.payload
      }
    default:
      return state
  }
}
export default languageProviderReducer
