'use client';

import LoanList from '@/components/Loans/LoanList';
import LoansHero from '@/components/Loans/LoansHero';
import Nav from '@/components/Nav';

const Loans = () => {

  return (
    <div className='flex-col'>
        <Nav bgOption='white'/>
        <LoansHero/>
        <LoanList searchedBank='' searchedLoan=''/>
    </div>
  );
};

export default Loans;