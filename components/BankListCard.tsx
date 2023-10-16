'use client';

import Image from 'next/image';
import OptionsButton from "./OptionsButton";
import ServiceButton from "./ServiceButton";

const BankListCard = ({ n }: { n: number }): JSX.Element => {

  let content, color, text

  let textContent = "Islami Bank Bangladesh Limited is a Joint Venture Public Limited Company engaged in commercial banking business based on Islamic Shari'ah with 63.09% foreign shareholding."

  switch (n) {
    case 1:
      content =           
        <Image
          src="/brand_assets/ebl.png"
          width={164}
          height={181}
          alt="ebllogo"
          className='ml-28 mt-[88px]'
        />
      color = "text-[#005BAA]"
      text = "Eastern Bank Ltd."
      break;
    case 2:
      content = 
        <Image
        src="/brand_assets/abbank.png"
        width={251}
        height={77}
        alt="abbanklogo"
        className='ml-14 mt-36'
        />
      color = "text-[#ED1C24]"
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
      color = "text-[#282828]"
      text = "Dutch-Bangla Bank Ltd"
      break;
    case 4:
      content =           
        <Image
          src="/brand_assets/islami.png"
          width={188}
          height={168}
          alt="dbbllogo"
          className='ml-[88px] mt-20'
        />
      color = "text-[#00A651]"
      text = "Islami Bank Bangladesh"
      break;
    case 5:
      content =           
        <Image
          src="/brand_assets/agrani.png"
          width={297}
          height={153}
          alt="dbbllogo"
          className='mx-8 mt-[100px]'
        />
      color = "text-[#00A651]"
      text = "Agrani Bank Limited"
      textContent = "located in almost all the commercial areas throughout Bangladesh."
      break;
    case 6:
      content =           
        <Image
          src="/brand_assets/city.png"
          width={195}
          height={144}
          alt="dbbllogo"
          className='ml-20 mt-[108px]'
        />
      color = "text-[#ED1D24]"
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
      color = "text-[#1E1E1E]"
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
      color = "text-[#ED1C24]"
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
      color = "text-[#DBA627]"
      text = "Sonali Bank Limited"
    break;
  }

  return (
    <div className='w-[365px] rounded-2xl border-2 border-[#53389E] flex flex-col'>
        <div className="flex-col mb-auto">
            {content}
            <h1 className={`mb-3 ${color} text-xl font-semibold leading-normal text-center`}>{text}</h1>
            <h2 className="mb-4 text-[#9E9E9E] leading-5 font-medium text-center">Private • Commercial • Local</h2>
            <h2 className="text-[#1D2939] text-justify text-sm leading-5 mx-8 opacity-0">
                {textContent}
            </h2>
        </div>
        <section className='space-y-6 mt-auto mb-6 opacity-0'>
            <div className='justify-center flex space-x-3'>
                <OptionsButton text='Deposits'/>
                <OptionsButton text='Loans'/>
                <OptionsButton text='Cards'/>
            </div>
            <div className='justify-center flex space-x-4'>
                <ServiceButton text='Banking Details'/>
                <ServiceButton text='Branches'/>
                <ServiceButton text='ATM'/>
            </div>
        </section>
    </div>
  );
};

export default BankListCard;
