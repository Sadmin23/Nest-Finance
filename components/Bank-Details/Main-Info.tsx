import React from 'react';
import Image from "next/image";

interface Props {
    image_url: string;
    name: string;
    hotline: string;
    category: string;
    type: string;
    origin: string;
    est_year: string;
    website: string;
    email: string;
}

const MainInfo: React.FC<Props> = ({ 
    image_url,
    name,
    hotline,
    category,
    type,
    origin,
    est_year,
    website,
    email,
    }) => {
    return (
        <div className="flex items-start">
        <Image
          src={image_url}
          width={196}
          height={131}
          alt="logo"
          className="mr-10"
        />
        <section className="">
          <h1 className="text-2xl font-bold leading-9">{name}</h1>
          <main className="title space-y-3 mt-6">
            <span className="flex space-x-2">
              <h2 className="font-semibold">Phone:</h2>
              <h2>{hotline}</h2>
            </span>
            <span className="flex space-x-2">
              <h2 className="font-semibold">Category:</h2>
              <h2>{category} | {type}</h2>
            </span>
            <span className="flex space-x-2">
              <h2 className="font-semibold">Origin:</h2>
              <h2>{origin}</h2>
            </span>
            <span className="flex space-x-2">
              <h2 className="font-semibold">Establishment:</h2>
              <h2>{est_year}</h2>
            </span>
            <span className="flex space-x-2">
              <h2 className="font-semibold">Website:</h2>
              <a href={website} target="_blank" rel="noopener noreferrer">
                {website}
              </a>
            </span>
            {
              (email!==null) ?(
                <span className="flex space-x-2">
                  <h2 className="font-semibold">Email:</h2>
                  <h2>{email}</h2>
              </span>
              ) : ''
            }
          </main>
        </section>
      </div>
    );
};

export default MainInfo;
