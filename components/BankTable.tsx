'use client';

const BankTable = (): JSX.Element => {
  return (
    <div className='flex-col mx-40'>
        <div className="flex h-20 bg-[#53389E]">
            <div className="w-36 text-white text-center border-r-2 border-[#D3D3D3] flex items-center justify-center rounded-[10px]">
                Branch Name
            </div>
            <div className="w-28 text-white text-center border-r-2 border-[#D3D3D3]  flex items-center justify-center">
                District
            </div>
            <div className="w-28 text-white text-center border-r-2 border-[#D3D3D3]  flex items-center justify-center">
                Division
            </div>
            <div className="w-56 text-white text-center border-r-2 border-[#D3D3D3]  flex items-center justify-center">
                Address
            </div>
            <div className="w-52 text-white text-center border-r-2 border-[#D3D3D3]  flex items-center justify-center">
                Contact
            </div>
            <div className="w-40 text-white text-center border-r-2 border-[#D3D3D3]  flex items-center justify-center">
                Email
            </div>
            <div className="w-28 text-white text-center border-r-2 border-[#D3D3D3]  flex items-center justify-center">
                Swift Code
            </div>
            <div className="w-32 text-white text-center flex items-center justify-center">
                Routing No.
            </div>

        </div>
    </div>
  );
};

export default BankTable;