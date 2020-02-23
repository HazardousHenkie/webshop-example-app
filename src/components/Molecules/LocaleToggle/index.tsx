import React from 'react'
import { createSelector } from 'reselect'
import { useSelector, useDispatch } from 'react-redux'

import messages from './messages'
import { appLocales } from '../../../translations/i18n'
import { changeLocale } from 'components/LanguageProvider/actions'
import { makeSelectLocale } from 'components/LanguageProvider/selectors'

import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'

const stateSelector = createSelector(makeSelectLocale(), locale => ({
  locale
}))

const LocaleToggle: React.FC = () => {
  const { locale } = useSelector(stateSelector)
  const dispatch = useDispatch()

  const onLocaleToggle = (
    event: React.ChangeEvent<{
      value: string
    }>
  ) => {
    dispatch(changeLocale(event.target.value))
  }

  return (
    <Select
      labelId="select-language"
      id="select-language"
      value={locale}
      onChange={onLocaleToggle}
    >
      {appLocales.map(value => (
        <MenuItem key={value} value={value}>
          {value}
          {/* {messages[value]} */}
        </MenuItem>
      ))}
    </Select>
  )
}

export default LocaleToggle
