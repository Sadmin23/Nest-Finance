'use client';

import { useEffect, useState } from "react";
import BankInfoCard from "./BankInfoCard";
import SearchIcon from "./Icons/SearchIcon";
import FilterIcon from "./Icons/FilterIcon";

const BankInfoWrapper = (): JSX.Element => {

    const [data, setData] = useState<any[]>([]);
    const [filteredData, setFilteredData] = useState<any[]>([]);
    const [searchValue, setSearchValue] = useState('');
    const [error, setError] = useState(true)
  
    useEffect(() => {
      fetch('http://127.0.0.1:8000/bankapi/bank/')
        .then((response) => response.json())
        .then((data) => {
            setData(data)
            setError(false)
        })
        .catch(() => setError(true));
    }, []);
    
    const itemsPerRow = 3;
    const numberOfRows = Math.ceil(filteredData.length / itemsPerRow);

    useEffect(() => {
        const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase()))
        setFilteredData(filtered)
      }, [searchValue]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
    };

    return (
      <main className="flex-col">
        <div className='mx-40 mb-12'>
          <div className='border-t-2 flex'>
            <div className="flex items-center relative">
                <input
                    className="border-2 border-[#B3B3B3] h-14 rounded-xl w-[376px] py-4 pl-[72px]"
                    placeholder="Search your desire bank"
                    onChange={handleInputChange}            
                />
                <SearchIcon/>
            </div>
            <div contentEditable={true} className="flex border-2 border-[#B3B3B3] h-14 py-4 px-6 rounded-xl mt-9 text-[#B3B3B3] ml-auto">
                <FilterIcon right="6"/>
                Filter by bank type
            </div>
          </div>
        </div>
        <div className="flex-col space-y-9 mb-12">
          {Array.from({ length: numberOfRows }, (_, rowIndex) => (
              <div key={rowIndex} className="flex mx-40 space-x-9">
              {data
                .slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow)
                .map((bank, index) => (
                    <BankInfoCard
                    key={index}
                    name={bank.name}
                    url={bank.image_url}
                    type={bank.type}
                    category={bank.category}
                    origin={bank.origin}
                    />
                    ))}
            </div>
          ))}
        </div>
      </main>  
    );
};

export default BankInfoWrapper;
