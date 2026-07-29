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
import productEn from '../locales/en/pages/product.json'
import productEs from '../locales/es/pages/product.json'
import productPtBr from '../locales/pt-BR/pages/product.json'
import useCasesEn from '../locales/en/pages/useCases.json'
import useCasesEs from '../locales/es/pages/useCases.json'
import useCasesPtBr from '../locales/pt-BR/pages/useCases.json'
import notariesEn from '../locales/en/pages/notaries.json'
import notariesEs from '../locales/es/pages/notaries.json'
import notariesPtBr from '../locales/pt-BR/pages/notaries.json'
import bankingEn from '../locales/en/pages/banking.json'
import howWeWorkEn from '../locales/en/pages/howWeWork.json'
import bankingEs from '../locales/es/pages/banking.json'
import howWeWorkEs from '../locales/es/pages/howWeWork.json'
import bankingPtBr from '../locales/pt-BR/pages/banking.json'
import howWeWorkPtBr from '../locales/pt-BR/pages/howWeWork.json'
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
import partnersEn from '../locales/en/pages/partners.json'
import partnersEs from '../locales/es/pages/partners.json'
import partnersPtBr from '../locales/pt-BR/pages/partners.json'
import partnersPortalEn from '../locales/en/partners/partners-portal.json'
import partnersPortalEs from '../locales/es/partners/partners-portal.json'
import partnersPortalPtBr from '../locales/pt-BR/partners/partners-portal.json'
import academyEn from '../locales/en/partners/academy.json'
import academyEs from '../locales/es/partners/academy.json'
import academyPtBr from '../locales/pt-BR/partners/academy.json'
import resourcesEn from '../locales/en/partners/resources.json'
import resourcesEs from '../locales/es/partners/resources.json'
import resourcesPtBr from '../locales/pt-BR/partners/resources.json'
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
import meta01InvestEn from '../locales/en/metadata/01-invest.json'
import meta01InvestEs from '../locales/es/metadata/01-invest.json'
import meta01InvestPtBr from '../locales/pt-BR/metadata/01-invest.json'
import meta02SolutionsEn from '../locales/en/metadata/02_solutions.json'
import meta02SolutionsEs from '../locales/es/metadata/02_solutions.json'
import meta02SolutionsPtBr from '../locales/pt-BR/metadata/02_solutions.json'
import meta03FutureEn from '../locales/en/metadata/03_future.json'
import meta03FutureEs from '../locales/es/metadata/03_future.json'
import meta03FuturePtBr from '../locales/pt-BR/metadata/03_future.json'
import meta04BeyondEn from '../locales/en/metadata/04_beyond.json'
import meta04BeyondEs from '../locales/es/metadata/04_beyond.json'
import meta04BeyondPtBr from '../locales/pt-BR/metadata/04_beyond.json'
import meta05ProcedureEn from '../locales/en/metadata/05_procedure.json'
import meta05ProcedureEs from '../locales/es/metadata/05_procedure.json'
import meta05ProcedurePtBr from '../locales/pt-BR/metadata/05_procedure.json'
import meta06HumanEn from '../locales/en/metadata/06_human.json'
import meta06HumanEs from '../locales/es/metadata/06_human.json'
import meta06HumanPtBr from '../locales/pt-BR/metadata/06_human.json'
import meta07CustomEn from '../locales/en/metadata/07_custom.json'
import meta07CustomEs from '../locales/es/metadata/07_custom.json'
import meta07CustomPtBr from '../locales/pt-BR/metadata/07_custom.json'
import meta08AiActionEn from '../locales/en/metadata/08_ai_action.json'
import meta08AiActionEs from '../locales/es/metadata/08_ai_action.json'
import meta08AiActionPtBr from '../locales/pt-BR/metadata/08_ai_action.json'
import blog03FutureEn from '../locales/en/blogs/03_future.json'
import blog03FutureEs from '../locales/es/blogs/03_future.json'
import blog03FuturePtBr from '../locales/pt-BR/blogs/03_future.json'
import blog04BeyondEn from '../locales/en/blogs/03_beyond.json'
import blog04BeyondEs from '../locales/es/blogs/03_beyond.json'
import blog04BeyondPtBr from '../locales/pt-BR/blogs/03_beyond.json'
import blog05ProcedureEn from '../locales/en/blogs/05_procedure.json'
import blog05ProcedureEs from '../locales/es/blogs/05_procedure.json'
import blog05ProcedurePtBr from '../locales/pt-BR/blogs/05_procedure.json'
import blog06HumanEn from '../locales/en/blogs/06_human.json'
import blog06HumanEs from '../locales/es/blogs/06_human.json'
import blog06HumanPtBr from '../locales/pt-BR/blogs/06_human.json'
import blog07CustomEn from '../locales/en/blogs/07_custom.json'
import blog07CustomEs from '../locales/es/blogs/07_custom.json'
import blog07CustomPtBr from '../locales/pt-BR/blogs/07_custom.json'
import blog08AiActionEn from '../locales/en/blogs/08_ai_action.json'
import blog08AiActionEs from '../locales/es/blogs/08_ai_action.json'
import blog08AiActionPtBr from '../locales/pt-BR/blogs/08_ai_action.json'
import blog09ResourcesEn from '../locales/en/blogs/09_resources.json'
import blog09ResourcesEs from '../locales/es/blogs/09_resources.json'
import blog09ResourcesPtBr from '../locales/pt-BR/blogs/09_resources.json'
import meta09ResourcesEn from '../locales/en/metadata/09_resources.json'
import meta09ResourcesEs from '../locales/es/metadata/09_resources.json'
import meta09ResourcesPtBr from '../locales/pt-BR/metadata/09_resources.json'

