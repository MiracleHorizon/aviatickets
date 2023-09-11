import { useTicketsStore } from '@stores/tickets'
import { ALL_STOPS_VARIANT, useFilterStore } from '@stores/filter'
import type { ITicket } from '@shared/models/Ticket'

export const useSelectFilteredTickets = (): ITicket[] => {
  const tickets = useTicketsStore(state => state.tickets)
  const stopFilters = useFilterStore(state => state.stops)

  if (tickets.length === 0) {
    return []
  }

  if (stopFilters.includes(ALL_STOPS_VARIANT)) {
    return tickets
  }

  return tickets.filter(ticket => stopFilters.includes(ticket.stops))
}
