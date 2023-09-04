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

interface ICarousel {
  children: ReactNode
  className?: string
}

const Carousel: FC<ICarousel> = ({children, className}) => {

  const [nextEl, nextElRef] = useRefWithSet<HTMLButtonElement>();
  const [prevEl, prevElRef] = useRefWithSet<HTMLButtonElement>();

  return (
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={18}
      loop
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false
      // }}
      navigation={{
        prevEl,
        nextEl
      }}
      speed={860}
      centeredSlides
      modules={[Autoplay, Navigation]}
      className='static w-full overflow-visible'
      style={{overflow: 'visible'}}
    >
      {/* {heroData.map((item) => (
        <SwiperSlide key={item.id} className='w-full static'>
          
          <div className='w-full overflow-hidden relative h-[600px] rounded-2xl flex p-12' >
            <Image
              // className='absolute w-full h-full object-cover top-0 left-0'
              className='w-full h-full object-cover brightness-100'
              priority
              sizes='100%'
              fill
              quality={100}
              src={item.image}
              alt={item.title}
            />
            <div className='p-5 backdrop-blur-sm backdrop-brightness-75 rounded-lg relative z-50 text-white self-end'>
              <h3 className='mb-5 text-2xl font-semibold'>{item.title}</h3>
              <div className='flex items-center gap-x-5'>
                <span className='px-1.5 bg-slate-400 font-semibold rounded-sm'>{item.rating}</span>
                <span className='text-lg'>{item.year}</span>
                <span className='text-lg'>{item.genre}</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))} */}
        {children}
      <CarouselBtn ref={prevElRef} className={styles.prev} variant='prev'/>
      <CarouselBtn ref={nextElRef} className={styles.next} variant='next'/>
    </Swiper>
  )
}

export default Carousel;
