'use client';

import PopularBanksCard from "./PopularBanksCard";

const PopularBanks = (): JSX.Element => {


  return (
    <section className='px-40'>
        <h1 className='text-[28px] font-semibold leading-normal mt-9 mb-6'>Popular Banks List</h1>
        <div className='flex-col space-y-10 mb-9 w-full'>
          <div className='grid gap-x-9 gap-y-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6'>
            <PopularBanksCard x={1}/>
            <PopularBanksCard x={2}/>
            <PopularBanksCard x={3}/>
            <PopularBanksCard x={4}/>
            <PopularBanksCard x={5}/>
            <PopularBanksCard x={6}/>
          </div>
        </div>
    </section>
  );
};

export default PopularBanks;
