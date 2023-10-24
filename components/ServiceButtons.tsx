'use client';

import BankingSvg from './SVG/BankingSvg';
import CreditCardSvg from './SVG/CreditCardsSvg';
import DepositSchemesSvg from './SVG/DepositSchemesSvg';
import LoansSvg from './SVG/LoansSvg';
import MutualFundsSvg from './SVG/MutualFundsSvg';
import BondsSvg from './SVG/BondsSvg';

const ServiceButtons = ({ x, y, z }: { x: number, y:number, z:number }): JSX.Element => {

  let colour, bg = "", text

  let value = [1,1,1,1,1,1]

  if (x===y || x===z){
    colour = "text-white"
    bg = "bg-gradient-to-b from-[#53389E] to-[#9075DE]"
  }
  else{
    colour = "text-[#53389E]"
    bg = "border-2 border-[#53389E]"
  }

  value = [1,1,1,1,1,1]  
  value[y-1] = 0
  if (z!=0)
    value[z-1] = 0

  switch (x) {
    case 1:
      text = "Banking"
      break;
    case 2:
      text = "Cards"
      break;
    case 3:
      text = "Deposit"
      break;
    case 4:
      text = "Loans"
      break;
    case 5:
      text = "Funds"
      break;
    case 6:
      text = "Bonds"
      break;
  }

  return (
      <button className={`w-40 h-16 rounded-md ${bg} flex items-center justify-center`}>
        <BankingSvg a={x} b={value[x-1]}/>
      <h3 className={`font-semibold text-[#53389e] ${colour}`}>{text}</h3>
      </button>
  );
};

export default ServiceButtons;