'use client';
import Image from 'next/image';

const BranchHero = (): JSX.Element => {

  return (
    <div className='md:flex items-center my-12'>
        <div className='flex-col w-full md:w-4/6'>
            <h1 className='text-2xl font-bold tracking-wide xl:w-5/6'>Search your nearest Branches, SME Centers, and offices</h1>
            <h2 className="mt-5">
                You can find your branch according to your choice and know your branch location according to your area. 
                You can find your branch according to your choice and know your branch location according to your area. 
                You can find your branch according to your choice and know your branch location according to your area.              
            </h2>
        </div>
        <Image
            src="/brand_assets/branch.png"
            width={297}
            height={230}
            alt="bg"
            className='md:ml-auto'
        />
    </div>
  );
};

export default BranchHero;
