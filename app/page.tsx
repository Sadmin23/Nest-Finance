'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const Home = () => {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center" style={{backgroundColor: "#53389E"}}>
      <div className='text-gray-25 text-center mb-56 mt-16' style={{height: "590px"}}>
        <div className='font-inter font-normal text-base p-5'>
          <h3 style={{color: "#E9D7FE"}}>Fast. Simple. Banking</h3>
        </div>
        <div className="font-inter mx-auto tracking-wide font-medium text-7xl text-gray-50 w-96" style={{width: "790px"}}>
          <h1>Keep spending with the best cards.</h1>
        </div>
        <div className='text-center font-inter text-lg font-normal text-gray-800 leading-[150%] p-10'>
          <h3 style={{color: "#E9D7FE"}}>Best banking cards made simplified.</h3>
        </div>
        <div className='center space-x-6'>
            <button className='rounded-[8px] w-36 h-14 text-lg font-medium' style={{backgroundColor: "#FFF"}}>Login</button>
            <button className='rounded-[8px] w-36 h-14 text-lg font-medium' style={{color: "#FFF", backgroundColor: "#7F56D9"}}>Register</button>
        </div>
        <div className='mx-auto mt-28'>
          <Image
                src="/brand_assets/credit.png"
                width={1104}
                height={623}
                alt="blob"
                />
          </div>
      </div>
      <div className='w-full flex' style={{backgroundColor: "#FFF6ED", height: "700px"}}>
          <div className='w-1/2'>
            <div className='font-medium text-2xl text-black pt-36 pl-40'>
              <h2>Get even more financial clarity with a NerdWallet account</h2>
            </div>
            <div className='font-normal tracking-wider text-black pl-40 pr-20 pt-7'>
              <h2>See all your savings, credit cards, and investments together in one place.
                 With everything connected, you'll get timely nerdy insights so you can be sure you're making the right financial decisions for you.
                  Best of all, it's free.</h2>
            </div>
            <div className='flex flex-col'>
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
              <div className='pt-14 ml-72'>
                <Link href="/" className='tracking-wide font-normal text-base'>Continue with Email instead →</Link>
              </div>
            </div>
          </div>
          <div className='py-16 ml-10 relative'>
            <Image
              src="/brand_assets/blob.png"
              width={600}
              height={610}
              alt="blob"
            />
            <Image
              src="/brand_assets/middle.png"
              width={520}
              height={470}
              className='absolute top-36 left-14'
              alt="blob"
            />
          </div>
      </div>
      <div className='w-full flex flex-col' style={{ backgroundColor: "#FD853A", height: "740px" }}>
        <div className='w-full' style={{ backgroundColor: "#F2F4F7", height: "50px" }}>
        </div>
        <div className='w-full flex'>
          <div className='w-7/12'>
            <Image
              src="/brand_assets/bank.png"
              width={50}
              height={50}
              className='mt-40 ml-40'
              alt="bank"
              />
            <div className='font-medium text-2xl text-black pt-14 pl-40'>
              <h2>Find a bank for the way you save</h2>
            </div>
            <div className='font-normal tracking-wider text-black pl-40 mt-5 mr-60'>
                <h2>Keep your cash in a bank account that fits your needs. 
                  Compare options and dig into the details with objective reviews that help you make smart decisions.</h2>
            </div>
            <div className='flex space-x-6 pt-24 pl-40'>
                <button className='flex items-center justify-center rounded-[6px] text-white h-10 w-48' style={{backgroundColor: "#53389E"}}>
                  Compare Savings Card
                </button>
                <button className='flex items-center justify-center rounded-[6px] text-black h-10 w-48 border-black border-2'>
                  Explore Guides & Tips
                </button>
            </div>
          </div>
          <div className='h-full'>
            <Image
              src="/brand_assets/banking.png"
              width={752}
              height={590}
              className=''
              alt="banking"
            />
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col' style={{ backgroundColor: "#F2F4F7", height: "1030px" }}>
        <div className='flex'>
          <div className='w-1/2'>
            <div className='font-medium text-2xl text-black pt-28 pl-40'>
              <h2>Trusted Voices of Finance</h2>
            </div>
            <div className='font-normal tracking-wider text-black pl-40 mt-5'>
              <h2>
                Real Stories from Our Satisfied Users:
                Discover How Our Solutions Are Transforming Financial Experiences.
              </h2>
            </div>
          </div>
          <div className='ml-auto mr-40 mt-36'>
              <button className='flex items-center justify-center rounded-[6px] text-white w-40 h-10' style={{backgroundColor: "#53389E"}}>
                Create Account
              </button>
          </div>
        </div>
        <div className='flex space-x-20 pt-24 mx-40'>
          <div className='relative'>
            <Image
              src="/brand_assets/test1.png"
              width={347}
              height={446}
              alt="test1"
              />
            <div className="absolute bottom-0 left-0
                  border border-solid border-white border-opacity-50
                  bg-white bg-opacity-30 backdrop-blur-[24.5px]
                  w-10/12 min-h-[120px] max-h-[340px] mx-7 mb-9 flex items-end overflow-auto">
                  <div className="overflow-y-auto py-3 px-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="13" viewBox="0 0 95 16" fill="none">
                      <path d="M8.95273 12.8925L13.8769 15.8645L12.5701 10.2631L16.9206 6.49426L11.1917 6.00822L8.95273 0.725525L6.71376 6.00822L0.984863 6.49426L5.33532 10.2631L4.02859 15.8645L8.95273 12.8925Z" fill="white"/>
                      <path d="M28.3687 12.8925L33.2929 15.8645L31.9862 10.2631L36.3366 6.49426L30.6077 6.00822L28.3687 0.725525L26.1298 6.00822L20.4009 6.49426L24.7513 10.2631L23.4446 15.8645L28.3687 12.8925Z" fill="white"/>
                      <path d="M47.7848 12.8925L52.7089 15.8645L51.4022 10.2631L55.7526 6.49426L50.0237 6.00822L47.7848 0.725525L45.5458 6.00822L39.8169 6.49426L44.1673 10.2631L42.8606 15.8645L47.7848 12.8925Z" fill="white"/>
                      <path d="M67.201 12.8925L72.1252 15.8645L70.8184 10.2631L75.1689 6.49426L69.44 6.00822L67.201 0.725525L64.962 6.00822L59.2332 6.49426L63.5836 10.2631L62.2769 15.8645L67.201 12.8925Z" fill="white"/>
                      <path d="M86.617 12.8925L91.5412 15.8645L90.2344 10.2631L94.5849 6.49426L88.856 6.00822L86.617 0.725525L84.3781 6.00822L78.6492 6.49426L82.9996 10.2631L81.6929 15.8645L86.617 12.8925Z" fill="white"/>
                    </svg>
                    <h2 className='font-medium text-xl text-white py-2'>Anita R.</h2>
                    <h2 className='font-normal text-base text-white'>Small Business Owner</h2>
                  </div>
            </div>
          </div>
          <div className='relative'>
            <Image
              src="/brand_assets/test2.png"
              width={346}
              height={446}
              alt="test2"
            />
            <div className="absolute bottom-0 left-0
                  border border-solid border-white border-opacity-50
                  bg-white bg-opacity-30 backdrop-blur-[24.5px]
                  w-10/12 min-h-[120px] max-h-[340px] mx-7 mb-9 flex items-end overflow-auto">
                  <div className="overflow-y-auto py-3 px-5">
                    <p className='pb-4 text-white'>
                      The analytics and insights offered by Nest Finance are unparalleled. 
                      I'm making more informed investment decisions and seeing real results. 
                      Truly game-changing.
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="13" viewBox="0 0 95 16" fill="none">
                      <path d="M8.95273 12.8925L13.8769 15.8645L12.5701 10.2631L16.9206 6.49426L11.1917 6.00822L8.95273 0.725525L6.71376 6.00822L0.984863 6.49426L5.33532 10.2631L4.02859 15.8645L8.95273 12.8925Z" fill="white"/>
                      <path d="M28.3687 12.8925L33.2929 15.8645L31.9862 10.2631L36.3366 6.49426L30.6077 6.00822L28.3687 0.725525L26.1298 6.00822L20.4009 6.49426L24.7513 10.2631L23.4446 15.8645L28.3687 12.8925Z" fill="white"/>
                      <path d="M47.7848 12.8925L52.7089 15.8645L51.4022 10.2631L55.7526 6.49426L50.0237 6.00822L47.7848 0.725525L45.5458 6.00822L39.8169 6.49426L44.1673 10.2631L42.8606 15.8645L47.7848 12.8925Z" fill="white"/>
                      <path d="M67.201 12.8925L72.1252 15.8645L70.8184 10.2631L75.1689 6.49426L69.44 6.00822L67.201 0.725525L64.962 6.00822L59.2332 6.49426L63.5836 10.2631L62.2769 15.8645L67.201 12.8925Z" fill="white"/>
                      <path d="M86.617 12.8925L91.5412 15.8645L90.2344 10.2631L94.5849 6.49426L88.856 6.00822L86.617 0.725525L84.3781 6.00822L78.6492 6.49426L82.9996 10.2631L81.6929 15.8645L86.617 12.8925Z" fill="white"/>
                    </svg>
                    <h2 className='font-medium text-xl text-white py-2'>Anita R.</h2>
                    <h2 className='font-normal text-base text-white'>Small Business Owner</h2>
                  </div>
            </div>
          </div>
          <div className='relative'>
            <Image
              src="/brand_assets/test3.png"
              width={346}
              height={446}
              alt="test3"
            />
            <div className="absolute bottom-0 left-0
                  border border-solid border-white border-opacity-50
                  bg-white bg-opacity-30 backdrop-blur-[24.5px]
                  w-10/12 min-h-[120px] max-h-[340px] mx-7 mb-9 flex items-end overflow-auto">
                  <div className="overflow-y-auto py-3 px-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="13" viewBox="0 0 95 16" fill="none">
                      <path d="M8.95273 12.8925L13.8769 15.8645L12.5701 10.2631L16.9206 6.49426L11.1917 6.00822L8.95273 0.725525L6.71376 6.00822L0.984863 6.49426L5.33532 10.2631L4.02859 15.8645L8.95273 12.8925Z" fill="white"/>
                      <path d="M28.3687 12.8925L33.2929 15.8645L31.9862 10.2631L36.3366 6.49426L30.6077 6.00822L28.3687 0.725525L26.1298 6.00822L20.4009 6.49426L24.7513 10.2631L23.4446 15.8645L28.3687 12.8925Z" fill="white"/>
                      <path d="M47.7848 12.8925L52.7089 15.8645L51.4022 10.2631L55.7526 6.49426L50.0237 6.00822L47.7848 0.725525L45.5458 6.00822L39.8169 6.49426L44.1673 10.2631L42.8606 15.8645L47.7848 12.8925Z" fill="white"/>
                      <path d="M67.201 12.8925L72.1252 15.8645L70.8184 10.2631L75.1689 6.49426L69.44 6.00822L67.201 0.725525L64.962 6.00822L59.2332 6.49426L63.5836 10.2631L62.2769 15.8645L67.201 12.8925Z" fill="white"/>
                      <path d="M86.617 12.8925L91.5412 15.8645L90.2344 10.2631L94.5849 6.49426L88.856 6.00822L86.617 0.725525L84.3781 6.00822L78.6492 6.49426L82.9996 10.2631L81.6929 15.8645L86.617 12.8925Z" fill="white"/>
                    </svg>
                    <h2 className='font-medium text-xl text-white py-2'>Anita R.</h2>
                    <h2 className='font-normal text-base text-white'>Small Business Owner</h2>
                  </div>
            </div>            
          </div>
        </div>
      </div>

    </main>
  );
};

export default Home;
