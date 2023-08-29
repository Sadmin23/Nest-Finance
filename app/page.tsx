'use client';
import Nav from '@/components/Nav';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const Home = () => {
  const router = useRouter();

  return (
    <div className='flex-col'>
    <Nav bgOption='purple'/>
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
        <div className='w-full h-12 bg-[#F2F4F7]'></div>
        <div className='w-full flex h-28 bg-white'>
          <div className='w-full flex h-12 mt-12 bg-[#F2F4F7]'>
            <div className='h-full flex mx-auto font-inter text-base font-normal text-[18px] leading-[28px]'>
              <button className='flex items-center justify-center bg-[#53389E] h-full w-40 text-white space-x-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                  <path d="M0.381104 16.339H17.5237V18.0533H0.381104V16.339ZM2.09537 9.48196H3.80963V15.4819H2.09537V9.48196ZM6.38103 9.48196H8.09529V15.4819H6.38103V9.48196ZM9.80956 9.48196H11.5238V15.4819H9.80956V9.48196ZM14.0952 9.48196H15.8095V15.4819H14.0952V9.48196ZM0.381104 5.1963L8.95242 0.910645L17.5237 5.1963V8.62483H0.381104V5.1963ZM8.95242 6.05344C9.17975 6.05344 9.39776 5.96313 9.55851 5.80239C9.71925 5.64164 9.80956 5.42363 9.80956 5.1963C9.80956 4.96898 9.71925 4.75096 9.55851 4.59022C9.39776 4.42948 9.17975 4.33917 8.95242 4.33917C8.7251 4.33917 8.50708 4.42948 8.34634 4.59022C8.1856 4.75096 8.09529 4.96898 8.09529 5.1963C8.09529 5.42363 8.1856 5.64164 8.34634 5.80239C8.50708 5.96313 8.7251 6.05344 8.95242 6.05344Z" fill="white"/>
                </svg>
                <span>Banking</span>
              </button>
              <button className='flex items-center justify-center h-full w-44 text-[#344054] space-x-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19" fill="none">
                <path d="M21.6043 8.65469V15.416C21.6043 15.9617 21.3875 16.4852 21.0015 16.8711C20.6156 17.257 20.0922 17.4739 19.5464 17.4739H6.16997C5.62418 17.4739 5.10074 17.257 4.71481 16.8711C4.32888 16.4852 4.11206 15.9617 4.11206 15.416V13.8725M21.6043 8.65469V7.18431C21.6043 6.63852 21.3875 6.11509 21.0015 5.72915C20.6156 5.34322 20.0922 5.1264 19.5464 5.1264H18.5174M21.6043 8.65469H18.5174" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.5174 5.12643V11.8146C18.5174 12.3604 18.3006 12.8839 17.9146 13.2698C17.5287 13.6557 17.0053 13.8725 16.4595 13.8725H3.08306C2.53726 13.8725 2.01383 13.6557 1.62789 13.2698C1.24196 12.8839 1.02515 12.3604 1.02515 11.8146V3.583C1.02515 3.0372 1.24196 2.51377 1.62789 2.12783C2.01383 1.7419 2.53726 1.52509 3.08306 1.52509H16.4595C17.0053 1.52509 17.5287 1.7419 17.9146 2.12783C18.3006 2.51377 18.5174 3.0372 18.5174 3.583V5.12643ZM18.5174 5.12643H4.62649" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
                <span>Credit Cards</span>
              </button>
              <button className='flex items-center justify-center h-full w-44 text-[#344054] border-l-2 space-x-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
                <path d="M8.96755 12.713H9.01431C10.0163 12.7397 10.8179 13.5547 10.8179 14.5567C10.8179 15.4117 10.2368 16.1265 9.44851 16.3403V17.0884C9.44851 17.3556 9.23475 17.5694 8.96755 17.5694C8.70035 17.5694 8.48659 17.3556 8.48659 17.0884V16.3403C8.09409 16.2347 7.74727 16.0029 7.49975 15.6805C7.25223 15.3581 7.11778 14.9632 7.11719 14.5567C7.11719 14.2895 7.33095 14.0757 7.59815 14.0757C7.86535 14.0757 8.07911 14.2895 8.07911 14.5567C8.07911 15.051 8.47323 15.4451 8.96087 15.4451C9.44851 15.4451 9.84932 15.0443 9.84932 14.5567C9.84932 14.0691 9.44851 13.6683 8.96087 13.6683H8.91411C8.43356 13.6552 7.97703 13.4553 7.6415 13.1111C7.30597 12.7668 7.11788 12.3053 7.11719 11.8246C7.11719 10.9695 7.69835 10.2548 8.48659 10.041V9.29285C8.48659 9.02565 8.70035 8.81189 8.96755 8.81189C9.23475 8.81189 9.44851 9.02565 9.44851 9.29285V10.041C10.2368 10.2548 10.8179 10.9695 10.8179 11.8246C10.8179 12.0918 10.6042 12.3055 10.337 12.3055C10.0698 12.3055 9.856 12.0918 9.856 11.8246C9.856 11.3369 9.45519 10.9361 8.96755 10.9361C8.47991 10.9361 8.07911 11.3369 8.07911 11.8246C8.07911 12.3122 8.47991 12.713 8.96755 12.713Z" fill="black"/>
                <path d="M5.42177 3.19738L7.28283 5.37507L7.08176 5.59952C3.25143 6.45857 0.390381 9.87941 0.390381 13.9689C0.390381 17.5641 3.30821 20.4819 6.9034 20.4819H11.025C14.6202 20.4819 17.538 17.5648 17.538 13.9696C17.5447 9.87941 14.6836 6.45857 10.8533 5.59952C10.8689 5.45836 10.8434 5.3157 10.7798 5.1887L12.363 3.37641L12.4652 3.21876C12.5845 2.95846 12.6151 2.66616 12.5521 2.38681C12.4891 2.10747 12.3361 1.85655 12.1166 1.67265C11.8971 1.48874 11.6233 1.38204 11.3372 1.36895C11.0511 1.35586 10.7687 1.4371 10.5333 1.60019L9.9702 0.932187C9.84388 0.790825 9.68919 0.677667 9.51621 0.600088C9.34323 0.522509 9.15585 0.482251 8.96627 0.481935C8.77669 0.48162 8.58917 0.521256 8.41594 0.598259C8.2427 0.675263 8.08764 0.787906 7.96085 0.928847L7.371 1.5875C7.13623 1.42102 6.85315 1.33654 6.56554 1.34712C6.27793 1.35769 6.00182 1.46274 5.77991 1.64602C5.55801 1.82929 5.40267 2.08058 5.33793 2.36101C5.27319 2.64143 5.30266 2.93538 5.42177 3.19738ZM7.95951 4.12256L6.82658 2.81328C7.08979 2.94011 7.3876 2.97612 7.67345 2.91569C7.9593 2.85525 8.21706 2.70178 8.40641 2.47928L8.94081 1.78589L9.53399 2.48863C9.71894 2.70371 9.96844 2.85328 10.2453 2.91503C10.5222 2.97678 10.8116 2.94742 11.0704 2.83132L9.94281 4.12256H7.95951ZM1.72638 13.9689C1.72638 9.96892 4.96753 6.72777 8.96753 6.72777C12.9675 6.72777 16.2087 9.96892 16.202 13.9676V13.9689C16.2015 15.3418 15.6559 16.6583 14.6851 17.629C13.7143 18.5998 12.3978 19.1454 11.025 19.1459H6.9034C5.53053 19.1454 4.21405 18.5998 3.24328 17.629C2.27252 16.6583 1.72692 15.3418 1.72638 13.9689Z" fill="black"/>
              </svg>
                <span>Deposit Schemes</span>
              </button>
              <button className='flex items-center justify-center h-full w-44 text-[#344054] border-l-2 space-x-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                <path d="M17.7162 6.76879C18.8139 5.67105 18.3134 4.3889 17.7162 3.76539L15.0817 1.13083C13.9751 0.0330957 12.7018 0.533662 12.0783 1.13083L10.5853 2.63253H8.31084C6.64228 2.63253 5.67628 3.51071 5.18449 4.52063L1.28535 8.41978V11.9325L0.661835 12.5473C-0.435898 13.6538 0.0646679 14.9271 0.661835 15.5506L3.29639 18.1852C3.77061 18.6594 4.27996 18.8351 4.76297 18.8351C5.38648 18.8351 5.9573 18.5277 6.29979 18.1852L8.6709 15.8053H11.8236C13.3165 15.8053 14.0717 14.8744 14.344 13.9611C15.3363 13.6977 15.8808 12.9424 16.1004 12.2048C17.4615 11.8535 17.9709 10.5626 17.9709 9.65802V7.02346H17.4528L17.7162 6.76879ZM16.2145 9.65802C16.2145 10.0532 16.0477 10.5362 15.3363 10.5362H14.4581V11.4144C14.4581 11.8096 14.2913 12.2926 13.58 12.2926H12.7018V13.1708C12.7018 13.5659 12.5349 14.049 11.8236 14.049H7.95078L5.07033 16.9294C4.79809 17.1841 4.64002 17.0348 4.54342 16.9382L1.91764 14.3212C1.66297 14.049 1.81226 13.8909 1.90886 13.7943L3.04172 12.6526V9.13989L4.79809 7.38352V8.77983C4.79809 9.84244 5.50064 11.4144 7.43265 11.4144C9.36466 11.4144 10.0672 9.84244 10.0672 8.77983H16.2145V9.65802ZM16.4692 5.52176L14.9763 7.02346H8.31084V8.77983C8.31084 9.17502 8.14398 9.65802 7.43265 9.65802C6.72132 9.65802 6.55447 9.17502 6.55447 8.77983V6.14527C6.55447 5.74131 6.70376 4.3889 8.31084 4.3889H11.3055L13.3077 2.38664C13.58 2.13196 13.738 2.28125 13.8346 2.37785L16.4604 4.99485C16.7151 5.26709 16.5658 5.42516 16.4692 5.52176Z" fill="black"/>
              </svg>
                <span>Loans</span>
              </button>
              <button className='flex items-center justify-center h-full w-44 text-[#344054] border-l-2 space-x-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                <path d="M5.62747 5.20559C8.11856 5.20559 10.138 4.19588 10.138 2.95033C10.138 1.70478 8.11856 0.695068 5.62747 0.695068C3.13637 0.695068 1.11694 1.70478 1.11694 2.95033C1.11694 4.19588 3.13637 5.20559 5.62747 5.20559Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.11694 2.95032V6.10769C1.11694 7.35304 3.13631 8.36295 5.62747 8.36295C8.11863 8.36295 10.138 7.35304 10.138 6.10769V2.95032" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.11694 6.10773V9.2651C1.11694 10.5105 3.13631 11.5204 5.62747 11.5204C8.11863 11.5204 10.138 10.5105 10.138 9.2651V6.10773" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.11694 9.26508V12.4224C1.11694 13.6678 3.13631 14.6777 5.62747 14.6777C8.11863 14.6777 10.138 13.6678 10.138 12.4224V9.26508" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.11694 12.4224V15.5798C1.11694 16.8251 3.13631 17.8351 5.62747 17.8351C8.11863 17.8351 10.138 16.8251 10.138 15.5798V12.4224" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.6485 11.5204C17.1396 11.5204 19.159 10.5106 19.159 9.26509C19.159 8.01954 17.1396 7.00983 14.6485 7.00983C12.1574 7.00983 10.1379 8.01954 10.1379 9.26509C10.1379 10.5106 12.1574 11.5204 14.6485 11.5204Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.1379 9.26508V12.4224C10.1379 13.6678 12.1573 14.6777 14.6485 14.6777C17.1396 14.6777 19.159 13.6678 19.159 12.4224V9.26508" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.1379 12.4224V15.5798C10.1379 16.8251 12.1573 17.8351 14.6485 17.8351C17.1396 17.8351 19.159 16.8251 19.159 15.5798V12.4224" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
                <span>Mutual Funds</span>
              </button>
              <button className='flex items-center justify-center h-full w-44 text-[#344054] border-x-2 space-x-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="19" viewBox="0 0 13 19" fill="none">
                <path d="M3.80555 3.87107C3.80555 3.75742 3.8507 3.64843 3.93106 3.56807C4.01142 3.48771 4.12041 3.44257 4.23405 3.44257H8.51905C8.6327 3.44257 8.74169 3.48771 8.82205 3.56807C8.90241 3.64843 8.94755 3.75742 8.94755 3.87107C8.94755 3.98471 8.90241 4.0937 8.82205 4.17406C8.74169 4.25442 8.6327 4.29957 8.51905 4.29957H4.23405C4.12041 4.29957 4.01142 4.25442 3.93106 4.17406C3.8507 4.0937 3.80555 3.98471 3.80555 3.87107ZM2.52005 6.01357C2.40641 6.01357 2.29742 6.05871 2.21706 6.13907C2.1367 6.21943 2.09155 6.32842 2.09155 6.44207C2.09155 6.55571 2.1367 6.6647 2.21706 6.74506C2.29742 6.82542 2.40641 6.87057 2.52005 6.87057H10.2331C10.3467 6.87057 10.4557 6.82542 10.536 6.74506C10.6164 6.6647 10.6616 6.55571 10.6616 6.44207C10.6616 6.32842 10.6164 6.21943 10.536 6.13907C10.4557 6.05871 10.3467 6.01357 10.2331 6.01357H2.52005ZM2.09155 8.15607C2.09155 8.04242 2.1367 7.93343 2.21706 7.85307C2.29742 7.77271 2.40641 7.72757 2.52005 7.72757H10.2331C10.3467 7.72757 10.4557 7.77271 10.536 7.85307C10.6164 7.93343 10.6616 8.04242 10.6616 8.15607C10.6616 8.26971 10.6164 8.3787 10.536 8.45906C10.4557 8.53942 10.3467 8.58457 10.2331 8.58457H2.52005C2.40641 8.58457 2.29742 8.53942 2.21706 8.45906C2.1367 8.3787 2.09155 8.26971 2.09155 8.15607ZM2.52005 9.44157C2.40641 9.44157 2.29742 9.48671 2.21706 9.56707C2.1367 9.64743 2.09155 9.75642 2.09155 9.87007C2.09155 9.98371 2.1367 10.0927 2.21706 10.1731C2.29742 10.2534 2.40641 10.2986 2.52005 10.2986H10.2331C10.3467 10.2986 10.4557 10.2534 10.536 10.1731C10.6164 10.0927 10.6616 9.98371 10.6616 9.87007C10.6616 9.75642 10.6164 9.64743 10.536 9.56707C10.4557 9.48671 10.3467 9.44157 10.2331 9.44157H2.52005Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3754 14.5836C12.3754 15.0382 12.1949 15.4741 11.8734 15.7956C11.552 16.117 11.116 16.2976 10.6614 16.2976H9.37594V18.0116L8.09044 17.3688L6.80494 18.0116V16.2976H2.09144C1.63686 16.2976 1.2009 16.117 0.87946 15.7956C0.558023 15.4741 0.377441 15.0382 0.377441 14.5836V2.58558C0.377441 2.131 0.558023 1.69504 0.87946 1.3736C1.2009 1.05216 1.63686 0.871582 2.09144 0.871582H10.6614C11.116 0.871582 11.552 1.05216 11.8734 1.3736C12.1949 1.69504 12.3754 2.131 12.3754 2.58558V14.5836ZM2.09144 1.72858C1.86415 1.72858 1.64617 1.81887 1.48545 1.97959C1.32473 2.14031 1.23444 2.35829 1.23444 2.58558V14.5836C1.23444 14.8109 1.32473 15.0289 1.48545 15.1896C1.64617 15.3503 1.86415 15.4406 2.09144 15.4406H6.80494V14.4319C6.58676 14.1845 6.4446 13.8794 6.39552 13.5532C6.34644 13.227 6.39252 12.8936 6.52824 12.593C6.66395 12.2923 6.88353 12.0372 7.16064 11.8583C7.43774 11.6794 7.76059 11.5842 8.09044 11.5842C8.4203 11.5842 8.74314 11.6794 9.02025 11.8583C9.29735 12.0372 9.51693 12.2923 9.65265 12.593C9.78836 12.8936 9.83444 13.227 9.78536 13.5532C9.73628 13.8794 9.59412 14.1845 9.37594 14.4319V15.4406H10.6614C10.8887 15.4406 11.1067 15.3503 11.2674 15.1896C11.4282 15.0289 11.5184 14.8109 11.5184 14.5836V2.58558C11.5184 2.35829 11.4282 2.14031 11.2674 1.97959C11.1067 1.81887 10.8887 1.72858 10.6614 1.72858H2.09144ZM8.51894 14.9581C8.23786 15.0305 7.94302 15.0305 7.66194 14.9581V16.625L8.09044 16.4107L8.51894 16.625V14.9581ZM8.09044 14.1551C8.31773 14.1551 8.53571 14.0648 8.69643 13.9041C8.85715 13.7434 8.94744 13.5254 8.94744 13.2981C8.94744 13.0708 8.85715 12.8528 8.69643 12.6921C8.53571 12.5314 8.31773 12.4411 8.09044 12.4411C7.86315 12.4411 7.64517 12.5314 7.48445 12.6921C7.32373 12.8528 7.23344 13.0708 7.23344 13.2981C7.23344 13.5254 7.32373 13.7434 7.48445 13.9041C7.64517 14.0648 7.86315 14.1551 8.09044 14.1551Z" fill="black"/>
              </svg>              
              <span>Bonds</span>
              </button>
    
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col' style={{ backgroundColor: "#FD853A", height: "740px" }}>
    
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
              <div className='font-normal tracking-wider text-black pl-40 mt-5 mr-44'>
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
    </div>
  );
};

export default Home;
