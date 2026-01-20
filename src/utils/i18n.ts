import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import commonEn from '../locales/en/common.json'
import commonEs from '../locales/es/common.json'
import commonPtBr from '../locales/pt-BR/common.json'
import metaEn from '../locales/en/meta.json'
import metaEs from '../locales/es/meta.json'
import metaPtBr from '../locales/pt-BR/meta.json'
import navEn from '../locales/en/nav.json'
import navEs from '../locales/es/nav.json'
import navPtBr from '../locales/pt-BR/nav.json'
import aboutEn from '../locales/en/pages/about.json'
import aboutEs from '../locales/es/pages/about.json'
import aboutPtBr from '../locales/pt-BR/pages/about.json'
import blogEn from '../locales/en/pages/blog.json'
import blogEs from '../locales/es/pages/blog.json'
import blogPtBr from '../locales/pt-BR/pages/blog.json'
import contactEn from '../locales/en/pages/contact.json'
import contactEs from '../locales/es/pages/contact.json'
import contactPtBr from '../locales/pt-BR/pages/contact.json'
import homeEn from '../locales/en/pages/home.json'
import homeEs from '../locales/es/pages/home.json'
import homePtBr from '../locales/pt-BR/pages/home.json'
import pricingEn from '../locales/en/pages/pricing.json'
import pricingEs from '../locales/es/pages/pricing.json'
import pricingPtBr from '../locales/pt-BR/pages/pricing.json'
import productEn from '../locales/en/pages/product.json'
import productEs from '../locales/es/pages/product.json'
import productPtBr from '../locales/pt-BR/pages/product.json'
import useCasesEn from '../locales/en/pages/useCases.json'
import useCasesEs from '../locales/es/pages/useCases.json'
import useCasesPtBr from '../locales/pt-BR/pages/useCases.json'
import privacyEn from '../locales/en/pages/privacy.json'
import privacyEs from '../locales/es/pages/privacy.json'
import privacyPtBr from '../locales/pt-BR/pages/privacy.json'
import termsEn from '../locales/en/pages/terms.json'
import termsEs from '../locales/es/pages/terms.json'
import termsPtBr from '../locales/pt-BR/pages/terms.json'
import cookiesEn from '../locales/en/pages/cookies.json'
import cookiesEs from '../locales/es/pages/cookies.json'
import cookiesPtBr from '../locales/pt-BR/pages/cookies.json'
import securityEn from '../locales/en/pages/security.json'
import securityEs from '../locales/es/pages/security.json'
import securityPtBr from '../locales/pt-BR/pages/security.json'

export const supportedLanguages = ['en', 'es', 'pt-BR'] as const
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
  'pt-BR': {
    common: commonPtBr,
    nav: navPtBr,
    meta: metaPtBr,
    home: homePtBr,
    product: productPtBr,
    useCases: useCasesPtBr,
    pricing: pricingPtBr,
    about: aboutPtBr,
    contact: contactPtBr,
    blog: blogPtBr,
    privacy: privacyPtBr,
    terms: termsPtBr,
    cookies: cookiesPtBr,
    security: securityPtBr,
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

