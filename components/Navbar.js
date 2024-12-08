"use client"
import React, { useState, useMemo } from 'react';
import { Tabs } from 'antd';

const tabContent = {
  1: 'Content for Home',
  2: 'Content for About',
  3: 'Content for Services',
  4: 'Content for Projects',
  5: 'Content for Team',
  6: 'Content for Blog',
  7: 'Content for FAQ',
  8: 'Content for Testimonials',
  9: 'Content for Contact',
  10: 'Content for Careers',
  11: 'Content for Support',
};

const { TabPane } = Tabs;

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('1');

  const tabs = useMemo(() => [
    'Art de la table', 'Mobilier', 'Nappage', 'Matériel de salle', 'Cuisine',
    'Barbecue', 'Tente', 'Chauffage', 'Podium - Piste de danse', 'Son et lumière', 'Packs', 'Consommables'
  ], []);

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <div className="container w-full font-sans">
      <Tabs
        defaultActiveKey="1"
        activeKey={activeTab}
        onChange={handleTabChange}
        centered
        size="large"
        className="w-full"
        tabBarStyle={{
          borderBottom: '2px solid #e8e8e8',
        }}
        tabBarGutter={30}
      >
        {tabs.map((tab, index) => (
          <TabPane
            tab={
              <span
                className={`text-[19px] ${activeTab === (index + 1).toString() ? 'text-[#0093D0]' : 'text-gray-500'}`}
              >
                {tab}
              </span>
            }
            key={index + 1}
            className={`text-xl ${activeTab === (index + 1).toString() ? 'text-black' : 'text-gray-600'}`}
          >
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default React.memo(Navbar);
