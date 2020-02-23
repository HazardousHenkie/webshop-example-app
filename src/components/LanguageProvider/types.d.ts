import { ActionType } from 'typesafe-actions'
import * as actions from './actions'
import { ApplicationRootState } from 'types'

interface LanguageProviderState {
  readonly locale: string
}

type AppActions = ActionType<typeof actions>

type RootState = ApplicationRootState
type ContainerState = LanguageProviderState
type ContainerActions = AppActions

export { RootState, ContainerState, ContainerActions }
