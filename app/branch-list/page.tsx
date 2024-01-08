'use client';

import BranchTable from "@/components/Branch/BranchTable";
import Nav from "@/components/Nav";

const Branch = () => {

  return (
    <div className='flex-col'>
        <Nav bgOption='white'/>
        <BranchTable searchedBank=""/>
    </div>
  );
};

export default Branch;
