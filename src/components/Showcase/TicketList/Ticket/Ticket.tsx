'use client'

import { twJoin } from 'tailwind-merge'

import { Stops } from './Stops'
import { Place } from './Place'
import { Carrier } from './Carrier'
import { TravelTime } from './TravelTime'
import { PayButton } from './PayButton'
import type { ITicket } from '@shared/models/Ticket'

export function Ticket({
  arrival_time,
  departure_time,
  stops,
  origin,
  origin_name,
  destination_name,
  destination,
  arrival_date,
  departure_date,
  price,
  carrier
}: ITicket) {
  const rootDefaultClass =
    'flex w-full min-w-[600px] items-start justify-between rounded-[10px] bg-white p-[24px] shadow'
  const rootMaxLgClass = 'max-lg:mx-auto max-lg:min-w-0 max-lg:max-w-[600px]'
  const rootMaxSmClass =
    'max-sm:flex-col-reverse max-sm:items-center max-sm:p-[16px]'

  return (
    <div
      className={twJoin(
        rootDefaultClass,
        rootMaxLgClass,
        rootMaxSmClass,
        '[&:not(&:last-of-type)]:mb-[20px]'
      )}
    >
      <div className='flex w-[40%] flex-col items-center pr-[24px] max-sm:w-full max-sm:pr-0'>
        <Carrier className='mb-[12px] max-sm:hidden' carrier={carrier} />
        <PayButton price={price} />
      </div>
      <div className='flex w-[60%] flex-col max-sm:mb-[14px] max-sm:w-full'>
        <Carrier
          className='hidden max-sm:inline-block max-sm:self-center'
          carrier={carrier}
        />
        {stops > 0 && (
          <Stops
            className='hidden max-sm:block max-sm:self-center max-sm:text-[13px]'
            stops={stops}
          />
        )}
        <div className='flex items-center justify-between'>
          <TravelTime time={arrival_time} />
          {stops > 0 && <Stops className='max-sm:hidden' stops={stops} />}
          <TravelTime time={departure_time} />
        </div>
        <div className='mt-[2px] flex items-center justify-between'>
          <Place place={origin} placeName={origin_name} date={departure_date} />
          <Place
            place={destination}
            placeName={destination_name}
            date={arrival_date}
          />
        </div>
      </div>
    </div>
  )
}
