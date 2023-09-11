import { TicketSkeleton } from './TicketSkeleton'

export function TicketListSkeleton() {
  return (
    <ul className='ml-[20px] flex w-[70%] flex-col max-lg:ml-0 max-lg:mt-[24px] max-lg:w-full max-lg:max-w-[600px]'>
      {new Array(3).fill('').map((_, i) => (
        <TicketSkeleton key={i} />
      ))}
    </ul>
  )
}
