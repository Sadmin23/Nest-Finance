'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import Bankcard from './Bankcard'
import { Button } from 'antd';
import { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const BankingInfo = (): JSX.Element => {
  const router = useRouter();      

  const ITEMS_PER_PAGE = 9
  const [searchValue, setSearchValue] = useState('');
  const [filteredItems, setFilteredItems] = useState<any[]>([]);
  const [apiData, setApiData] = useState<any[]>([])
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/bankapi/atm/')
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    const filtered = apiData.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredItems(filtered);

    setCurrentPage(1);
  }, [searchValue]);

  const itemsToDisplay = searchValue ? filteredItems : apiData;

  const lastIndex = currentPage * ITEMS_PER_PAGE;
  const firstIndex = lastIndex - ITEMS_PER_PAGE;
  const currentItems = itemsToDisplay.slice(firstIndex, lastIndex);

  const handleNextPage = () => {
    if (lastIndex < itemsToDisplay.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };  

  return (
    <div className='h-auto bg-white mx-40 rounded-xl flex-col relative z-10'>
        <div className='py-10 border-b-2'>
          <h1 className='mx-10 font-inter text-2xl font-medium leading-5 '>Search Banks</h1>
        </div>
        <div className='flex mx-10 my-8'>
          <input
              className="w-[630px] border-[1px] border-[#D0D5DD] h-10 rounded-md font-medium text-sm leading-5 pl-4"
              placeholder="Search Banks"
              onChange={handleInputChange}            
            />
          <input
              className="w-[194px] border-[1px] border-[#D0D5DD] h-10 rounded-md font-medium text-sm leading-5 pl-4 ml-auto"
              placeholder="Filter by District"
          />
        </div>
        <div className="grid grid-cols-3 gap-5 mx-10">
          {currentItems.map((data, index) => (
            <Bankcard key={index} Name={data.name} image="/brand_assets/ctbank.png" />
          ))}
        </div>
        <div className='py-6 mx-auto w-60 space-x-2'>
          <Button onClick={handlePrevPage}>
            Previous
          </Button>
          <Button onClick={handleNextPage}>
            Next
          </Button>
        </div>
    </div>
  );
};

export default BankingInfo;
