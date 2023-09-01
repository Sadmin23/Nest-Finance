'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import { Button } from 'antd';

const Bankcard = (): JSX.Element => {
  const router = useRouter();     

  return (
    <div className="flex-col p-4 border-[1px] border-solid border-[#D0D5DD] rounded-md">
        <div className='flex mt-4'>
          <Image
              src="/brand_assets/ctbank.png"
              width={175}
              height={600}
              alt="bg"
              />
          <h2 className='text-black font-inter font-medium text-base leading-[28px] ml-2 mt-1'>Citi Bank Bangladesh Branch</h2>
        </div>
        <Button className='bg-[#6941C6] text-white rounded-md border border-white w-44 h-9 font-medium mt-10 mb-5'>Find out More</Button>
    </div>
  );
};

export default Bankcard;
