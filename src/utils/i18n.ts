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
import legalHelpAiEn from '../locales/en/pages/legalHelpAi.json'
import legalHelpAiEs from '../locales/es/pages/legalHelpAi.json'
import homePtBr from '../locales/pt-BR/pages/home.json'
import legalHelpAiPtBr from '../locales/pt-BR/pages/legalHelpAi.json'
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
import blog00IdpEn from '../locales/en/blogs/00-IDP.json'
import blog00IdpEs from '../locales/es/blogs/00-IDP.json'
import blog00IdpPtBr from '../locales/pt-BR/blogs/00-IDP.json'
import blog01InvestEn from '../locales/en/blogs/01-invest.json'
import blog01InvestEs from '../locales/es/blogs/01-invest.json'
import blog01InvestPtBr from '../locales/pt-BR/blogs/01-invest.json'
import blog02SolutionsEn from '../locales/en/blogs/02_solutions.json'
import blog02SolutionsEs from '../locales/es/blogs/02_solutions.json'
import blog02SolutionsPtBr from '../locales/pt-BR/blogs/02_solutions.json'
import meta00IdpEn from '../locales/en/metadata/00-IDP.json'
import meta00IdpEs from '../locales/es/metadata/00-IDP.json'
import meta00IdpPtBr from '../locales/pt-BR/metadata/00-IDP.json'

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
    legalHelpAi: legalHelpAiEn,
    about: aboutEn,
    contact: contactEn,
    blog: blogEn,
    privacy: privacyEn,
    terms: termsEn,
    cookies: cookiesEn,
    security: securityEn,
    blog_00_IDP: blog00IdpEn,
    blog_01_invest: blog01InvestEn,
    blog_02_solutions: blog02SolutionsEn,
    meta_00_IDP: meta00IdpEn,
  },
  es: {
    common: commonEs,
    nav: navEs,
    meta: metaEs,
    home: homeEs,
    product: productEs,
    useCases: useCasesEs,
    legalHelpAi: legalHelpAiEs,
    about: aboutEs,
    contact: contactEs,
    blog: blogEs,
    privacy: privacyEs,
    terms: termsEs,
    cookies: cookiesEs,
    security: securityEs,
    blog_00_IDP: blog00IdpEs,
    blog_01_invest: blog01InvestEs,
    blog_02_solutions: blog02SolutionsEs,
    meta_00_IDP: meta00IdpEs,
  },
  'pt-BR': {
    common: commonPtBr,
    nav: navPtBr,
    meta: metaPtBr,
    home: homePtBr,
    product: productPtBr,
    useCases: useCasesPtBr,
    legalHelpAi: legalHelpAiPtBr,
    about: aboutPtBr,
    contact: contactPtBr,
    blog: blogPtBr,
    privacy: privacyPtBr,
    terms: termsPtBr,
    cookies: cookiesPtBr,
    security: securityPtBr,
    blog_00_IDP: blog00IdpPtBr,
    blog_01_invest: blog01InvestPtBr,
    blog_02_solutions: blog02SolutionsPtBr,
    meta_00_IDP: meta00IdpPtBr,
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

