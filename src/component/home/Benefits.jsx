import { Grid } from '@mui/material'
import React from 'react'
import { FaCheck } from "react-icons/fa";

function Benefits() {
  return (
  <>
      <div className='' >
        <div className='p-5 bg-gradient-to-r from-emerald-800 w-screen to-emerald-0 bg-transparent'>
          <h1 className='text-3xl sm:4xl lg:text-5xl font-semibold text-white'>Benefits of Home Physiotherapy</h1>
        </div>  
        <Grid  container  rowSpacing={1} className={"mt-4"} justifyContent={"center"} columnSpacing={{ xs: 1, sm: 2, md: 3 } }>
            <Grid size={4} className={"bg-blue-100 p-6 flex items-center gap-2 transition-colors duration-300 hover:bg-blue-200" }>
              <FaCheck className='text-green-400' /> 
              <h1 className='text-xl'>Improves mobility and flexibility</h1> 
            </Grid>
            <Grid size={4} className={"bg-blue-100 p-6 flex items-center gap-2 transition-colors duration-300 hover:bg-blue-200" }>
              <FaCheck className='text-green-400' /> 
              <h1 className='text-xl'>Reduces stiffness and pain</h1> 
            </Grid>
            <Grid size={4} className={"bg-blue-100 p-6 flex items-center gap-2 transition-colors duration-300 hover:bg-blue-200" }>
              <FaCheck className='text-green-400' /> 
              <h1 className='text-xl'>Enhances balance and posture</h1> 
            </Grid>
            <Grid size={4} className={"bg-blue-100 p-6 flex items-center gap-2 transition-colors duration-300 hover:bg-blue-200" }>
              <FaCheck className='text-green-400' /> 
              <h1 className='text-xl'>Reduces risk of falls</h1> 
            </Grid>
            <Grid size={4} className={"bg-blue-100 p-6 flex items-center gap-2 transition-colors duration-300 hover:bg-blue-200" }>
              <FaCheck className='text-green-400' /> 
              <h1 className='text-xl'>Boosts confidence</h1> 
            </Grid>
            <Grid size={4} className={"bg-blue-100 p-6 flex items-center gap-2 transition-colors duration-300 hover:bg-blue-200" }>
              <FaCheck className='text-green-400' /> 
              <h1 className='text-xl'>Exercise in a safe, clutter-free area</h1> 
            </Grid>
            <Grid size={4} className={"bg-blue-100 p-6 flex items-center gap-2 transition-colors duration-300 hover:bg-blue-200" }>
              <FaCheck className='text-green-400' /> 
              <h1 className='text-xl'>Use chair or wall support if needed</h1> 
            </Grid>
            <Grid size={4} className={"bg-blue-100 p-6 flex items-center gap-2 transition-colors duration-300 hover:bg-blue-200" }>
              <FaCheck className='text-green-400' /> 
              <h1 className='text-xl'>Stop immediately if you feel dizziness or chest pain</h1> 
            </Grid>
            <Grid size={4} className={"bg-blue-100 p-6 flex items-center gap-2 transition-colors duration-300 hover:bg-blue-200" }>
              <FaCheck className='text-green-400' /> 
              <h1 className='text-xl'>Consult your doctor before starting</h1> 
            </Grid>

        </Grid>     
      </div>
  
  </>
  )
}

export default Benefits
