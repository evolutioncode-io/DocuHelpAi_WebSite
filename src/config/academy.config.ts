/**
 * Academy module IDs ordered as they should appear in the UI.
 */
export const MODULE_IDS = ['mod1', 'mod2', 'mod3', 'mod4', 'mod5'] as const

export type ModuleId = (typeof MODULE_IDS)[number]

/**
 * Badge name earned upon completing each academy module.
 * Kept in a central config so it can be updated without touching components.
 */
export const BADGE_BY_MODULE: Record<ModuleId, string> = {
  mod1: 'DocumentoIQ Fundamentals',
  mod2: 'AI Applied to Documents',
  mod3: 'Security and Confidentiality DocumentoIQ',
  mod4: 'Specialist in DocumentoIQ Solutions',
  mod5: 'DocumentoIQ Commercial Partner',
}
