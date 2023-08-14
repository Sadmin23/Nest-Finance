'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const Home = () => {
  const router = useRouter();


  return (
    <main className="flex min-h-screen flex-col items-center justify-center" style={{backgroundColor: "#53389E"}}>
      <div className='text-gray-25 text-center mb-52'>
        <div className='font-inter font-normal text-base p-5'>
          <h3 style={{color: "#E9D7FE"}}>Fast. Simple. Banking</h3>
        </div>
        <div className="font-inter tracking-wide font-medium text-7xl text-gray-50 w-96" style={{width: "790px"}}>
          <h1>Keep spending with the best cards.</h1>
        </div>
        <div className='text-center font-inter text-lg font-normal text-gray-800 leading-[150%] p-10'>
          <h3 style={{color: "#E9D7FE"}}>Best banking cards made simplified.</h3>
        </div>
        <div className='center space-x-6'>
            <button className='rounded-[8px] w-36 h-14 text-lg font-medium' style={{backgroundColor: "#FFF"}}>Login</button>
            <button className='rounded-[8px] w-36 h-14 text-lg font-medium' style={{color: "#FFF", backgroundColor: "#7F56D9"}}>Register</button>
        </div>
      </div>
    </main>
  );
};

export default Home;
