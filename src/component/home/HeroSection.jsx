import React from 'react'

function HeroSection() {
  return (
    <div>
      <div className=" h-100  w-screen text-center  flex flex-col items-center justify-center bg-blue-50">
        <p className="text-4xl font-semibold bg-gradient-to-r from-emerald-400 to-emerald-800 bg-clip-text text-transparent"> Home Physiotherapy for</p>
        <h1 className="text-8xl font-bold bg-gradient-to-r from-emerald-800 to-emerald-400 bg-clip-text text-transparent">
          Parkinson’s Disease
        </h1>
        <p className="text-xl mt-3 text-black">Specially designed physiotherapy
         Move Better. Stay Independent. Live Confidently.</p>
      </div>
    </div>
  )
}

export default HeroSection
