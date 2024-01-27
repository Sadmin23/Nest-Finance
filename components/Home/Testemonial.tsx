'use client';

import Image from 'next/image';
import { Button } from 'antd';
import PlaySvg from '../Icons/PlayIcon';
import TestemonialCard from './TestemonialCard';
import LeftArrow from '../Icons/LeftArrow';
import RightArrow from '../Icons/RightArrow';

const Testemonial = (): JSX.Element => {
  return (
    <section className='bg-[#FED] pb-10'>
        <div className='mx-40'>
            <h1 className='text-[28px] pt-12 font-semibold text-[#1A1A1A]'>
                Trusted Voices of Finance
            </h1>
            <h2 className='w-1/2 mt-4 mb-9 text-[#1A1A1A] font-medium'>
                Real Stories from Our Satisfied Users: Discover How Our Solutions Are Transforming Financial Experiences.
            </h2>
            <TestemonialCard/>
        </div>
    </section>
  );
};

export default Testemonial;
