'use client'

import Carousel from '@/components/ui/carousel/Carousel'
import { useRefWithSet } from '@/components/ui/carousel/carouselBtn/useRefWithSet'
import CarouselSlide from '@/components/ui/carousel/carouselSlide/CarouselSlide'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useGetNewFilmsQuery, useGetNewSeriesQuery } from '@/services/Exkino.service'
import Image from 'next/image'
import { FC } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CarouselBtn } from '@/components/ui/carousel/carouselBtn/CarouselBtn'
import styles from './Carousel.module.scss'
import Title from '@/components/ui/title/Title'
import Container from '@/components/ui/Container'
import {BsChevronRight} from 'react-icons/bs'

const NewSeries: FC = () => {

  const {filmsLimit} = useTypedSelector((state) => state.limitReducer)
  const {data, isFetching} = useGetNewSeriesQuery(filmsLimit)
  const [nextEl, nextElRef] = useRefWithSet<HTMLButtonElement>();
  const [prevEl, prevElRef] = useRefWithSet<HTMLButtonElement>();

  return (
    <section className='relative overflow-hidden py-10'>
      <Container>
        <Title icon className='text-white mb-10 title'>
          Новые сериалы
        </Title>
      </Container>
      <div className='relative my-0 mx-auto px-[96px]'>
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
          {data?.docs.map((item) => (
            <SwiperSlide key={item.id} className='cursor-pointer' style={{width: '17%'}}>
              
              {isFetching ? (
                <div>
                  loading...
                </div>
              ): (

              <div className='group hover:scale-110 transition-all duration-300 w-full overflow-hidden relative h-[500px] rounded-2xl flex p-12' >
                <Image
                  // className='absolute w-full h-full object-cover top-0 left-0'
                  className='w-full h-full object-cover group-hover:brightness-25 transition duration-300 rounded-2xl'
                  priority
                  sizes='100%'
                  fill
                  quality={100}
                  src={`https://st.kp.yandex.net/images/film_iphone/iphone360_${item?.id}.jpg`}
                  alt={item.name}
                />
                <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 backdrop-blur-sm backdrop-brightness-75 rounded-lg relative z-50 text-white self-end'>
                  <h3 className='mb-5 text-2xl font-semibold'>{item.name}</h3>
                  <div className='flex items-center gap-x-5'>
                    <span className='px-1.5 bg-slate-400 font-semibold rounded-sm'>{item.rating?.kp}</span>
                    <span className='text-lg'>{item.year}</span>
                  </div>
                </div>
              </div>
              )}
            </SwiperSlide>
          ))}
          <CarouselBtn ref={prevElRef} className={styles.prev} variant='prev'/>
          <CarouselBtn ref={nextElRef} className={styles.next} variant='next'/>
        </Swiper>
      </div>
    </section>
  )
    //  <Carousel>
    //   {data?.docs.map((item) => (
    //     <CarouselSlide key={item.id} className='w-[500px] h-[500px]'>
    //       {isFetching ? (
    //         <div>Loading...</div>
    //       ): (
    //         <Image
    //           width={500}
    //           height={500}
    //           quality={100}
    //           alt={item.name}
    //           src={`https://st.kp.yandex.net/images/film_iphone/iphone360_${item?.id}.jpg`}
    //         />
    //       )}
    //     </CarouselSlide>
    //   ))}
    // </Carousel>
    
    
  
}

export default NewSeries;
