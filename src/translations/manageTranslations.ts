// @ts-ignore
const manageTranslations = require('react-intl-translations-manager').default
// const translationLocales = require('i18n')

manageTranslations({
  messagesDirectory: 'translations',
  translationsDirectory: 'src/translations/locales',
  languages: ['jp', 'nl'],
  singleMessagesFile: true
})
