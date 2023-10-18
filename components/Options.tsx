'use client';
import Image from 'next/image';
import { Button } from 'antd';
import ServiceButtons from './ServiceButtons';
import SmallButton from './SmallButton';
import { useState } from 'react';

const Options = (): JSX.Element => {

  const [selectedOption, setSelectedOption] = useState(1);
  const [hoverOption, setHoverOption] = useState(0);

  const handleButtonClick = (x:number) => {
    setSelectedOption(x);
  };

  const handleMouseOver = (x:number) => {
    setHoverOption(x);
  };

  const handleMouseOut = () => {
    setHoverOption(0);
  };

  return (
    <section>
      <div className='bg-white rounded-xl mt-10 mb-16 flex items-center justify-center space-x-12 mx-40'>
        <div onClick={()=>handleButtonClick(1)} onMouseOver={()=>handleMouseOver(1)} onMouseOut={handleMouseOut}>
          <ServiceButtons x={1} y={selectedOption} z={hoverOption}/>
        </div>
        <div onClick={()=>handleButtonClick(2)} onMouseOver={()=>handleMouseOver(2)} onMouseOut={handleMouseOut}>
          <ServiceButtons x={2} y={selectedOption} z={hoverOption}/>
        </div>
        <div onClick={()=>handleButtonClick(3)} onMouseOver={()=>handleMouseOver(3)} onMouseOut={handleMouseOut}>
          <ServiceButtons x={3} y={selectedOption} z={hoverOption}/>
        </div>
        <div onClick={()=>handleButtonClick(4)} onMouseOver={()=>handleMouseOver(4)} onMouseOut={handleMouseOut}>
          <ServiceButtons x={4} y={selectedOption} z={hoverOption}/>
        </div>
        <div onClick={()=>handleButtonClick(5)} onMouseOver={()=>handleMouseOver(5)} onMouseOut={handleMouseOut}>
          <ServiceButtons x={5} y={selectedOption} z={hoverOption}/>
        </div>
        <div onClick={()=>handleButtonClick(6)} onMouseOver={()=>handleMouseOver(6)} onMouseOut={handleMouseOut}>
          <ServiceButtons x={6} y={selectedOption} z={hoverOption}/>
        </div>
      </div>
      <section className='flex mx-40'>
        <div className=''>
          <h1 className='text-[42px] font-semibold leading-10 tracking-tight'>Find a bank for the way you save</h1>
          <h2 className='text-[22px] mt-6'>
            Keep your cash in a bank account that fits your needs. 
            Compare options and dig into the details with objective reviews that help you make smart decisions.
          </h2>
          <div className='flex space-x-8 mt-16'>
            <button className='w-48 h-20 rounded-[10px] bg-gradient-to-b from-[#7F56D9] to-[#53389e] text-white text-[18px] font-semibold'>Search Banks</button>
            <button className='w-64 h-20 rounded-[10px] text-[#53389E] text-[18px] border-2 border-[#53389E] font-semibold'>Explore Guides & Tips</button>
          </div>
          <h1 className='text-[42px] font-semibold leading-10 tracking-tight mt-10'>Services</h1>
          <h2 className='text-[22px] mt-6'>
            Our services harness the full potential of our engines to deliver personalized and seamless customer journeys.
          </h2>
          <div className='flex-col space-y-3 mt-10 mb-16'>
            <div className='flex space-x-3'>
              <SmallButton text='Bank List'/>
              <SmallButton text='Bank Branch'/>
            </div>
            <div className='flex space-x-3'>
              <SmallButton text='Bank Routing Number'/>
              <SmallButton text='Bank Location'/>
            </div>
            <div className='flex space-x-3'>
              <SmallButton text='Bank ATM Location'/>
              <SmallButton text='Account opening'/>
            </div>
          </div>
        </div>
        <div className='ml-8 mt-20'>
          <Image
            src="/brand_assets/bankIllustration.png"
            width={1000}
            height={40}
            alt="Picture of the author"
            className=''
          />
        </div>
      </section>
    </section>

  );
};

export default Options;