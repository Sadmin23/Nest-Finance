import React, { useEffect, useState } from 'react';
import MainInfo from './main-info';
import Details from './Details';
import NavButton from '../Buttons/NavButton';

interface BankDetailsProps {
    id: string;
}

const DetailsContainer: React.FC<BankDetailsProps> = ({ id }) => {
    const [apiData, setApiData] = useState<any>({});
    let type = "", category = "", name = "";

    useEffect(() => {
        let apiUrl = `http://127.0.0.1:8000/bankapi/bank/${id}/`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setApiData(data);
            });
    }, [id]);

    type = apiData.type || "";
    category = apiData.category || "";
    name = apiData.name || "";

    type = type.replace(" Bank", "");
    category = category.replace(" Bank", "");
    name = name.replace(" Limited", "");

    return (
        <div className="w-8/12 p-10 border-2 bg-white rounded-md">
          <MainInfo
            image_url={apiData.image_url}
            name={name} 
            hotline={apiData.hotline}
            category={category}
            type={type}
            origin={apiData.origin}
            est_year={apiData.est_year}
            website={apiData.website}
            email={apiData.email}
          />
          <Details name={name}/>
          <footer className="py-10 text-center space-y-11">
            <h1 className="text-2xl font-semibold">More Details</h1>
            <section className="space-x-12">
              <NavButton type={1} text="Check bank Loans"/>
              <NavButton type={2} text="Find nearby Branch"/>
              <NavButton type={3} text="Find nearby ATM"/>
            </section>
          </footer>
        </div>
    );
};

export default DetailsContainer;
