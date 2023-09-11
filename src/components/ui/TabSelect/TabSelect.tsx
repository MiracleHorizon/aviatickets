'use client'

import { Tab } from './Tab'

export function TabSelect({ items, selectedItem, handleChange }: Props) {
  return (
    <ul className='flex w-full items-center justify-between'>
      {items.map(item => (
        <Tab
          key={item}
          value={item}
          totalItems={items.length}
          isSelected={selectedItem === item}
          handleChange={handleChange}
        />
      ))}
    </ul>
  )
}

interface Props {
  items: string[]
  selectedItem: string
  handleChange: (value: string) => void
}
