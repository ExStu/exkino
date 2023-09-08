import { FC, PropsWithChildren, ReactNode } from 'react'
import { SwiperSlide } from 'swiper/react'
import cn from 'clsx'
import Image from 'next/image'
import { IMovie } from '@/types/movie.interface'

interface ICarouselSlide {
  item: IMovie
  className?: string
}

const CarouselSlide: FC<ICarouselSlide> = ({item, className}) => {
  return (
      <div className='group hover:scale-110 transition-all duration-300 w-full overflow-hidden relative h-[450px] rounded-2xl flex p-12' >
        <Image
          // className='absolute w-full h-full object-cover top-0 left-0'
          className='w-full h-full object-cover group-hover:brightness-25 transition duration-300 rounded-2xl'
          // priority
          sizes='100%'
          fill
          quality={100}
          src={`https://st.kp.yandex.net/images/film_iphone/iphone360_${item?.id}.jpg`}
          alt={item.name}
        />
        <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 backdrop-blur-sm backdrop-brightness-75 rounded-lg relative z-50 self-end'>
          <h3 className='mb-5 text-2xl font-semibold'>{item.name}</h3>
          <div className='flex items-center gap-x-5'>
            <span className='px-1.5 bg-slate-400 font-semibold rounded-sm'>{item.rating?.kp}</span>
            <span className='text-lg'>{item.year}</span>
          </div>
        </div>
      </div>
  )
}

export default CarouselSlide;
