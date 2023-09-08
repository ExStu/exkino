'use client'

import Container from '@/components/ui/Container'
import Carousel from '@/components/ui/carousel/Carousel'
import CarouselSlide from '@/components/ui/carousel/carouselSlide/CarouselSlide'
import Title from '@/components/ui/title/Title'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useGetComedyMoviesQuery, useGetDramaMoviesQuery } from '@/services/Exkino.service'
import { FC } from 'react'

const Drama: FC = () => {

  const {filmsLimit} = useTypedSelector((state) => state.limitReducer)
  const {data, isFetching} = useGetDramaMoviesQuery(filmsLimit)

  if(!data) return

  return (
    <section className='relative overflow-hidden py-10'>
      <Container>
        <Title icon className=' mb-10 title'>
          Драмы
        </Title>
      </Container>
      <div className='relative my-0 mx-auto px-[96px]'>
        <Carousel data={data.docs}/>
      </div>
    </section>
  )
}

export default Drama;
