import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

interface ToastProps {
  message?: string;
  icon?: string;
}

const Toast: React.FC<ToastProps> = ({ message, icon }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div
      id="toast-simple"
      className="flex top-[100px] left-1/2 -translate-x-1/2 z-[999] fixed items-center justify-between w-full max-w-[350px] p-4  text-gray-2 bg-white rounded-lg shadow-xl"
      role="alert"
    >
      <Icon
        icon={icon ? icon : 'icon-park-solid:success'}
        className="text-brand text-[18px]"
      />
      <div className="bg-gray-4 w-[1px] h-[18px] mx-4"></div>
      <div className="text-sm font-normal">
        {message ? message : 'Message sent successfully.'}
      </div>
      <div className="bg-gray-4 w-[1px] h-[18px] mx-4"></div>
      <button
        type="button"
        className="ml-4 -my-1.5 text-gray-400 rounded-lg p-1.5 hover:bg-red hover:text-white inline-flex h-8 w-8"
        aria-label="Close"
        onClick={() => setShow(false)}
      >
        <span className="sr-only">Close</span>
        <Icon icon={'ic:sharp-close'} className="text-[18px]" />
      </button>
    </div>
  );
};

export default Toast;
