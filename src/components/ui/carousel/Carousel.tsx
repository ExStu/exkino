'use client'

import Image from 'next/image'
import { FC, ReactNode } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useRefWithSet } from './carouselBtn/useRefWithSet'
import { CarouselBtn } from '@/components/ui/carousel/carouselBtn/CarouselBtn'
import styles from './Carousel.module.scss'
import { IMovie } from '@/types/movie.interface'
import { IMovies } from '@/types/movies.interface'
import CarouselSlide from './carouselSlide/CarouselSlide'

interface ICarousel {
  data: IMovie[]
  // children: ReactNode
  className?: string
}

const Carousel: FC<ICarousel> = ({data, className}) => {

  const [nextEl, nextElRef] = useRefWithSet<HTMLButtonElement>();
  const [prevEl, prevElRef] = useRefWithSet<HTMLButtonElement>();

  return (
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={20}
      navigation={{
        prevEl,
        nextEl
      }}
      speed={860}
      modules={[Autoplay, Navigation]}
      className='static w-full overflow-visible'
      style={{overflow: 'visible'}}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id} className='cursor-pointer' style={{width: '17%'}}>
          <CarouselSlide item={item}/>
        </SwiperSlide>
      ))}
        {/* {children} */}
      <CarouselBtn ref={prevElRef} className={styles.prev} variant='prev'/>
      <CarouselBtn ref={nextElRef} className={styles.next} variant='next'/>
    </Swiper>
  )
}

export default Carousel;
