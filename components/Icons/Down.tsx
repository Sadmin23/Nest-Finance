'use client';

const Down = ({ colour }: { colour: string }): JSX.Element => {

  let Colour = ""

  if (colour ==="white")
    Colour = "white"
  else
    Colour = "#53389E"  

  return (
    <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 4 12 14" fill="none">
      <path d="M0.746094 7.90186L6.37291 13.5287L11.9997 7.90186" fill={Colour}/>
    </svg>
  );
};

export default Down;