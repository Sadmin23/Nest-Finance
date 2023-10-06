'use client';

import Image from 'next/image';

const LearnMore = (): JSX.Element => {
  return (
    <section className='h-[640px]'>
        <div className='bg-[#FFEEDD] h-[600px] skew-y-3 my-10'>
            <div className='mx-40'>
                <div className='transform -skew-y-3 pt-40 w-7/12'>
                    <h1 className='text-[42px] font-semibold leading-10 tracking-tight'>
                        Get even more financial clarity with Nest Finance.
                    </h1>
                    <h2 className='text-[22px] mt-6'>
                    See all your savings, credit cards, and investments together in one place. 
                    With everything connected, you'll get timely nerdy insights so you can be sure you're making
                     the right financial decisions for you. Best of all, it's free.
                    </h2>
                </div>
            </div>
        </div>
    </section>
  );
};

export default LearnMore;
