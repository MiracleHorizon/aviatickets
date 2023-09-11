import type { ITicket } from '@shared/models/Ticket'

export const fetchTickets = async (): Promise<ITicket[]> => {
  try {
    const response = await fetch(window.origin + '/api/tickets')

    if (!response.ok) {
      return Promise.reject('no data')
    }

    const data = await response.json()

    return data.tickets
  } catch (err) {
    throw err
  }
}
