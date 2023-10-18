'use client';

import Image from 'next/image';
import ServiceButton from './ServiceButton';
import OptionButton from './OptionButton';

const BankInfoCard = ({ n }: { n: number }): JSX.Element => {

    let content, textContent = ""

    switch (n) {
      case 1:
        content =           
          <Image
            src="/brand_assets/bracbank.png"
            width={248}
            height={70}
            alt="brac"
            className='mt-10 mb-2'
          />
        textContent = "With the vision of Building profitable and socially responsible financial institution focused on Market and Business with Growth potential, thereby assisting [BRAC](http://www.brac.net/ ) ..."
        break;
      case 2:
        content = 
          <Image
          src="/brand_assets/dhakabank.png"
          width={239}
          height={46}
          alt="dhaka"
          className='mt-11 mb-6'
          />
          textContent = "Dhaka Bank Ltd. was registered as a public limited company in the year 1995 and it started functioning as a commercial bank on 5 July, 1995. The bank opened its business ..."
          break;    
        case 3:
            content = 
              <Image
              src="/brand_assets/abbank.png"
              width={217}
              height={67}
              alt="abbanklogo"
              className='mt-6 mb-4'
              />
            textContent = "Arab Bangladesh Bank as formerly known started its effective operation from 12th April, 1982 with the mission to be the best performing bank of the country."
            break;
        case 4:
            content = 
              <Image
              src="/brand_assets/aibl.png"
              width={124}
              height={79}
              alt="abbanklogo"
              className='mt-[22px] mb-[6px]'
              />
            textContent = "With the objective of achieving success here and hereafter by pursuing the way directed by Allah and the path shown by His Rasul (SM), Al Arafah Islami Bank Ltd was registered as a private limited company."
            break;

          case 5:
            content = 
            <div className='flex'>
                <Image
                src="/brand_assets/city.png"
                width={78}
                height={56}
                alt="citybank"
                className='mt-[22px] mb-4'
                />
                <h1 className='text-[28px] font-semibold leading-normal text-[#ED1D24] my-auto ml-6'>City Bank</h1>
            </div>
            textContent = "City Bank is one of the oldest private Commercial Banks operating in Bangladesh. It is a top bank among the oldest five Commercial Banks in the country which started their operations in 1983."
            break;
        case 6:
            content = 
            <div className='flex'>
                <Image
                src="/brand_assets/easternbl.png"
                width={63}
                height={69}
                alt="ebl"
                className='mt-[22px] mb-4'
                />
                <h1 className='text-[28px] font-semibold leading-normal text-[#005BAA] my-auto ml-6'>Eastern Bank Ltd.</h1>
            </div>
            textContent = "Eastern Bank Ltd. came into reality in the new democratic environment of Bangladesh with a vision to create a brand in financial arena of the country. Being established in 1992..."
            break;
        case 7:
            content = 
            <div className='flex mt-9 mb-4'>
                <Image
                src="/brand_assets/janata.png"
                width={71}
                height={51}
                alt="ebl"
                />
                <h1 className='text-2xl font-medium leading-normal text-[#00B7DE] mt-auto ml-6'>Janata Bank Limited</h1>
            </div>
            textContent = "Export Import Bank of Bangladesh Limited got in the financial market of the country in the year 1999. It started functioning as Bengal Export Import Bank limited on 3 August, 1999...."
            break;
        case 8:
            content = 
            <div className='flex'>
                <Image
                src="/brand_assets/ific.png"
                width={269}
                height={37}
                alt="ific"
                className='mt-12 mb-6'
                />
            </div>
            textContent = "IFIC Bank started functioning as a finance company in 1976. It was formed as a joint venture between the Government of Bangladesh and several farsighted sponsors from private sector..."
            break;
        case 9:
            content = 
            <div className='flex'>
                <Image
                src="/brand_assets/islami.png"
                width={70}
                height={62}
                alt="islami"
                className='mt-[22px] mb-4'
                />
                <h1 className='text-[26px] font-semibold leading-normal text-[#008c44] my-auto ml-6'>Islami Bank Bangladesh Ltd</h1>
            </div>
            textContent = "Islami Bank Bangladesh Limited is a Joint Venture Public Limited Company engaged in commercial banking business based on Islamic Shari'ah with 63.09% foreign shareholding."
            break;

        case 10:
          content = 
          <div className='flex mt-[42px] mb-5'>
              <Image
              src="/brand_assets/bankasia.png"
              width={47}
              height={44}
              alt="basia"
              />
              <Image
              src="/brand_assets/bankasia2.png"
              width={205}
              height={36}
              alt="basia2"
              className='ml-3 mt-auto'
              />
          </div>
          textContent = "With a vision to make a poverty free Bangladesh, some distinguished entrepreneurs of the country decided to establish a commercial bank. The result was Bank Asia Limited .... "
          break;
        case 11:
          content = 
          <div className='flex mt-10 mb-5'>
              <Image
              src="/brand_assets/mbank.png"
              width={70}
              height={47}
              alt="basia"
              />
              <Image
              src="/brand_assets/mbank2.png"
              width={232}
              height={31}
              alt="basia2"
              className='ml-4 my-auto'
              />
          </div>
          textContent = "Midland Bank Ltd is the 4th generation Scheduled Bank licensed from Bangladesh Bank. Midland Bank has paid-up capital worth BDT 400 crore that demonstrates ..."
          break;
        case 12:
          content = 
          <div className='flex mt-11 mb-5'>
              <Image
              src="/brand_assets/dbbl.png"
              width={73}
              height={44}
              alt="basia"
              />
              <Image
              src="/brand_assets/dbbl2.png"
              width={298}
              height={22}
              alt="basia2"
              className='ml-6 my-auto'
              />
          </div>
          textContent = "Dutch-Bangla Bank started operation is Bangladesh's first joint venture bank. The bank was an effort by local shareholders spearheaded by M Sahabuddin Ahmed (founder chairman) and the Dutch company FMO."
          break;

        case 13:
          content = 
          <div className='flex mt-[34px] mb-4'>
              <Image
              src="/brand_assets/sonali3.png"
              width={55}
              height={51}
              alt="sonali"
              />
              <Image
              src="/brand_assets/sonali2.png"
              width={208}
              height={56}
              alt="sonali2"
              className='ml-6 my-auto'
              />
          </div>
          textContent = "Sonali Bank was established in 1972 under the Bangladesh Banks (Nationalisation) Order, through the amalgamation and nationalisation of the branches of National Bank of Pakistan."
          break;

        case 14:
          content = 
          <div className='flex mt-[34px] mb-4'>
              <Image
              src="/brand_assets/agrani3.png"
              width={62}
              height={53}
              alt="agrani"
              />
              <Image
              src="/brand_assets/agrani2.png"
              width={241}
              height={26}
              alt="agrani"
              className='ml-6 my-auto'
              />
          </div>
          textContent = "Agrani Bank Limited is a leading commercial bank with 922 outlets strategically located in almost all the commercial areas throughout Bangladesh."
          break;
      }

  return (
    <div className='w-[580px] h-[347px] rounded-2xl border-2 border-[#53389E] flex items-end'>
        <div className='flex-col mx-8'>
            {content}
            <h2 className='font-semibold text-sm leading-5 text-[#53389E]'>Private • Commercial • Local</h2>
            <h2 className='text-sm leading-5 text-[#1D2939] h-[60px] mt-4'>
              {textContent}
            </h2>
            <section className='space-y-6 mb-8 mt-6'>
                <div className='flex space-x-4'>
                    <OptionButton text='Deposits'/>
                    <OptionButton text='Loans'/>
                    <OptionButton text='Cards'/>
                </div>
                <div className='flex space-x-4'>
                    <ServiceButton text='Bank Details'/>
                    <ServiceButton text='Branches'/>
                    <ServiceButton text='ATM'/>
                </div>
            </section>
        </div>
    </div>
  );
};

export default BankInfoCard;