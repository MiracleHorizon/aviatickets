import { useFilterStore } from '@stores/filter'
import { CurrencyConverter } from '@utils/CurrencyConverter'
import { Currency } from '@shared/models/Currency'

export const useConvertCurrency = () => {
  const currencyFilter = useFilterStore(state => state.currency)

  const handleConvert = (value: number) => {
    if (currencyFilter === Currency.USD) {
      return CurrencyConverter.rubToUsd(value)
    }

    if (currencyFilter === Currency.EUR) {
      return CurrencyConverter.rubToEur(value)
    }

    return value
  }

  return { handleConvert }
}
