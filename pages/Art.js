import dynamic from 'next/dynamic'
import React from 'react'
const LandingPage = dynamic(()=> import('../components/Landingpage'));
const SliderCart = dynamic(()=> import('../components/SliderCart'));
function Art() {
  return (
    <div className='h-full px-4 w-screen flex flex-col gap-12'>
        <LandingPage/>
        <SliderCart/>
        <div className='h-screen'></div>
        <div className='h-screen'></div>
        <div className='h-screen'></div>
    </div>
  )
}

export default Art