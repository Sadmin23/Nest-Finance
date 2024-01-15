'use client'

import Nav from "@/components/Nav";
import { useEffect, useState } from "react";

const BankDetails = (props: any) => {
  const [apiData, setApiData] = useState<any>({});

  let id = props.params.bank;

  useEffect(() => {
    let apiUrl = 'http://127.0.0.1:8000/bankapi/bank/?id=' + id;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setApiData(data[0]); // Assuming the API returns an array with a single object
      });
  }, []);

  console.log(apiData);

  return (
    <div className='flex-col'>
      <Nav bgOption='white' />
      <div className="h-20 bg-white text-black">
        {/* Access properties of apiData to display */}
        <p>Bank Name: {apiData.name}</p>
        {/* Add more properties as needed */}
      </div>
    </div>
  );
};

export default BankDetails;
