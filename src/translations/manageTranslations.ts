// @ts-ignore
const manageTranslations = require('react-intl-translations-manager').default

manageTranslations({
  messagesDirectory: 'translations',
  translationsDirectory: 'src/translations/locales',
  languages: ['ja', 'nl'],
  singleMessagesFile: true
})
