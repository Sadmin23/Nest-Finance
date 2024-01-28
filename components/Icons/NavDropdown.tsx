'use client';

const NavDropdown = ({type} : {type : number}): JSX.Element => {

  let colour = "";

  (type === 1) ? colour = "white" : colour = "#ac99d9"

  return (
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
          <path d="M6.5 9L12.5 15L18.5 9" stroke={colour} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  );
};

export default NavDropdown;
