import Header from '@/components/header/Header'
import Hero from '@/components/hero/Hero'
import Cartoons from '@/components/sections/cartoons/Cartoons'
import Comedy from '@/components/sections/comedy/Comedy'
import NewFilms from '@/components/sections/newFilms/NewFilms'
import NewSeries from '@/components/sections/newSeries/NewSeries'
import {FC} from 'react'

const Home: FC = () => {
  return (
    <main>
      <Header/>
      <Hero/>
      <NewFilms/>
      <NewSeries/>
      <Cartoons/>
      <Comedy/>
    </main>
  )
}

export default Home;
