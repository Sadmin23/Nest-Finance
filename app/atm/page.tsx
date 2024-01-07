'use client';

import ATMTable from "@/components/ATMTable";
import Nav from "@/components/Nav";

const ATM = () => {

  return (
    <div className='flex-col'>
        <Nav bgOption='white'/>
        <ATMTable searchedBank=''/>
    </div>
  );
};

export default ATM;