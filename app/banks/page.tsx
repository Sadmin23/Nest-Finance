'use client';
import BankInfoWrapper from '@/components/Bank/BankInfoWrapper';
import Nav from '@/components/Nav';

const Banks = () => {

  return (
    <div className='flex-col'>
        <Nav bgOption='white'/>
        <BankInfoWrapper selectedType=''/>
    </div>
  );
};

export default Banks;
