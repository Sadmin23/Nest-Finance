'use client';
import Image from 'next/image';
import ServiceButtons from '../Buttons/ServiceButtons';
import SmallButton from '../Buttons/SmallButton';
import { useState } from 'react';
import GetIllustration from './GetIllustration';

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
          <h1 className='text-[28px] font-semibold leading-10 tracking-tight'>Find a bank for the way you save</h1>
          <h2 className='leading-[26px] mt-6 w-[650px]'>
            Keep your cash in a bank account that fits your needs. 
            Compare options and dig into the details with objective reviews that help you make smart decisions.
          </h2>
          <div className='flex space-x-8 my-9'>
            <button className='rounded-[10px] px-6 py-4 bg-gradient-to-b from-[#7F56D9] to-[#53389e] text-white font-medium'>Search Banks</button>
            <button className='rounded-[10px] px-6 py-4 text-[#53389E] border-2 border-[#53389E] font-medium'>Explore Guides & Tips</button>
          </div>
          <h1 className='text-[28px] font-semibold leading-10 tracking-tight'>Service</h1>
          <h2 className='my-6 w-[565px]'>
            Our services harness the full potential of our engines to deliver personalized and seamless customer journeys.
          </h2>
          <div className='flex-col space-y-3 mb-16'>
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
        <GetIllustration x={selectedOption}/>
      </section>
    </section>

  );
};

export default Options;