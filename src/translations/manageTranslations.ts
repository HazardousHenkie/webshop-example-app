// @ts-ignore
const manageTranslations = require('react-intl-translations-manager').default

manageTranslations({
  messagesDirectory: 'build/messages/src/extracted/',
  translationsDirectory: 'src/translations/locales/',
  languages: ['jp', 'nl']
})

export {}
