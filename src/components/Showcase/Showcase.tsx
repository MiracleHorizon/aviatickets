'use client'

import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import useSWR from 'swr'

import { Header } from '@components/Header'
import { BackTop } from '@components/BackTop'
import { FilterPanel } from '@components/FilterPanel'
import { TicketListSkeleton } from '@components/skeletons/TicketListSkeleton'
import { useTicketsStore } from '@stores/tickets'
import { fetchTickets } from '@api/fetchTickets'

const TicketList = dynamic(
  () => import('./TicketList').then(mod => mod.TicketList),
  { ssr: false }
)

export function Showcase() {
  const setTickets = useTicketsStore(state => state.setTickets)

  const {
    data: tickets,
    error,
    isLoading
  } = useSWR('fetchTickets', fetchTickets)

  useEffect(() => {
    if (!tickets) return
    setTickets(tickets)
  }, [setTickets, tickets])

  return (
    <div className='flex min-h-screen w-full flex-col items-center justify-start bg-blue-50 pb-[60px]'>
      <BackTop />
      <Header />
      <main className='relative flex w-full max-w-[1000px] justify-between px-[18px] max-lg:flex-col max-lg:items-center'>
        <FilterPanel />
        {isLoading && <TicketListSkeleton />}
        {tickets && <TicketList />}
        {error && (
          <div className='w-full max-lg:mt-[32px]'>
            <h1 className='text-center text-[24px] font-medium'>
              Произошла ошибка при получении билетов :(
            </h1>
          </div>
        )}
      </main>
    </div>
  )
}
