'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import { Button } from 'antd';

const CreditScore = (): JSX.Element => {
  const router = useRouter();      

  return (
    <div className="col-span-1 border-l-2 border-t-2 flex-col">
        <Image
          src="/brand_assets/Score.png"
          width={300}
          height={600}
          alt="bg"
          className='mx-auto mt-10'
        />
        <div className='flex space-x-2 mx-32 mt-4 mb-10'>
            <Image
              src="/brand_assets/tick.png"
              width={20}
              height={600}
              alt="bg"
            /> 
            <h2 className='font-inter font-medium text-base'>Excellent</h2>   
        </div>
    </div>
  );
};

export default CreditScore;
