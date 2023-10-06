'use client';
import { useRouter } from 'next/navigation';

const Dropdown = (): JSX.Element => {
  const router = useRouter();
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
        <path d="M6.5 9L12.5 15L18.5 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};

export default Dropdown;
