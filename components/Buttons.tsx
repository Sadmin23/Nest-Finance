'use client';

import { Button } from 'antd';
import BankingSvg from './ui/BankingSvg';
import CreditCardSvg from './ui/CreditCardsSvg';
import DepositSchemesSvg from './ui/DepositSchemesSvg';
import LoansSvg from './ui/LoansSvg';
import MutualFundsSvg from './ui/MutualFundsSvg';
import BondsSvg from './ui/BondsSvg';

const Buttons = ({ x }: { x: number }): JSX.Element => {

  let content;

  switch (x) {
    case 1:
      content = <BankingSvg />;
      break;
    case 2:
      content = <CreditCardSvg />;
      break;
    case 3:
      content = <DepositSchemesSvg />;
      break;
    case 4:
      content = <LoansSvg />;
      break;
    case 5:
      content = <MutualFundsSvg />;
      break;
    case 6:
      content = <BondsSvg />;
      break; 
    default:
      content = <BankingSvg />; // Handle default case if needed
  }

  return (
    <Button className='w-40 h-32 border-[#53389e] border-2'>
      {content}
    <h3 className='text-[18px] font-semibold text-[#53389e]'>Banking</h3>
    </Button>

  );
};

export default Buttons;
