import ContactForm from '@/components/features/ContactForm'

const DeliveryForm = () => {
  return (
    <section className='py-16 md:py-24 bg-zinc-900'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Рассчитать стоимость <span className='text-[#FFD700]'>доставки</span>
          </h2>
          <p className='text-gray-400 max-w-2xl mx-auto'>
            Заполните форму ниже, и мы рассчитаем стоимость доставки для вашего проекта
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}

export default DeliveryForm
