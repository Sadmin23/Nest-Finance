'use client';

import Image from 'next/image';
import { Button } from 'antd';
import Stars from './Icons/Stars';

const TestemonialCard = (): JSX.Element => {
  return (
    <div className='w-[465px] h-[294px] bg-white bg-opacity-50 rounded-2xl flex text-[#121111]'>
      <Image
        src="/brand_assets/test2.png"
        width={169}
        height={40}
        alt="Picture"
        className='m-5 rounded-2xl'
      />
      <div className='flex-col'>
        <h2 className='mt-14 text-base font-medium leading-6'>The analytics and insights offered by Nest Finance are unparalleled.</h2>
        <h1 className='mt-7 text-xl font-semibold leading-normal'>Anita R.</h1>
        <h2 className='my-2 text-base font-medium leading-normal'>Small Business Owner</h2>
        <Stars/>
      </div>
    </div>
  );
};

export default TestemonialCard;
