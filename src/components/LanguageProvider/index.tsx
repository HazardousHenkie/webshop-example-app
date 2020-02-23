import React from 'react'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { IntlProvider } from 'react-intl'

import { makeSelectLocale } from './selectors'

export interface LanguageProviderProps {
  messages: { [locale: string]: { [id: string]: string } }
  children?: React.ReactNode
}

const stateSelector = createSelector(makeSelectLocale(), locale => ({
  locale
}))

const LanguageProvider: React.FC<LanguageProviderProps> = ({
  messages,
  children
}) => {
  const { locale } = useSelector(stateSelector)

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {React.Children.only(children)}
    </IntlProvider>
  )
}

export default LanguageProvider
