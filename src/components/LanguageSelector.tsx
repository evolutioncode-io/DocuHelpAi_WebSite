import { useLanguage } from '../hooks/useLanguage'

export function LanguageSelector() {
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage()

  return (
    <div className="relative">
      <select
        value={currentLanguage}
        onChange={(e) => changeLanguage(e.target.value as typeof currentLanguage)}
        className="bg-transparent border border-[color:var(--color-neutral-400)] rounded-lg px-3 py-1.5 text-sm font-medium text-body hover:border-[color:var(--color-accent-500)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent-500)] focus:border-transparent cursor-pointer appearance-none pr-8"
        aria-label="Select language"
      >
        {supportedLanguages.map((lang) => (
          <option key={lang} value={lang}>
            {lang.toUpperCase()}
          </option>
        ))}
      </select>
      <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg className="w-4 h-4 text-body" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  )
}

