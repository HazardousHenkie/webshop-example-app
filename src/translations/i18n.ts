import enTranslationMessages from './locales/en.json'
import jaTranslationMessages from './locales/ja.json'
import nlTranslationMessages from './locales/nl.json'

export const DEFAULT_LOCALE = 'en'

export const appLocales = ['en', 'ja', 'nl']

const translationMessages = {
  en: enTranslationMessages,
  ja: jaTranslationMessages,
  nl: nlTranslationMessages
}

export default translationMessages