import commonEnGb from '../locales/en-GB/common.json'
import navEnGb from '../locales/en-GB/nav.json'
import metaEnGb from '../locales/en-GB/meta.json'
import homeEnGb from '../locales/en-GB/pages/home.json'
import aboutEnGb from '../locales/en-GB/pages/about.json'
import productEnGb from '../locales/en-GB/pages/product.json'
import securityEnGb from '../locales/en-GB/pages/security.json'
import partnersEnGb from '../locales/en-GB/pages/partners.json'
import contactEnGb from '../locales/en-GB/pages/contact.json'
import blogEnGb from '../locales/en-GB/pages/blog.json'
import privacyEnGb from '../locales/en-GB/pages/privacy.json'
import termsEnGb from '../locales/en-GB/pages/terms.json'
import cookiesEnGb from '../locales/en-GB/pages/cookies.json'
import useCasesEnGb from '../locales/en-GB/pages/useCases.json'
import howWeWorkEnGb from '../locales/en-GB/pages/howWeWork.json'
import notariesEnGb from '../locales/en-GB/pages/notaries.json'
import bankingEnGb from '../locales/en-GB/pages/banking.json'
import partnersPortalEnGb from '../locales/en-GB/partners/partners-portal.json'
import academyEnGb from '../locales/en-GB/partners/academy.json'
import resourcesEnGb from '../locales/en-GB/partners/resources.json'
import blog00IdpEnGb from '../locales/en-GB/blogs/00-IDP.json'
import blog01InvestEnGb from '../locales/en-GB/blogs/01-invest.json'
import blog02SolutionsEnGb from '../locales/en-GB/blogs/02_solutions.json'
import blog03FutureEnGb from '../locales/en-GB/blogs/03_future.json'
import blog04BeyondEnGb from '../locales/en-GB/blogs/03_beyond.json'
import blog05ProcedureEnGb from '../locales/en-GB/blogs/05_procedure.json'
import blog06HumanEnGb from '../locales/en-GB/blogs/06_human.json'
import blog07CustomEnGb from '../locales/en-GB/blogs/07_custom.json'
import blog08AiActionEnGb from '../locales/en-GB/blogs/08_ai_action.json'
import blog09ResourcesEnGb from '../locales/en-GB/blogs/09_resources.json'
import meta00IdpEnGb from '../locales/en-GB/metadata/00-IDP.json'
import meta01InvestEnGb from '../locales/en-GB/metadata/01-invest.json'
import meta02SolutionsEnGb from '../locales/en-GB/metadata/02_solutions.json'
import meta03FutureEnGb from '../locales/en-GB/metadata/03_future.json'
import meta04BeyondEnGb from '../locales/en-GB/metadata/04_beyond.json'
import meta05ProcedureEnGb from '../locales/en-GB/metadata/05_procedure.json'
import meta06HumanEnGb from '../locales/en-GB/metadata/06_human.json'
import meta07CustomEnGb from '../locales/en-GB/metadata/07_custom.json'
import meta08AiActionEnGb from '../locales/en-GB/metadata/08_ai_action.json'
import meta09ResourcesEnGb from '../locales/en-GB/metadata/09_resources.json'

