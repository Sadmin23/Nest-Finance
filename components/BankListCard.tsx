'use client';

import Image from 'next/image';
import OptionsButton from "./OptionsButton";
import ServiceButton from "./ServiceButton";
import details from "@/app/bank-list/data"

import { useState } from 'react';

const BankListCard = ({ n }: { n: number }): JSX.Element => {

  const [isHovered, setIsHovered] = useState(false);

  

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  let content, color, text

  let textContent = ""

  switch (n) {
    case 1:
      content =           
        <Image
          src="/brand_assets/ebl.png"
          width={164}
          height={181}
          alt="ebllogo"
        />
      color = "text-[#005BAA]"
      text = "Eastern Bank Ltd."
      textContent = "Eastern Bank Ltd. came into reality in the new democratic environment of Bangladesh with a vision to create a brand in financial arena of the country. Being established in 1992..."
      break;
    case 2:
      content = 
        <Image
        src="/brand_assets/abbank.png"
        width={251}
        height={77}
        alt="abbanklogo"
        />
      color = "text-[#ED1C24]"
      text = "AB Bank Limited"
      textContent = "Arab Bangladesh Bank as formerly known started its effective operation from 12th April, 1982 with the mission to be the best performing bank of the country."
      break;
    case 3:
      content =           
        <Image
          src="/brand_assets/dbbl.png"
          width={167}
          height={106}
          alt="dbbllogo"
        />
      color = "text-[#282828]"
      text = "Dutch-Bangla Bank Ltd"
      textContent = "Dutch-Bangla Bank started operation is Bangladesh's first joint venture bank. The bank was an effort by local shareholders spearheaded by M Sahabuddin Ahmed (founder chairman) and the Dutch company FMO."
      break;
    case 4:
      content =           
        <Image
          src="/brand_assets/islami.png"
          width={188}
          height={168}
          alt="dbbllogo"
        />
      color = "text-[#00A651]"
      text = "Islami Bank Bangladesh"
      textContent = "Islami Bank Bangladesh Limited is a Joint Venture Public Limited Company engaged in commercial banking business based on Islamic Shari'ah with 63.09% foreign shareholding."
      break;
    case 5:
      content =           
        <Image
          src="/brand_assets/agrani.png"
          width={297}
          height={153}
          alt="dbbllogo"
        />
      color = "text-[#00A651]"
      text = "Agrani Bank Limited"
      textContent = "Agrani Bank Limited is a leading commercial bank with 922 outlets strategically located in almost all the commercial areas throughout Bangladesh."
      break;
    case 6:
      content =           
        <Image
          src="/brand_assets/city.png"
          width={195}
          height={144}
          alt="dbbllogo"
        />
      color = "text-[#ED1D24]"
      text = "City Bank"
      textContent = "City Bank is one of the oldest private Commercial Banks operating in Bangladesh. It is a top bank among the oldest five Commercial Banks in the country which started their operations in 1983."
      break;
    case 7:
      content =           
        <Image
          src="/brand_assets/aibl.png"
          width={210}
          height={134}
          alt="aibllogo"
        />
      color = "text-[#1E1E1E]"
      text = "Al-Arafah Islami Bank"
      textContent = "With the objective of achieving success here and hereafter by pursuing the way directed by Allah and the path shown by His Rasul (SM), Al Arafah Islami Bank Ltd was registered as a private limited company."
      break;
    case 8:
      content =           
        <Image
          src="/brand_assets/eximbank.png"
          width={203}
          height={118}
          alt="eximllogo"
        />
      color = "text-[#ED1C24]"
      text = "Exim Bank"
      textContent = "Export Import Bank of Bangladesh Limited is one of the leading private commercial banks in Bangladesh. The Bank was established in the year 1999 under the leadership of Late Mr. Shahjahan Kabir."
      break;
    case 9:
      content =           
        <Image
          src="/brand_assets/sonali.png"
          width={250}
          height={183}
          alt="eximllogo"
        />
      color = "text-[#DBA627]"
      text = "Sonali Bank Limited"
      textContent = "Sonali Bank was established in 1972 under the Bangladesh Banks (Nationalisation) Order, through the amalgamation and nationalisation of the branches of National Bank of Pakistan."
      break;
  }

  return (
    <div className='w-[365px] h-[455px]  relative overflow-hidden rounded-2xl border-2 border-[#53389E] flex flex-col'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
        <div className="flex-col">
            <div className={`flex h-48 my-16 items-center justify-center ${isHovered ? 'opacity-0 duration-500' : 'opacity-100'}`}>
              {content}
            </div>
            <h1 className={`mb-3 ${color} text-xl font-semibold leading-normal text-center ${isHovered ? 'transform -translate-y-64 duration-500' : ''}`}>{text}</h1>
            <h2 className={`mb-4 text-[#9E9E9E] leading-5 font-medium text-center ${isHovered ? 'transform -translate-y-64 duration-500' : ''}`}>Private • Commercial • Local</h2>
            <h2 className={`text-[#1D2939] text-justify text-sm leading-5 mx-8 h-36 ${isHovered ? 'transform -translate-y-64 opacity-100 duration-500' : 'opacity-0'}`}>
                {textContent}
            </h2>
        </div>
        <section className={`flex-col justify-end ${isHovered ? 'transform -translate-y-64 opacity-100 duration-500' : 'opacity-0'}`}>
            <div className='justify-center flex space-x-3 pb-5'>
                <OptionsButton text='Deposits'/>
                <OptionsButton text='Loans'/>
                <OptionsButton text='Cards'/>
            </div>
            <div className='h-[2px] mx-7 bg-[#EAEAEA]'>
            </div>
            <div className='justify-center flex space-x-4 pt-5'>
                <ServiceButton text='Banking Details'/>
                <ServiceButton text='Branches'/>
                <ServiceButton text='ATM'/>
            </div>
        </section>
    </div>
  );
};

export default BankListCard;