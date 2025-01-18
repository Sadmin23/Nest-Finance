'use client';

import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Image from 'next/image';
import PlaySvg from '../Icons/PlayIcon';

const LearnMore = (): JSX.Element => {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <section className='bg-[#FFEEDD] items-center md:flex py-14 px-14 lg:px-20 xl:px-40'>
        <div className='w-full xl:w-1/2'>
            <h1 className='text-[28px] font-semibold leading-normal text-[#1D2939]'>
                Get even more financial clarity with Nest Finance.
            </h1>
            <h2 className='mt-6'>
            See all your savings, credit cards, and investments together in one place. 
            With everything connected, you'll get timely nerdy insights so you can be sure you're making
             the right financial decisions for you. Best of all, it's free.
            </h2>
            <div className='space-x-8 mt-12 flex'>
                <button onClick={toggleModal} className='py-4 px-8 rounded-md bg-gradient-to-b from-[#7F56D9] to-[#53389e] text-white text-[18px] font-semibold'>
                  Learn More
                </button>
                {modal && (
                    <div className="w-[100vw] h-[100vh] top-0 left-0 right-0 bottom-0 fixed">
                    <div onClick={toggleModal} className="w-[100vw] h-[100vh] top-0 left-0 right-0 bottom-0 fixed bg-gray-800 bg-opacity-80"></div>
                    <div className="absolute top-1/2 left-[42%] md:left-[45%] lg:left-[47%] transform -translate-x-1/2 -translate-y-1/2 max-w-[765px] min-w-[390px] bg-[#F0EBFF] px-10 pt-10 pb-6 rounded-md space-y-4">
                      <h2 className='text-[28px] font-semibold w-10/12 text-[#53389E]'>Get even more financial clarity with Nest Finance</h2>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                      <button className="absolute top-3 right-3 px-4 py-2" onClick={toggleModal}>
                        <Image
                          src="/brand_assets/close.png"
                          width={24}
                          height={24}
                          alt="Close Icon"
                        />
                      </button>
                      <Image
                          src="/brand_assets/tinylogo.png"
                          width={46}
                          height={24}
                          alt="Logo"
                          className='ml-auto'
                        />
                    </div>
                  </div>
                )}
                <button className='py-4 px-8 rounded-md  text-[#F44E4D] text-[18px] border-2 border-[#F44E4D] font-semibold flex space-x-3'>
                    <PlaySvg/>
                    Watch Now
                </button>
            </div>
        </div>
        <Image
          src="/brand_assets/manIllustr.png"
          width={300}
          height={40}
          alt="Picture"
          className='sm:mx-auto ml-auto mt-10 xl:mt-0'
        />
    </section>
  );
};

export default LearnMore;
