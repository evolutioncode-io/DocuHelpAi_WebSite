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
import privacyEn from '../locales/en/pages/privacy.json'
import privacyEs from '../locales/es/pages/privacy.json'
import termsEn from '../locales/en/pages/terms.json'
import termsEs from '../locales/es/pages/terms.json'
import cookiesEn from '../locales/en/pages/cookies.json'
import cookiesEs from '../locales/es/pages/cookies.json'
import securityEn from '../locales/en/pages/security.json'
import securityEs from '../locales/es/pages/security.json'

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
    privacy: privacyEn,
    terms: termsEn,
    cookies: cookiesEn,
    security: securityEn,
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
    privacy: privacyEs,
    terms: termsEs,
    cookies: cookiesEs,
    security: securityEs,
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

