'use client';

import { Button } from 'antd';
import BankingSvg from './ui/BankingSvg';
import CreditCardSvg from './ui/CreditCardsSvg';

const Buttons = (): JSX.Element => {

  let x = 2

  let content;

  switch (x) {
    case 1:
      content = <BankingSvg />;
      break;
    case 2:
      content = <CreditCardSvg />;
      break;
    // Add more cases for other values of x
    // case 3:
    //   content = <SomeOtherSvg />;
    //   break;
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
