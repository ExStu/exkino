'use client'

import { RoutesEnum } from '@/const/routes'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import Navbar from './Navbar'
import Container from '../ui/Container'
import {BsSearch} from 'react-icons/bs'

const Header:FC = () => {
  return (
    <header className='py-8'>
      <Container className='flex items-center'>
        <Link href={RoutesEnum.Home} className='mr-10'>
          <Image src='/logo.svg' width={140} height={50} alt='Logo'/>
        </Link>
        <Navbar/>
        <button>
          <BsSearch size={28}/>
        </button>
      </Container>
    </header>
  )
}

export default Header;
