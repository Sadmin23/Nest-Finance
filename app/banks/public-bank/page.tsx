'use client';
import BankInfoWrapper from '@/components/Bank/BankInfoWrapper';
import BankListHero from '@/components/Bank/BankListHero';
import Nav from '@/components/Nav';

const Banks = () => {

  return (
    <div className='flex-col'>
        <Nav bgOption='white'/>
        <BankListHero/>
        <BankInfoWrapper selectedType='Public Bank'/>
    </div>
  );
};

export default Banks;
