import { FC, PropsWithChildren, ReactNode } from 'react'
import { SwiperSlide } from 'swiper/react'
import cn from 'clsx'

interface ICarouselSlide {
  children: ReactNode
  className?: string
}

const CarouselSlide: FC<ICarouselSlide> = ({children, className}) => {
  return (
    <SwiperSlide className={cn('static', className)}>
      {children}
    </SwiperSlide>
  )
}

export default CarouselSlide;
