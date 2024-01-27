'use client';

import Image from 'next/image';

const TestemonialCard = (): JSX.Element => {
  return (
    <div className='mx-auto w-9/12 h-96 bg-[#ffe3c7] rounded-2xl border-[#ffc991] border-2 text-[#1A1A1A] flex items-center'>
      <Image src='/brand_assets/test1.png' width={230} height={100} alt='testemonial' className='rounded-2xl ml-4'/>
      <div className='bg-[#FFD8B1] w-4/6 h-[340px] ml-auto mr-4 rounded-2xl p-6 border-2 border-[#FFC284]'>
        <h1 className='text-[#1A1A1A]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It has survived not only five centuries, but also the leap into electronic typesetting.</h1>
        <h1 className='mt-auto text-[#121111] text-2xl font-semibold leading-10'>Anita R.</h1>
        <h2 className='text-[#676767] font-medium leading-7'>Small Business Owner</h2>
      </div>
    </div>
  );
};

export default TestemonialCard;