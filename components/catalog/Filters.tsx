'use client'

import { useState } from 'react'
import { Filters as FiltersType } from '@/types/catalog'

interface FiltersProps {
  filters: FiltersType
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export const Filters: React.FC<FiltersProps> = ({ filters, activeFilter, onFilterChange }) => {
  return (
    <div className='bg-black/90 rounded-lg shadow-[0_0_30px_rgba(255,215,0,0.1)] p-6 border border-[#FFD700]/20'>
      <div className='space-y-6'>
        <div className='flex items-center justify-between'>
          <h3 className='text-lg font-semibold text-white'>Фильтры</h3>
          {activeFilter !== 'all' && (
            <button
              onClick={() => onFilterChange('all')}
              className='text-sm text-[#FFD700] hover:text-[#FFD700]/80 transition-colors'
            >
              Сбросить
            </button>
          )}
        </div>

        <button
          onClick={() => onFilterChange('all')}
          className={`w-full px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 
            ${
              activeFilter === 'all'
                ? 'bg-[#FFD700] text-black'
                : 'bg-black/50 text-gray-400 hover:bg-black/70'
            }`}
        >
          Все товары
        </button>

        <div className='space-y-3'>
          <h4 className='text-[#FFD700] font-medium text-sm'>Назначение</h4>
          <div className='grid grid-cols-1 gap-2'>
            {filters.purposes.map(purpose => (
              <button
                key={purpose}
                onClick={() => onFilterChange(purpose)}
                className={`w-full px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 
                  ${
                    activeFilter === purpose
                      ? 'bg-[#FFD700] text-black'
                      : 'bg-black/50 text-gray-400 hover:bg-black/70'
                  }`}
              >
                {purpose}
              </button>
            ))}
          </div>
        </div>

        <div className='space-y-3'>
          <h4 className='text-[#FFD700] font-medium text-sm'>Особенности</h4>
          <div className='grid grid-cols-1 gap-2'>
            {filters.features.map(feature => (
              <button
                key={feature}
                onClick={() => onFilterChange(feature)}
                className={`w-full px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 
                  ${
                    activeFilter === feature
                      ? 'bg-[#FFD700] text-black'
                      : 'bg-black/50 text-gray-400 hover:bg-black/70'
                  }`}
              >
                {feature}
              </button>
            ))}
          </div>
        </div>

        <div className='space-y-3'>
          <h4 className='text-[#FFD700] font-medium text-sm'>Вместимость</h4>
          <div className='grid grid-cols-1 gap-2'>
            {filters.capacity.map(cap => (
              <button
                key={cap}
                onClick={() => onFilterChange(cap)}
                className={`w-full px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 
                  ${
                    activeFilter === cap
                      ? 'bg-[#FFD700] text-black'
                      : 'bg-black/50 text-gray-400 hover:bg-black/70'
                  }`}
              >
                {cap}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
