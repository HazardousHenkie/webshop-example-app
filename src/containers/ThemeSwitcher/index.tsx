import React from 'react'

import Switch from '@material-ui/core/Switch'

import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'reselect'

import { makeSelectDarkMode } from './selectors'

import { switchTheme } from './actions'

import { useCookies } from 'react-cookie'

const stateSelector = createSelector(makeSelectDarkMode(), darkMode => ({
  darkMode
}))

const ThemeSwitcher: React.FC = () => {
  const { darkMode } = useSelector(stateSelector)
  const dispatch = useDispatch()
  // usecookies doesn't allow to have just setCookies so we need to have cookies in there even if we don't use it
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, setCookie] = useCookies(['darkMode'])

  const handleChange = () => {
    setCookie('darkMode', !darkMode)
    dispatch(switchTheme(!darkMode))
  }

  return (
    <Switch
      checked={darkMode}
      onChange={handleChange}
      color="default"
      inputProps={{ 'aria-label': 'Theme switcher' }}
    />
  )
}

export default ThemeSwitcher
