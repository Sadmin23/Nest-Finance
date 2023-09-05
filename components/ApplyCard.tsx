'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import { Button } from 'antd';

const ApplyCard = (): JSX.Element => {
  const router = useRouter();      

  return (
    <div className="col-span-1 border-l-2 border-y-2 flex-col">
      <Image
        src="/brand_assets/card0.png"
        width={280}
        height={600}
        alt="bg"
        className='mx-auto mt-10'
      />
      <h2 className='text-black font-inter font-medium text-xl mx-8 mt-6 leading-[28px]'>Wells Fargo Active Cash® Card</h2>
      <Image
        src="/brand_assets/star.png"
        width={113}
        height={600}
        alt="bg"
        className='mx-8 mt-6 mb-10'
      />
      <button className='rounded-[6px] mb-14 mx-8 w-[278px] h-11 text-base font-normal text-white bg-[#53389E]'>Apply Now</button>
    </div>
  );
};

export default ApplyCard;
