'use client'

import Carousel from '@/components/ui/carousel/Carousel'
import { useRefWithSet } from '@/components/ui/carousel/carouselBtn/useRefWithSet'
import CarouselSlide from '@/components/ui/carousel/carouselSlide/CarouselSlide'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useGetNewFilmsQuery } from '@/services/Exkino.service'
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

const NewFilms: FC = () => {

  const {filmsLimit} = useTypedSelector((state) => state.limitReducer)
  const {data, isFetching} = useGetNewFilmsQuery(filmsLimit)

  if(!data) return

  return (
    <section className='relative overflow-hidden py-10'>
      <Container>
        <Title icon className='mb-10 title'>
          Новые фильмы
        </Title>
      </Container>
      <div className='relative my-0 mx-auto px-[96px]'>
        <Carousel data={data.docs}/>
      </div>
    </section>
  )
}

export default NewFilms;
