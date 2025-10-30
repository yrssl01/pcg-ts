// useScrollTitlesInit.ts
import { useEffect } from 'react'

type Options = {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
  delay?: number // мс; по умолчанию без задержки
}

export function useScrollTitlesInit({
  root = null,
  rootMargin = '0px 0px -10% 0px',
  threshold = 0.1,
  delay = 0,
}: Options = {}) {
  useEffect(() => {
    if (typeof document === 'undefined') return

    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>('[data-scroll="title"]')
    )
    if (nodes.length === 0) return

    // Фолбэк для старых браузеров
    if (typeof IntersectionObserver !== 'function') {
      nodes.forEach((el) => el.classList.add('scrolled'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement

          if (delay > 0) {
            const t = window.setTimeout(() => {
              el.classList.add('scrolled')
              io.unobserve(el)
            }, delay)
            ;(el as any).__scrollTimer = t
          } else {
            el.classList.add('scrolled')
            io.unobserve(el)
          }
        })
      },
      { root, rootMargin, threshold }
    )

    nodes.forEach((el) => io.observe(el))

    return () => {
      io.disconnect()
      nodes.forEach((el) => {
        const t = (el as any).__scrollTimer as number | undefined
        if (t) clearTimeout(t)
      })
    }
  }, [root, rootMargin, threshold, delay])
}
