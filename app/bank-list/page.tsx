'use client';
import BankCardWrapper from '@/components/BankCardWrapper';
import BankListHero from '@/components/BankListHero';
import BankSearch from '@/components/BankSearch';
import Nav from '@/components/Nav';
import PageNavigation from '@/components/PageNavigation';
import { useState } from 'react';

const Home = () => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div className='flex-col'>
        <Nav bgOption='white'/>
        <BankListHero/>
        <BankSearch/>
        <BankCardWrapper/>
        <PageNavigation/>
        <div className="w-48 h-96 relative overflow-hidden"
             onMouseOver={handleMouseOver}
             onMouseOut={handleMouseOut}
        >
          <div className={`h-48 bg-red-600 text-center z-0`}>
              Upper Part
          </div>
            <div className={`bg-blue-600 text-center z-10 relative ${isHovered ? 'transform -translate-y-40 duration-500' : ''}`}>
                <div className='h-48'>
                  Middle Part
                </div>
                <div className={`h-40 bottom-0 left-0 right-0 z-0 ${isHovered ? 'delay-200 opacity-100' : 'opacity-0'}`}>
                  Lower Part
                </div>
          </div>
        </div>
    </div>
  );
};

export default Home;
//transition-transform ease-in-out duration-300 transform hover:-translate-y-full
//transition-transform ease-in-out duration-300 transform hover:-translate-y-full