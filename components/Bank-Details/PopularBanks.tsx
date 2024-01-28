import React from 'react';
import PopularBanksList from './PopularBanksList';

const PopularBanks: React.FC = () => {
    return (
        <div className="w-1/3 ml-10 space-y-10">
          <h1 className="font-bold text-xl">Popular Banks List</h1>
          <section className="space-y-12">
            <PopularBanksList/>
            <PopularBanksList/>
            <PopularBanksList/>
            <PopularBanksList/>
            <PopularBanksList/>
            <PopularBanksList/>
            <PopularBanksList/>
            <PopularBanksList/>
          </section>
        </div>
    );
};

export default PopularBanks;
