'use client';

import BranchTable from "@/components/Branch/BranchTable";
import Nav from "@/components/Nav";

const Branch = (props:any) => {

  let name = props.params.bank

  return (
    <div className='flex-col'>
        <Nav bgOption='white'/>
        <BranchTable searchedBank={name}/>
    </div>
  );
};

export default Branch;