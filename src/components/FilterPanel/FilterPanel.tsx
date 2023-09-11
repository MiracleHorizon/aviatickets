import { CurrencyFilter } from './CurrencyFilter'
import { StopsFilter } from './StopsFilter'

export function FilterPanel() {
  const titleClassName =
    'uppercase inline-block mb-[12px] text-[15px] font-medium text-gray-700'

  return (
    <div className='h-max w-[30%] min-w-[250px] max-w-[30%] rounded-[10px] bg-white py-[20px] shadow max-lg:w-full max-lg:max-w-[600px]'>
      <div className='mb-[18px] px-[20px]'>
        <h4 className={titleClassName}>Валюта</h4>
        <CurrencyFilter />
      </div>
      <div className='mb-[18px]'>
        <h4 className={`${titleClassName} px-[20px]`}>Количество пересадок</h4>
        <StopsFilter />
      </div>
    </div>
  )
}
