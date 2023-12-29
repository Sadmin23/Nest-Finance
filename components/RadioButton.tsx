'use client';

const RadioButton = ({ Text }: { Text: string }): JSX.Element => {
  return (
    <main className="flex mt-5 items-center">
        <div className='w-5 h-5 border-black border-[0.5px] bg-white ml-10'>
        </div>
        <h1 className="ml-7 text-[18px] mb-auto">{Text}</h1>
    </main>
  );
};

export default RadioButton;