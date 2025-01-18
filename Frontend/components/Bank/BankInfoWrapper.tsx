'use client';

import { useEffect, useState } from "react";
import BankInfoCard from "./BankInfoCard";
import SearchIcon from "../Icons/SearchIcon";
import { Option } from "@/app/data";
import SearchDropdown from "../SearchDropdown";
import BankListHero from "./BankListHero";


const BankInfoWrapper = ({ selectedType }: { selectedType: string }): JSX.Element => {

    const [data, setData] = useState<any[]>([]);
    const [filteredData, setFilteredData] = useState<any[]>([]);
    const [searchValue, setSearchValue] = useState('');
    const [bankType, setBankType] = useState<string | null>(selectedType)
    const [displayedItems, setDisplayedRows] = useState(12);

    const options = [
      { value: 'Public Bank', label: 'Public Bank' },
      { value: 'Private Bank', label: 'Private Bank' }
    ];

    let selectedOption = {value: selectedType, label: selectedType}

    const handleLoadMore = () => {
      setDisplayedRows(displayedItems + 12);
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
      // <main className="px-10">
      //   <section className="max-w-7xl mx-auto">
      //     <BankListHero/>
      //     <div className='flex flex-wrap mb-9 gap-y-6 justify-between'>
      //       <div className="flex items-center relative">
      //           <input
      //               className="border border-[#B3B3B3] h-10 rounded-md w-[376px] py-4 pl-[72px] hover:border-[#53389E] focus:outline-0"
      //               placeholder="Search your desire bank"
      //               onChange={handleInputChange}            
      //           />
      //           <SearchIcon/>
      //       </div>
      //       <SearchDropdown option={options} width='64' name='Bank type' searchable={false} defaultOption={selectedOption} onChange={handleTypeChange} />
      //     </div>
          <div className="my-12 mx-auto sm:px-10 xl:max-w-7xl">
            <BankListHero/>
           <div className='flex flex-wrap mb-9 gap-y-6 justify-between'>
             <div className="flex items-center relative">
                 <input
                     className="border border-[#B3B3B3] h-10 rounded-md w-[376px] py-4 pl-[72px] hover:border-[#53389E] focus:outline-0"
                     placeholder="Search your desire bank"
                     onChange={handleInputChange}            
                 />
                 <SearchIcon/>
             </div>
             <SearchDropdown option={options} width='64' name='Bank type' searchable={false} defaultOption={selectedOption} onChange={handleTypeChange} />
           </div>
                  <div className="flex flex-wrap -mx-1 lg:-mx-4">
                          {filteredData
                            .slice(0, displayedItems)
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
                  
              {filteredData.length > displayedItems && (
                <div className="flex justify-center mb-12">
                      <button className="bg-[#53389E] text-white py-4 px-7 rounded" onClick={handleLoadMore}>
                          Show more bank details
                      </button>
                  </div>
              )}
            </div>
      //   </section>
      // </main>
    );
};

export default BankInfoWrapper;
