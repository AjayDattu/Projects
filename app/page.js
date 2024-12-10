"use client";
import dynamic from '@/components/node_modules/next/dynamic';
const Navbars = dynamic(() => import('@/components/Navbars'), { ssr: false });
const MainTabs = dynamic(() => import('@/components/MainTabs'), { ssr: false });

export default function Home() {
  return (
    <div className="h-full w-screen">
       <Navbars />
       <MainTabs/>
    </div>
  );
}
