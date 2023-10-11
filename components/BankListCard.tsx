'use client';

import ABBank from "./BankLogo/ABBank";
import AgraniBank from "./BankLogo/AgraniBank";
import CityBank from "./BankLogo/CityBank";
import DBBL from "./BankLogo/DBBL";
import EasternBank from "./BankLogo/EasternBank";
import IslamiBank from "./BankLogo/IslamiBank";
import Image from 'next/image';

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
      content =           
        <Image
          src="/brand_assets/dbbl.png"
          width={167}
          height={106}
          alt="dbbllogo"
          className='ml-24 mt-32'
        />
      color = "text-[#282828] mx-9"
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
    case 7:
      content =           
        <Image
          src="/brand_assets/aibl.png"
          width={210}
          height={134}
          alt="aibllogo"
          className='ml-16 mt-24'
        />
      color = "text-[#1E1E1E] ml-11"
      text = "Al-Arafah Islami Bank"
      break;
    case 8:
      content =           
        <Image
          src="/brand_assets/eximbank.png"
          width={203}
          height={118}
          alt="eximllogo"
          className='ml-20 mt-28'
        />
      color = "text-[#ED1C24] mx-28"
      text = "Exim Bank"
    break;
    case 9:
      content =           
        <Image
          src="/brand_assets/sonali.png"
          width={250}
          height={183}
          alt="eximllogo"
          className='ml-14 mt-[74px]'
        />
      color = "text-[#DBA627] mx-14"
      text = "Sonali Bank Limited"
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
