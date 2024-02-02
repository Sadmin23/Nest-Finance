'use client';
import Image from 'next/image';

const BankListHero = (): JSX.Element => {

  return (
    <section className='mx-20 xl:mx-40'>
      <div className='xl:flex mt-12 mb-10'>
          <div className='flex-col w-full xl:w-7/12'>
              <h1 className='text-2xl font-bold tracking-wide xl:w-10/12 text-[#1A1A1A] mt-6'>All your banking information in one place</h1>
              <h2 className="mt-4 text-base font-normal leading-6 text-[#1A1A1A] xl:w-11/12">
              Managing your finances has never been easier with the convenience of centralized banking information.
              Imagine having all your financial accounts - from various banks to credit cards and loans - neatly organized and easily accessible in a single location.
              Imagine having all your financial accounts - from various banks to credit cards and loans - neatly organized and easily accessible in a single location.
               
              </h2>
          </div>
          <Image
            src="/brand_assets/bankimage.png"
            width={396}
            height={272}
            alt="bg"
            className='mx-auto ml-0 lg:ml-auto'
            />
      </div>
    </section>
  );
};

export default BankListHero;
