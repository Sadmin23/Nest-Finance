'use client';
import BankInfoWrapper from '@/components/BankInfoWrapper';
import BankListHero from '@/components/BankListHero';
import Nav from '@/components/Nav';

const Banks = () => {

  return (
    <div className='flex-col'>
        <Nav bgOption='white'/>
        <BankListHero n={1}/>
        <BankInfoWrapper/>
    </div>
  );
};

export default Banks;
