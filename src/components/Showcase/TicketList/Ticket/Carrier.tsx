import { twMerge } from 'tailwind-merge'

export function Carrier({ carrier, className }: Props) {
  return (
    <span
      className={twMerge(
        'inline-block text-[28px] font-medium text-gray-600',
        className
      )}
    >
      {carrier}
    </span>
  )
}

interface Props {
  carrier: string
  className?: string
}
