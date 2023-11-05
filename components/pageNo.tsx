'use client';

const pageNo = ({x, y} : {x: number, y: number}): JSX.Element => {

  return (
    x === 0 ? (
      <button className='bg-[#53389E] text-white px-2 h-7'>{y}</button>
    ) : (
      <button className='bg-white text-[#53389E] border-2 border-[#53389E] leading-normal px-2 h-7'>{y}</button>
    )
  )

};

export default pageNo;