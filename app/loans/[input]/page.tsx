'use client';

import { Bank } from '@/app/data';
import LoanList from '@/components/Loans/LoanList';
import LoansHero from '@/components/Loans/LoansHero';
import Nav from '@/components/Nav';

const Loans = (props:any) => {

  let result = props.params.input;
  let input = result.replace(/-/g, ' ');
  const isBank = Bank.includes(input);
  const isLoanType = ["Home Loan", "Car Loan", "Education Loan", "Personal Loan", "Other Loan"].includes(input);
  
  let bankName = isBank ? input : '';
  let loanType = isLoanType ? input : '';
  

  return (
    <div className='flex-col'>
        <Nav bgOption='white'/>
        <LoansHero/>
        <LoanList searchedBank={bankName} searchedLoan={loanType}/>
    </div>
  );
};

export default Loans;