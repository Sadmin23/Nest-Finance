'use client';

import PopularBanksCard from "./PopularBanksCard";

const PopularBanks = (): JSX.Element => {


  return (
    <section className='mx-40'>
        <h1 className='text-[28px] font-semibold leading-normal mt-9 mb-6'>Popular Banks List</h1>
        <div className='flex-col space-y-10 mb-9'>
          <div className='flex space-x-8'>
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
