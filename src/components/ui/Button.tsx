'use client'

import { twMerge } from 'tailwind-merge'
import type { PropsWithChildren } from 'react'

export function Button({ children, className, onClick }: Props) {
  return (
    <button
      className={twMerge(
        'rounded-[8px] bg-orange-500 px-[18px] py-[4px] text-[16px] text-white shadow transition-colors duration-100 ease-in-out hover:bg-orange-600 active:bg-orange-700',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

interface Props extends PropsWithChildren {
  className?: string
  onClick?: VoidFunction
}
