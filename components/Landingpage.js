"use client";
import { useState, useCallback } from "react";
import Image from "next/image";
import classNames from "classnames";

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

  const handleThumbnailClick = useCallback((url) => {
    setImgUrl(url);
  }, []);

  return (
    <div className="flex flex-col gap-2 w-screen px-4 overflow-x-hidden">
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="flex gap-1">
          <li>
            <button className="text-black hover:underline">Home</button>
          </li>
          <li aria-current="page" className="text-gray-500">
            • Art de la table
          </li>
        </ol>
      </nav>
      <div className="w-screen flex flex-col md:flex-row">
        <div className="flex flex-row w-full h-[350px] md:h-[652px] bg-[#F8F6F4]">
          <div className="flex flex-start gap-10">
            <div>
              {product.images?.length > 0 ? (
                product.images.map((item) => (
                  <div
                    key={item._id}
                    className={classNames(
                      "w-[55px] h-[55px] cursor-pointer opacity-80 hover:opacity-100 duration-300 p-1",
                      {
                        " rounded-sm opacity-100":
                          imgUrl === item.url,
                      }
                    )}
                    onClick={() => handleThumbnailClick(item.url)}
                  >
                    <Image
                      src={item.url}
                      alt={`Product thumbnail ${item._id}`}
                      width={55}
                      height={55}
                      loading="lazy"
                      className="object-cover bg-white rounded-sm "
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
                loading="lazy"
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full pr-10 p-3 gap-3">
          <div className="flex justify-between items-center h-10">
            <div className="text-xl md:text-3xl lg:text-3xl font-playfair text-start w-full">
              Cheese – appareil à raclette 1/2 roue
            </div>
            <div className="flex">
              <FavoriteIcon />
            </div>
          </div>
          <div className="flex items-center gap-2  h-20">
            <div className="font-playfair text-2xl">39,50€</div>
            <div className="text-gray-500 text-left">/pièce</div>
          </div>
          <div className="flex justify-between items-center gap-2 border-b border-[#9C9C9C] border-t border-[#9C9C9C] h-10">
            <div>20cm 50cm</div>
            <div className="text-[#9C9C9C] flex">RÉF : VABGN5</div>
          </div>
          <div className="border-b border-[#9C9C9C] h-3/5 text-[#5D5D5D]">
            <div>Location appareil à raclette - Raclette traditionnelle 1/2 roue</div>
           <div>Réglable en hauteur</div>
            <div>Appareil à raclette professionnel</div>
           <div>Boîtier de chauffe horizontal réglable en hauteur</div> 
 

            <div>220V</div>
            <div>900W</div>
          </div>
          <div className="flex flex-row h-[50px] gap-3">
            <div className="w-1/2 flex justify-center items-center text-center text-xl border border-gray-200">
              <div className="w-full">+</div>
              <div className="w-full">1</div>
              <div className="w-full">-</div>
            </div>
           <div className="w-full flex justify-center items-center bg-[#5CD2DD] text-center text-xl rounded-md text-white">
              Ajouter au panier
            </div>

          </div>

        </div>
      </div>
      <div className="w-screen flex flex-col md:flex-row gap-4 pr-4 h-30 mt-6">
        <div className=" flex flex-col w-full gap-2 h-full">
          <div className="text-[20px] font-Regular text-[#111928] font-light">Description produit</div>
          <div className="text-[14px] h-full text-[#9C9C9C]">
          Festi vous propose à la location un/une &quot;Jewel – grand couteau/10pc&quot; 
          pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage,
          une fête d&apos;anniversaire ou du personnel, ce produit a fait l&apos;objet d&apos;une 
          sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence 
          &quot;VAJGC&quot;. Nous sommes à votre disposition pour que les événements de nos clients, 
          même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série 
          d&apos;autre produit à louer de ce type dans la catégorie &quot;Art de la Table&quot;.
        </div>
        </div>
        <div className="w-full pt-3 p-4 h-full">
          <div className="flex justify-between items-center pr-10 p-5 text-2xl h-full bg-[#FBF9F899]"><div>Livraisons</div><div>+</div></div>
          <div className="flex justify-between items-center pr-10 p-5 text-2xl h-full bg-[#FBF9F899]"><div>Questions</div><div>+</div></div>
        </div>
      </div>
    </div>
  );
}

function FavoriteIcon() {
  return (
    <svg
      width="27"
      height="25"
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
  );
}

export default LandingPage;