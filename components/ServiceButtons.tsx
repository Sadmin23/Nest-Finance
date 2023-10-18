'use client';

import BankingSvg from './SVG/BankingSvg';
import CreditCardSvg from './SVG/CreditCardsSvg';
import DepositSchemesSvg from './SVG/DepositSchemesSvg';
import LoansSvg from './SVG/LoansSvg';
import MutualFundsSvg from './SVG/MutualFundsSvg';
import BondsSvg from './SVG/BondsSvg';

const ServiceButtons = ({ x, y }: { x: number, y:number }): JSX.Element => {

  let content, colour, bg = ""

  let value = [1,1,1,1,1,1]

  if (x===y){
    colour = "text-white"
    bg = "bg-gradient-to-b from-[#53389E] to-[#9075DE]"
  }
  else{
    colour = "text-[#53389E]"
    bg = "border-4 border-[#53389E]"
  }

  value = [1,1,1,1,1,1]  
  value[y-1] = 0

  switch (x) {
    case 1:
      content = <BankingSvg x={value[0]}/>;
      break;
    case 2:
      content = <CreditCardSvg x={value[1]}/>;
      break;
    case 3:
      content = <DepositSchemesSvg x={value[2]}/>;
      break;
    case 4:
      content = <LoansSvg x={value[3]}/>;
      break;
    case 5:
      content = <MutualFundsSvg x={value[4]}/>;
      break;
    case 6:
      content = <BondsSvg x={value[5]}/>;
      break; 
    default:
      content = <BankingSvg x={value[0]}/>;
  }

  return (
    <button className={`w-40 h-32 rounded-[10px] ${bg}`}>
      {content}
    <h3 className={`text-[18px] font-semibold text-[#53389e] ${colour}`}>Banking</h3>
    </button>

  );
};

export default ServiceButtons;
