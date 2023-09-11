import Image from 'next/image'

import covidSvg from '~public/covid.svg'

export function EmptyTicketList() {
  return (
    <div className='flex w-full items-center justify-between rounded-[8px] bg-white p-[24px] shadow max-lg:mx-auto max-lg:max-w-[600px] max-lg:justify-center max-md:flex-col-reverse'>
      <article className='max-md:mt-[14px]'>
        <h2 className='text-center font-medium max-sm:text-[20px]'>
          К сожалению, билетов по вашему запросу не найдено.
        </h2>
      </article>
      <span className='relative block h-[100px] w-[100px] min-w-[100px]'>
        <Image
          src={covidSvg.src}
          fill
          sizes='100%'
          alt='No tickets'
          className='pointer-events-none select-none'
        />
      </span>
    </div>
  )
}
