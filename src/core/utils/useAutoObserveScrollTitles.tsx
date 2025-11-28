import { useEffect } from 'react'

export function useAutoObserveScrollTitles({
  root = null,
  rootMargin = '0px 0px -10% 0px',
  threshold = 0.1,
}: {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
} = {}) {
  useEffect(() => {
    if (typeof IntersectionObserver !== 'function') {
      document
        .querySelectorAll<HTMLElement>('[data-scroll="title"]')
        .forEach((el) => el.classList.add('scrolled'))
      return
    }

    const observed = new WeakSet<Element>()
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            ;(e.target as HTMLElement).classList.add('scrolled')
            io.unobserve(e.target)
          }
        })
      },
      { root, rootMargin, threshold }
    )

    const scan = (rootNode: ParentNode = document) => {
      rootNode
        .querySelectorAll<HTMLElement>('[data-scroll="title"]')
        .forEach((el) => {
          if (!observed.has(el)) {
            observed.add(el)
            io.observe(el)
          }
        })
    }

    scan()

    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            scan(node as ParentNode)
          }
        })
      })
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      mo.disconnect()
      io.disconnect()
    }
  }, [root, rootMargin, threshold])
}
