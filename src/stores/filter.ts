import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { Currency } from '@shared/models/Currency'

interface Store {
  // State
  currency: Currency
  stops: number[]
  lastSetOnceStop: number

  // Computed
  isStopOptionSelected: (stop: number) => boolean

  // Actions
  setCurrency: (currency: Currency) => void
  addStop: (stop: number) => void
  removeStop: (stop: number) => void
  setOneStopFilter: (stop: number) => void
}

export const ALL_STOPS_VARIANT = -1

export const useFilterStore = create(
  devtools<Store>((set, get) => ({
    // State
    currency: Currency.RUB,
    stops: [ALL_STOPS_VARIANT],
    priceRange: { from: 0, to: 0 },
    lastSetOnceStop: -1,

    // Computed
    isStopOptionSelected: stop => get().stops.includes(stop),

    // Actions
    setCurrency: currency => set({ currency }),
    addStop: stop => {
      const currentStops = get().stops

      if (stop === ALL_STOPS_VARIANT) {
        set({ stops: [ALL_STOPS_VARIANT] })
        return
      }

      if (
        currentStops.includes(ALL_STOPS_VARIANT) &&
        stop !== ALL_STOPS_VARIANT
      ) {
        const filtered = currentStops.filter(
          value => value !== ALL_STOPS_VARIANT
        )
        set({ stops: [...filtered, stop] })
        return
      }

      set({ stops: [...currentStops, stop] })
    },
    removeStop: stop => {
      const currentStops = get().stops
      const isOnlyOneStopFilter = currentStops.length === 1

      /*
        В случае, если убирается единственный фильтр, то устанавливается
        базовая фильтрация по "всем" вариантам.
      */
      if (isOnlyOneStopFilter && currentStops.includes(stop)) {
        set({ stops: [ALL_STOPS_VARIANT] })
        return
      }

      const filtered = currentStops.filter(value => value !== stop)

      set({ stops: filtered })
    },
    setOneStopFilter: stop => {
      set({
        stops: [stop],
        lastSetOnceStop: stop
      })
    }
  }))
)
