'use client';
import Image from 'next/image';
import Options from './Icons/Options';
import UpDown from './Icons/UpDownIcon';

const BranchListHero = (): JSX.Element => {
  return (
    <section className='mx-40'>
        <div className='flex mt-11 mb-8'>
            <div className='flex-col w-[465px]'>
                <h1 className='text-[42px] mt-14 font-medium tracking-tight leading-snug '>Search your nearest Branches</h1>
                <h2 className="mt-5 text-base font-normal leading-normal">
                    You can find your branch according to your choice and 
                    know your branch location according to your area.              
                </h2>
            </div>
            <div className='rounded-[10px] border-2 border-[#E6E6E6] ml-auto'>
                <div className='mx-12'>
                    <h1 className='text-lg font-medium leading-7 mt-7'>Search your nearest Branches, SME Centers, and offices</h1>
                    <div className='flex-col space-y-3'>
                        <div className='flex leading-5 space-x-4 mt-6'>
                            <div contentEditable={true} className='w-[270px] h-12 rounded-[10px] pl-4 py-3 border-2 border-[#53389E] font-semibold'></div>
                            <div contentEditable={true} className='w-[270px] h-12 rounded-[10px] pl-4 py-3 border-2 border-[#53389E] text-[#C9C9C9]'>Branch Name</div>
                        </div>
                        <div className='flex leading-5 space-x-4'>
                            <div contentEditable={true} className='flex w-[270px] h-12 rounded-[10px] px-4 py-3 border-2 border-[#53389E] text-[#C9C9C9]'>
                                Select Division
                                <Options/>
                            </div>
                            <div contentEditable={true} className='flex w-[270px] h-12 rounded-[10px] px-4 py-3 border-2 border-[#53389E] text-[#C9C9C9]'>
                                Select District
                                <Options/>
                            </div>
                        </div>
                    </div>
                    <button className='rounded-[10px] bg-[#53389E] text-white text-lg font-medium leading-7 h-16 w-full mt-5 mb-7'>Search</button>
                </div>
            </div>
        </div>
        <div className='flex justify-end mt-7 mb-6'>
            <h1 className='leading-5 py-1'>Showing</h1>
            <div className='bg-[#53389E] text-white py-1 px-4 mx-4 flex'>
                10
                <UpDown/>
            </div>
            <h1 className='leading-5 py-1'>entries</h1>
        </div>
    </section>
  );
};

export default BranchListHero;
