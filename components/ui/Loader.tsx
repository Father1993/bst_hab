const Loader = () => {
  return (
    <div className='fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center'>
      <div className='relative'>
        {/* Анимированный логотип */}
        <div className='w-24 h-24 border-4 border-[#FFD700] rounded-full animate-spin border-t-transparent' />
        <div className='absolute inset-0 flex items-center justify-center'>
          <span className='text-[#FFD700] font-bold'>BST</span>
        </div>
      </div>
    </div>
  )
}

export default Loader
