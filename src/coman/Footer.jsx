import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { FaTwitter, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
   <div className='w-screen h-[200px] bg-neutral-900  text-white mt-8'>
  <div className='main max-w-[1300px] mx-auto flex justify-between items-center pt-7'>
    <div>
      <h1 className='text-3xl font-semibold'>MoveWell Parkinson</h1>
      <p className='mt-2'>Helping you stay active and independent</p>
    </div>
    <div className='flex gap-3 text-2xl mr-6'>
      <a href=""><AiFillInstagram /></a>
      <a href=""><FaTwitter /></a>
      <a href=""><FaYoutube /></a>
    </div>
  </div>
  <div className=' max-w-[1300px] mt-8 pt-2 text-center border-t border-gray-500 mx-auto'>
    <h1>©MoveWell Parkinson. All rights reserved.</h1>
    <p>This website is for informational purposes only and not a substitute for professional medical advice.</p>
  </div>
    
</div>

  )
}

export default Footer
