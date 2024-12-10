
import BottomNav from '@/components/BottomNav';
import NormalGrid from '@/components/NormalGrid';
import Timeline from '@/components/Timeline';
import dynamic from 'next/dynamic'
import React from 'react'
const LandingPage = dynamic(()=> import('../components/Landingpage'));
const SliderCart = dynamic(()=> import('../components/SliderCart'));
function Art() {
  return (
    <div className=' w-screen'>
        <LandingPage/>
        <div className='w-screen mt-20 overflow-x-hidden'>
          <SliderCart/>
        </div>
        <div className='w-screen h-full mt-10'>
          <NormalGrid/>
        </div>
        <div className='mt-20 h-full overflow-x-hidden'>
            <Timeline/>
        </div>
        <div className='mt-20 md:mt-60 h-screen'>
            <BottomNav/>
        </div>
    </div>

  )
}

export default Art