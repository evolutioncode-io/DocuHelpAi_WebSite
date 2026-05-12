import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import type { SupportedLanguage } from '../utils/i18n'

import usFlag from '../assets/flags/us.svg'
import gbFlag from '../assets/flags/gb.svg'
import esFlag from '../assets/flags/es.svg'
import brFlag from '../assets/flags/br.svg'

const languageConfig: Record<SupportedLanguage, { flag: string; label: string; short: string }> = {
  en: {
    flag: usFlag,
    label: 'English (US)',
    short: 'EN',
  },
  'en-GB': {
    flag: gbFlag,
    label: 'English (UK)',
    short: 'EN-GB',
  },
  es: {
    flag: esFlag,
    label: 'Español',
    short: 'ES',
  },
  'pt-BR': {
    flag: brFlag,
    label: 'Português (BR)',
    short: 'PT',
  },
}

export function LanguageSelector() {
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
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
      {/* Trigger button */}
      <button
        id="language-selector-btn"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 bg-transparent border border-[color:var(--color-neutral-400)] rounded-lg px-3 py-1.5 text-sm font-medium text-body hover:border-[color:var(--color-accent-500)] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent-500)] focus:border-transparent cursor-pointer transition-colors"
        aria-label="Select language"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <img
          src={current.flag}
          alt=""
          className="w-5 h-auto rounded-sm object-cover"
          aria-hidden="true"
        />
        <span style={{ opacity: 0.7 }}>{current.short}</span>
        <svg
          className={`w-3.5 h-3.5 text-body transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          role="listbox"
          aria-label="Language options"
          className="absolute right-0 mt-1.5 w-44 rounded-lg border border-[color:var(--color-neutral-400)] bg-white shadow-xl z-50 overflow-hidden"
          style={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.98)' }}
        >
          {supportedLanguages.map((lang) => {
            const config = languageConfig[lang]
            const isActive = lang === currentLanguage
            return (
              <button
                key={lang}
                role="option"
                aria-selected={isActive}
                onClick={() => {
                  changeLanguage(lang as SupportedLanguage)
                  setIsOpen(false)
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 text-sm text-left transition-colors cursor-pointer
                  ${isActive
                    ? 'bg-[color:var(--color-accent-500)] text-white font-semibold'
                    : 'text-body hover:bg-gray-100'
                  }`}
              >
                <img
                  src={config.flag}
                  alt=""
                  className="w-5 h-auto rounded-sm object-cover"
                  aria-hidden="true"
                />
                <span className="flex-1">{config.label}</span>

                {isActive && (
                  <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
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
