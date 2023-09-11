'use client'

import { Button } from '@components/ui/Button'
import { useFilterStore } from '@stores/filter'
import { NumberFormatter } from '@utils/NumberFormatter'
import { useConvertCurrency } from '@stores/hooks/useConvertCurrency'

const numberFormatter = new NumberFormatter('ru')

export function PayButton({ price }: Props) {
  const currency = useFilterStore(state => state.currency)

  const { handleConvert } = useConvertCurrency()

  return (
    <Button className='w-full'>
      <>
        <span>Купить</span>
        <br />
        <span>
          за{' '}
          {numberFormatter.formatCurrency({
            value: handleConvert(price),
            maximumSignificantDigits: 4,
            currency
          })}
        </span>
      </>
    </Button>
  )
}

interface Props {
  price: number
}
