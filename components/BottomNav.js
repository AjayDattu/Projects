'use client';
import React, { memo } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Dynamically import components for better performance
const Van = dynamic(() => import('./Logo/Van'));
const System = dynamic(() => import('./Logo/System'));
const Load = dynamic(() => import('./Logo/Load'));
const Furniture = dynamic(() => import('./Logo/Furniture'));

// Steps data for rendering
const steps = [
  { Icon: Load, title: 'Livraison & Reprise', subtitle: 'Selon vos besoins' },
  { Icon: Furniture, title: 'Livraison & Reprise', subtitle: 'Selon vos besoins' },
  { Icon: System, title: 'Livraison & Reprise', subtitle: 'Selon vos besoins' },
  { Icon: Van, title: 'Livraison & Reprise', subtitle: 'Selon vos besoins' },
];

// Individual Step Component (Memoized)
const Step = memo(({ Icon, title, subtitle }) => (
  <div className="flex flex-col justify-center items-center">
    <div className="w-[30px] h-[30px] md:w-[70px] md:h-[70px]">
      <Icon />
    </div>
    <p className="font-Regular text-[10px] md:text-[22px]">{title}</p>
    <p className="text-[#9c9c9c] text-[10px] md:text-[16px]">{subtitle}</p>
  </div>
));

// Add displayName for Step component
Step.displayName = 'Step';

function Timeline() {
  return (
    <div className="bg-gradient-to-b from-[#fff3f9] to-[#FFFFFF] justify-center items-center overflow-x-hidden">
      <div className="flex flex-col justify-center p-5 md:p-10 lg:p-28 gap-10">
        {/* Heading Section */}
        <div className="p-4 mb-4">
          <h2 className="font-bold text-[25px] sm:text-[30px] md:text-[35px] text-center font-Regular">
            On s’occupe de <b className="text-[#5cD2DD]">tout</b>
          </h2>
          <p className="text-gray-600 text-[12px] sm:text-[14px] md:text-[16px] text-center">
            Office ipsum you must be muted. It meeting commitment busy pain.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="p-4 flex items-center justify-center">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <Step Icon={step.Icon} title={step.title} subtitle={step.subtitle} />
              {index < steps.length - 1 && (
                <div className="flex justify-start h-20">
                  <div className="w-[50px] md:w-[100px] font-light border h-0 mt-5"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row w-full px-5 md:px-10 gap-6 mt-10">
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
          <h2 className="text-[28px] md:text-[34px] font-Regular text-black">
            S&apos;inscrire & économiser <b className="text-[#5cD2DD]">10%</b>
          </h2>
          <p className="text-sm md:text-[16px] font-Regular text-gray-400 mt-3">
            Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most opportunity didn&apos;t.
          </p>
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

// Add displayName for Timeline component
Timeline.displayName = 'Timeline';

export default memo(Timeline);
