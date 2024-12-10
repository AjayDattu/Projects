import React from 'react';
import Van from './Logo/Van';
import System from './Logo/System';
import Load from './Logo/Load';
import Furniture from './Logo/Furniture';
import Image from 'next/image';

function Timeline() {
  return (
    <div className='bg-gradient-to-b from-[#fff3f9] to-[#FFFFFF] justify-center items-center overflow-x-hidden'>
      <div className='flex flex-col justify-center p-5 md:p-10 lg:p-28 gap-10'>
        <div className='p-4 mb-4'>
          <div className='font-bold text-[25px] sm:text-[30px] md:text-[35px] text-center font-Regular'>
            On s’occupe de <b className='text-[#5cD2DD]'>tout</b>
          </div>
          <div className='text-gray-600 text-[12px] sm:text-[14px] md:text-[16px] text-center'>
            Office ipsum you must be muted. It meeting commitment busy pain.
          </div>
        </div>
        <div className='p-4 items-center align-middle justify-center flex flex-row'>
          
          {/* Step 1 - Load */}
          <div className='flex flex-col justify-center items-center align-middle'>
            <div className='w-[30px] h-[30px] md:w-[70px] md:h-[70px]'>
              <Load />
            </div>
            <div className='font-Regular text-[10px] md:text-[22px]'>
              Livraison & Reprise
            </div>
            <div className='text-[#9c9c9c] text-[10px] md:text-[16px]'>
              Selon vos besoins
            </div>
          </div>

          {/* Connecting Line */}
          <div className='flex justify-start h-20'>
            <div className='w-[50px] md:w-[100px] font-light border h-0 mt-5'></div>
          </div>

          {/* Step 2 - System */}
          <div className='flex flex-col justify-center items-center align-middle'>
            <div className='w-[30px] h-[30px] md:w-[70px] md:h-[70px]'>
              <Furniture/>
              
            </div>
            <div className='font-Regular text-[10px] md:text-[22px]'>
              Livraison & Reprise
            </div>
            <div className='text-[#9c9c9c] text-[10px] md:text-[16px]'>
              Selon vos besoins
            </div>
          </div>

          {/* Connecting Line */}
          <div className='flex justify-start h-20'>
            <div className='w-[50px] md:w-[100px] font-light border h-0 mt-5'></div>
          </div>

          {/* Step 3 - Van */}
          <div className='flex flex-col justify-center items-center align-middle'>
            <div className='w-[30px] h-[30px] md:w-[70px] md:h-[70px]'>
             <System />
            </div>
            <div className='font-Regular  text-[10px] md:text-[22px]'>
              Livraison & Reprise
            </div>
            <div className='text-[#9c9c9c] text-[12px] sm:text-[14px] md:text-[16px]'>
              Selon vos besoins
            </div>
          </div>

          {/* Connecting Line */}
          <div className='flex justify-start h-20'>
            <div className='w-[50px] md:w-[100px] font-light border h-0 mt-5'></div>
          </div>

          {/* Step 4 - Furniture */}
          <div className='flex flex-col justify-center items-center align-middle'>
            <div className='w-[30px] h-[30px] md:w-[70px] md:h-[70px]'>
              <Van/>
            </div>
            <div className='font-Regular text-[10px] md:text-[22px]'>
              Livraison & Reprise
            </div>
            <div className='text-[#9c9c9c] text-[10px]  md:text-[16px]'>
              Selon vos besoins
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full px-5 md:px-10 gap-6 mt-10 ">
        {/* Image Section */}
        <div className="relative w-full md:w-full h-[250px] md:h-[300px]">
          <Image
            src="https://res.cloudinary.com/dxxics5nv/image/upload/v1733809834/pic_aye0c6.png"
            alt="Description of image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Text and Form Section */}
        <div className="w-full md:w-full bg-[#fff5f9] p-5 rounded-md flex flex-col justify-between">
          <div className="text-[28px] md:text-[34px] font-Regular text-black">
            S&apos;inscrire & économiser <b className="text-[#5cD2DD]">10%</b>
          </div>
          <div className="text-sm md:text-[16px] font-Regular text-gray-400 mt-3">
            Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most opportunity didn&apos;t.
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 w-full mt-5">
            <input
              type="text"
              placeholder="john@doe.com"
              className="w-full md:w-[70%] h-[50px] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5cD2DD] placeholder-gray-400"
            />
            <button className="bg-[#5cD2DD] text-white rounded-md p-3 text-[16px] md:text-[20px] w-full md:w-[30%]">
              S’inscrire 🡢
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
{/* <div className='flex flex-col md:flex-row items-center gap-4'>
  <div className='w-full md:w-auto'>
    <input
      type="text"
      placeholder="Enter your email"
      className='w-full md:w-[300px] h-[50px] text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5cD2DD] placeholder-gray-400'
    />
  </div>
  <button className='bg-[#5cD2DD] text-white rounded-md p-3 text-[20px]'>
    S’inscrire 🡢
  </button>
</div> */}

export default Timeline;
