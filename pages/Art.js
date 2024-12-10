
import NormalGrid from '@/components/NormalGrid';
import dynamic from 'next/dynamic'
import React from 'react'
const LandingPage = dynamic(()=> import('../components/Landingpage'));
const SliderCart = dynamic(()=> import('../components/SliderCart'));
function Art() {
  return (
    <div className='px-4 w-screen'>
        <LandingPage/>
        <div className=' mt-20'>
          <SliderCart/>
        </div>
        <div className='h-full mt-10'>
          <NormalGrid/>
        </div>
        <div className=''>

        </div>
        <div className=''>

        </div>
    </div>

  )
}

export default Art