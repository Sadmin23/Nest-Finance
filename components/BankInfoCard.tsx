'use client';

import Image from 'next/image';
import ServiceButton from './ServiceButton';
import OptionButton from './OptionButton';

const BankInfoCard = ({ n }: { n: number }): JSX.Element => {

    let content

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
            break;
        case 6:
            content = 
            <div className='flex'>
                <Image
                src="/brand_assets/ebl.png"
                width={63}
                height={69}
                alt="ebl"
                className='mt-[22px] mb-4'
                />
                <h1 className='text-[28px] font-semibold leading-normal text-[#005BAA] my-auto ml-6'>Eastern Bank Ltd.</h1>
            </div>
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
          break;
      }

  return (
    <div className='w-[565px] rounded-2xl border-2 border-[#53389E] flex items-end'>
        <div className='flex-col mx-8'>
            {content}
            <h2 className='font-medium text-sm leading-5 text-[#53389E]'>Private • Commercial • Local</h2>
            <h2 className='text-sm leading-5 text-[#1D2939] mt-4'>
                With the vision of "Building profitable and socially responsible financial institution focused on Market and Business with 
                Growth potential, thereby assisting [BRAC](http://www.brac.net/ "BRAC")...        
            </h2>
            <section className='space-y-6 mb-8 mt-6'>
                <div className='flex space-x-3'>
                    <OptionButton text='Info'/>
                    <OptionButton text='Loans'/>
                    <OptionButton text='DPS'/>
                    <OptionButton text='Cards'/>
                    <OptionButton text='Services'/>
                </div>
                <div className='flex space-x-4'>
                    <ServiceButton text='Banking Details'/>
                    <ServiceButton text='Branches'/>
                    <ServiceButton text='ATM'/>
                    <ServiceButton text='Routing'/>
                </div>
            </section>
        </div>
    </div>
  );
};

export default BankInfoCard;