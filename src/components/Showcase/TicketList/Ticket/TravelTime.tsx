export function TravelTime({ time }: Props) {
  return (
    <div className='text-[32px] text-gray-600 max-sm:text-[29px]'>{time}</div>
  )
}

interface Props {
  time: string
}
