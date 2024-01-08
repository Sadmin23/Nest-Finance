'use client';

import Image from 'next/image';
import { Button } from 'antd';
import Stars from '../Icons/Stars';

const TestemonialCard = (): JSX.Element => {
  return (
    <div className='w-[365px] h-[211px]  bg-white bg-opacity-50 rounded-md text-[#121111]'>
      <div className='flex'>
        <Image
          src="/brand_assets/person2.png"
          width={168}
          height={40}
          alt="Picture"
          className='m-3 h-[130px] rounded-2xl'
        />
        <div>
          <h1 className='mt-8 text-xl font-semibold text-[#121111]'>Anita R.</h1>
          <h2 className='mt-2 mb-1 text-sm font-medium text-[#121111]'>Small Business Owner</h2>
          <Stars/>
        </div>
      </div>
      <h2 className='leading-6 ml-3 text-[#121111]'>The analytics and insights offered by Nest Finance are unparalleled.</h2>
    </div>
  );
};

export default TestemonialCard;


/*
      <div className='flex-col'>
        <h2 className='mt-14 text-base font-medium leading-6'>The analytics and insights offered by Nest Finance are unparalleled.</h2>
        <h1 className='mt-7 text-xl font-semibold leading-normal'>Anita R.</h1>
        <h2 className='my-2 text-base font-medium leading-normal'>Small Business Owner</h2>
        <Stars/>
      </div>
*/