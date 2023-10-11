'use client';

import ABBank from "./BankLogo/ABBank";
import AgraniBank from "./BankLogo/AgraniBank";
import CityBank from "./BankLogo/CityBank";
import DBBL from "./BankLogo/DBBL";
import EasternBank from "./BankLogo/EasternBank";
import IslamiBank from "./BankLogo/IslamiBank";

const BankListCard = ({ n }: { n: number }): JSX.Element => {

  let content, color, text

  switch (n) {
    case 1:
      content = <EasternBank w={165} h={182}/>
      color = "text-[#005BAA] mx-[76px]"
      text = "Eastern Bank Ltd."
      break;
    case 2:
      content = <ABBank w={251} h={78}/>
      color = "text-[#ED1C24] mx-20"
      text = "AB Bank Limited"
      break;
    case 3:
      content = <DBBL w={251} h={78}/>
      color = "text-[#282828] mx-20"
      text = "Dutch-Bangla Bank Ltd"
      break;
    case 4:
      content = <IslamiBank w={188} h={168}/>
      color = "text-[#00A651] mx-8"
      text = "Islami Bank Bangladesh"
      break;
    case 5:
      content = <AgraniBank w={297} h={153}/>
      color = "text-[#00A651]  ml-14"
      text = "Agrani Bank Limited"
      break;
    case 6:
      content = <CityBank w={195} h={144}/>
      color = "text-[#ED1D24] ml-28"
      text = "City Bank"
      break;
    }

  return (
    <div className='w-[365px] h-[455px] rounded-2xl border-2 border-[#53389E] flex flex-col'>
        <div className="flex-grow">
            {content}
        </div>
        <div className="flex flex-col justify-end">
            <h1 className={`mb-3 ${color} text-xl font-semibold leading-normal`}>{text}</h1>
            <h2 className="mb-[84px] mx-16 text-[#9E9E9E] leading-5 font-medium">Private • Commercial • Local</h2>
        </div>
    </div>

  );
};

export default BankListCard;
