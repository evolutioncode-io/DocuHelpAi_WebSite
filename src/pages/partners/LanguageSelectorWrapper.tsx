import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '../../hooks/useLanguage'
import type { SupportedLanguage } from '../../utils/i18n'

import usFlag from '../../assets/flags/us.svg'
import gbFlag from '../../assets/flags/gb.svg'
import esFlag from '../../assets/flags/es.svg'
import brFlag from '../../assets/flags/br.svg'

const languageConfig: Record<SupportedLanguage, { flag: string; label: string; short: string }> = {
  en: { flag: usFlag, label: 'English (US)', short: 'EN' },
  'en-GB': { flag: gbFlag, label: 'English (UK)', short: 'EN-GB' },
  es: { flag: esFlag, label: 'Español', short: 'ES' },
  'pt-BR': { flag: brFlag, label: 'Português (BR)', short: 'PT' },
}

function LanguageSelectorWrapper() {
  const { i18n } = useTranslation()
  const { currentLanguage, supportedLanguages } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const current = languageConfig[currentLanguage]

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 bg-transparent border border-[#EEEEEE] rounded-lg px-3 py-1.5 text-sm font-medium text-[#666666] hover:border-[#333333] hover:bg-gray-50 focus:outline-none transition-colors w-full"
      >
        <img src={current.flag} alt="" className="w-5 h-auto rounded-sm" />
        <span className="opacity-70">{current.short}</span>
        <svg className={`w-3.5 h-3.5 ml-auto transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          role="listbox"
          className="absolute right-0 w-44 rounded-lg border border-[#EEEEEE] bg-white shadow-xl z-50 overflow-hidden"
          style={{ bottom: '100%', top: 'auto', marginBottom: '4px' }}
        >
          {supportedLanguages.map((lang) => {
            const config = languageConfig[lang as SupportedLanguage]
            const isActive = lang === currentLanguage
            return (
              <button
                key={lang}
                onClick={() => {
                  i18n.changeLanguage(lang)
                  setIsOpen(false)
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 text-sm text-left transition-colors ${
                  isActive ? 'bg-[#FEC930] text-[#333333] font-semibold' : 'text-[#666666] hover:bg-gray-100'
                }`}
              >
                <img src={config.flag} alt="" className="w-5 h-auto rounded-sm" />
                <span className="flex-1">{config.label}</span>
                {isActive && (
                  <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default LanguageSelectorWrapper
