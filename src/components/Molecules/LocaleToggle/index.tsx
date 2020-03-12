import React, { ChangeEvent } from 'react'

import { appLocales } from 'utils/i18n'
import { useTranslation } from 'react-i18next'

import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'

const languageScope = 'shop.components.Molecules.LocaleToggle.locale'

const LocaleToggle: React.FC = () => {
  const { i18n } = useTranslation(languageScope)

  const onLocaleToggle = (
    event: ChangeEvent<{
      value: string
    }>
  ) => {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <Select
      labelId="select-language"
      id="select-language"
      value={i18n.language}
      onChange={onLocaleToggle}
    >
      {appLocales.map(value => (
        <MenuItem key={value} value={value}>
          {value}
        </MenuItem>
      ))}
    </Select>
  )
}

export default LocaleToggle
