'use client';
import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const Accordion = () => {
  const array = [1, 2, 3, 4];
  const [open, setOpen] = useState<number | null>(null);

  const handleClick = (index: number) =>
    setOpen((prevOpen) => (prevOpen === index ? null : index));

  return (
    <div className="border-[1px] rounded-md ease-in-out duration-300">
      {array.map((item, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className={`${open === index ? 'text-brand ' : 'text-gray-2'} px-4 `}
        >
          <h2>
            <button
              type="button"
              className="flex items-center  text-[14px] lg:text-[16px] justify-between w-full py-3 font-medium text-left border-b border-gray-5"
            >
              <span>What is React?</span>
              {open === index ? (
                <Icon
                  icon={'ri:arrow-drop-down-line'}
                  className="text-[42px] rotate-[180deg]"
                />
              ) : (
                <Icon
                  icon={'ri:arrow-drop-down-line'}
                  className="text-[42px] "
                />
              )}
            </button>
          </h2>
          <div
            className={`${
              open !== index && 'hidden'
            }  ease-in-out duration-300`}
          >
            <div className="py-5 font-regular border-b border-gray-5">
              <p className="mb-2 text-gray-2 text-[14px] lg:text-[16px] ">
                React is an open-source JavaScript library for building user
                interfaces (UIs) or front-end web applications. It was developed
                by Facebook and is now maintained by Facebook and a community of
                individual developers and companies. React allows developers to
                create reusable UI components that can be composed to build
                complex UIs.
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
