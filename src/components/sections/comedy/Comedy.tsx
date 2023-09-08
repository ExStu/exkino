'use client'

import Carousel from '@/components/ui/carousel/Carousel'
import { useRefWithSet } from '@/components/ui/carousel/carouselBtn/useRefWithSet'
import CarouselSlide from '@/components/ui/carousel/carouselSlide/CarouselSlide'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useGetCartoonsQuery, useGetComedyMoviesQuery, useGetNewFilmsQuery } from '@/services/Exkino.service'
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

const Comedy: FC = () => {

  const {filmsLimit} = useTypedSelector((state) => state.limitReducer)
  const {data, isFetching} = useGetComedyMoviesQuery(filmsLimit)

  if(!data) return

  return (
    <section className='relative overflow-hidden py-10'>
      <Container>
        <Title icon className='mb-10 title'>
          Комедии
        </Title>
      </Container>
      <div className='relative my-0 mx-auto px-[96px]'>
        <Carousel data={data.docs}/>
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

export default Comedy;
