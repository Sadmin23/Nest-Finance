'use client';

const Up = ({ colour }: { colour: string }): JSX.Element => {

  let Colour = ""

  if (colour ==="white")
    Colour = "white"
  else
    Colour = "#53389E"

  return (
    <svg className="ml-2 mt-1" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
      <path d="M12 6.09863L6.37319 0.471817L0.74637 6.09863" fill={Colour}/>
    </svg>
  );
};

export default Up;