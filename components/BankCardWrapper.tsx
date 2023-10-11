'use client';

import BankListCard from "./BankListCard";

const BankCardWrapper = (): JSX.Element => {

  return (
    <div className="flex-col space-y-12 my-20">
        <div className="flex mx-40 space-x-12">
            <BankListCard n={1}/>
            <BankListCard n={6}/>
            <BankListCard n={3}/>
        </div>
        <div className="flex mx-40 space-x-12">
            <BankListCard n={4}/>
            <BankListCard n={7}/>
            <BankListCard n={9}/>
        </div>
        <div className="flex mx-40 space-x-12">
            <BankListCard n={8}/>
            <BankListCard n={5}/>
            <BankListCard n={2}/>
        </div>        
    </div>
  );
};

export default BankCardWrapper;
