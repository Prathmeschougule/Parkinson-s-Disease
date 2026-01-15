import React from 'react'
import HeroSection from '../component/home/HeroSection'
import Disease from '../component/home/Disease'
import Benefits from '../component/home/Benefits'
import ExerciseProgram from '../component/home/ExerciseProgram'
import Footer from '../coman/Footer'
import AccessibleTable from '../component/home/AccessibleTable'

function Home() {
  return (
    <div className='overflow-x-hidden'>
       <HeroSection/>
       <Disease/>
       <Benefits/>
       <ExerciseProgram/>
        <AccessibleTable/>
      
      
    </div>
  )
}

export default Home
