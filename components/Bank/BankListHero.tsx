'use client';
import Image from 'next/image';

const BankListHero = (): JSX.Element => {

  return (
      <div className='md:flex items-center my-12'>
          <div className='flex-col w-full md:w-4/6'>
              <h1 className='text-2xl font-bold tracking-wide xl:w-5/6 text-[#1A1A1A] mt-6'>All your banking information in one place</h1>
              <h2 className="mt-4 text-base font-normal leading-6 text-[#1A1A1A]">
              Managing your finances has never been easier with the convenience of centralized banking information.
              Imagine having all your financial accounts - from various banks to credit cards and loans - neatly organized and easily accessible in a single location.
              Imagine having all your financial accounts - from various banks to credit cards and loans - neatly organized and easily accessible in a single location.
              </h2>
          </div>
          <Image
            src="/brand_assets/bankimage.png"
            width={300}
            height={272}
            alt="bg"
            className='mx-auto md:ml-auto'
            />
      </div>
  );
};

export default BankListHero;
