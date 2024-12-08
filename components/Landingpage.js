"use client"
import { useState } from "react";
import Image from "next/image";

function LandingPage() {
  const product = {
    images: [
      {
        _id: "1",
        url: "https://res.cloudinary.com/dxxics5nv/image/upload/v1733658738/tables-removebg-preview_qulklh.png",
      },
      {
        _id: "2",
        url: "https://res.cloudinary.com/dxxics5nv/image/upload/v1733666469/small_table-removebg-preview_r7bzvb.png",
      },
      {
        _id: "3",
        url: "https://res.cloudinary.com/dxxics5nv/image/upload/v1733666469/small_table-removebg-preview_r7bzvb.png",
      },
    ],
  };

  const [imgUrl, setImgUrl] = useState(product.images[0]?.url || "");

  return (
    <div>
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="flex flex-row gap-1">
          <li>
            <button href="/" className="text-black hover:underline">
              Home
            </button>
          </li>
          <li aria-current="page" className="text-gray-500">
            • Art de la table
          </li>
        </ol>
      </nav>
      <div className="w-screen flex flex-row">
      <div className="flex flex-row w-[761px] h-[652px] bg-[#F8F6F4]">
      <div className="flex flex-start gap-10">
        <div>
          {/* Display images if available */}
          {product.images?.length > 0 ? (
            product.images.map((item) => (
              <div
                key={item._id}
                className={`w-24 cursor-pointer opacity-80 hover:opacity-100 duration-300 w-[55px] h-[55px]${
                  imgUrl === item.url &&
                  "border border-gray-500 rounded-sm opacity-100"
                }`}
                onClick={() => setImgUrl(item.url)}
              >
                <Image
                  src={item.url}
                  alt={`Product thumbnail ${item._id}`}
                  width={55}
                  height={55}
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))
          ) : (
            <p>No images available</p>
          )}
        </div>
        <div className="w-full h-full flex flex-col">
          <Image
            src={imgUrl}
            alt="Selected Product"
            width={552}
            height={552}
            loading="eager"
            style={{ objectFit: "contain" }}
            className="object-contain"
          />
        </div>
      </div>
      </div>
      <div className="">

      </div>
    </div>
    </div>
  );
}

export default LandingPage;
