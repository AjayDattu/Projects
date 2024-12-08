'use client';
import React from 'react';
import { Dropdown, Menu } from 'antd';
import Logo from './Logo/Logo';
import SearchBar from './sub-components/SearchBar';
import Bulb from './Logo/Bulb';
import Love from './Logo/Love';
import Cart from './Logo/Cart';
import Profile from './Logo/Profile';

function Navbars() {
  const menu = (
    <Menu className="flex flex-col gap-4">
      <Menu.Item key="bulb" className="flex items-center">
        <Bulb />
      </Menu.Item>
      <Menu.Item key="love" className="flex items-center">
        <Love />
      </Menu.Item>
      <Menu.Item key="cart" className="flex items-center">
        <Cart />
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="px-2 flex flex-row p-2 gap-1 md:gap-7 align-middle items-center w-screen">
      <Logo />
      <SearchBar />
      
      {/* Full Navbar for large screens and above */}
      <div className="hidden lg:flex gap-3 items-center">
        <Bulb />
        <Love />
        <Cart />
        <Profile />
      </div>

      {/* Dropdown Navbar for smaller screens (md and below) */}
      <div className="lg:hidden">
        <Dropdown menu={menu} trigger={['click']} placement="bottomRight">
          <div className="cursor-pointer">
            <Profile />
          </div>
        </Dropdown>
      </div>
    </div>
  );
}

export default Navbars;
