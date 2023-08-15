'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const Home = () => {
  const router = useRouter();


  return (
    <main className="flex min-h-screen flex-col items-center justify-center" style={{backgroundColor: "#53389E"}}>
      <div className='text-gray-25 text-center mb-56 mt-16' style={{height: "600px"}}>
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
      <div className='w-full flex' style={{backgroundColor: "#FFF6ED", height: "700px"}}>
          <div className='w-1/2'>
            <div className='font-medium text-2xl text-black pt-36 pl-40'>
              <h2>Get even more financial clarity with a NerdWallet account</h2>
            </div>
            <div className='font-normal tracking-wider text-medium text-black pl-40 pr-20 pt-7'>
              <h2>See all your savings, credit cards, and investments together in one place. With everything connected, you'll get timely nerdy insights so you can be sure you're making the right financial decisions for you. Best of all, it's free.</h2>
            </div>
            <div className='pl-40 flex space-x-6 pt-20'>
              <button className='flex items-center justify-center rounded-[6px] bg-black text-white h-10 w-56'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 19 23" fill="none">
              <path d="M15.8598 21.178C14.6925 22.3095 13.418 22.1309 12.1911 21.5949C10.8928 21.0469 9.70164 21.0231 8.33184 21.5949C6.61661 22.3334 5.71135 22.119 4.68698 21.178C-1.12574 15.1866 -0.268125 6.06251 6.33074 5.72899C7.93877 5.81237 9.05843 6.61043 9.99942 6.6819C11.405 6.39602 12.7509 5.57414 14.2518 5.68134C16.0504 5.82428 17.4083 6.53896 18.3016 7.82538C14.5853 10.0528 15.4667 14.9483 18.8734 16.3181C18.1944 18.1048 17.313 19.8796 15.8479 21.1899L15.8598 21.178ZM9.88031 5.65752C9.70164 3.0013 11.8576 0.809618 14.3351 0.595215C14.6806 3.66833 11.5479 5.95531 9.88031 5.65752Z" fill="white"/>
              </svg>
              <span className='ml-2'>Continue with Apple</span>
              </button>
              <button className='flex items-center justify-center rounded-[6px] h-10 w-56 bg-blue-500 text-white'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 22 22" fill="none">
                <path d="M21.1618 8.85335H20.341V8.81106H11.1706V12.8868H16.9291C16.089 15.2594 13.8316 16.9626 11.1706 16.9626C7.79434 16.9626 5.05696 14.2252 5.05696 10.8489C5.05696 7.47268 7.79434 4.7353 11.1706 4.7353C12.7291 4.7353 14.1469 5.32323 15.2265 6.28358L18.1086 3.40151C16.2887 1.70549 13.8545 0.659546 11.1706 0.659546C5.5435 0.659546 0.981201 5.22185 0.981201 10.8489C0.981201 16.476 5.5435 21.0383 11.1706 21.0383C16.7977 21.0383 21.36 16.476 21.36 10.8489C21.36 10.1657 21.2897 9.49884 21.1618 8.85335Z" fill="white"/>
                <path d="M2.15576 6.10629L5.50349 8.56142C6.40932 6.31873 8.6031 4.7353 11.1703 4.7353C12.7288 4.7353 14.1466 5.32323 15.2262 6.28358L18.1083 3.40151C16.2884 1.70549 13.8542 0.659546 11.1703 0.659546C7.25657 0.659546 3.86248 2.86912 2.15576 6.10629Z" fill="white"/>
                <path d="M11.171 21.0383C13.8029 21.0383 16.1943 20.0311 18.0024 18.3931L14.8488 15.7245C13.7914 16.5287 12.4994 16.9636 11.171 16.9626C8.5207 16.9626 6.27037 15.2726 5.42261 12.9143L2.09985 15.4744C3.7862 18.7742 7.21085 21.0383 11.171 21.0383Z" fill="white"/>
                <path d="M21.1619 8.85344H20.3411V8.81116H11.1707V12.8869H16.9292C16.5273 14.0161 15.8034 15.0028 14.847 15.7252L14.8485 15.7242L18.0021 18.3928C17.779 18.5955 21.36 15.9437 21.36 10.849C21.36 10.1658 21.2897 9.49894 21.1619 8.85344Z" fill="white"/>
              </svg>
              <span className='ml-2'>Continue with Google</span>
              </button>
            </div>
          </div>
          <div>

          </div>
      </div>
    </main>
  );
};

export default Home;
