import Image from 'next/image';
import React from 'react';

function Card() {
  const product = {
    images: [
      {
        _id: "1",
        url: "https://res.cloudinary.com/dxxics5nv/image/upload/v1733666469/small_table-removebg-preview_r7bzvb.png",
      },
    ],
  };

  return (
    <div className="flex flex-col h-auto sm:h-[40vh] md:h-[70vh] w-full p-2 group">
      <div className="bg-[#F9F7F5] p-3 flex flex-col gap-3">
        <div className="flex flex-row justify-between items-center p-1">
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.99428 2.27985C7.32816 0.332 4.54978 -0.191965 2.46224 1.59168C0.374693 3.37532 0.0807963 6.35748 1.72015 8.467C3.08317 10.2209 7.20813 13.9201 8.56007 15.1174C8.71133 15.2513 8.78695 15.3183 8.87517 15.3446C8.95216 15.3676 9.03641 15.3676 9.1134 15.3446C9.20161 15.3183 9.27724 15.2513 9.42849 15.1174C10.7804 13.9201 14.9054 10.2209 16.2684 8.467C17.9078 6.35748 17.6498 3.35656 15.5263 1.59168C13.4029 -0.173202 10.6604 0.332 8.99428 2.27985Z"
              stroke="#8F9BA0"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="bg-white text-[10px] p-1 rounded-md shadow">
            ART DE LA TABLE
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full h-[200px] sm:h-[250px] lg:h-[300px] overflow-hidden">
          <Image
            src={product.images[0].url}
            alt="Product Image"
            layout="fill"
            objectFit="contain"
            loading='lazy'
            className="rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>

        {/* Quantity Control */}
        <div className="flex flex-col sm:flex-row h-auto sm:h-[50px] gap-2 bg-white rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center justify-center text-xs sm:text-sm  text-gray-700 p-1 rounded-md w-full sm:w-[60px]">
            QTE
          </div>
          <div className="flex items-center justify-center text-xs sm:text-sm border border-gray-200 rounded-md flex-1">
            <div className="flex-1 text-center">+</div>
            <div className="flex-1 text-center">1</div>
            <div className="flex-1 text-center">-</div>
          </div>
          <div className="flex items-center justify-center text-xs sm:text-sm bg-[#EE4197] text-white p-1 rounded-md w-full sm:w-[100px] cursor-pointer">
            Ajouter
          </div>
        </div>
      </div>

      {/* Title and Price */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between font-playfair text-[18px] sm:text-[24px]">
          <div>Title</div>
          <div>0€</div>
        </div>
        <div className="flex flex-row justify-between text-[10px] sm:text-[11px]">
          <div className="pt-2">
            0,35€/Pièce · RÉF : VABGN5
          </div>
          <div className="text-[#546A7D] bg-[#F1F4F6] text-[10px] sm:text-[11px] p-2 rounded-md">
            20 pièces
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
