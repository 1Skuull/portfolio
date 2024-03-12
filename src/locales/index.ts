import { createI18n } from 'vue-i18n'
import en from "./en.json"
import pt from "./pt.json"

const messages = { en, pt }

export const i18n = createI18n({
    legacy: false,
    locale: 'pt', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
    // If you need to specify other options, you can set other options
    // ...
  })