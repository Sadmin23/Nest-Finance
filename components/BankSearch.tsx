'use client';
import SearchIcon from './Icons/SearchIcon';
import FilterIcon from './Icons/FilterIcon';

const BankSearch = (): JSX.Element => {
  return (
    <div className='flex-col mx-40 mb-12'>
        <div className='border-t-2 flex'>
            <div contentEditable={true} className="flex border-2 border-[#B3B3B3] h-14 py-4 pr-56 rounded-xl mt-9 text-[#B3B3B3]">
                <SearchIcon/>
                Search your desire bank
            </div>
            <div contentEditable={true} className="flex border-2 border-[#B3B3B3] h-14 py-4 px-6 rounded-xl mt-9 text-[#B3B3B3] ml-auto">
                <FilterIcon/>
                Filter by bank type
            </div>
        </div>
    </div>
  );
};

export default BankSearch;
