'use client';

import Image from 'next/image';
import { Button } from 'antd';
import PlaySvg from './Icons/PlayIcon';

const LearnMore = (): JSX.Element => {
  return (
    <section className='h-[720px]'>
        <div className='bg-[#FFEEDD] h-[680px] skew-y-3 my-10'>
            <div className='mx-40 flex'>
                <div className='transform -skew-y-3 pt-40'>
                    <h1 className='text-[42px] font-semibold leading-tight tracking-tight'>
                        Get even more financial clarity with Nest Finance.
                    </h1>
                    <h2 className='text-[22px] mt-6'>
                    See all your savings, credit cards, and investments together in one place. 
                    With everything connected, you'll get timely nerdy insights so you can be sure you're making
                     the right financial decisions for you. Best of all, it's free.
                    </h2>
                    <div className='space-x-8 mt-10 flex'>
                        <Button className='py-6 px-12 h-20 bg-gradient-to-b from-[#7F56D9] to-[#53389e] text-white text-[18px] font-semibold'>Learn More</Button>
                        <Button className='py-6 px-12 h-20  text-[#F44E4D] text-[18px] border-2 border-[#F44E4D] font-semibold flex space-x-3'>
                            <PlaySvg/>
                            Watch Now
                        </Button>
                    </div>
                </div>
                <div className='mt-36'>
                    <Image
                      src="/brand_assets/manIllustr.png"
                      width={1400}
                      height={40}
                      alt="Picture of the author"
                      className=''
                    />
                </div>
            </div>
        </div>
    </section>
  );
};

export default LearnMore;
