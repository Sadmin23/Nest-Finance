'use client';

import Image from 'next/image';
import { Button } from 'antd';
import PlaySvg from './Icons/PlayIcon';
import TestemonialCard from './TestemonialCard';
import LeftArrow from './Icons/LeftArrow';
import RightArrow from './Icons/RightArrow';

const Testemonial = (): JSX.Element => {
  return (
    <section className='h-[800px]'>
        <div className='bg-[#53389E] h-[756px] skew-y-3'>
            <div className='mx-40 flex'>
                <div className='transform -skew-y-3 mt-28'>
                    <h1 className='text-3xl font-semibold leading-tight tracking-tight text-white'>
                        Trusted Voices of Finance
                    </h1>
                    <h2 className='text-lg w-[680px] mt-4 text-white tracking-wide'>
                        Real Stories from Our Satisfied Users: Discover How Our Solutions Are Transforming Financial Experiences.
                    </h2>
                    <div className='flex mt-20'>
                        <LeftArrow/>
                            <div className='space-x-12 flex'>
                                <TestemonialCard/>
                                <TestemonialCard/>
                            </div>
                        <RightArrow/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Testemonial;
