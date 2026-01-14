import { Grid } from '@mui/material'
import { blue } from '@mui/material/colors'
import React from 'react'

function Disease() {
  return (
    <Grid container spacing={2} justifyContent="center" className='mt-15 '  // horizontal center
      >
      <div >
        <div className='p-5 bg-gradient-to-r from-emerald-800 to-emerald-0 bg-transparent'>
          <h1 className='text-3xl sm:4xl lg:text-5xl  font-semibold text-white'>What is Parkinson’s Disease?</h1>
        </div>
        <p className='text-xl mt-2 text-gray-500'>Parkinson’s disease is a neurological  condition that<br /> affects movement.</p>
        <p className='text-2xl mt-3 '>Common problems include:</p>
         <ul className="list-disc list-inside text-lg ">
            <li>Slowness of movement</li>
            <li>Stiffness</li>
            <li>Tremors</li>
            <li>Balance issues</li>
            <li>Posture changes</li>
         </ul>
      </div>
      <div>
        <img className='w-150' src="/dises.png" alt="Dises imae" />
      </div>
   
    </Grid>
  )
}

export default Disease
