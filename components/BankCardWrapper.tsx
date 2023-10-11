'use client';

import BankListCard from "./BankListCard";

const BankCardWrapper = (): JSX.Element => {

  return (
    <div className="flex-col space-y-12 my-20">
        <div className="flex mx-40 space-x-12">
            <BankListCard n={1}/>
            <BankListCard n={2}/>
            <BankListCard n={4}/>
        </div>
        <div className="flex mx-40 space-x-12">
            <BankListCard n={1}/>
            <BankListCard n={1}/>
            <BankListCard n={1}/>
        </div>
        <div className="flex mx-40 space-x-12">
            <BankListCard n={1}/>
            <BankListCard n={1}/>
            <BankListCard n={1}/>
        </div>        
    </div>
  );
};

export default BankCardWrapper;
