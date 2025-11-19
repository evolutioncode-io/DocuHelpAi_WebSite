import { useEffect } from 'react'

type PageMetadataOptions = {
  title: string
  description?: string
}

export function usePageMetadata({ title, description }: PageMetadataOptions) {
  useEffect(() => {
    if (typeof document === 'undefined' || !title) {
      return
    }

    const previousTitle = document.title
    document.title = title

    return () => {
      document.title = previousTitle
    }
  }, [title])

  useEffect(() => {
    if (typeof document === 'undefined' || !description) {
      return
    }

    let meta =
      document.head.querySelector<HTMLMetaElement>('meta[name="description"]')
    const createdMeta = !meta
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }

    const previousDescription = meta.getAttribute('content')
    meta.setAttribute('content', description)

    const metaElement = meta
    return () => {
      if (!metaElement) {
        return
      }

      if (createdMeta) {
        metaElement.remove()
        return
      }

      if (previousDescription) {
        metaElement.setAttribute('content', previousDescription)
      } else {
        metaElement.removeAttribute('content')
      }
    }
  }, [description])
}

