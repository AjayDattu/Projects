import dynamic from 'next/dynamic'
import React from 'react'
const LandingPage = dynamic(()=> import('../components/Landingpage'));
function Art() {
  return (
    <div className='h-screen px-4 w-screen'>
        <LandingPage/>
        <div className='h-screen'></div>
        <div className='h-screen'></div>
        <div className='h-screen'></div>
        <div className='h-screen'></div>
    </div>
  )
}

export default Art