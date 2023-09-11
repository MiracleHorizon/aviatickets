'use client'

import { Ticket } from './Ticket'
import { EmptyTicketList } from './EmptyTicketList'
import { useSelectFilteredTickets } from '@stores/hooks/useSelectFilteredTickets'

export function TicketList() {
  const tickets = useSelectFilteredTickets()

  return (
    <ul className='ml-[20px] w-[70%] max-lg:ml-0 max-lg:mt-[24px] max-lg:w-full'>
      {tickets.length > 0 ? (
        tickets.map((ticket, index) => <Ticket {...ticket} key={index} />)
      ) : (
        <EmptyTicketList />
      )}
    </ul>
  )
}
