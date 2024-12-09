"use client"
import dynamic from 'next/dynamic';
const Navbars = dynamic(() => import('@/components/Navbars'), { ssr: false });
const MainTabs = dynamic(()=>import('@/components/MainTabs'),{ssr:false});
export default function Home() {
  return (
    <div className='w-screen overflow-x-hidden'>
      <Navbars />
      <MainTabs/>
      
      <div className='h-screen'></div>
      
      <div className='h-screen'></div>
      
      <div className='h-screen'></div>
      <div className='h-screen'></div>
    </div>
  );
}
