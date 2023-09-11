'use client'

import { useCallback, useEffect, useState } from 'react'

export function BackTop() {
  const [isScrollOnTop, setScrollOnTop] = useState(true)

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  const handleScroll = useCallback(() => {
    const SCROLL_OFFSET = 150

    if (window.scrollY >= SCROLL_OFFSET) {
      setScrollOnTop(false)
    }

    if (window.scrollY === 0) {
      setScrollOnTop(true)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  if (isScrollOnTop) {
    return null
  }

  return (
    <button
      className='fixed bottom-[20px] right-[20px] z-50 h-[40px] w-[40px] rounded-full bg-white p-[6px] shadow hover:bg-gray-100'
      onClick={handleClick}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5'
        />
      </svg>
    </button>
  )
}
