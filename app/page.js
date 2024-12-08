"use client"
import dynamic from 'next/dynamic';
const Navbars = dynamic(() => import('@/components/Navbars'), { ssr: false });

export default function Home() {
  return (
    <div>
      <Navbars />
    </div>
  );
}
