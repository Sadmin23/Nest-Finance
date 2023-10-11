'use client';

import ABBank from "./BankLogo/ABBank";
import BankAsia from "./BankLogo/BankAsia";
import BracBank from "./BankLogo/BracBank";
import CityBank from "./BankLogo/CityBank";
import DBBL from "./BankLogo/DBBL";
import EasternBank from "./BankLogo/EasternBank";
import IslamiBank from "./BankLogo/IslamiBank";
import AgraniBank from "./BankLogo/SonaliBank";
import { Button } from 'antd';

const PopularBanksCard = ({ x }: { x: number }): JSX.Element => {

  let content

  switch (x) {
    case 1:
      content = <CityBank/>
      break;
    case 2:
      content = <BracBank/>
      break;
    case 3:
      content = <DBBL/>
      break;
    case 4:
      content = <EasternBank w={89} h={103}/>
      break;
    case 5:
      content = <BankAsia/>
      break;
    case 6:
      content = <IslamiBank/>
      break;
    case 7:
      content = <ABBank w={130} h={41}/>
      break; 
    case 8:
      content = <AgraniBank/>
      break; 
    default:
      content = <CityBank />;
  }

  return (
    <section className='w-64 h-52 rounded-2xl px-12 pt-6 border-2 border-[#53389E] flex flex-col justify-between'>
      {content}
      <div className="mb-6 mx-auto">
        <Button className='mt-auto px-5 w-32 h-9 bg-[#53389e] text-white'>Bank details</Button>
      </div>
    </section>
  );
};

export default PopularBanksCard;