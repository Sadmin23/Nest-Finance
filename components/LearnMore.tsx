'use client';

import Image from 'next/image';
import PlaySvg from './Icons/PlayIcon';

const LearnMore = (): JSX.Element => {
  return (
    <section className='bg-[#FFEEDD] flex'>
        <div className='ml-40 mt-16'>
            <h1 className='text-[28px] font-semibold leading-normal w-[565px] text-[#1D2939]'>
                Get even more financial clarity with Nest Finance.
            </h1>
            <h2 className='mt-6 w-[662px]'>
            See all your savings, credit cards, and investments together in one place. 
            With everything connected, you'll get timely nerdy insights so you can be sure you're making
             the right financial decisions for you. Best of all, it's free.
            </h2>
            <div className='space-x-8 mt-12 flex'>
                <button className='py-4 px-8 rounded-md bg-gradient-to-b from-[#7F56D9] to-[#53389e] text-white text-[18px] font-semibold'>Learn More</button>
                <button className='py-4 px-8 rounded-md  text-[#F44E4D] text-[18px] border-2 border-[#F44E4D] font-semibold flex space-x-3'>
                    <PlaySvg/>
                    Watch Now
                </button>
            </div>
        </div>
        <div className='my-[50px] ml-auto mr-40'>
            <Image
              src="/brand_assets/manIllustr.png"
              width={300}
              height={40}
              alt="Picture"
            />
        </div>
    </section>
  );
};

export default LearnMore;
