import Image from 'next/image'
import Link from 'next/link'

import planeSvg from '~public/plane.svg'

const HOME_ROUTE = '/'

export function Header() {
  return (
    <header className='mb-[36px] mt-[28px] flex h-[80px] w-full items-center justify-center'>
      <div className='flex h-[80px] w-[80px] items-center justify-center rounded-full bg-blue-500'>
        <Link href={HOME_ROUTE} className='mr-[-4px]'>
          <Image
            src={planeSvg.src}
            width={54}
            height={54}
            alt='Home'
            priority
          />
        </Link>
      </div>
    </header>
  )
}
