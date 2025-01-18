import React from 'react';
import PopularBanksList from './PopularBanksList';

const PopularBanks: React.FC = () => {
    return (
        <div className="w-1/3 ml-10 rounded-md space-y-6 bg-white border-[#E7E7E7] border h-5/6">
          <h1 className="font-semibold text-lg bg-[#53389E] text-white py-2 tracking-wider rounded-t-md text-center">Popular Banks List</h1>
          <section>
            <PopularBanksList type={1}/>
            <PopularBanksList type={2}/>
            <PopularBanksList type={3}/>
            <PopularBanksList type={4}/>
            <PopularBanksList type={5}/>
            <PopularBanksList type={6}/>
            <PopularBanksList type={7}/>
            <PopularBanksList type={8}/>
          </section>
        </div>
    );
};

export default PopularBanks;
