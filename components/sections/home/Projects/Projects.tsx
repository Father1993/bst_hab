'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { PROJECT_CATEGORIES, COMPLETED_PROJECTS } from '@/components/shared/constants'
import { ICONS } from '@/components/shared/icon'

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all')

  const filteredProjects =
    activeTab === 'all'
      ? COMPLETED_PROJECTS
      : COMPLETED_PROJECTS.filter(project => project.category === activeTab)

  return (
    <section id='projects_co' className='py-16 md:py-24 bg-zinc-900'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Реализованные <span className='text-[#FFD700]'>проекты</span>
          </h2>
          <p className='text-gray-400 max-w-2xl mx-auto'>
            Каждый проект - это уникальное решение, созданное с учетом всех требований заказчика и
            особенностей местности
          </p>
        </div>

        {/* Фильтр проектов */}
        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          {PROJECT_CATEGORIES.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${
                  activeTab === category.id
                    ? 'bg-[#FFD700] text-black'
                    : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Сетка проектов */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className='group relative bg-zinc-800 rounded-xl overflow-hidden'
            >
              <div className='aspect-[16/9] relative'>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className='object-cover transition-transform duration-500 group-hover:scale-110'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent' />
              </div>

              <div className='absolute bottom-0 left-0 right-0 p-6'>
                <div className='flex items-start justify-between'>
                  <div>
                    <h3 className='text-xl font-semibold text-white mb-2'>{project.title}</h3>
                    <p className='text-gray-300 text-sm mb-4'>{project.description}</p>
                    <div className='flex items-center text-sm text-[#FFD700]'>
                      {ICONS.location}
                      <span className='ml-1'>{project.location}</span>
                    </div>
                  </div>
                  <div className='space-y-2 text-right'>
                    <div className='text-gray-400 text-sm'>
                      Площадь: <span className='text-white'>{project.stats.area}</span>
                    </div>
                    <div className='text-gray-400 text-sm'>
                      Срок: <span className='text-white'>{project.stats.time}</span>
                    </div>
                    <div className='text-gray-400 text-sm'>
                      Модулей: <span className='text-white'>{project.stats.modules}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className='text-center mt-12'>
          <p className='text-gray-400 mb-6'>
            Хотите реализовать похожий проект? Свяжитесь с нами для консультации. Доступна аренда!
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link
              href={`https://wa.me/79142039197?text=${encodeURIComponent('Здравствуйте! Я с вашего сайта. Интересуют модульные решения и условия аренды. Можно консультацию?')}`}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center px-8 py-4 bg-[#FFD700] text-black rounded-lg font-semibold hover:bg-[#FFD700]/90 transition-colors group'
            >
              <span>Написать в WhatsApp</span>
              {ICONS.arrow}
            </Link>

            <Link
              href='tel:+79142039197'
              className='inline-flex items-center justify-center px-8 py-4 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-colors'
            >
              {ICONS.phone || ICONS.call || '📞'}
              <span className='ml-4'>Позвонить</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
