'use client';

import ATMTable from "@/components/ATMTable";
import Nav from "@/components/Nav";

const ATM = () => {

  return (
    <div className='flex-col'>
        <Nav bgOption='white'/>
        <ATMTable/>
    </div>
  );
};

export default ATM;