'use client';

import Image from "next/image";

const NavDropdown = ({type} : {type : number}): JSX.Element => {

  let colour = "";

  (type === 1) ? colour = "white" : colour = "#ac99d9"

  return (
    <button>
      <Image src='/brand_assets/dropdown.png' width={16} height={10160} alt='dropdown' className="ml-1"/>
    </button>
  );
};

export default NavDropdown;
