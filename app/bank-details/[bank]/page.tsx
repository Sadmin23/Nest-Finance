'use client'

import Nav from "@/components/Nav";
import Image from "next/image";
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

  let type = "", category = ""

  type = apiData.type || "";
  category = apiData.category || "";

  type = type.replace(" Bank", "");
  category = category.replace(" Bank", "");

  return (
    <div className='flex-col'>
      <Nav bgOption='white' />
      <div className="h-96 mx-40 my-20 bg-white rounded-md text-black">
        <div className="flex pt-16">
          <Image
            src={apiData.image_url}
            width={320}
            height={200}
            alt="logo"
            className="mx-10"
          />
          <section>
            <h1 className="text-2xl font-bold leading-9">{apiData.name}</h1>
            <main className="title space-y-4
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            ">
              <span className="flex space-x-2">
                <h2 className="font-semibold">Phone:</h2>
                <h2>{apiData.hotline}</h2>
              </span>
              <span className="flex space-x-2">
                <h2 className="font-semibold">Category:</h2>
                <h2>{category}/{type}</h2>
              </span>
              <span className="flex space-x-2">
                <h2 className="font-semibold">Origin:</h2>
                <h2>{apiData.origin}</h2>
              </span>
              <span className="flex space-x-2">
                <h2 className="font-semibold">Establishment:</h2>
                <h2>{apiData.est_year}</h2>
              </span>
              <span className="flex space-x-2">
                <h2 className="font-semibold">Website:</h2>
                <h2>{apiData.website}</h2>
              </span>
              <span className="flex space-x-2">
                <h2 className="font-semibold">Email:</h2>
                <h2>{apiData.email}</h2>
              </span>
            </main>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BankDetails;
