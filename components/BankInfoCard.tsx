'use client';

import Image from 'next/image';
import ServiceButton from './Buttons/ServiceButton';
import OptionButton from './Buttons/OptionButton';

const BankInfoCard = ({ n }: { n: number }): JSX.Element => {

    let content, textContent = ""

    switch (n) {
      case 1:
        content =           
          <Image
            src="/brand_assets/bracbank.png"
            width={210}
            height={70}
            alt="brac"
            className='mb-2'
          />
        textContent = "With the vision of Building profitable and socially responsible financial institution focused on Market and Business with Growth potential, thereby assisting..."
        break;
      case 2:
        content = 
          <Image
          src="/brand_assets/dhakabank.png"
          width={217}
          height={46}
          alt="dhaka"
          className='mb-4'
          />
          textContent = "Dhaka Bank Ltd. was registered as a public limited company in the year 1995 and it started functioning as a commercial bank on 5 July, 1995. The bank opened its business ..."
          break;    
        case 3:
            content = 
              <Image
              src="/brand_assets/abbank.png"
              width={159}
              height={67}
              alt="abbanklogo"
              className='mb-5'
              />
            textContent = "AB Bank Limited is the pioneer in commercial banking under private ownership in Bangladesh. It started functioning as Arab Bangladesh Bank Ltd. on 12 April, 1982..."
            break;
        case 4:
            content = 
              <Image
              src="/brand_assets/aibl.png"
              width={107}
              height={79}
              alt="abbanklogo"
              className='mb-3'
              />
            textContent = "With a vision to emerge as the leading Islami bank in Bangladesh, Al-Arafa Islami Bank was established by some religious  from commerce and industries..."
            break;

          case 5:
            content = 
            <div className='flex'>
                <Image
                src="/brand_assets/city.png"
                width={78}
                height={56}
                alt="citybank"
                className='mb-4'
                />
                <h1 className='text-[28px] font-semibold leading-normal text-[#ED1D24] my-auto ml-6'>City Bank</h1>
            </div>
            textContent = "City Bank is one of the oldest private Commercial Banks operating in Bangladesh. It is a top bank among the oldest five Commercial Banks in the country..."
            break;
        case 6:
            content = 
            <div className='flex'>
                <Image
                src="https://www.banksbd.org/assets/images/logos/2.jpg"
                width={280}
                height={100}
                alt="ebl"
                className='mb-3'
                />
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
                <h1 className='text-lg font-medium text-[#00B7DE] my-auto ml-3'>Janata Bank Limited</h1>
            </div>
            textContent = "Export Import Bank of Bangladesh Limited got in the financial market of the country in the year 1999. It started functioning as Bengal Export Import Bank limited..."
            break;
        case 8:
            content = 
            <div className='flex'>
                <Image
                src="/brand_assets/ific.png"
                width={217}
                height={37}
                alt="ific"
                className='mb-5'
                />
            </div>
            textContent = "IFIC Bank started functioning as a finance company in 1976. It was formed as a joint venture between the Government of Bangladesh..."
            break;
        case 9:
            content = 
            <div className='flex'>
                <Image
                src="/brand_assets/islami.png"
                width={70}
                height={62}
                alt="islami"
                className='mb-4'
                />
                <h1 className='font-semibold text-[#008c44] my-auto ml-4'>Islami Bank Bangladesh Ltd</h1>
            </div>
            textContent = "Bangladesh is one of the largest Muslim countries in the world. The people of this country are deeply committed to Islamic way of life as enshrined in the Holy Qur'an..."
            break;

        case 10:
          content = 
            <Image
              src="/brand_assets/bankasia3.png"
              width={213}
              height={44}
              alt="basia"
              className='mb-5'
            />
          textContent = "With a vision to make a poverty free Bangladesh, some distinguished entrepreneurs of the country decided to establish a commercial bank... "
          break;
        case 11:
          content = 
            <Image
              src="/brand_assets/midland2.png"
              width={250}
              height={47}
              alt="basia"
              className='mb-5'
            />
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
          <div className='flex mb-4'>
              <Image
              src="/brand_assets/sonali3.png"
              width={53}
              height={51}
              alt="sonali"
              />
              <Image
              src="/brand_assets/sonali2.png"
              width={208}
              height={56}
              alt="sonali2"
              className='ml-3 my-auto'
              />
          </div>
          textContent = "National Bank of Pakistan was the largest commercial bank in the then East Pakistan. After liberation of Bangladesh in 1971, this bank along with two smaller banks..."
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
    <div className='w-[365px] h-[347px] rounded-2xl border-2 bg-white border-[#53389E] flex items-end'>
        <div className='flex-col mx-6'>
            {content}
            <h2 className='font-semibold text-sm leading-5 text-[#53389E]'>Private • Commercial • Local</h2>
            <h2 className='text-sm leading-[18px] text-[#1D2939] w-[317px] mt-4'>
              {textContent}
            </h2>
            <section className='space-y-4 mb-8 mt-6'>
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