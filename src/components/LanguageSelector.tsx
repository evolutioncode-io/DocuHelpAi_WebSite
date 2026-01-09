import { useLanguage } from '../hooks/useLanguage'

export function LanguageSelector() {
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage()

  return (
    <div className="relative">
      <select
        value={currentLanguage}
        onChange={(e) => changeLanguage(e.target.value as 'en' | 'es')}
        className="bg-transparent border border-gray-300 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-700 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer appearance-none pr-8"
        aria-label="Select language"
      >
        {supportedLanguages.map((lang) => (
          <option key={lang} value={lang}>
            {lang.toUpperCase()}
          </option>
        ))}
      </select>
      <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  )
}

