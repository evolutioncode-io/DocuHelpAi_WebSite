import { useState, useMemo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { axiosInstance } from '../../service/axiosInstance'
import { useAuth } from '../../providers/AuthProvider'

import { MODULE_IDS, BADGE_BY_MODULE } from '../../config/academy.config'

function AcademyView() {
  const { t } = useTranslation('academy')
  const { t: tPortal } = useTranslation('partners-portal')
  const [activeView, setActiveView] = useState<'home' | 'module' | 'badges'>('module')
  const [activeModule, setActiveModule] = useState('mod1')

  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [submitted, setSubmitted] = useState(false)
  const [lessonOpen, setLessonOpen] = useState<string | null>('1.1')

  const modules = useMemo(() => {
    return MODULE_IDS.map((mid) => {
      const data = t(mid, { returnObjects: true }) as any
      return { id: mid, ...data }
    }).filter((m) => m.title)
  }, [t])

  const mod = modules.find((m) => m.id === activeModule) || modules[0]
  const quiz = mod?.quiz

  const { user } = useAuth()
  const [badges, setBadges] = useState<string[]>([])
  const [evalCount, setEvalCount] = useState(0)

  async function fetchBadges(user: any, retries = 2) {
    for (let i = 0; i <= retries; i++) {
      try {
        const res = await axiosInstance.get(`/partners/get-badges/${user.uid}`)
        const data = res.data
        if (Array.isArray(data)) {
          setBadges(data)
          setEvalCount(data.length)
        }
        return
      } catch {
        if (i === retries) return
        await new Promise((r) => setTimeout(r, 500 * (i + 1)))
      }
    }
  }

  useEffect(() => {
    if (user) fetchBadges(user)
  }, [user])

  // Scroll to open lesson when it changes
  useEffect(() => {
    if (!lessonOpen) return
    const el = document.querySelector(`[data-lesson-id="${lessonOpen}"]`)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }, [lessonOpen])

  const completedCount = badges.length
  const totalModules = modules.length
  const progressPct = Math.round((completedCount / totalModules) * 100)

  const handleAnswer = (qi: number, oi: number) => {
    setAnswers((prev) => ({ ...prev, [qi]: oi }))
  }

  const handleSubmit = () => {
    setSubmitted(true)
    const correct = quiz ? quiz.questions.filter((q: any, qi: number) => answers[qi] === q.correct).length : 0
    if (correct === quiz?.questions.length) {
      const badge = BADGE_BY_MODULE[activeModule as keyof typeof BADGE_BY_MODULE]
      if (!badge) return
      if (user) {
        axiosInstance.post('/partners/badges', { badge })
          .then(() => {
            setBadges((prev) => prev.includes(badge) ? prev : [...prev, badge])
            setEvalCount((c) => c + 1)
          })
          .catch(() => {})
      }
    }
  }

  const correctCount = quiz ? quiz.questions.filter((q: any, qi: number) => answers[qi] === q.correct).length : 0
  const allCorrect = correctCount === quiz?.questions.length

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-body text-[#1E293B]">
      {/* ── HERO ── */}
      <section className="px-6 lg:px-10 pt-10 pb-11" style={{
        background: '#F8F8F8',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'relative', zIndex: 1 }} className="max-w-4xl">
          <div className="mb-4 w-fit" style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: '#FEC930', border: '1px solid #FEC930',
            borderRadius: '99px', padding: '4px 12px', fontSize: '.7rem', color: '#000000', fontWeight: 500,
          }}>
            <i className="fa-solid fa-house text-xs"></i>
            <span>{tPortal('sidebar.partnerPortal')}</span>
            <span style={{ opacity: 0.4 }} className="mx-1">/</span>
            <span style={{ fontWeight: 600 }}>{t('partnerAcademy')}</span>
          </div>

          <h1 className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-black text-3xl md:text-4xl leading-tight mb-2">
            {t('partnerAcademy')}
          </h1>
          <p className="text-[#4a5568] text-sm md:text-base max-w-2xl leading-relaxed mb-7">
            {t('heroSubtitle')}
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-1.5 text-[#4a5568] text-xs">
              <i className="fa-solid fa-circle-check text-[#FEC930] text-xs"></i>
              <span><strong>{completedCount} {t('ofLabel')} {totalModules}</strong> {t('completedModules')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <div className="bg-white border-b border-[#E2E8F0] sticky top-0 lg:top-0 z-20 px-6 lg:px-10 py-3 shadow-sm">
        <div className="flex flex-wrap items-center gap-2 max-w-6xl mx-auto">
          {[
            { key: 'home', label: t('navHome'), icon: 'fa-solid fa-route' },
            { key: 'module', label: t('navModules'), icon: 'fa-solid fa-book-open' },
            { key: 'badges', label: t('navBadges'), icon: 'fa-solid fa-award' },
          ].map((v) => (
            <button key={v.key} onClick={() => setActiveView(v.key as any)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '8px 12px', borderRadius: '8px', fontSize: '.75rem', fontWeight: 600,
                border: '1.5px solid #E2E8F0', cursor: 'pointer', transition: 'all .15s',
                background: activeView === v.key ? '#FEC930' : 'transparent',
                color: activeView === v.key ? '#000000' : '#64748B',
              }}>
              <i className={v.icon + ' text-xs'}></i>
              {v.label}
            </button>
          ))}
          <span className="ml-auto text-xs text-[#64748B] hidden md:inline">{progressPct}% {t('pctCompleted')}</span>
        </div>
      </div>

      <div className="px-6 lg:px-10 py-8 flex-1 max-w-6xl w-full mx-auto">

        {/* ── HOME VIEW ── */}
        {activeView === 'home' && (
          <div style={{ animation: 'fadeUp .3s ease both' }}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
              <div className="lg:col-span-2 bg-white border border-[#E2E8F0] rounded-[14px] p-[18px] shadow-[0_1px_3px_rgba(15,23,42,.06),0_4px_12px_rgba(15,23,42,.06)]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-['Bricolage_Grotesque',sans-serif] text-[.6875rem] font-bold uppercase tracking-[.09em] text-[#1E293B] flex items-center gap-[7px]">
                    <i className="fa-solid fa-chart-simple text-[#FEC930]"></i> {t('myProgress')}
                  </span>
                  <div className="flex-1 h-px bg-[#E2E8F0]"></div>
                </div>
                <div className="flex items-end justify-between mb-3">
                  <div>
                    <p className="font-['Bricolage_Grotesque',sans-serif] font-bold text-[#1E293B] text-lg">{t('generalProgress')}</p>
                    <p className="text-[#64748B] text-xs mt-1">{completedCount} {t('ofLabel')} {totalModules} {t('completedModules')}</p>
                  </div>
                  <strong className="font-['Bricolage_Grotesque',sans-serif] text-2xl text-[#000000]">{progressPct}%</strong>
                </div>
                <div style={{ height: '10px', background: '#E2E8F0', borderRadius: '99px', overflow: 'hidden' }} className="mb-5">
                  <div style={{ height: '100%', width: progressPct + '%', background: 'linear-gradient(90deg, #FACC15, #2563EB)', borderRadius: '99px' }}></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { label: t('modulesLabel'), val: `${completedCount}/${totalModules}` },
                    { label: t('evaluationsLabel'), val: `${evalCount} ${t('evaluationsPassed')}${evalCount !== 1 ? 's' : ''}` },
                  ].map((m) => (
                    <div key={m.label} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '12px' }}>
                      <p className="text-xs text-[#64748B]">{m.label}</p>
                      <p className="font-['Bricolage_Grotesque',sans-serif] font-bold text-[#1E293B]">{m.val}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span className="font-['Bricolage_Grotesque',sans-serif] text-[.6875rem] font-bold uppercase tracking-[.09em] text-[#1E293B] flex items-center gap-[7px]">
                <i className="fa-solid fa-route text-[#FEC930]"></i> {t('certRoute')}
              </span>
              <div className="flex-1 h-px bg-[#E2E8F0]"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {modules.map((m) => {
                return (
                  <div key={m.id} className="bg-white border border-[#E2E8F0] rounded-[14px] p-[18px] shadow-[0_1px_3px_rgba(15,23,42,.06),0_4px_12px_rgba(15,23,42,.06)]">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[.65rem] text-[#64748B]">{m.lessons?.length || 0} {t('lessonsCount')}</span>
                    </div>
                    <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-sm mb-2">{m.title}</h3>
                    <button onClick={() => { setActiveModule(m.id); setActiveView('module'); setLessonOpen(null); setAnswers({}); setSubmitted(false) }}
                      className="w-full inline-flex items-center justify-center gap-1.5 bg-[#FACC15] text-[#0F172A] text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-[#EAB308] transition-all border-0">
                      <i className="fa-solid fa-play text-xs"></i> {t('startBtn')}
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* ── MODULE VIEW ── */}
        {activeView === 'module' && (
          <div style={{ animation: 'fadeUp .3s ease both' }}>
            <div className="flex flex-wrap gap-2 mb-6">
              {modules.map((m) => (
                <button key={m.id} onClick={() => { setActiveModule(m.id); setLessonOpen(null); setAnswers({}); setSubmitted(false) }}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all"
                  style={{
                    background: activeModule === m.id ? '#FEC930' : 'transparent',
                    color: activeModule === m.id ? '#000000' : '#64748B',
                    borderColor: activeModule === m.id ? '#FEC930' : '#E2E8F0',
                  }}>
                  {m.title}
                </button>
              ))}
            </div>

            {(!mod.lessons || mod.lessons.length === 0) ? (
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-8 text-center">
                <p className="text-sm text-[#64748B]">Coming soon</p>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-['Bricolage_Grotesque',sans-serif] text-[.6875rem] font-bold uppercase tracking-[.09em] text-[#1E293B] flex items-center gap-[7px]">
                    <i className="fa-solid fa-book-open text-[#2563EB]"></i> {t('lessonsLabel')}
                  </span>
                  <div className="flex-1 h-px bg-[#E2E8F0]"></div>
                </div>
                <div className="space-y-4 mb-8">
                  {mod.lessons.map((l: any) => {
                    const open = lessonOpen === l.id
                    return (
                      <div key={l.id} data-lesson-id={l.id} className="bg-white border border-[#E2E8F0] rounded-[14px] overflow-hidden">
                        <div onClick={() => { setLessonOpen(open ? null : l.id) }}
                          style={{ padding: '16px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
                              <i className="fa-solid fa-check"></i>
                            </div>
                            <div>
                              <p className="text-xs text-[#64748B] font-semibold">{t('lessonLabel')} {l.id}</p>
                              <p className="font-['Bricolage_Grotesque',sans-serif] font-bold text-[#1E293B]">{l.title}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <i className="fa-solid fa-chevron-down text-[#64748B] transition-transform" style={{ transform: open ? 'rotate(180deg)' : '' }}></i>
                          </div>
                        </div>
                        {open && (
                          <div style={{ padding: '0 18px 18px' }}>
                            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '14px 16px' }}>
                              <RenderLessonContent lessonData={l} t={t} />
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>

                {quiz && (
                  <>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-['Bricolage_Grotesque',sans-serif] text-[.6875rem] font-bold uppercase tracking-[.09em] text-[#1E293B] flex items-center gap-[7px]">
                        <i className="fa-solid fa-pen-clip text-[#FEC930]"></i> {t('quizLabel')}
                      </span>
                      <div className="flex-1 h-px bg-[#E2E8F0]"></div>
                    </div>

                    <div className="bg-white border border-[#E2E8F0] rounded-[14px] p-[18px] shadow-[0_1px_3px_rgba(15,23,42,.06),0_4px_12px_rgba(15,23,42,.06)] mb-8">
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                        <div>
                          <p className="font-['Bricolage_Grotesque',sans-serif] font-bold text-lg">{t('quizLabel')} {mod.title}</p>
                        </div>
                        {submitted && allCorrect && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[.65rem] font-bold bg-[#DCFCE7] text-[#15803D]">
                            <i className="fa-solid fa-check"></i> {t('passedLabel')}
                          </span>
                        )}
                      </div>

                      {quiz.instruction && <p className="text-xs text-[#64748B] mb-4">{quiz.instruction}</p>}

                      <div className="space-y-4">
                        {quiz.questions.map((q: any, qi: number) => (
                          <div key={qi} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '14px 16px' }}>
                            <p className="font-['Bricolage_Grotesque',sans-serif] font-bold text-[#1E293B] mb-3">{t('questionLabel')} {qi + 1}: {q.question}</p>
                            <div className="space-y-2">
                              {q.options.map((opt: string, oi: number) => {
                                let isCorrect = submitted && oi === q.correct
                                let isWrong = submitted && answers[qi] === oi && oi !== q.correct
                                return (
                                  <div key={oi} onClick={() => !submitted && handleAnswer(qi, oi)}
                                    className="flex items-center gap-3 text-sm cursor-pointer"
                                    style={{ color: isCorrect ? '#2563EB' : isWrong ? '#DC2626' : answers[qi] === oi && !submitted ? '#2563EB' : '#64748B' }}>
                                    <div style={{
                                      width: '18px', height: '18px', borderRadius: '99px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                      border: isCorrect || (answers[qi] === oi && !submitted) ? '2px solid #2563EB' : isWrong ? '2px solid #DC2626' : '2px solid #CBD5E1',
                                    }}>
                                      {(isCorrect || (answers[qi] === oi && !submitted)) && <div style={{ width: '8px', height: '8px', background: '#2563EB', borderRadius: '99px' }}></div>}
                                      {isWrong && <div style={{ width: '8px', height: '8px', background: '#DC2626', borderRadius: '99px' }}></div>}
                                    </div>
                                    <span>{opt}</span>
                                    {isCorrect && <i className="fa-solid fa-check text-green-600 text-xs"></i>}
                                    {isWrong && <i className="fa-solid fa-xmark text-red-600 text-xs"></i>}
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        ))}
                      </div>

                      {!submitted ? (
                        <button onClick={handleSubmit} disabled={Object.keys(answers).length < quiz.questions.length}
                          className="mt-5 inline-flex items-center justify-center gap-1.5 bg-[#FEC930] text-black text-sm font-bold px-4 py-2.5 rounded-lg hover:bg-[#EAB308] transition-all disabled:opacity-50">
                          <i className="fa-solid fa-paper-plane text-xs"></i> {t('submitQuiz')}
                        </button>
                      ) : (
                        <div className="mt-5 border-t border-[#E2E8F0] pt-5">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4"
                            style={allCorrect ? { background: 'rgba(220,252,231,.6)', border: '1px solid #16A34A', borderRadius: '14px', padding: '18px' } : {}}>
                            <div>
                              <p className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-xl" style={{ color: allCorrect ? '#15803D' : '#DC2626' }}>
                                {allCorrect ? t('passed') : t('failed')}
                              </p>
                              <p style={{ color: allCorrect ? 'rgba(21,128,61,.8)' : 'rgba(220,38,38,.8)' }} className="text-sm">
                                {correctCount} {t('ofLabel')} {quiz.questions.length} {t('correctAnswers')}
                              </p>
                              {allCorrect && (
                                <p className="text-sm mt-2" style={{ color: 'rgba(21,128,61,.8)' }}>
                                  {t('badgeLabel')} <strong>{BADGE_BY_MODULE[activeModule as keyof typeof BADGE_BY_MODULE] || quiz.result?.badge || ''}</strong>
                                </p>
                              )}
                            </div>
                            {correctCount < quiz?.questions.length && (
                              <button onClick={() => { setAnswers({}); setSubmitted(false) }}
                                className="inline-flex items-center gap-1.5 bg-transparent text-[#64748B] text-xs font-semibold px-3 py-2 rounded-lg border border-[#E2E8F0] hover:border-[#2563EB] hover:text-[#2563EB] transition-all">
                                <i className="fa-solid fa-rotate text-xs"></i> {t('retryBtn')}
                              </button>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        )}

        {/* ── BADGES VIEW ── */}
        {activeView === 'badges' && (
          <div style={{ animation: 'fadeUp .3s ease both' }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-['Bricolage_Grotesque',sans-serif] text-[.6875rem] font-bold uppercase tracking-[.09em] text-[#1E293B] flex items-center gap-[7px]">
                <i className="fa-solid fa-award text-[#FACC15]"></i> {t('myBadges')}
              </span>
              <div className="flex-1 h-px bg-[#E2E8F0]"></div>
            </div>
            <div className="bg-white border border-[#E2E8F0] rounded-[14px] p-[18px] shadow-[0_1px_3px_rgba(15,23,42,.06),0_4px_12px_rgba(15,23,42,.06)]">
              <h2 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-lg mb-4">{t('badgesObtained')}</h2>
              {badges.length > 0 ? (
                <div className="space-y-3">
                  {badges.map((b: string, i: number) => (
                    <div key={i} className="flex items-center gap-2.5 p-2.5 rounded-xl border border-[#E2E8F0] bg-white">
                      <span className="text-2xl">🏅</span>
                      <div>
                        <p className="font-['Bricolage_Grotesque',sans-serif] font-bold">{b}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-[#64748B]">{t('noBadges')}</p>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

function RenderLessonContent({ lessonData, t }: { lessonData: any; t?: any }) {
  const { sections, comparisons, benefits, pitches, noNos, keyMessage, steps, aiCanList, aiWhats, aiNot, myths, faqs, doItems, dontItems, objections, cases } = lessonData

  return (
    <div className="space-y-4">
      {sections?.map((s: any, i: number) => (
        <div key={i}>
          <h4 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-sm mb-1">{s.title}</h4>
          {s.body && <p className="text-xs text-[#64748B] leading-relaxed">{s.body}</p>}
        </div>
      ))}
      {comparisons?.map((c: any, i: number) => (
        <div key={i} className={`border border-[#E2E8F0] rounded-xl p-4 ${c.dark ? 'bg-[#333333]' : 'bg-[#F8FAFC]'}`}>
          <p className={`font-bold text-sm mb-2 ${c.dark ? 'text-white' : ''}`}>{c.title}</p>
          <ul className="space-y-1 text-xs text-[#64748B]">
            {c.items?.map((item: string, j: number) => <li key={j}>• {item}</li>)}
          </ul>
        </div>
      ))}
      {benefits?.map((b: any, i: number) => (
        <div key={i} className="flex items-start gap-2">
          <i className="fa-solid fa-circle-check text-[#FEC930] mt-0.5 text-xs"></i>
          <div>
            <p className="font-bold text-xs">{b.title}</p>
            <p className="text-xs text-[#64748B]">{b.body}</p>
          </div>
        </div>
      ))}
      {pitches?.map((p: any, i: number) => (
        <div key={i} className="bg-[#FEFCE8] border border-[#FDE047] rounded-xl p-4">
          <p className="font-bold text-xs mb-1">{p.title}</p>
          <p className="text-xs text-[#64748B]">{p.body}</p>
        </div>
      ))}
      {noNos?.map((n: any, i: number) => (
        <div key={i} className="bg-red-50/50 border border-red-200/50 rounded-xl p-4">
          <p className="font-bold text-xs mb-1 text-red-600">{n.title}</p>
          <p className="text-xs text-[#64748B]">{n.body}</p>
        </div>
      ))}
      {keyMessage && (
        <div className="bg-[#2563EB]/5 border border-[#2563EB]/20 rounded-xl p-4">
          <p className="font-bold text-xs text-[#2563EB] mb-1">Key Message</p>
          <p className="text-xs text-[#64748B]">{keyMessage}</p>
        </div>
      )}
      {steps?.map((s: any, i: number) => (
        <div key={i} className="flex items-start gap-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3">
          <div className="w-7 h-7 rounded-full bg-[#FEC930] text-black flex items-center justify-center text-[.65rem] font-bold flex-shrink-0">{s.num}</div>
          <div>
            <p className="font-bold text-xs">{s.title}</p>
            <p className="text-xs text-[#64748B] mt-0.5">{s.body}</p>
          </div>
        </div>
      ))}
      {aiCanList?.length > 0 && (
        <div className="grid md:grid-cols-2 gap-3">
          {aiCanList.map((item: string, i: number) => (
            <div key={i} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3">
              <p className="text-xs text-[#64748B]">• {item}</p>
            </div>
          ))}
        </div>
      )}
      {aiWhats?.length > 0 && (
        <div className="grid md:grid-cols-2 gap-4">
          {aiWhats.map((a: any, i: number) => (
            <div key={i} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4">
              <p className="font-bold text-xs mb-1">{a.title}</p>
              <p className="text-xs text-[#64748B] leading-relaxed">{a.body}</p>
            </div>
          ))}
        </div>
      )}
      {aiNot && (
        <div className="bg-red-50/50 border border-red-200/50 rounded-xl p-4">
          <p className="text-xs text-[#64748B] leading-relaxed">{aiNot}</p>
        </div>
      )}
      {myths?.length > 0 && (
        <div className="space-y-3">
          {myths.map((m: any, i: number) => (
            <div key={i} className="border border-[#E2E8F0] rounded-xl p-4">
              <p className="font-bold text-xs mb-1 text-red-600">{m.m}</p>
              <p className="text-xs text-[#64748B]">{m.r}</p>
            </div>
          ))}
        </div>
      )}
      {faqs?.length > 0 && (
        <div className="space-y-3">
          {faqs.map((faq: any, i: number) => (
            <div key={i} className="border border-[#E2E8F0] rounded-xl p-4">
              <p className="font-bold text-xs mb-1">{faq.q}</p>
              <p className="text-xs text-[#64748B]">{faq.r}</p>
            </div>
          ))}
        </div>
      )}
      {doItems?.length > 0 && dontItems?.length > 0 && (
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50/50 border border-green-200/50 rounded-xl p-4">
            <p className="font-bold text-xs mb-2 text-green-700">{t?.('doLabel') || 'Qué comunicar'}</p>
            <ul className="space-y-1 text-xs text-[#64748B]">
              {doItems.map((item: string, i: number) => (<li key={i}>• {item}</li>))}
            </ul>
          </div>
          <div className="bg-red-50/50 border border-red-200/50 rounded-xl p-4">
            <p className="font-bold text-xs mb-2 text-red-700">{t?.('dontLabel') || 'Qué evitar'}</p>
            <ul className="space-y-1 text-xs text-[#64748B]">
              {dontItems.map((item: string, i: number) => (<li key={i}>• {item}</li>))}
            </ul>
          </div>
        </div>
      )}
      {objections?.length > 0 && (
        <div className="space-y-3">
          {objections.map((o: any, i: number) => (
            <div key={i} className="border border-[#E2E8F0] rounded-xl p-4">
              <p className="font-bold text-xs mb-1 text-red-600">{o.o}</p>
              <p className="text-xs text-[#64748B]">{o.r}</p>
            </div>
          ))}
        </div>
      )}
      {cases?.length > 0 && (
        <div className="grid md:grid-cols-2 gap-3">
          {cases.map((c: any, i: number) => (
            <div key={i} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4">
              <p className="font-bold text-xs mb-1">{c.t}</p>
              <p className="text-xs text-[#64748B]">{c.d}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AcademyView
