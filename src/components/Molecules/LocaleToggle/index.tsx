import React from 'react'
import { createSelector } from 'reselect'
import { useSelector, useDispatch } from 'react-redux'

import messages from './messages'
import { appLocales } from '../../../translations/i18n'
import { changeLocale } from '../../LanguageProvider/actions'
import { makeSelectLocale } from '../../LanguageProvider/selectors'

const stateSelector = createSelector(makeSelectLocale(), locale => ({
  locale
}))

export default function LocaleToggle() {
  const { locale } = useSelector(stateSelector)
  const dispatch = useDispatch()

  const onLocaleToggle = evt => dispatch(changeLocale(evt.target.value))

  return (
    <></>
    //   <Select value={locale} onChange={onLocaleToggle}>

    //  {appLocales.map(value => (
    //     <ToggleOption key={value} value={value} message={messages[value]} />
    //   ))}
    // </Select>
    // <Toggle
    //   value={locale}
    //   values={appLocales}
    //   messages={messages}
    //   onToggle={onLocaleToggle}
    // />
  )
}
