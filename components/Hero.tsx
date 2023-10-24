'use client';
import Image from 'next/image';

const Hero = (): JSX.Element => {
  return (
    <div className='text-gray-25 text-center bg-gradient-to-b from-[#7F56D9] to-[#53389e]'>
        <div className='font-inter font-normal text-base pt-6'>
          <h3 className='text-[#E9D7FE]'>Fast. Simple. Banking</h3>
        </div>
        <div className="font-inter mx-auto tracking-wide font-medium text-[40px] text-gray-50 w-[496px] my-[26px]">
          <h1>Keep spending with the best cards.</h1>
        </div>
        <div className='text-center font-inter text-[18px] font-normal text-gray-800 leading-normal'>
          <h3 className='text-[#E9D7FE]'>Best banking cards made simplified.</h3>
        </div>
        <Image
              src="/brand_assets/cards.png"
              width={864}
              height={623}
              alt="blob"
              className='mx-auto pt-[70px]'
              />

    </div>
  );
};

export default Hero;
