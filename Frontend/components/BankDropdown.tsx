'use client';

const BankDropdown = (): JSX.Element => {

  return (
    <div className="absolute -left-4 top-20 rounded-md w-80 py-2 shadow-2xl bg-white z-10">
    <a
      href="/banks/public-bank"
      className="block mx-2 py-4 hover:bg-[#F0EBFF] space-y-2"
    >
      <h2 className='ml-6 text-[#53389E]'>
        Public Bank
      </h2>
      <h2 className='ml-6 text-[#ADADAD] leading-3 text-sm'>
        Explore all public banks, public
      </h2>
    </a>
    <a
      href="/banks/private-bank"
      className="block mx-2 py-4 hover:bg-[#F0EBFF] space-y-2"
    >
      <h2 className='ml-6 text-[#53389E]'>
        Private Bank
      </h2>
      <h2 className='ml-6 text-[#ADADAD] leading-3 text-sm'>
        Explore all private banks, private
      </h2>
    </a>
    <a
      href="/banks"
      className="block mx-2 pt-4 pb-6 hover:bg-[#F0EBFF] space-y-2"
    >
      <h2 className='ml-6 text-[#53389E]'>
        All Banks
      </h2>
      <h2 className='ml-6 text-[#ADADAD] leading-3 text-sm'>
        Explore all banks, all banks, banks
      </h2>
    </a>
    </div>
  );
};

export default BankDropdown;