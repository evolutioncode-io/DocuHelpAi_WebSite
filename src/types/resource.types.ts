export interface Resource {
  id: string
  group: string
  sectionLabel: string
  type: 'presentation' | 'guide' | 'video' | 'logo'
  typeLabel: string
  icon: string
  title: string
  desc: string
  longDesc: string
  stage: string
  file?: string
  duration?: string
  recommended?: string
  featured?: boolean
}

export interface ResourceGroup {
  id: string
  title: string
  desc: string
  icon: string
  iconBg: string
  iconColor: string
  resources: Resource[]
}
