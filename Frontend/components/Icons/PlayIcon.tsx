'use client';

const PlaySvg = (): JSX.Element => {

  return (
    <svg className='mr-4 my-auto' xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <g filter="url(#filter0_b_98_3008)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7387 24C19.3661 24 24.7387 18.6274 24.7387 12C24.7387 5.37258 19.3661 0 12.7387 0C6.11129 0 0.738708 5.37258 0.738708 12C0.738708 18.6274 6.11129 24 12.7387 24ZM10.8637 16.4016L17.6137 12.6288C18.1137 12.3493 18.1137 11.6507 17.6137 11.3712L10.8637 7.59836C10.3637 7.31889 9.73871 7.66823 9.73871 8.22717V15.7728C9.73871 16.3318 10.3637 16.6811 10.8637 16.4016Z" fill="#F44E4D"/>
      </g>
      <defs>
        <filter id="filter0_b_98_3008" x="-15.2613" y="-16" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="8"/>
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_98_3008"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_98_3008" result="shape"/>
        </filter>
      </defs>
    </svg>
  );
};

export default PlaySvg;
