// Import necessary modules and styles
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from 'antd';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

// Define props types
interface BankcardProps {
  Name: string;
  image: string;
}

// Bankcard component
const Bankcard: React.FC<BankcardProps> = ({ Name, image }: BankcardProps): JSX.Element => {
  // useRouter hook for navigation
  const router = useRouter();

  return (
    <div className="flex-col p-4 border-[1px] border-solid border-[#D0D5DD] rounded-md">
      <div className='flex mt-4'>
        <div className='flex-col'>
          <Image
            src={image}
            width={175}
            height={600}
            alt="bg"
          />
          <Popup trigger={<Button className='bg-[#6941C6] text-white rounded-md border border-white w-44 h-9 font-medium mt-10 mb-5'>
            Find out More
          </Button>} modal nested>
            {(close) => (
              <div className='modal'>
                <div className='content'>
                  Welcome to GFG!!!
                </div>
                <div>
                  <button onClick={close}>Close modal</button>
                </div>
              </div>
            )}
          </Popup>
        </div>
        <h2 className='text-black font-inter font-medium text-base leading-[28px] ml-2 mt-1'>{Name}</h2>
      </div>


    </div>
  );
};

// Export the component
export default Bankcard;
