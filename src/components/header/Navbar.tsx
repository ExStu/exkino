'use client'

import { RoutesEnum } from '@/const/routes'
import Link from 'next/link'
// import { useRouter } from 'next/navigation'
import { FC } from 'react'

const Navbar:FC = () => {

  // const router = useRouter()

  return (
    <nav className='flex items-center gap-x-5 text-lg text-white mr-auto'>
      <Link href={RoutesEnum.Home}>Главная</Link>
      <Link href={RoutesEnum.Films}>Фильмы</Link>
      <Link href={RoutesEnum.Series}>Сериалы</Link>
      <Link href={RoutesEnum.Cartoons}>Мультфильмы</Link>
    </nav>
  )
}

export default Navbar;
