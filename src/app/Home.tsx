import Hero from '@/components/hero/Hero'
import Cartoons from '@/components/sections/cartoons/Cartoons'
import Comedy from '@/components/sections/comedy/Comedy'
import Drama from '@/components/sections/drama/Drama'
import Family from '@/components/sections/family/Family'
import NewFilms from '@/components/sections/newFilms/NewFilms'
import NewSeries from '@/components/sections/newSeries/NewSeries'
import { FC } from 'react'

const Home: FC = () => {
  return (
    <main>
      <Hero/>
      <NewFilms/>
      <NewSeries/>
      <Cartoons/>
      <Comedy/>
      <Drama/>
      <Family/>
    </main>
  )
}

export default Home;
