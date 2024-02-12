import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
const Home = () => {
  return (
    <div className=' h-[200vh]'>
      <Navbar />
      
      <Hero></Hero>
      <Stats></Stats>
      
    </div>
  )
}

export default Home