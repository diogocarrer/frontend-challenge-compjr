import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import pt from './pt.json'
import en from './en.json'

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'pt',
    resources: {
        pt: pt,
        en: en
    },
    react: {
        useSuspense: false,
    },
    interpolation: {
        escapeValue: false,
    }
})

export default i18n;