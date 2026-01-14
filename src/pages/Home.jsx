import React from 'react'
import HeroSection from '../component/home/HeroSection'
import Disease from '../component/home/Disease'
import Benefits from '../component/home/Benefits'
import ExerciseProgram from '../component/home/ExerciseProgram'

function Home() {
  return (
    <div className='overflow-x-hidden'>
       <HeroSection/>
       <Disease/>
       <Benefits/>
       <ExerciseProgram/>
    </div>
  )
}

export default Home
