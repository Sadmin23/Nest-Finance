'use client';

import { Button } from 'antd';
import BankingSvg from './SVG/BankingSvg';
import CreditCardSvg from './SVG/CreditCardsSvg';
import DepositSchemesSvg from './SVG/DepositSchemesSvg';
import LoansSvg from './SVG/LoansSvg';
import MutualFundsSvg from './SVG/MutualFundsSvg';
import BondsSvg from './SVG/BondsSvg';

const ServiceButtons = ({ x, y }: { x: number, y:number }): JSX.Element => {

  let content, colour, bg = ""

  if (x===y){
    colour = "text-white"
    bg = "bg-gradient-to-b from-[#53389E] to-[#9075DE]"
  }
  else{
    colour = "text-[#53389E]"
    bg = "border-4 border-[#53389E]"
  }

  switch (x) {
    case 1:
      content = <BankingSvg x={0}/>;
      break;
    case 2:
      content = <CreditCardSvg x={1}/>;
      break;
    case 3:
      content = <DepositSchemesSvg x={1}/>;
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
      content = <BankingSvg x={1}/>;
  }

  return (
    <button className={`w-40 h-32 rounded-[10px] ${bg}`}>
      {content}
    <h3 className={`text-[18px] font-semibold text-[#53389e] ${colour}`}>Banking</h3>
    </button>

  );
};

export default ServiceButtons;
