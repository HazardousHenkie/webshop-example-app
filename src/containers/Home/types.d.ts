import { ActionType } from 'typesafe-actions'
import * as actions from './actions'
import { ApplicationRootState } from 'types'

/* --- STATE --- */

interface MyBooleanProviderState {
  readonly myBoolean: boolean
}

/* --- ACTIONS --- */
type AppActions = ActionType<typeof actions>

/* --- EXPORTS --- */
type RootState = ApplicationRootState
type ContainerState = MyBooleanProviderState
type ContainerActions = AppActions

export { RootState, ContainerState, ContainerActions }
