'use client';
import Image from 'next/image';

const ATMHero = (): JSX.Element => {

  return (
    <div className='flex items-center my-12'>
        <div className='flex-col mt-1 w-4/6'>
            <h1 className='text-2xl font-bold tracking-wide w-5/6'>Search and find your nearest Automated teller machine (ATM)</h1>
            <h2 className="mt-5">
                You can find your branch according to your choice and know your branch location according to your area. 
                You can find your branch according to your choice and know your branch location according to your area. 
                You can find your branch according to your choice and know your branch location according to your area.              
            </h2>
        </div>
        <Image
            src="/brand_assets/ATM.png"
            width={377}
            height={282}
            alt="bg"
            className='ml-auto'
        />
    </div>
  );
};

export default ATMHero;