export const supportedLanguages = ['en', 'en-GB', 'es', 'pt-BR'] as const
export type SupportedLanguage = (typeof supportedLanguages)[number]

/**
 * Detects language from the current URL path synchronously.
 * This runs BEFORE React renders to prevent language flicker.
 */
function getLanguageFromPath(): SupportedLanguage {
  if (typeof window === 'undefined') return 'en'

  const segments = window.location.pathname.split('/').filter(Boolean)
  const firstSegment = segments[0]?.toLowerCase()

  if (firstSegment === 'es') return 'es'
  if (firstSegment === 'pt-br') return 'pt-BR'
  if (firstSegment === 'en-gb') return 'en-GB'
  return 'en'
}

// Detect initial language from URL before React renders
const initialLanguage = getLanguageFromPath()

const resources = {
  en: {
    common: commonEn, nav: navEn, meta: metaEn, home: homeEn,
    product: productEn, useCases: useCasesEn, notaries: notariesEn,
    banking: bankingEn, howWeWork: howWeWorkEn, about: aboutEn,
    contact: contactEn, blog: blogEn, privacy: privacyEn,
    terms: termsEn, cookies: cookiesEn, security: securityEn,
    partners: partnersEn, 'partners-portal': partnersPortalEn, academy: academyEn, resources: resourcesEn,
    blog_00_IDP: blog00IdpEn, blog_01_invest: blog01InvestEn,
    blog_02_solutions: blog02SolutionsEn, blog_03_future: blog03FutureEn,
    blog_04_beyond: blog04BeyondEn, blog_05_procedure: blog05ProcedureEn,
    blog_06_human: blog06HumanEn, blog_07_custom: blog07CustomEn,
    blog_08_ai_action: blog08AiActionEn, blog_09_resources: blog09ResourcesEn,
    meta_00_IDP: meta00IdpEn, meta_01_invest: meta01InvestEn,
    meta_02_solutions: meta02SolutionsEn, meta_03_future: meta03FutureEn,
    meta_04_beyond: meta04BeyondEn, meta_05_procedure: meta05ProcedureEn,
    meta_06_human: meta06HumanEn, meta_07_custom: meta07CustomEn,
    meta_08_ai_action: meta08AiActionEn, meta_09_resources: meta09ResourcesEn,
  },
  es: {
    common: commonEs, nav: navEs, meta: metaEs, home: homeEs,
    product: productEs, useCases: useCasesEs, notaries: notariesEs,
    banking: bankingEs, howWeWork: howWeWorkEs, about: aboutEs,
    contact: contactEs, blog: blogEs, privacy: privacyEs,
    terms: termsEs, cookies: cookiesEs, security: securityEs,
    partners: partnersEs, 'partners-portal': partnersPortalEs, academy: academyEs, resources: resourcesEs,
    blog_00_IDP: blog00IdpEs, blog_01_invest: blog01InvestEs,
    blog_02_solutions: blog02SolutionsEs, blog_03_future: blog03FutureEs,
    blog_04_beyond: blog04BeyondEs, blog_05_procedure: blog05ProcedureEs,
    blog_06_human: blog06HumanEs, blog_07_custom: blog07CustomEs,
    blog_08_ai_action: blog08AiActionEs, blog_09_resources: blog09ResourcesEs,
    meta_00_IDP: meta00IdpEs, meta_01_invest: meta01InvestEs,
    meta_02_solutions: meta02SolutionsEs, meta_03_future: meta03FutureEs,
    meta_04_beyond: meta04BeyondEs, meta_05_procedure: meta05ProcedureEs,
    meta_06_human: meta06HumanEs, meta_07_custom: meta07CustomEs,
    meta_08_ai_action: meta08AiActionEs, meta_09_resources: meta09ResourcesEs,
  },
  'pt-BR': {
    common: commonPtBr, nav: navPtBr, meta: metaPtBr, home: homePtBr,
    product: productPtBr, useCases: useCasesPtBr, notaries: notariesPtBr,
    banking: bankingPtBr, howWeWork: howWeWorkPtBr, about: aboutPtBr,
    contact: contactPtBr, blog: blogPtBr, privacy: privacyPtBr,
    terms: termsPtBr, cookies: cookiesPtBr, security: securityPtBr,
    partners: partnersPtBr, 'partners-portal': partnersPortalPtBr, academy: academyPtBr, resources: resourcesPtBr,
    blog_00_IDP: blog00IdpPtBr, blog_01_invest: blog01InvestPtBr,
    blog_02_solutions: blog02SolutionsPtBr, blog_03_future: blog03FuturePtBr,
    blog_04_beyond: blog04BeyondPtBr, blog_05_procedure: blog05ProcedurePtBr,
    blog_06_human: blog06HumanPtBr, blog_07_custom: blog07CustomPtBr,
    blog_08_ai_action: blog08AiActionPtBr, blog_09_resources: blog09ResourcesPtBr,
    meta_00_IDP: meta00IdpPtBr, meta_01_invest: meta01InvestPtBr,
    meta_02_solutions: meta02SolutionsPtBr, meta_03_future: meta03FuturePtBr,
    meta_04_beyond: meta04BeyondPtBr, meta_05_procedure: meta05ProcedurePtBr,
    meta_06_human: meta06HumanPtBr, meta_07_custom: meta07CustomPtBr,
    meta_08_ai_action: meta08AiActionPtBr, meta_09_resources: meta09ResourcesPtBr,
  },
  'en-GB': {
    common: commonEnGb, nav: navEnGb, meta: metaEnGb, home: homeEnGb,
    product: productEnGb, about: aboutEnGb, security: securityEnGb,
    partners: partnersEnGb, contact: contactEnGb, blog: blogEnGb,
    privacy: privacyEnGb, terms: termsEnGb, cookies: cookiesEnGb,
    useCases: useCasesEnGb, howWeWork: howWeWorkEnGb,
    notaries: notariesEnGb, banking: bankingEnGb,
    'partners-portal': partnersPortalEnGb, academy: academyEnGb, resources: resourcesEnGb,
    blog_00_IDP: blog00IdpEnGb, blog_01_invest: blog01InvestEnGb,
    blog_02_solutions: blog02SolutionsEnGb, blog_03_future: blog03FutureEnGb,
    blog_04_beyond: blog04BeyondEnGb, blog_05_procedure: blog05ProcedureEnGb,
    blog_06_human: blog06HumanEnGb, blog_07_custom: blog07CustomEnGb,
    blog_08_ai_action: blog08AiActionEnGb, blog_09_resources: blog09ResourcesEnGb,
    meta_00_IDP: meta00IdpEnGb, meta_01_invest: meta01InvestEnGb,
    meta_02_solutions: meta02SolutionsEnGb, meta_03_future: meta03FutureEnGb,
    meta_04_beyond: meta04BeyondEnGb, meta_05_procedure: meta05ProcedureEnGb,
    meta_06_human: meta06HumanEnGb, meta_07_custom: meta07CustomEnGb,
    meta_08_ai_action: meta08AiActionEnGb, meta_09_resources: meta09ResourcesEnGb,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLanguage,
    fallbackLng: { 'en-GB': ['en'], default: ['en'] },
    defaultNS: 'common',
    supportedLngs: supportedLanguages,
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },
  })

export default i18n
