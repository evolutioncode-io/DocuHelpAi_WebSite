import { useState, useMemo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import type { Resource } from '../../types/resource.types'

const groupIconMap: Record<string, string> = {
  pitch: 'fa-solid fa-file-lines',
  onboarding: 'fa-solid fa-graduation-cap',
  notaria: 'fa-solid fa-scale-balanced',
  banca: 'fa-solid fa-building-columns',
  videos: 'fa-solid fa-circle-play',
  marketing: 'fa-solid fa-pen-ruler',
}
const typeIconMap: Record<string, string> = {
  presentation: 'fa-solid fa-file-powerpoint',
  guide: 'fa-solid fa-file-lines',
  video: 'fa-solid fa-circle-play',
  logo: 'fa-solid fa-image',
}
const typeBadgeClass: Record<string, string> = {
  presentation: 'bg-[#FEF9E7] text-[#B8860B]',
  guide: 'bg-[#DCFCE7] text-[#15803D]',
  video: 'bg-[#FFF7ED] text-[#C2410C]',
  logo: 'bg-[#F1F5F9] text-[#475569]',
}
const typeLabelMap: Record<string, string> = {
  deck: 'Deck',
  onepager: 'Onepager',
  video: 'Video',
  presentation: 'Deck',
  guide: 'Guía',
  logo: 'Logo',
}

function ResourceCenter({ section }: { section: string }) {
  const { t } = useTranslation('partners-portal')
  const { t: tRes, i18n } = useTranslation('resources')
  const [query, setQuery] = useState('')
  const [activeSolution, setActiveSolution] = useState('all')
  const [activeType, setActiveType] = useState('all')
  const [modal, setModal] = useState<Resource | null>(null)
  const [fileNotFound, setFileNotFound] = useState(false)
  const [availableFiles, setAvailableFiles] = useState<Set<string>>(new Set())

  useEffect(() => {
    const available = new Set<string>()
    for (const key of ['pitch', 'onboarding', 'notaria', 'banca', 'videos', 'marketing']) {
      const data = tRes(key, { returnObjects: true }) as any
      if (!data?.resources) continue
      for (const r of data.resources) {
        if (r.file && r.file.startsWith('/files/resources/') && /\.pdf$/i.test(r.file)) {
          available.add(r.file)
        }
      }
    }
    // Only keep files that actually exist on the server
    Promise.allSettled([...available].map(f => fetch(f).then(r => {
      const ct = r.headers.get('content-type') || ''
      return (r.ok && ct.includes('pdf')) ? f : null
    })))
      .then(results => {
        const ok = new Set<string>()
        results.forEach(r => { if (r.status === 'fulfilled' && r.value) ok.add(r.value) })
        setAvailableFiles(ok)
      })
  }, [tRes, i18n.language])

  const resourceGroups = useMemo(() => {
    const groups: { id: string; title: string; desc: string; resources: Resource[] }[] = []
    for (const key of ['pitch', 'onboarding', 'notaria', 'banca', 'videos', 'marketing']) {
      const data = tRes(key, { returnObjects: true }) as any
      if (data?.title) {
        const visible = (data.resources || []).filter((r: any) => {
          if (r.file && r.file.startsWith('/files/resources/') && /\.pdf$/i.test(r.file)) {
            return availableFiles.has(r.file)
          }
          return true
        })
        groups.push({
          id: key,
          title: data.title,
          desc: data.desc,
          resources: visible.map((r: any) => ({ ...r, group: key })),
        })
      }
    }
    return groups
  }, [tRes, availableFiles])

  const allResources = useMemo(() => resourceGroups.flatMap((g) => g.resources), [resourceGroups])

  const filteredResources = useMemo(() => {
    let r = [...allResources]
    if (section === 'videos') return r.filter((x) => x.type === 'video')
    if (section === 'logos') return r.filter((x) => x.type === 'logo')
    if (section !== 'all') r = r.filter((x) => x.group === section)
    if (activeSolution !== 'all') r = r.filter((x) => x.group === activeSolution)
    if (activeType !== 'all') r = r.filter((x) => x.type === activeType)
    if (query) {
      const q = query.toLowerCase()
      r = r.filter((x) =>
        x.title.toLowerCase().includes(q) || x.desc.toLowerCase().includes(q) ||
        x.sectionLabel.toLowerCase().includes(q) || x.typeLabel.toLowerCase().includes(q) ||
        (x.stage && x.stage.toLowerCase().includes(q)))
    }
    return r
  }, [allResources, query, activeSolution, activeType, section])

  const showGrouped = !query && activeType === 'all' && section !== 'videos' && section !== 'logos'

  const visibleGroups = resourceGroups.filter((g) => {
    if (section !== 'all' && g.id !== section) return false
    if (activeSolution !== 'all' && g.id !== activeSolution) return false
    return true
  })

  const solutionFilters = [
    { value: 'all', label: t('resourceCenter.filters.all') },
    { value: 'banca', label: t('resourceCenter.filters.banking') },
    { value: 'notaria', label: t('resourceCenter.filters.notarial') },
  ]

  const typeFilters = [
    { value: 'all', label: t('resourceCenter.filters.allTypes') || 'All' },
    { value: 'presentation', label: t('resourceCenter.filters.guides') || 'Decks' },
    { value: 'video', label: t('resourceCenter.filters.videos') },
  ]

  return (
    <>
      {/* ── RESOURCE CENTER ── */}
      <div className="px-6 lg:px-10 pt-10 pb-11">
        <div className="hero-content max-w-3xl">
          <div className="breadcrumb-pill mb-4 w-fit">
            <i className="fa-solid fa-house text-xs"></i>
            <span>Partner Portal</span>
            <span className="opacity-40 mx-1">/</span>
            <span style={{ fontWeight: 600 }}>{t('resourceCenter.title')}</span>
          </div>
          <h1 className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-black text-3xl md:text-4xl leading-tight mb-2">
            {t('resourceCenter.title')}
          </h1>
          <p className="text-[#4a5568] text-sm md:text-base max-w-2xl leading-relaxed">
            {t('resourceCenter.subtitle')}
          </p>
        </div>
      </div>

      {/* ── FILTER BAR ── */}
      <div className="bg-white border-b border-[#E2E8F0] sticky top-0 lg:top-0 z-20 px-6 lg:px-10 py-3 shadow-sm">
        <div className="flex flex-wrap items-center gap-2 max-w-6xl mx-auto">
          {/* Search */}
          <div className="relative flex-1 min-w-[180px] max-w-xs">
            <i className="fa-solid fa-search absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-[#94A3B8] pointer-events-none"></i>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('resourceCenter.search') || 'Buscar...'}
              className="w-full pl-7 pr-3 py-1.5 text-xs border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FACC15]/40"
            />
          </div>

          <span className="text-xs text-[#64748B] font-semibold uppercase tracking-wide mr-1 font-['Bricolage_Grotesque',sans-serif] hidden sm:inline">{t('resourceCenter.filters.solutionLabel')}</span>
          {solutionFilters.map((f) => (
            <button key={f.value} className={`pill ${activeSolution === f.value ? 'active' : ''}`}
              onClick={() => { setActiveSolution(f.value); setQuery('') }}>
              {f.label}
            </button>
          ))}

          <span className="text-xs text-[#64748B] font-semibold uppercase tracking-wide ml-2 mr-1 font-['Bricolage_Grotesque',sans-serif] hidden sm:inline">{t('resourceCenter.filters.typeLabel')}</span>
          {typeFilters.map((f) => (
            <button key={f.value} className={`pill ${activeType === f.value ? 'active' : ''}`}
              onClick={() => setActiveType(f.value)}>
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── RESOURCE LIST ── */}
      <div className="px-6 lg:px-10 py-8 max-w-6xl mx-auto">
        {showGrouped ? (
          <div className="space-y-10">
            {visibleGroups.map((group) => {
              const groupRes = group.resources.filter((r) => {
                if (activeType !== 'all' && r.type !== activeType) return false
                if (activeSolution !== 'all' && r.group !== activeSolution) return false
                return true
              })
              if (groupRes.length === 0) return null
              return (
                <section key={group.id}>
                  <div className="flex items-center gap-2 mb-4">
                    <i className={groupIconMap[group.id] || 'fa-solid fa-folder'}></i>
                    <h2 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-lg">{group.title}</h2>
                    <span className="text-xs text-[#94A3B8]">({groupRes.length})</span>
                  </div>
                  <p className="text-xs text-[#64748B] mb-4">{group.desc}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {groupRes.map((res, ri) => (
                      <ResourceCard key={ri} res={res} onOpen={() => setModal(res)} typeBadgeClass={typeBadgeClass} typeLabelMap={typeLabelMap} />
                    ))}
                  </div>
                </section>
              )
            })}
            {visibleGroups.every((g) => g.resources.filter((r) => activeType === 'all' || r.type === activeType).length === 0) && (
              <p className="text-sm text-[#64748B] text-center py-12">{t('resourceCenter.noResults') || 'No se encontraron recursos.'}</p>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredResources.length > 0 ? (
              filteredResources.map((res, i) => (
                <ResourceCard key={i} res={res} onOpen={() => setModal(res)} typeBadgeClass={typeBadgeClass} typeLabelMap={typeLabelMap} />
              ))
            ) : (
              <div className="col-span-full text-sm text-[#64748B] text-center py-12">{t('resourceCenter.noResults') || 'No se encontraron recursos.'}</div>
            )}
          </div>
        )}
      </div>

      {/* ── MODAL ── */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm" onClick={() => { setModal(null); setFileNotFound(false) }}>
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className={`inline-block px-2 py-0.5 rounded-full text-[.6rem] font-bold ${typeBadgeClass[modal.type] || 'bg-[#F1F5F9] text-[#475569]'} mb-2`}>
                  <i className={`${typeIconMap[modal.type] || 'fa-solid fa-file'} mr-1`}></i>
                  {typeLabelMap[modal.type] || modal.type}
                </span>
                <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-lg">{modal.title}</h3>
                <p className="text-xs text-[#64748B] mt-1">{modal.sectionLabel}</p>
              </div>
              <button onClick={() => setModal(null)} className="text-[#94A3B8] hover:text-[#1E293B] text-xl leading-none">&times;</button>
            </div>
            <p className="text-sm text-[#64748B] mb-6">{modal.desc}</p>
            <div className="flex flex-wrap gap-2">
              {modal.file && modal.type !== 'video' && (
                <button onClick={async () => {
                  try {
                    const res = await fetch(modal.file!, { method: 'HEAD' });
                    if (res.ok) { window.open(modal.file!, '_blank'); }
                    else { setFileNotFound(true); setTimeout(() => setFileNotFound(false), 3000); }
                  } catch { setFileNotFound(true); setTimeout(() => setFileNotFound(false), 3000); }
                }}
                  className="inline-flex items-center gap-1.5 bg-[#FACC15] text-[#0F172A] text-xs font-bold px-3.5 py-2 rounded-lg hover:bg-[#EAB308] transition-all border-none cursor-pointer">
                  <i className="fa-solid fa-download"></i> {t('resourceCenter.modal.download') || 'Descargar'}
                </button>
              )}
              {fileNotFound && (
                <div className="w-full text-xs text-red-600 mt-2">No se encontró el archivo en este idioma.</div>
              )}
              {modal.type === 'video' && modal.file && (
                <a href={modal.file} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#F1F5F9] text-[#1E293B] text-xs font-bold px-3.5 py-2 rounded-lg hover:bg-[#E2E8F0] transition-all">
                  <i className="fa-solid fa-play"></i> {t('resourceCenter.modal.watchYoutube') || 'Ver'}
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function ResourceCard({ res, onOpen, typeBadgeClass, typeLabelMap }: {
  res: Resource; onOpen: () => void; typeBadgeClass: Record<string, string>; typeLabelMap: Record<string, string>
}) {
  return (
    <div onClick={onOpen}
      className="bg-white border border-[#E2E8F0] rounded-xl p-[18px] shadow-[0_1px_3px_rgba(15,23,42,.06),0_4px_12px_rgba(15,23,42,.06)] cursor-pointer hover:shadow-md transition-all">
      <div className="flex items-center justify-between mb-2">
        <span className={`inline-block px-2 py-0.5 rounded-full text-[.6rem] font-bold ${typeBadgeClass[res.type] || 'bg-[#F1F5F9] text-[#475569]'}`}>
          <i className={`${typeIconMap[res.type] || 'fa-solid fa-file'} mr-1`}></i>
          {typeLabelMap[res.type] || res.type}
        </span>
        <button onClick={(e) => { e.stopPropagation(); onOpen() }} className="text-[#94A3B8] hover:text-[#1E293B] text-xs">
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </button>
      </div>
      <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-sm mb-1">{res.title}</h3>
      <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2">{res.desc}</p>
      <div className="flex items-center gap-2 mt-3">
        <i className="fa-solid fa-circle text-[2.5px] text-[#94A3B8]"></i>
        <span className="text-[.6rem] text-[#94A3B8] font-medium">{res.sectionLabel}</span>
      </div>
    </div>
  )
}

export default ResourceCenter
