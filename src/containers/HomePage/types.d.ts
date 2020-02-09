import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

interface HomeState {
  readonly awesome: boolean
}

type HomeActions = ActionType<typeof actions>

type ContainerHomeState = HomeState
type ContainerHomeActions = HomeActions

export { ContainerHomeState, ContainerHomeActions }
