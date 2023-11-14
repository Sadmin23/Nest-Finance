'use client';

import BankInfoCard from "./BankInfoCard";

const BankInfoWrapper = (): JSX.Element => {

  return (
    <div className="flex-col space-y-9 mb-12">
        <div className="flex mx-40 space-x-9">
            <BankInfoCard n={5}/>
            <BankInfoCard n={6}/>
            <BankInfoCard n={4}/>
        </div>
        <div className="flex mx-40 space-x-9">
            <BankInfoCard n={8}/>
            <BankInfoCard n={10}/>
            <BankInfoCard n={3}/>
        </div>
        <div className="flex mx-40 space-x-9">
            <BankInfoCard n={2}/>
            <BankInfoCard n={11}/>
            <BankInfoCard n={1}/>
        </div>
        <div className="flex mx-40 space-x-9">
            <BankInfoCard n={9}/>
            <BankInfoCard n={7}/>
            <BankInfoCard n={13}/>
        </div>
    </div>
  );
};

export default BankInfoWrapper;
