'use client';

import { Button } from 'antd';
import BankingSvg from './SVG/BankingSvg';
import CreditCardSvg from './SVG/CreditCardsSvg';
import DepositSchemesSvg from './SVG/DepositSchemesSvg';
import LoansSvg from './SVG/LoansSvg';
import MutualFundsSvg from './SVG/MutualFundsSvg';
import BondsSvg from './SVG/BondsSvg';

const ServiceButtons = ({ x }: { x: number }): JSX.Element => {

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
      content = <BankingSvg />;
  }

  return (
    <Button className='w-40 h-32 border-[#53389e] border-4'>
      {content}
    <h3 className='text-[18px] font-semibold text-[#53389e]'>Banking</h3>
    </Button>

  );
};

export default ServiceButtons;
