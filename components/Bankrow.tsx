'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image'

const Bankrow = ({ imageno }: { imageno: number }): JSX.Element => {
  const router = useRouter();

    let source = "/brand_assets/bnk"+(imageno)+".png";       

  return (
    <div className='bg-white flex h-52 font-medium border-b-2 border-[#EAECF0] ml-10 mr-14'>
        <div className='flex-col mt-6'>
            <Image
                src={source}
                width={120}
                height={100}
                alt="bg"
            />
            <div className='text-sm ml-2 mt-4'>
                <h1>Wells Fargo Active Cash®</h1>
                <h1>Card</h1>
            </div>
        </div>
        <div className='flex my-auto mr-2 ml-auto'>
            <svg xmlns="http://www.w3.org/2000/svg" width="137" height="17" viewBox="0 0 113 17" fill="none" className='ml-[70px]'>
                <path d="M8.81968 13.5185L14.0211 16.6579L12.6408 10.7411L17.2363 6.76L11.1847 6.24659L8.81968 0.666382L6.45462 6.24659L0.403076 6.76L4.99854 10.7411L3.61822 16.6579L8.81968 13.5185Z" fill="#FEC84B"/>
                <path d="M32.5185 13.5185L37.72 16.6579L36.3397 10.7411L40.9351 6.76L34.8836 6.24659L32.5185 0.666382L30.1535 6.24659L24.1019 6.76L28.6974 10.7411L27.3171 16.6579L32.5185 13.5185Z" fill="#FEC84B"/>
                <path d="M56.2174 13.5185L61.4188 16.6579L60.0385 10.7411L64.634 6.76L58.5825 6.24659L56.2174 0.666382L53.8523 6.24659L47.8008 6.76L52.3962 10.7411L51.0159 16.6579L56.2174 13.5185Z" fill="#FEC84B"/>
                <path d="M79.9161 13.5185L85.1176 16.6579L83.7373 10.7411L88.3327 6.76L82.2812 6.24659L79.9161 0.666382L77.5511 6.24659L71.4995 6.76L76.095 10.7411L74.7147 16.6579L79.9161 13.5185Z" fill="#FEC84B"/>
                <path d="M103.615 13.5185L108.816 16.6579L107.436 10.7411L112.032 6.76L105.98 6.24659L103.615 0.666382L101.25 6.24659L95.1984 6.76L99.7938 10.7411L98.4135 16.6579L103.615 13.5185Z" fill="#FEC84B"/>
            </svg>
            <div className='flex-col ml-40'>
                <h1>2%</h1>
                <h1>Cashback</h1>
            </div>
            <div className='flex-col ml-[120px]'>
                <h1>$250</h1>
                <h1>Cashback</h1>
            </div>
            <button className='ml-[132px] rounded-[6px] w-[110px] h-10 text-base font-normal text-white bg-[#53389E]'>Apply Now</button>
        </div>
    </div>
  );
};

export default Bankrow;
