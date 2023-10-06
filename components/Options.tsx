'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from 'antd';
import Buttons from './Buttons';

const Options = (): JSX.Element => {
  return (
    <section>
      <div className='bg-white rounded-xl my-16 flex items-center justify-center space-x-12 mx-40'>
          <Buttons x={1}/>
          <Buttons x={2}/>
          <Buttons x={3}/>
          <Buttons x={4}/>
          <Buttons x={5}/>
          <Buttons x={6}/>
      </div>
      <div className='mx-40 w-1/2'>
        <h1 className='text-[42px] font-semibold leading-10 tracking-tight'>Find a bank for the way you save</h1>
        <h2 className='text-[22px] mt-6'>
          Keep your cash in a bank account that fits your needs. 
          Compare options and dig into the details with objective reviews that help you make smart decisions.
        </h2>
        <div className='flex space-x-8 mt-20'>
          <Button className='w-48 h-20 bg-gradient-to-b from-[#7F56D9] to-[#53389e] text-white text-[18px] font-semibold'>Search Banks</Button>
          <Button className='w-64 h-20  text-[#53389E] text-[18px] border-2 border-[#53389E] font-semibold'>Explore Guides and Tips</Button>
        </div>
        <h1 className='text-[42px] font-semibold leading-10 tracking-tight mt-10'>Services</h1>
        <h2 className='text-[22px] mt-6'>
          Our services harness the full potential of our engines to deliver personalized and seamless customer journeys.
        </h2>
      </div>
    </section>

  );
};

export default Options;