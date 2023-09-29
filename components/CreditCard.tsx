'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import { Button } from 'antd';

const CreditCard = ({ Name, image }: { Name: string, image: string }): JSX.Element => {
  const router = useRouter();     

  return (
    <div className="flex p-4 border-[1px] border-solid border-[#D0D5DD] rounded-md">
        <div className='flex-col'>
          <Image
              src={image}
              width={160}
              height={600}
              alt="bg"
          />
          <Button className='text-[#667085] rounded-md border border-[#667085] w-44 h-9 font-medium mt-5 mb-3'>+  Add to comparison</Button>
        </div>
        <div className='flex mt-4'>
          <h2 className='text-black font-inter font-medium text-base leading-[28px] ml-5 mt-1'>{Name}</h2>
        </div>
    </div>
  );
};

export default CreditCard;
