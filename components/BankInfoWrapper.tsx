'use client';

import BankInfoCard from "./BankInfoCard";

const BankInfoWrapper = (): JSX.Element => {

  return (
    <div className="flex-col space-y-16 my-20">
        <div className="flex mx-40 space-x-16">
            <BankInfoCard n={1}/>
            <BankInfoCard n={2}/>
        </div>
        <div className="flex mx-40 space-x-16">
            <BankInfoCard n={4}/>
            <BankInfoCard n={7}/>
        </div>
        <div className="flex mx-40 space-x-16">
            <BankInfoCard n={8}/>
            <BankInfoCard n={5}/>
        </div>
        <div className="flex mx-40 space-x-16">
            <BankInfoCard n={1}/>
            <BankInfoCard n={6}/>
        </div>
        <div className="flex mx-40 space-x-16">
            <BankInfoCard n={1}/>
            <BankInfoCard n={6}/>
        </div>
        <div className="flex mx-40 space-x-16">
            <BankInfoCard n={1}/>
            <BankInfoCard n={6}/>
        </div>
        <div className="flex mx-40 space-x-16">
            <BankInfoCard n={1}/>
            <BankInfoCard n={6}/>
        </div>

    </div>
  );
};

export default BankInfoWrapper;
