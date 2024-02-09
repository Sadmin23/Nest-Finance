'use client';

import Image from 'next/image';
import ServiceButton from '../Buttons/ServiceButton';
import OptionButton from '../Buttons/OptionButton';
import Link from 'next/link';
import { findIdByName } from '@/app/data';

interface BankInfoCardProps {
  name: string
  url: string
  type: string
  category: string
  origin: string
}

const BankInfoCard = ({name, url, type, category, origin}:BankInfoCardProps): JSX.Element => {

  let textContent = "City Bank is one of the oldest private Commercial Banks operating in Bangladesh. It is a top bank among the oldest five Commercial Banks in the country.."

  let slug = name.replace(/ /g, '-');
  type = type.replace(" Bank", "");
  category = category.replace(" Bank", "");
  origin = origin.replace(" Bank", "");
  let id = findIdByName(name);

  return (
    <div className="my-10 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <article className="overflow-hidden rounded-lg shadow-lg">

            <a href="#">
            <Image
              src={url}
              width={280}
              height={100}
              alt="logo"
              className='mx-auto mb-2'
            />
            </a>

            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                    <a className="no-underline hover:underline text-black" href="#">
                        Article Title
                    </a>
                </h1>
                <p className="text-grey-darker text-sm">
                    11/1/19
                </p>
            </header>

            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a className="flex items-center no-underline hover:underline text-black" href="#">
                    {/* <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random"> */}
                    <p className="ml-2 text-sm">
                        Author Name
                    </p>
                </a>
                <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                    <span className="hidden">Like</span>
                    <i className="fa fa-heart"></i>
                </a>
            </footer>
        </article>
    </div>
  );
};

export default BankInfoCard;