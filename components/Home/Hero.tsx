'use client';
import Image from 'next/image';

const Hero = (): JSX.Element => {
  return (
    <div className='text-center bg-gradient-to-b from-[#7F56D9] to-[#53389e] pt-10'>
        <div className='font-inter font-normal text-base'>
          <h3 className='text-[#E9D7FE] font-semibold tracking-wide'>Fast. Simple. Banking</h3>
        </div>
        <div className="mx-auto tracking-wide font-semibold text-[40px] text-gray-50 w-[600px] my-[26px]">
          <h1>Keep spending with the best cards.</h1>
        </div>
        <div className='text-center font-inter text-[18px]  text-gray-800 font-semibold leading-normal'>
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
