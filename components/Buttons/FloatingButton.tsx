'use client';

import BankingSvg from '../SVG/BankingSvg';

const FloatingButtons = ({ x }: { x: number}): JSX.Element => {

  let text, style

  switch (x) {
    case 1:
      text = "Banking"
      break;
    case 2:
      text = "Cards"
      break;
    case 3:
      text = "ATM"
      break;
    case 4:
      text = "Loans"
      style = 'ml-auto'
      break;
    case 5:
      text = "Account"
      break;
    case 6:
      text = "Branch"
      break;
  }

  return (
<button className={`w-40 h-10 bg-[#806cb9] flex items-center justify-center rounded-md ${style}`}>
  <BankingSvg a={x} b={0} type={1}/>
  <h3 className="font-medium text-white">{text}</h3>
</button>
  );
};

export default FloatingButtons;