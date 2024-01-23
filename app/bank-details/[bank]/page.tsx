'use client'

import NavButton from "@/components/Buttons/NavButton";
import Nav from "@/components/Nav";
import Image from "next/image";
import { useEffect, useState } from "react";

const BankDetails = (props: any) => {
  const [apiData, setApiData] = useState<any>({});

  let id = props.params.bank;

  useEffect(() => {
    let apiUrl = `http://127.0.0.1:8000/bankapi/bank/${id}/`;

    console.log(apiUrl);
    

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
      });
  }, []);

  let type = "", category = "", name = ""

  type = apiData.type || "";
  category = apiData.category || "";
  name = apiData.name || "";

  type = type.replace(" Bank", "");
  category = category.replace(" Bank", "");
  name = name.replace(" Limited", "");

  return (
    <div className='flex-col'>
      <Nav bgOption='white' />
      <div className="w-7/12 mr-auto ml-40 p-10 border-2 bg-white rounded-md my-16">
        <div className="flex items-start">
          <Image
            src={apiData.image_url}
            width={320}
            height={100}
            alt="logo"
            className="mr-10"
          />
          <section className="space-y-6">
            <h1 className="text-2xl font-bold leading-9">{apiData.name}</h1>
            <main className="title space-y-3">
              <span className="flex space-x-2">
                <h2 className="font-semibold">Phone:</h2>
                <h2>{apiData.hotline}</h2>
              </span>
              <span className="flex space-x-2">
                <h2 className="font-semibold">Category:</h2>
                <h2>{category} | {type}</h2>
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
                <a href={apiData.website} target="_blank" rel="noopener noreferrer">
                  {apiData.website}
                </a>
              </span>
              {
                (apiData.email!==null) ?(
                  <span className="flex space-x-2">
                    <h2 className="font-semibold">Email:</h2>
                    <h2>{apiData.email}</h2>
                </span>
                ) : ''
              }
            </main>
          </section>
        </div>
        <section className=" space-y-6">
          <h1 className="text-xl leading-8 font-semibold">About {name}</h1>
          <h2 className="text-justify text-sm leading-6 font-normal">
          City Bank is one of the oldest private Commercial Banks operating in Bangladesh. 
          It is a top bank among the oldest five Commercial Banks in the country which started their operations in 1983. 
          The Bank started its journey on 27th March 1983 through opening its first branch at B. B. Avenue Branch in the capital, Dhaka city. 
          It was the visionary entrepreneurship of around 13 local businessmen who braved the immense uncertainties and risks with courage and zeal that made the establishment & forward march of the bank possible. 
          Those sponsor directors commenced the journey with only Taka 3.4 crore worth of Capital, which now is a respectable Taka 330.77 crore as capital & reserve. 
          City Bank is among the very few local banks which do not follow the traditional, decentralized, geographically managed, branch based business or profit model. 
          Instead the bank manages its business and operation vertically from the head office through 4 distinct business divisions namely
          Under a real-time online banking platform, these 4 business divisions are supported at the back by a robust service delivery or operations setup and also a smart IT Backbone. 
          Such centralized business segment based business & operating model ensure specialized treatment and services to the bank's different customer segments. 
          The bank currently has 87 online branches and 10 SME service centers spread across the length & breadth of the country that include a full fledged Islami Banking branch. 
          Besides these traditional delivery points, the bank is also very active in the alternative delivery area. 
          It currently has 46 ATMs of its own; and ATM sharing arrangement with a partner bank that has more than 550 ATMs in place; SMS Banking; Interest Banking and so on. 
          It already started its Customer Call Center operation. The bank has a plan to end the current year with 100 own ATMs. City Bank is the first bank in Bangladesh to have issued Dual Currency Credit Card. 
          The bank is a principal member of VISA international and it issues both Local Currency (Taka) & Foreign Currency (US Dollar) card limits in a single plastic. 
          VISA Debit Card is another popular product which the bank is pushing hard in order to ease out the queues at the branch created by its astounding base of some 400,000 retail customers. 
          The launch of VISA Prepaid Card for the travel sector is currently underway.
          </h2>
        </section>
        <footer className="py-10 text-center space-y-11">
          <h1 className="text-2xl font-semibold">More Details</h1>
          <section className="space-x-14">
            <NavButton type={1} text="Check bank Loans"/>
            <NavButton type={2} text="Find nearby Branch"/>
            <NavButton type={3} text="Find nearby ATM"/>
          </section>
        </footer>
      </div>
    </div>
  );
};

export default BankDetails;
