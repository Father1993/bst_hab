'use client'

import { useState } from 'react'
import { Filters as FiltersType, FilterState } from '@/types/catalog'

interface FiltersProps {
  filters: FiltersType
  onFilterChange: (filters: FilterState) => void
}

export const Filters: React.FC<FiltersProps> = ({ filters, onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState<FilterState>({
    purposes: [],
    features: [],
    capacity: [],
  })

  const handleFilterChange = (category: keyof FilterState, value: string) => {
    const newFilters = { ...selectedFilters }
    const categoryFilters = newFilters[category]

    if (categoryFilters.includes(value)) {
      newFilters[category] = categoryFilters.filter(item => item !== value)
    } else {
      newFilters[category] = [...categoryFilters, value]
    }

    setSelectedFilters(newFilters)
    onFilterChange(newFilters)
  }

  return (
    <div className='bg-black/90 rounded-lg shadow-[0_0_30px_rgba(255,215,0,0.1)] p-6 border border-[#FFD700]/20 sticky top-4'>
      <div className='space-y-8'>
        {/* Заголовок с кнопкой сброса */}
        <div className='flex items-center justify-between'>
          <h3 className='text-lg font-semibold text-white'>Фильтры</h3>
          {(selectedFilters.purposes.length > 0 ||
            selectedFilters.features.length > 0 ||
            selectedFilters.capacity.length > 0) && (
            <button
              onClick={() => {
                setSelectedFilters({ purposes: [], features: [], capacity: [] })
                onFilterChange({ purposes: [], features: [], capacity: [] })
              }}
              className='text-sm text-[#FFD700] hover:text-[#FFD700]/80 transition-colors'
            >
              Сбросить
            </button>
          )}
        </div>

        {/* Назначение */}
        <div>
          <h4 className='font-medium text-[#FFD700] mb-4'>Назначение</h4>
          <div className='space-y-3'>
            {filters.purposes.map(purpose => (
              <label key={purpose} className='flex items-center group cursor-pointer'>
                <input
                  type='checkbox'
                  checked={selectedFilters.purposes.includes(purpose)}
                  onChange={() => handleFilterChange('purposes', purpose)}
                  className='form-checkbox h-4 w-4 text-[#FFD700] border-[#FFD700]/30 rounded bg-transparent focus:ring-[#FFD700] focus:ring-offset-0'
                />
                <span className='ml-3 text-sm text-gray-300 group-hover:text-white transition-colors'>
                  {purpose}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Особенности */}
        <div>
          <h4 className='font-medium text-[#FFD700] mb-4'>Особенности</h4>
          <div className='space-y-3'>
            {filters.features.map(feature => (
              <label key={feature} className='flex items-center group cursor-pointer'>
                <input
                  type='checkbox'
                  checked={selectedFilters.features.includes(feature)}
                  onChange={() => handleFilterChange('features', feature)}
                  className='form-checkbox h-4 w-4 text-[#FFD700] border-[#FFD700]/30 rounded bg-transparent focus:ring-[#FFD700] focus:ring-offset-0'
                />
                <span className='ml-3 text-sm text-gray-300 group-hover:text-white transition-colors'>
                  {feature}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Вместимость */}
        <div>
          <h4 className='font-medium text-[#FFD700] mb-4'>Вместимость</h4>
          <div className='space-y-3'>
            {filters.capacity.map(cap => (
              <label key={cap} className='flex items-center group cursor-pointer'>
                <input
                  type='checkbox'
                  checked={selectedFilters.capacity.includes(cap)}
                  onChange={() => handleFilterChange('capacity', cap)}
                  className='form-checkbox h-4 w-4 text-[#FFD700] border-[#FFD700]/30 rounded bg-transparent focus:ring-[#FFD700] focus:ring-offset-0'
                />
                <span className='ml-3 text-sm text-gray-300 group-hover:text-white transition-colors'>
                  {cap}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
