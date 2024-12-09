"use client";
import React, { useState, useMemo } from 'react';
import { Tabs } from 'antd';
import dynamic from 'next/dynamic';

// Dynamically import the Art component
const Art = dynamic(() => import('../pages/Art'), {
  ssr: false, // Disable Server-Side Rendering for dynamic components
  loading: () => <div>Loading Art Component...</div>, // Optional loading indicator
});

const tabContent = {
  1: <Art />, // Display Art component in the first tab
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

const MainTabs = () => {
  const [activeTab, setActiveTab] = useState('1');

  const tabs = useMemo(() => [
    'Art de la table', 'Mobilier', 'Nappage', 'Matériel de salle', 'Cuisine',
    'Barbecue', 'Tente', 'Chauffage', 'Podium - Piste de danse', 'Son et lumière', 'Packs', 'Consommables'
  ], []);

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <div className="container w-screen font-sans">
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
          
          >
            {tabContent[index + 1]} {/* Renders tab content dynamically */}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default React.memo(MainTabs);
