'use client';

import { Button } from 'antd';

const Subscription = (): JSX.Element => {
  return (
    <div className=''>
        <div className='h-[382px] w-[1165px] rounded-2xl mt-16 mb-20 mx-auto bg-gradient-to-b from-[#53389E] to-[#8064CD] flex-col'>
            <h1 className='w-[700px] text-white text-2xl font-medium leading-normal pt-16 pb-6 content-center mx-auto'>Try The best Experience Using Nest Finance</h1>
            <h2 className='w-[520px] text-[#D4C5FF] text-center mx-auto'>We will send you like the walkthrough and short experience using Nest Finance Application. Feel the easiness</h2>
            <div contentEditable={true} className="bg-white w-[584px] h-14 p-4 mx-auto rounded-xl mt-9 text-[#9F9F9F]">
              Enter your email here...
            </div>
            <div className='flex mt-6'>
                <div className='w-6 h-6 bg-[#D4C5FF] ml-[292px]'></div>
                <h2 className='leading-6 text-[#E0D4FF] ml-4'>Allow us to send the latest update of Nest Finance.</h2>
                <h2 className='leading-6 text-[#E0D4FF] font-bold ml-auto mr-[292px]'>Help?</h2>
            </div>
        </div>
    </div>
  );
};

export default Subscription;
