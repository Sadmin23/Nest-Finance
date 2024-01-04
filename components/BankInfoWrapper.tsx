'use client';

import { useEffect, useState } from "react";
import BankInfoCard from "./BankInfoCard";
import SearchIcon from "./Icons/SearchIcon";
import FilterIcon from "./Icons/FilterIcon";
import { Dropdown } from 'primereact/dropdown';
        

const BankInfoWrapper = (): JSX.Element => {

    const [data, setData] = useState<any[]>([]);
    const [filteredData, setFilteredData] = useState<any[]>([]);
    const [searchValue, setSearchValue] = useState('');
    const [error, setError] = useState(true)
    const [filter, setFilter] = useState('');
    const [api, setApi] = useState('http://127.0.0.1:8000/bankapi/bank/');

    useEffect(() => {
      fetch(api)
        .then((response) => response.json())
        .then((data) => {
            setData(data)
            setError(false)
        })
        .catch(() => setError(true));
    }, [api]);
    
    const itemsPerRow = 3;
    const numberOfRows = Math.ceil(filteredData.length / itemsPerRow);

    useEffect(() => {
        const filtered = data.filter((item) =>
          item.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredData(filtered);
      }, [searchValue, data]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
    };

    const handleChangeFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const newFilter = event.target.value;
      setFilter(newFilter);
      setApi(newFilter ? `http://127.0.0.1:8000/bankapi/bank/?type=${newFilter}` : 'http://127.0.0.1:8000/bankapi/bank/');
    };
    
    return (
      <main className="flex-col">
        <div className='mx-40 mb-12'>
          <div className='border-t-2 flex pt-9'>
            <div className="flex items-center relative">
                <input
                    className="border-2 border-[#B3B3B3] h-14 rounded-xl w-[376px] py-4 pl-[72px]"
                    placeholder="Search your desire bank"
                    onChange={handleInputChange}            
                />
                <SearchIcon/>
            </div>
            <div className="ml-auto">
              <select
                name="filter"
                value={filter}
                onChange={handleChangeFilter}
                className="border-2 border-[#B3B3B3] h-14 rounded-xl w-60 py-4 px-4"
              >
                <option value="">Filter by bank type</option>
                <option value="Public+Bank">Public Bank</option>
                <option value="Private+Bank">Private Bank</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex-col space-y-9 mb-12">
          {Array.from({ length: numberOfRows }, (_, rowIndex) => (
              <div key={rowIndex} className="flex mx-40 space-x-9">
              {filteredData
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
