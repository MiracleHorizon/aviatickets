'use client'

import { memo, type MouseEvent, useId } from 'react'

import { ALL_STOPS_VARIANT, useFilterStore } from '@stores/filter'
import type { IStopOption } from '@shared/models/StopOption'

function StopOption({ title, value }: IStopOption) {
  const inputId = useId()

  const addStopOption = useFilterStore(state => state.addStop)
  const removeStopOption = useFilterStore(state => state.removeStop)
  const setOneStopFilter = useFilterStore(state => state.setOneStopFilter)

  const isSelected = useFilterStore(state => state.isStopOptionSelected(value))
  const lastSetOnceStop = useFilterStore(state => state.lastSetOnceStop)

  const handleChange = () => {
    /**
     * При вызове функции handleSetOnceFilter изменяется значение isSelected на true.
     * Это вызывает событие "change" и, исходя из значения isSelected,
     * только что добавленная опция удаляется из фильтра.
     */
    if (isSelected && lastSetOnceStop === value) {
      return
    }

    isSelected ? removeStopOption(value) : addStopOption(value)
  }

  const handleSetOnceFilter = (ev: MouseEvent) => {
    ev.stopPropagation()
    setOneStopFilter(value)
  }

  return (
    <li className='group hover:bg-amber-100'>
      <label
        htmlFor={inputId}
        className='flex h-full cursor-pointer items-center px-[20px] py-[8px] text-[16px] text-gray-600'
      >
        <input
          id={inputId}
          type='checkbox'
          className='mr-[8px] h-[20px] w-[20px] min-w-[20px]'
          checked={isSelected}
          onChange={handleChange}
        />
        <span className='inline-block w-[calc(100%-28px)] truncate'>
          {title}
        </span>
        {value !== ALL_STOPS_VARIANT && (
          <span
            className='ml-auto hidden text-[12px] font-medium uppercase text-blue-500 transition-opacity duration-75 ease-out group-hover:inline'
            onClick={handleSetOnceFilter}
          >
            Только
          </span>
        )}
      </label>
    </li>
  )
}

const memoized = memo(StopOption)

export { memoized as StopOption }
