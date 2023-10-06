'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Hero = (): JSX.Element => {
  const router = useRouter();
  return (
    <div className='text-gray-25 text-center bg-gradient-to-b from-[#7F56D9] to-[#53389e]'>
        <div className='font-inter font-normal text-base p-5 pt-16'>
          <h3 className='text-[#E9D7FE]'>Fast. Simple. Banking</h3>
        </div>
        <div className="font-inter mx-auto tracking-wide font-medium text-7xl text-gray-50 w-[900px]">
          <h1>Keep spending with the best cards.</h1>
        </div>
        <div className='text-center font-inter text-lg font-normal text-gray-800 leading-[150%] p-10'>
          <h3 className='text-[#E9D7FE]'>Best banking cards made simplified.</h3>
        </div>
        <Image
              src="/brand_assets/cards.png"
              width={1104}
              height={623}
              alt="blob"
              className='mx-auto pt-10'
              />

    </div>
  );
};

export default Hero;
