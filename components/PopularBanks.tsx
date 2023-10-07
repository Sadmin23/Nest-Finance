'use client';

import PopularBanksCard from "./PopularBanksCard";

const PopularBanks = (): JSX.Element => {


  return (
    <section className='mx-40'>
        <h1 className='text-[42px] font-semibold leading-10 tracking-tight mt-20'>Popular Banks List</h1>
        <div className='flex-col space-y-10 mt-32 mb-16'>
          <div className='flex space-x-14'>
            <PopularBanksCard x={1}/>
            <PopularBanksCard x={2}/>
            <PopularBanksCard x={3}/>
            <PopularBanksCard x={4}/>
          </div>
          <div className='flex space-x-14'>
            <PopularBanksCard x={5}/>
            <PopularBanksCard x={6}/>
            <PopularBanksCard x={7}/>
            <PopularBanksCard x={8}/>
          </div>
        </div>
    </section>
  );
};

export default PopularBanks;
