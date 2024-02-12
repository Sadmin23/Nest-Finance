'use client'

import Nav from "@/components/Nav";
import DetailsContainer from "@/components/Bank-Details/DetailsContainer";
import PopularBanks from "@/components/Bank-Details/PopularBanks";

const BankDetails = (props: any) => {

  let id = props.params.bank;

  return (
    <div className='flex-col'>
      <Nav bgOption='white' />
      <div className="flex mx-40 my-16">
        <DetailsContainer id={id}/>
        <PopularBanks/>
      </div>
    </div>
  );
};

export default BankDetails;
