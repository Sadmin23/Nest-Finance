import { Icon } from '@iconify/react';
import React, { useState } from 'react';

const Modal: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="block text-white bg-brand mb-6 hover:bg-opacity-80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Toggle modal
      </button>

      <div
        className={`fixed top-0 left-0 right-0 z-50 ${
          !open && 'hidden'
        } w-full p-4 flex items-center bg-black bg-opacity-20 backdrop-blur-sm justify-center overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full`}
      >
        <div className="relative top-[100px] w-full h-full max-w-2xl md:h-auto">
          <div className="relative bg-white rounded-lg shadow">
            <div className="flex items-start justify-between p-4 border-b rounded-t">
              <h3 className="text-xl font-semibold text-gray-900">Headline</h3>
              <button
                onClick={() => setOpen((prev) => !prev)}
                className="text-gray-2 bg-transparent hover:bg-gray-6 hover:text-gray-1 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              >
                <Icon
                  icon="ic:outline-close"
                  className="text-[24px] text-gray-1"
                />
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-6 space-y-6"></div>

            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
              <button
                type="button"
                className="text-white bg-brand hover:bg-opacity-80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                I accept
              </button>
              <button
                onClick={() => setOpen((prev) => !prev)}
                className="text-gray-2 bg-white hover:bg-gray-6 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-4 text-sm font-medium px-5 py-2.5 hover:text-gray-1 focus:z-10"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
