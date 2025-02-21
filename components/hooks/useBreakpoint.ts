import { useState, useEffect } from 'react'

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

type Breakpoint = keyof typeof breakpoints

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('lg')
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
      if (window.innerWidth < breakpoints.sm) setBreakpoint('sm')
      else if (window.innerWidth < breakpoints.md) setBreakpoint('md')
      else if (window.innerWidth < breakpoints.lg) setBreakpoint('lg')
      else if (window.innerWidth < breakpoints.xl) setBreakpoint('xl')
      else setBreakpoint('2xl')
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    breakpoint,
    width,
    isMobile: breakpoint === 'sm',
    isTablet: breakpoint === 'md',
    isDesktop: ['lg', 'xl', '2xl'].includes(breakpoint),
  }
}

export default useBreakpoint
