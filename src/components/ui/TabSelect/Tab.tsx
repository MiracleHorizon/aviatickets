'use client'

import { memo } from 'react'
import { twJoin } from 'tailwind-merge'

function Tab({ value, totalItems, isSelected, handleChange }: Props) {
  const handleClick = () => handleChange(value)

  return (
    <li
      className={twJoin([
        'flex cursor-pointer items-center justify-center py-[10px] text-[15px] font-medium',
        'border-solid [&:first-of-type]:rounded-l-[6px] [&:last-of-type]:rounded-r-[6px]',
        'border-[1px]',
        isSelected
          ? 'border-blue-500 bg-blue-500 text-white'
          : 'border-gray-300 bg-white text-blue-500 transition-colors duration-75 ease-in-out hover:border-blue-500 hover:bg-blue-50'
      ])}
      style={{ width: `calc(100% / ${totalItems})` }}
      onClick={handleClick}
    >
      {value}
    </li>
  )
}

const memoized = memo(Tab)

export { memoized as Tab }

interface Props {
  value: string
  totalItems: number
  isSelected: boolean
  handleChange: (value: string) => void
}
