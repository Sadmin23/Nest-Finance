'use client';

import ABBank from "./BankLogo/ABBank";
import EasternBank from "./BankLogo/EasternBank";

const BankListCard = ({ n }: { n: number }): JSX.Element => {

  let content, color, text

  switch (n) {
    case 1:
      content = <EasternBank w={165} h={182}/>
      color = "text-[#005BAA]"
      text = "Eastern Bank Ltd."
      break;
    case 2:
      content = <ABBank w={251} h={78}/>
      color = "text-[#ED1C24]"
      text = "AB Bank Limited"
      break;    
  }

  return (
    <div className='w-[365px] h-[455px] rounded-2xl border-2 border-[#53389E] flex flex-col'>
        <div className="flex-grow">
            {content}
        </div>
        <div className="flex flex-col justify-end">
            <h1 className={`mb-3 ${color} text-xl font-semibold leading-normal mx-[76px]`}>{text}</h1>
            <h2 className="mb-[84px] mx-16 text-[#9E9E9E] leading-5 font-medium">Private • Commercial • Local</h2>
        </div>
    </div>

  );
};

export default BankListCard;
