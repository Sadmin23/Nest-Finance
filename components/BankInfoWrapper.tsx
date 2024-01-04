'use client';

import { useEffect, useState } from "react";
import BankInfoCard from "./BankInfoCard";

const BankInfoWrapper = (): JSX.Element => {

    const [data, setData] = useState<any[]>([]);
    const [filteredData, setFilteredData] = useState<any[]>([]);
    const [searchValue, setSearchValue] = useState('');
    const [error, setError] = useState(true)
  
    useEffect(() => {
      fetch('http://127.0.0.1:8000/bankapi/bank/')
        .then((response) => response.json())
        .then((data) => {
            setData(data);
            setFilteredData(data);
            setError(false)
        })
        .catch(() => setError(true));
    }, []);
    
    const itemsPerRow = 3;
    const numberOfRows = Math.ceil(filteredData.length / itemsPerRow);

  return (
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
  );
};

export default BankInfoWrapper;
