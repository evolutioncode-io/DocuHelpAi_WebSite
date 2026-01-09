import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import commonEn from '../locales/en/common.json'
import commonEs from '../locales/es/common.json'
import metaEn from '../locales/en/meta.json'
import metaEs from '../locales/es/meta.json'
import navEn from '../locales/en/nav.json'
import navEs from '../locales/es/nav.json'
import aboutEn from '../locales/en/pages/about.json'
import aboutEs from '../locales/es/pages/about.json'
import blogEn from '../locales/en/pages/blog.json'
import blogEs from '../locales/es/pages/blog.json'
import contactEn from '../locales/en/pages/contact.json'
import contactEs from '../locales/es/pages/contact.json'
import homeEn from '../locales/en/pages/home.json'
import homeEs from '../locales/es/pages/home.json'
import pricingEn from '../locales/en/pages/pricing.json'
import pricingEs from '../locales/es/pages/pricing.json'
import productEn from '../locales/en/pages/product.json'
import productEs from '../locales/es/pages/product.json'
import useCasesEn from '../locales/en/pages/useCases.json'
import useCasesEs from '../locales/es/pages/useCases.json'

export const supportedLanguages = ['en', 'es'] as const
export type SupportedLanguage = (typeof supportedLanguages)[number]

const resources = {
  en: {
    common: commonEn,
    nav: navEn,
    meta: metaEn,
    home: homeEn,
    product: productEn,
    useCases: useCasesEn,
    pricing: pricingEn,
    about: aboutEn,
    contact: contactEn,
    blog: blogEn,
  },
  es: {
    common: commonEs,
    nav: navEs,
    meta: metaEs,
    home: homeEs,
    product: productEs,
    useCases: useCasesEs,
    pricing: pricingEs,
    about: aboutEs,
    contact: contactEs,
    blog: blogEs,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'common',
    supportedLngs: supportedLanguages,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },
  })

export default i18n

