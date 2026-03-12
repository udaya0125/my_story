import React, { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

const ButtontoTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0

      setIsVisible(scrollTop > 200)
      setProgress(Math.min(100, Math.max(0, pct)))
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      style={{
        position: 'fixed',
        right: '1.25rem',
        bottom: '1.25rem',
        zIndex: 1000,
        width: '3rem',
        height: '3rem',
        borderRadius: '999px',
        border: 'none',
        background: `conic-gradient(#FE7743 ${progress}%, #EAD7C5 0)`,
        color: '#FE7743',
        cursor: 'pointer',
        boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
        pointerEvents: isVisible ? 'auto' : 'none',
        transition: 'opacity 200ms ease, transform 200ms ease',
      }}
    >
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '2.3rem',
          height: '2.3rem',
          borderRadius: '999px',
          background: '#FFFDF6',
        }}
      >
        <ArrowUp size={18} strokeWidth={2.4} />
      </span>
    </button>
  )
}

export default ButtontoTop
