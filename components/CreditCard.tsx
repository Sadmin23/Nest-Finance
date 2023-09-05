'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import { Button } from 'antd';

const CreditCard = ({ imageno }: { imageno: number }): JSX.Element => {
  const router = useRouter();     

  let source = "/brand_assets/card"+imageno+".png"; 

  return (
    <div className="flex-col p-4 border-[1px] border-solid border-[#D0D5DD] rounded-md">
        <div className='flex mt-4'>
          <Image
              src={source}
              width={160}
              height={600}
              alt="bg"
            />
          <h2 className='text-black font-inter font-medium text-base leading-[28px] ml-5 mt-1'>Wells Fargo Active Cash® Card</h2>
        </div>
        <Button className='text-[#667085] rounded-md border border-[#667085] w-44 h-9 font-medium mt-5 mb-3'>+  Add to comparison</Button>
    </div>
  );
};

export default CreditCard;
