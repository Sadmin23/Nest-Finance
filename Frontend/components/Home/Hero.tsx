'use client';
import Image from 'next/image';
import FloatingButtons from '../Buttons/FloatingButton';

const Hero = (): JSX.Element => {
  return (
    <div className='text-center bg-gradient-to-b from-[#7F56D9] to-[#53389e] pt-10'>
        <div className='font-inter font-normal text-base'>
          <h3 className='text-[#E9D7FE] font-semibold tracking-wide'>Fast. Simple. Banking</h3>
        </div>
        <div className="mx-auto tracking-wide font-semibold text-[40px] text-gray-50 md:w-[60vw] lg:w-[600px] my-[26px]">
          <h1>Keep spending with the best cards.</h1>
        </div>
        <div className='text-center font-inter text-[18px] text-gray-800 font-semibold leading-normal'>
          <h3 className='text-[#E9D7FE]'>Best banking cards made simplified.</h3>
        </div>
        <Image
          src="/brand_assets/cards.png"
          width={864}
          height={623}
          alt="blob"
          className='mx-auto pt-20'
        />
       <section className='hidden lg:block'>
          <div className='flex absolute mx-auto left-0 right-0 top-[324px] w-[70vw] space-x-[40vw] xl:space-x-[30vw] justify-center'>
            <FloatingButtons x={1}/>
            <FloatingButtons x={4}/>
          </div>
          <div className='flex absolute mx-auto left-0 right-0 top-[388px] w-[80vw] space-x-[50vw] xl:space-x-[40vw] justify-center'>
            <FloatingButtons x={2}/>
            <FloatingButtons x={5}/>
          </div>
          <div className='flex absolute mx-auto left-0 right-0 top-[452px] w-[90vw] space-x-[60vw] xl:space-x-[50vw] justify-center'>
            <FloatingButtons x={3}/>
            <FloatingButtons x={6}/>
          </div>
        </section>
    </div>
  );
};

export default Hero;