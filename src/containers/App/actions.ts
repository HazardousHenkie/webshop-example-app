import { action } from 'typesafe-actions'

import ActionTypes from './constants'

export const loadingError = (error: object) =>
  action(ActionTypes.LOAD_ERROR, error)

export const setLoading = (loading: boolean) =>
  action(ActionTypes.SET_LOADING, loading)
