// @ts-ignore
const enTranslationMessages = require('./translations/en.json')
// @ts-ignore
const deTranslationMessages = require('./translations/de.json')

export const DEFAULT_LOCALE = 'en'

export const appLocales = ['en', 'de']

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
      : {}
  const flattenFormattedMessages = (formattedMessages, key) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key]
    return { ...formattedMessages, [key]: formattedMessage }
  }
  return Object.keys(messages).reduce(flattenFormattedMessages, {})
}

export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  de: formatTranslationMessages('de', deTranslationMessages)
}
