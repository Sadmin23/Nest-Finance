'use client';

import { useEffect, useState } from "react";
import BankInfoCard from "./BankInfoCard";
import SearchIcon from "./Icons/SearchIcon";
import { Option } from "@/app/data";
import SearchDropdown from "./SearchDropdown";


const BankInfoWrapper = ({ selectedType }: { selectedType: string }): JSX.Element => {

    const [data, setData] = useState<any[]>([]);
    const [filteredData, setFilteredData] = useState<any[]>([]);
    const [searchValue, setSearchValue] = useState('');
    const [bankType, setBankType] = useState<string | null>(selectedType)
    const [displayedRows, setDisplayedRows] = useState(3);

    const options = [
      { value: 'Public Bank', label: 'Public Bank' },
      { value: 'Private Bank', label: 'Private Bank' }
    ];

    let selectedOption = {value: selectedType, label: selectedType}

    const handleLoadMore = () => {
      setDisplayedRows(displayedRows + 3);
  };

    useEffect(() => {
      let apiUrl = 'http://127.0.0.1:8000/bankapi/bank/';
    
      if (bankType) {
        apiUrl += `?type=${bankType}`;
      }
    
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .catch(() => '');
    }, [bankType]);
    
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

    const handleTypeChange = (selectedOption: Option | null) => {
      selectedOption ? setBankType(selectedOption.value) : setBankType(null)
    }
    
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
              <SearchDropdown option={options} width={64} name='Bank type' searchable={false} defaultOption={selectedOption} onChange={handleTypeChange} />
            </div>
          </div>
        </div>
        <div className="flex-col space-y-9 mb-12">
                {Array.from({ length: displayedRows }, (_, rowIndex) => (
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
            {filteredData.length > displayedRows *3 && (
                <div className="flex justify-center mb-12">
                    <button className="bg-[#53389E] text-white py-4 px-7 rounded" onClick={handleLoadMore}>
                        Show more bank details
                    </button>
                </div>
            )}
      </main>  
    );
};

export default BankInfoWrapper;
