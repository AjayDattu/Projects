'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Dropdown, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const SearchBar = dynamic(() => import('./SearchBar'), { ssr: false });
const Bulb = dynamic(() => import('./Logo/Bulb'));
const Cart = dynamic(() => import('./Logo/Cart'));
const Profile = dynamic(() => import('./Logo/Profile'));
const Logo = dynamic(() => import('./Logo/Logo'));
const Love = dynamic(() => import('./Logo/Love'));

function Navbars() {
  const [isDesktop, setIsDesktop] = useState(false);
  React.useEffect(() => {
    const updateMedia = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    updateMedia();
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  const dropdownItems = [
    { key: '1', label: <Bulb /> },
    { key: '2', label: <Love /> },
    { key: '3', label: <Cart /> },
    { key: '4', label: <Profile /> },
  ];

  return (
    <nav className="px-2 flex flex-row p-2 gap-1 md:gap-8 items-center w-screen sticky top-0 z-50 backdrop-blur-lg pr-5">
      <div className="w-15 h-10 md:w-2/12 md:h-28">
        <Logo />
      </div>
      <SearchBar />
      {isDesktop ? (
        <div className="flex gap-3 items-center">
          <Bulb />
          <Love />
          <Cart />
          <Profile />
        </div>
      ) : (
        <Dropdown menu={{ items: dropdownItems , style:{display:"flex",gap:5,flexDirection:"column"}}} trigger={['click']}>
          <MenuOutlined className="text-xl cursor-pointer" />
        </Dropdown>
      )}
    </nav>
  );
}

export default Navbars;
