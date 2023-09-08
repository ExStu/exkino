'use client'

import { RoutesEnum } from '@/const/routes'
import Link from 'next/link'
// import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import cn from 'clsx'

const Navbar:FC = () => {

  const pathname = usePathname()

  return (
    <nav className='flex items-center gap-x-5 text-lg mr-auto'>
      <Link
        href={RoutesEnum.Home}
        className={cn(pathname === '/' ? 'border-b-2 border-red-400' : '', 'py-3')}
      >
        Главная
      </Link>
      <Link
        href={RoutesEnum.Films}
        className={cn(pathname === '/films' ? 'border-b-2 border-red-400' : '', 'py-3')}
      >
        Фильмы
      </Link>
      <Link
        href={RoutesEnum.Series}
        className={cn(pathname === '/series' ? 'border-b-2 border-red-400' : '', 'py-3')}
      >
        Сериалы
      </Link>
      <Link
        href={RoutesEnum.Cartoons}
        className={cn(pathname === '/cartoons' ? 'border-b-2 border-red-400' : '', 'py-3')}
      >
        Мультфильмы
      </Link>
    </nav>
  )
}

export default Navbar;
