'use client';

import Image from 'next/image';
import { Button } from 'antd';
import PlaySvg from './Icons/PlayIcon';
import TestemonialCard from './TestemonialCard';
import LeftArrow from './Icons/LeftArrow';
import RightArrow from './Icons/RightArrow';

const Testemonial = (): JSX.Element => {
  return (
    <section className='bg-[#53389E]'>
        <div className='mx-40 pt-[59px]'>
            <h1 className='text-[28px] font-semibold text-white'>
                Trusted Voices of Finance
            </h1>
            <h2 className='w-[565px] my-6 text-white font-medium'>
                Real Stories from Our Satisfied Users: Discover How Our Solutions Are Transforming Financial Experiences.
            </h2>
            <div className='flex'>
                <div className='space-x-12 flex mb-14'>
                    <TestemonialCard/>
                    <TestemonialCard/>
                    <TestemonialCard/>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Testemonial;
