import { DateFns } from '@libs/DateFns'

const dateFormat = 'd MMM yyyy, EEEEEE'

const transformDate = (date: string) =>
  DateFns.formatDate(new Date(date), dateFormat)
    .split(', ')
    .map((substr, i) =>
      i === 0
        ? substr.replace(/[.]/g, '')
        : substr[0].toUpperCase() + substr.slice(1)
    )
    .join(', ')

export function Place({ place, placeName, date }: Props) {
  return (
    <div className='flex flex-col text-[14px] max-sm:text-[12px] [&:first-of-type]:items-start [&:last-of-type]:items-end'>
      <span className='mb-[2px] inline-block truncate font-medium'>
        {place}, {placeName}
      </span>
      <span className='truncate text-gray-400'>{transformDate(date)}</span>
    </div>
  )
}

interface Props {
  place: string
  placeName: string
  date: string
}
