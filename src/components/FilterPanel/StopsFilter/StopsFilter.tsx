import { StopOption } from './StopOption'
import { ALL_STOPS_VARIANT } from '@stores/filter'
import type { IStopOption } from '@shared/models/StopOption'

const stopOptions: IStopOption[] = [
  { title: 'Все', value: ALL_STOPS_VARIANT },
  { title: 'Без пересадок', value: 0 },
  { title: '1 пересадка', value: 1 },
  { title: '2 пересадки', value: 2 },
  { title: '3 пересадки', value: 3 }
]

export function StopsFilter() {
  return (
    <ul>
      {stopOptions.map(option => (
        <StopOption {...option} key={option.value} />
      ))}
    </ul>
  )
}
