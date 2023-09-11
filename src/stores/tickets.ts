import { create } from 'zustand'

import type { ITicket } from '@shared/models/Ticket'

interface Store {
  // State
  tickets: ITicket[]

  // Actions
  setTickets: (tickets: ITicket[]) => void
}

export const useTicketsStore = create<Store>(set => ({
  // State
  tickets: [],

  // Actions
  setTickets: tickets => {
    const sortedByPrice = tickets.sort((ticketA, ticketB) => {
      return ticketA.price - ticketB.price
    })

    set({ tickets: sortedByPrice })
  }
}))
