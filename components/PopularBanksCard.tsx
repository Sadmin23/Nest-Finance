'use client';

import ABBank from "./BankLogo/ABBank";
import BankAsia from "./BankLogo/BankAsia";
import BracBank from "./BankLogo/BracBank";
import CityBank from "./BankLogo/CityBank";
import DBBL from "./BankLogo/DBBL";
import EasternBank from "./BankLogo/EasternBank";
import IslamiBank from "./BankLogo/IslamiBank";
import AgraniBank from "./BankLogo/SonaliBank";

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
      content = <EasternBank/>
      break;
    case 5:
      content = <BankAsia/>
      break;
    case 6:
      content = <IslamiBank/>
      break;
    case 7:
      content = <ABBank/>
      break; 
    case 8:
      content = <AgraniBank/>
      break; 
    default:
      content = <CityBank />;
  }

  return (
    <section className='w-64 h-52 rounded-2xl px-12 pt-6 border-2 border-[#53389E]'>
      {content}
    </section>
  );
};

export default PopularBanksCard;