'use client'

import { TabSelect } from '@components/ui/TabSelect'
import { useFilterStore } from '@stores/filter'
import { Currency } from '@shared/models/Currency'

export function CurrencyFilter() {
  const currencyFilter = useFilterStore(state => state.currency)
  const setCurrencyFilter = useFilterStore(state => state.setCurrency)

  return (
    <TabSelect
      items={Object.values(Currency)}
      selectedItem={currencyFilter}
      handleChange={setCurrencyFilter as (value: string) => void}
    />
  )
}
