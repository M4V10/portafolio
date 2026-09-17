import { useContext } from 'react'
import { SmoothScrollContext } from './smooth-scroll-context'

export const useSmoothScroll = () => {
  const context = useContext(SmoothScrollContext)
  if (!context) {
    throw new Error('useSmoothScroll debe usarse dentro de un SmoothScrollProvider')
  }
  return context
}
