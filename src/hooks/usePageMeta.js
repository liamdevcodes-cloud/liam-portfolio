import { useEffect } from 'react'

function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title

    const metaTag = document.querySelector('meta[name="description"]')
    if (metaTag) {
      metaTag.setAttribute('content', description)
    }
  }, [title, description])
}

export default usePageMeta
