'use client';

import PopularBanksCard from "./PopularBanksCard";

const PopularBanks = (): JSX.Element => {


  return (
    <div className="container mx-auto px-10">
      <section className='max-w-7xl mx-auto justify-center items-center border-2 my-8'>
        <h1 className='text-[28px] text-center md:text-left font-semibold leading-normal mb-6'>Popular Banks List</h1>
        <div className='flex flex-wrap justify-center md:justify-between space-y-10'>
          <PopularBanksCard x={1}/>
          <PopularBanksCard x={2}/>
          <PopularBanksCard x={3}/>
          <PopularBanksCard x={4}/>
          <PopularBanksCard x={5}/>
          <PopularBanksCard x={6}/>
        </div>
      </section>
    </div>
  );
};

export default PopularBanks;
