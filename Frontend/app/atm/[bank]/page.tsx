'use client';

import ATMTable from "@/components/ATM/ATMTable";
import Nav from "@/components/Nav";

const ATM = (props:any) => {

  let name = props.params.bank

  return (
    <div className='flex-col'>
        <Nav bgOption='white'/>
        <ATMTable searchedBank={name}/>
    </div>
  );
};

export default ATM;