import { twMerge } from 'tailwind-merge'

import { RuNounNumeralFormatter } from '@utils/RuNounNumeralFormatter'

const nounNumeralFormatter = new RuNounNumeralFormatter({
  nounRoot: 'пересад',
  pluralFormEnding: 'ок',
  fewFormEnding: 'ки',
  baseEnding: 'ка'
})

export function Stops({ stops, className }: Props) {
  return (
    <div
      className={twMerge(
        'text-[11px] font-medium uppercase text-gray-400',
        className
      )}
    >
      {nounNumeralFormatter.format(stops)}
    </div>
  )
}

interface Props {
  stops: number
  className?: string
}
