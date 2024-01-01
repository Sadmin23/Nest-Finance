'use client';

import BankTable from "@/components/BranchTable";
import Nav from "@/components/Nav";

const Branch = () => {

  return (
    <div className='flex-col'>
        <Nav bgOption='white'/>
        <BankTable/>
    </div>
  );
};

export default Branch;
